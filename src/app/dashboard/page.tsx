import NavBar from '@/src/components/NavBar';

export default function Dashboard() {
  return (
    <main className="min-h-screen items-center">
      <NavBar />
      <div className="flex justify-center p-20">
        This is the main dashboard page...
      </div>
    </main>
  );
}
