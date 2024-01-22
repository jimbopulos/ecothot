import { NavbarDesktop, Footer } from '@/components';

export default function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <NavbarDesktop />
      <div className="h-full p-20">This is the main dashboard page...</div>
      <Footer />
    </main>
  );
}
