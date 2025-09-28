export type Category = 'Health' | 'Business' | 'Personal' | 'Tech';

export type Review = {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
};

export type Consultant = {
  id: string;
  name: string;
  specialty: string;
  category: Category;
  location: string;
  bio: string;
  experience: number; // in years
  languages: string[];
  rate: number; // per hour
  rating: number;
  reviewCount: number;
  imageId: string;
  reviews: Review[];
  availability: string[]; // e.g., 'Weekdays', 'Weekends'
};
