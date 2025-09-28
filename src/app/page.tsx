import {
  Briefcase,
  HeartPulse,
  Lightbulb,
  Sparkles,
  User,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import FilterBar from '@/components/home/filter-bar';
import { featuredConsultants, testimonials } from '@/lib/data';
import ConsultantCard from '@/components/consultants/consultant-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const categories = [
  { name: 'Health', icon: <HeartPulse className="w-8 h-8" />, href: '/search?category=Health' },
  { name: 'Business', icon: <Briefcase className="w-8 h-8" />, href: '/search?category=Business' },
  { name: 'Personal Growth', icon: <User className="w-8 h-8" />, href: '/search?category=Personal' },
  { name: 'Tech', icon: <Lightbulb className="w-8 h-8" />, href: '/search?category=Tech' },
];

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

      <section id="categories" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10 font-headline">
            Explore Consultant Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category) => (
              <Link href={category.href} key={category.name}>
                 <Card className="text-center p-6 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer h-full">
                  <div className="p-4 bg-accent/50 rounded-full mb-4 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
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

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10 font-headline">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={`https://picsum.photos/seed/${testimonial.name}/40/40`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
