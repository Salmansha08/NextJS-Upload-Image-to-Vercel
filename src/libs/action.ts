'use server';
import { z } from 'zod';
import { prisma } from '@/libs/prisma';
import { put, del } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getImageById } from '@/libs/data';

const UploadSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: 'Image is required '
    })
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: 'Invalid file type '
    })
    .refine((file) => file.size < 1024 * 1000 * 4, {
      message: 'Image must be less than 4MB '
    })
})

const UpdateSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  }),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: 'Invalid file type '
    })
    .refine((file) => file.size < 1024 * 1000 * 4, {
      message: 'Image must be less than 4MB '
    })
    .optional()
})

export const UploadImage = async (prevState: unknown, formData: FormData) => {
  if (!formData) {
    return {
      message: 'No image found'
    };
  }

  const validateFields = UploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors
    }
  }

  const { title, image } = validateFields.data;
  const { url } = await put(image.name, image, {
    access: 'public',
    multipart: true
  });

  try {
    await prisma.upload.create({
      data: {
        title,
        image: url
      }
    });
  } catch (error) {
    return {
      message: 'Failed to upload image'
    }
  }

  revalidatePath('/create');
  redirect('/');
}

export const UpdateImage = async (id: string, prevState: unknown, formData: FormData) => {
  const validateFields = UpdateSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors
    }
  }

  const data = await getImageById(id);
  if (!data) return { message: 'Image not found' };

  const { title, image } = validateFields.data;
  let imagePath;

  if (!image || image.size === 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: 'public',
      multipart: true
    });
    imagePath = url;
  }

  try {
    await prisma.upload.update({
      data: {
        title,
        image: imagePath
      },
      where: {
        id
      }
    });
  } catch (error) {
    return {
      message: 'Failed to update image'
    }
  }

  revalidatePath('/');
  redirect('/');
}

export const deleteImage = async (id: string) => {
  const data = await getImageById(id);

  if (!data) return { message: 'Image not found' }

  await del(data.image);

  try {
    await prisma.upload.delete({
      where: {
        id
      }
    });
  } catch (error) {
    return { message: 'Failed to delete image' }
  }
  revalidatePath('/');
}