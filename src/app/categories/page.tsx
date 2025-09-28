import CategoriesSection from '@/components/home/categories-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Categories - ConnectSphere Consult',
    description: 'Browse all consultant categories.',
};

export default function CategoriesPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold font-headline">All Categories</h1>
                <p className="text-muted-foreground mt-2">Explore consultants across various fields.</p>
            </div>
            <CategoriesSection />
        </div>
    );
}
