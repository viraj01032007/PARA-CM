import Link from 'next/link';
import Image from 'next/image';
import type { Consultant } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Rating from '@/components/shared/rating';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin } from 'lucide-react';

interface ConsultantCardProps {
  consultant: Consultant;
}

export default function ConsultantCard({ consultant }: ConsultantCardProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === consultant.imageId);

  return (
    <Link href={`/consultants/${consultant.id}`}>
      <Card className="overflow-hidden h-full group hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <Image
            src={placeholderImage?.imageUrl || 'https://picsum.photos/seed/placeholder/400/300'}
            alt={consultant.name}
            width={400}
            height={300}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={placeholderImage?.imageHint}
          />
          <Badge className="absolute top-3 right-3" variant="secondary">{consultant.category}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg font-headline">{consultant.name}</h3>
          <p className="text-sm text-primary font-medium">{consultant.specialty}</p>
          <div className="flex items-center gap-2 mt-2">
            <Rating rating={consultant.rating} />
            <span className="text-xs text-muted-foreground">({consultant.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <MapPin className="w-4 h-4 mr-1.5" />
            <span>{consultant.location}</span>
          </div>
          <div className="text-right font-bold text-lg mt-4">
            ${consultant.rate}<span className="text-sm font-normal text-muted-foreground">/hr</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
