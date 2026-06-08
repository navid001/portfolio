export interface WorkFrontmatter {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  stack: string[];
  duration: string;
  status: string;
  thumbnail: string;
  cover: string;
  ogImage?: string;
  accent?: string;
  featured: boolean;
  order: number;
  oneLineOutcome: string;
}

export interface WorkItem extends WorkFrontmatter {
  content?: string;
}
