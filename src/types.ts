export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  features?: string[];
}

export interface EventTypeItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'wedding' | 'mehndi' | 'catering' | 'corporate' | 'decor';
  title: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
  content: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FoodCategory {
  title: string;
  items: { name: string; desc?: string; popular?: boolean }[];
}

export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'events'
  | 'gallery'
  | 'blog'
  | 'contact'
  | 'privacy'
  | 'terms';
