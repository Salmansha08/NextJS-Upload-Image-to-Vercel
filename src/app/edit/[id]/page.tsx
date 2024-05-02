import EditForm from '@/components/EditForm';
import { getImageById } from '@/libs/data';
import { notFound } from 'next/navigation';

const EditPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data = await getImageById(id);

  if (!data) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="bg-slate-50 p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-5">Update Image</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
