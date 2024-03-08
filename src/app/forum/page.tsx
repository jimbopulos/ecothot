import { Navbar, Footer } from '@/components';

export default function Forum() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="h-full p-20">This is the Cybernetic Forum page</div>
      <Footer />
    </main>
  );
}
