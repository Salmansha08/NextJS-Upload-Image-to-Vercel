'use client';
import { useFormStatus } from 'react-dom';
import clsx from 'clsx';
import Link from 'next/link';
import { deleteImage } from '@/libs/action';

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={clsx('bg-blue-700 text-white w-full font-medium py-2 px-5 text-base rounded-lg hover:bg-blue-500', {
        'opacity-50 cursor-progress': pending,
      })}
      disabled={pending}
    >
      {label === 'Upload' ? <>{pending ? 'Uploading...' : 'Upload'}</> : <>{pending ? 'Updating...' : 'Update'}</>}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`edit/${id}`} className="py-3 bg-gray-50 rounded-bl-lg w-full hover:bg-gray-100 text-center">
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteImage.bind(null, id);
  return (
    <form action={deleteImageWithId} className="py-3 bg-gray-50 rounded-br-lg w-full hover:bg-gray-100 text-center">
      <DeleteBtn />
    </form>
  );
};
