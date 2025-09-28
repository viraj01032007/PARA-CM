import { consultants } from '@/lib/data';
import ConsultantCard from '@/components/consultants/consultant-card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Frown } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Category } from '@/types';

type Props = {
  params: { slug: string };
};

// Map slug to category name
const categoryMap: { [key: string]: Category } = {
  health: 'Health',
  business: 'Business',
  personal: 'Personal',
  tech: 'Tech',
};

function capitalize(s: string) {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = categoryMap[params.slug];
  if (!categoryName) {
    return { title: 'Category Not Found' };
  }
  return {
    title: `${categoryName} Consultants - ConnectSphere Consult`,
    description: `Find top consultants in the ${categoryName} category.`,
  };
}


export default function CategoryPage({ params }: Props) {
  const categoryName = categoryMap[params.slug];
  
  if (!categoryName) {
    notFound();
  }

  const filteredConsultants = consultants.filter(c => c.category === categoryName);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground">Browse by category</p>
        <h1 className="text-4xl font-bold font-headline">{categoryName} Consultants</h1>
      </div>

      {filteredConsultants.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredConsultants.map(consultant => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
      ) : (
        <Alert>
          <Frown className="h-4 w-4" />
          <AlertTitle>No Consultants Found</AlertTitle>
          <AlertDescription>
            There are no consultants available in the {categoryName} category at the moment.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
