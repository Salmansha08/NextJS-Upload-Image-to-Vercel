import CreateForm from '@/components/CreateForm';

const CreatePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="bg-slate-50 p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-5">Upload Image</h1>
        <CreateForm />
      </div>
    </div>
  );
};

export default CreatePage;
