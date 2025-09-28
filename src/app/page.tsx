import { Sparkles } from 'lucide-react';
import FilterBar from '@/components/home/filter-bar';
import { featuredConsultants } from '@/lib/data';
import ConsultantCard from '@/components/consultants/consultant-card';
import TestimonialsSection from '@/components/home/testimonials-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

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
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {featuredConsultants.map((consultant) => (
                <CarouselItem key={consultant.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1 h-full">
                    <ConsultantCard consultant={consultant} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
