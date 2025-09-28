import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">ConnectSphere Consult</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#categories" className="text-muted-foreground transition-colors hover:text-foreground">
            Categories
          </Link>
          <Link href="/#featured" className="text-muted-foreground transition-colors hover:text-foreground">
            Consultants
          </Link>
          <Link href="/#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
           <Button variant="ghost" asChild>
            <Link href="#">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/search">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
