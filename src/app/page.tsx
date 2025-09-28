import {
  Briefcase,
  HeartPulse,
  Lightbulb,
  Sparkles,
  User,
  ArrowRight
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import FilterBar from '@/components/home/filter-bar';
import { featuredConsultants, testimonials } from '@/lib/data';
import ConsultantCard from '@/components/consultants/consultant-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CategoriesSection from '@/components/home/categories-section';
import TestimonialsSection from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary-foreground-dark font-headline mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Find Your Expert
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mb-8">
            Connect with top-tier consultants across various fields. Get personalized advice to achieve your goals.
          </p>
          <FilterBar />
        </div>
      </section>

      <section id="featured" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center items-center gap-2 mb-10">
             <Sparkles className="text-primary w-8 h-8" />
             <h2 className="text-3xl font-bold text-center font-headline">
              Featured Consultants
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredConsultants.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
