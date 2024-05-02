import Image from 'next/image';
import React from 'react';
import { DeleteButton, EditButton } from '@/components/Button';
import type { Upload } from '@prisma/client';

const CardList = ({ data }: { data: Upload }) => {
  return (
    <div className="max-w-lg border border-gray-200 rounded-lg shadow">
      <div className="relative aspect-video">
        <Image src={data.image} alt={data.title} fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-t-lg object-cover" />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 truncate">{data.title}</h2>
      </div>
      <div className="flex items-center justify-between">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default CardList;
