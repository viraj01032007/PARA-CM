import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { consultants } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Rating from '@/components/shared/rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, CalendarDays, IndianRupee, Languages } from 'lucide-react';
import BookingCalendar from '@/components/consultants/booking-calendar';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const consultant = consultants.find(c => c.id === params.id);
  if (!consultant) {
    return { title: 'Consultant Not Found' };
  }
  return {
    title: `${consultant.name} - ConnectSphere Consult`,
    description: consultant.bio,
  };
}

export default function ConsultantProfilePage({ params }: Props) {
  const consultant = consultants.find(c => c.id === params.id);

  if (!consultant) {
    notFound();
  }

  const placeholderImage = PlaceHolderImages.find(img => img.id === consultant.imageId);

  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      <div className="md:col-span-2 space-y-8">
        <div className="flex flex-col sm:flex-row gap-8">
          <Image
            src={placeholderImage?.imageUrl || 'https://picsum.photos/seed/placeholder/400/400'}
            alt={consultant.name}
            width={200}
            height={200}
            className="rounded-lg object-cover w-full sm:w-48 sm:h-48"
            data-ai-hint={placeholderImage?.imageHint}
          />
          <div className="flex-1">
            <Badge>{consultant.category}</Badge>
            <h1 className="text-4xl font-bold font-headline mt-2">{consultant.name}</h1>
            <p className="text-xl text-primary font-medium mt-1">{consultant.specialty}</p>
            <div className="flex items-center gap-2 mt-2">
              <Rating rating={consultant.rating} />
              <span className="text-muted-foreground">({consultant.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">{consultant.bio}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>{consultant.experience} years of experience</span>
            </div>
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-primary" />
              <span>Speaks {consultant.languages.join(', ')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-primary" />
              <span>Available on {consultant.availability.join(' & ')}</span>
            </div>
             <div className="flex items-center gap-3">
              <IndianRupee className="w-5 h-5 text-primary" />
              <span>₹{consultant.rate} / hour</span>
            </div>
          </CardContent>
        </Card>
        
        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">Reviews</h2>
          <div className="space-y-6">
            {consultant.reviews.length > 0 ? consultant.reviews.map(review => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatarUrl} alt={review.author} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-semibold">{review.author}</p>
                        <Rating rating={review.rating} />
                      </div>
                       <p className="text-sm text-muted-foreground mb-2">{new Date(review.date).toLocaleDateString()}</p>
                      <p className="text-muted-foreground text-sm">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )) : (
              <p className="text-muted-foreground">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
      <div className="md:col-span-1">
        <div className="sticky top-24">
          <BookingCalendar rate={consultant.rate} />
        </div>
      </div>
    </div>
  );
}
