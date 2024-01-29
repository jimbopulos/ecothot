import { Navbar, Footer } from '@/components';

export default function Games() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="h-full p-20">This is the Games page</div>
      <Footer />
    </main>
  );
}
