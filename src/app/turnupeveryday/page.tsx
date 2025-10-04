import TurnUpClient from '@/components/TurnUpClient';

// This is a server component that acts as the entry point for the page.
// It imports the main client component where all the data fetching and visualization logic will live.
export default function TurnUpEveryDayPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <TurnUpClient />
    </main>
  );
}
