import TestimonialsSection from '@/components/home/testimonials-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testimonials - ConnectSphere Consult',
    description: 'See what our clients have to say about our consultants.',
};

export default function TestimonialsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold font-headline">Success Stories</h1>
                <p className="text-muted-foreground mt-2">See what our clients have to say about our consultants.</p>
            </div>
            <TestimonialsSection />
        </div>
    );
}
