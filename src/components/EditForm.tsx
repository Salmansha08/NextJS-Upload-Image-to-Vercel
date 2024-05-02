'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { UpdateImage, UploadImage } from '@/libs/action';
import { SubmitButton } from '@/components/Button';
import type { Upload } from '@prisma/client';

const EditForm = ({ data }: { data: Upload }) => {
  const [state, formAction] = useFormState(UpdateImage.bind(null, data.id), null);

  return (
    <form action={formAction}>
      <div className="mb-4 pt-1">
        <input type="text" name="title" placeholder="Title" className="w-full py-2 px-4 border-gray-500 border-2 rounded-lg" defaultValue={data.title} />
        <div aria-live="polite" arial-atomic="true">
          <p className="text-red-500 text-sm mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-1">
        <input type="file" name="image" className="file:py-2 file:px-4 file:mr-4 file:rounded-lg file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border-2 rounded-lg border-gray-500 w-full p-1" />
        <div aria-live="polite" arial-atomic="true">
          <p className="text-red-500 text-sm mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton label="Update" />
      </div>
    </form>
  );
};

export default EditForm;
