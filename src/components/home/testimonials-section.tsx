import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TestimonialsSection() {
    return (
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
    );
}
