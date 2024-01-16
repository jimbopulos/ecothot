import { NavBar, Footer } from '@/components';

export default function Loyalty() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <NavBar />
      <div className="h-full p-20">This is the Points page</div>
      <Footer />
    </main>
  );
}
