import CardList from '@/components/CardList';
import Link from 'next/link';
import { getImages } from '@/libs/data';

export default async function Home() {
  const images = await getImages();

  return (
    <main className="flex min-h-screen flex-col bg-slate-300]">
      <div className="container mt-24 mx-auto px-8">
        <div className="flex items-end justify-between">
          <h1 className="text-3xl font-bold">Latest Images</h1>
          <Link href="/create" className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
            Upload New Image
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {images.map((image) => (
            <CardList key={image.id} data={image} />
          ))}
        </div>
      </div>
    </main>
  );
}

// max-w-screen-lg mx-auto py-14
