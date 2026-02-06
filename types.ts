export type ViewState = 'home' | 'projects';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ComparisonImage {
  beforeUrl: string;
  afterUrl: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  galleryImages: string[]; // 1920x1080 images
  shortDescription: string;
  fullDescription: string;
}
