import AdventuresPageClient from '@/components/AdventuresPageClient';
import adventuresData from '../../../data/adventures.json';

// Note: This is a server component. It fetches the data and passes it to the main client component.
// This pattern is good for performance as the main page can be statically rendered,
// while the interactive parts are handled on the client.

export default function AdventuresPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdventuresPageClient adventures={adventuresData} />
    </main>
  );
}
