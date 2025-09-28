import { Suspense } from 'react';
import type { Metadata } from 'next';
import { smartSearchAndFilter } from '@/ai/flows/smart-search-and-filtering';
import { consultants } from '@/lib/data';
import ConsultantCard from '@/components/consultants/consultant-card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Frown, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Search Results - ConnectSphere Consult',
};

interface SearchPageProps {
  searchParams: {
    query?: string;
    category?: string;
    location?: string;
    availability?: string;
    priceRange?: string;
  };
}

async function SearchResults({ searchParams }: SearchPageProps) {
  const searchInput = {
    query: searchParams.query || 'any',
    category: searchParams.category || 'any',
    location: searchParams.location || 'any',
    availability: searchParams.availability || 'any',
    priceRange: searchParams.priceRange || 'any',
  };

  try {
    const aiResult = await smartSearchAndFilter(searchInput);
    
    // In a real app, AI would return IDs. We simulate this by filtering by name.
    const aiConsultantNames = aiResult.consultants || [];
    const filteredConsultants = consultants.filter(c => aiConsultantNames.includes(c.name));

    // If AI returns nothing, fall back to a simple filter for better UX.
    if (filteredConsultants.length === 0) {
      const fallbackFiltered = consultants.filter(c => 
        (searchInput.category === 'any' || c.category === searchInput.category) &&
        (searchInput.availability === 'any' || c.availability.includes(searchInput.availability)) &&
        (searchInput.query === 'any' || c.name.toLowerCase().includes(searchInput.query.toLowerCase()) || c.specialty.toLowerCase().includes(searchInput.query.toLowerCase()))
      );

      if (fallbackFiltered.length === 0) {
        return (
           <Alert>
              <Frown className="h-4 w-4" />
              <AlertTitle>No Results Found</AlertTitle>
              <AlertDescription>
                We couldn't find any consultants matching your criteria. Try broadening your search.
              </AlertDescription>
            </Alert>
        );
      }
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fallbackFiltered.map(consultant => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
      );
    }
    
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredConsultants.map(consultant => (
          <ConsultantCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("AI search failed:", error);
    return (
       <Alert variant="destructive">
          <Frown className="h-4 w-4" />
          <AlertTitle>Search Unavailable</AlertTitle>
          <AlertDescription>
            The smart search is temporarily unavailable. Please try again later.
          </AlertDescription>
        </Alert>
    );
  }
}

function LoadingSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      ))}
    </div>
  );
}

export default function SearchPageWrapper({ searchParams }: SearchPageProps) {
  const queryDisplay = Object.values(searchParams).filter(Boolean).join(', ');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-2">Search Results</h1>
        {queryDisplay && <p className="text-muted-foreground">Showing results for: <span className="font-semibold text-foreground">{queryDisplay}</span></p>}
         <div className="mt-4 inline-flex items-center rounded-full bg-accent/50 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Search
        </div>
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
