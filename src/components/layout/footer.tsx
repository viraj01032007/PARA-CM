import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.8 0-1.22.53-1.42.92-.07.14-.09.33-.09.53V19h-3V10h3v1.32h.04c.4-.72 1.38-1.54 3.03-1.54 2.2 0 3.81 1.44 3.81 4.41V19z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">ConnectSphere</span>
          </Link>
          <p className="text-muted-foreground text-sm">Find your expert consultant for any need.</p>
          <div className="flex gap-4">
             <a href="#" className="text-muted-foreground hover:text-foreground"><TwitterIcon className="h-5 w-5" /></a>
             <a href="#" className="text-muted-foreground hover:text-foreground"><LinkedInIcon className="h-5 w-5" /></a>
             <a href="#" className="text-muted-foreground hover:text-foreground"><FacebookIcon className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#categories" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
            <li><Link href="/search" className="text-muted-foreground hover:text-foreground">Find a Consultant</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">How it Works</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">For Consultants</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Join as a Consultant</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Consultant Login</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Benefits</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
             <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ConnectSphere Consult. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
