import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  starClassName?: string;
}

export default function Rating({ rating, totalStars = 5, className, starClassName }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn('w-4 h-4 text-amber-400 fill-amber-400', starClassName)} />
      ))}
      {hasHalfStar && <Star key="half" className={cn('w-4 h-4 text-amber-400', starClassName)} style={{ clipPath: 'inset(0 50% 0 0)' }} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn('w-4 h-4 text-muted-foreground/50', starClassName)} />
      ))}
    </div>
  );
}
