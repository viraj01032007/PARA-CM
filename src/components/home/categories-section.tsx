import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, HeartPulse, Lightbulb, User, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Health', icon: <HeartPulse className="w-8 h-8" />, href: '/categories/health' },
  { name: 'Business', icon: <Briefcase className="w-8 h-8" />, href: '/categories/business' },
  { name: 'Personal Growth', icon: <User className="w-8 h-8" />, href: '/categories/personal' },
  { name: 'Tech', icon: <Lightbulb className="w-8 h-8" />, href: '/categories/tech' },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/search">
              Browse All Consultants <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
