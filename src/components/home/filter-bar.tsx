"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Sparkles } from 'lucide-react';

export default function FilterBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('any');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('any');
  const [priceRange, setPriceRange] = useState('any');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (category !== 'any') params.append('category', category);
    if (location) params.append('location', location);
    if (availability !== 'any') params.append('availability', availability);
    if (priceRange !== 'any') params.append('priceRange', priceRange);
    
    router.push(`/search?${params.toString()}`);
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-4">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="md:col-span-2">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-12 text-base"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-12 text-base">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">All Categories</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Personal">Personal Growth</SelectItem>
              <SelectItem value="Tech">Tech</SelectItem>
            </SelectContent>
          </Select>
          <Select value={availability} onValueChange={setAvailability}>
            <SelectTrigger className="h-12 text-base">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Availability</SelectItem>
              <SelectItem value="Weekdays">Weekdays</SelectItem>
              <SelectItem value="Weekends">Weekends</SelectItem>
              <SelectItem value="today">Available Today</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full h-12 text-base md:col-span-1">
            <Sparkles className="mr-2 h-4 w-4" />
            Smart Search
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
