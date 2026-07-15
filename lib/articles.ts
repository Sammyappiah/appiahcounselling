'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  content: string;
}

// Get all articles
export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        id: data.slug || fileName.replace('.mdx', ''),
        slug: data.slug || fileName.replace('.mdx', ''),
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        date: data.date,
        readingTime: data.readingTime,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return articles;
}

// Get article by slug
export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: data.slug || slug,
      slug: data.slug || slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      date: data.date,
      readingTime: data.readingTime,
      content,
    };
  } catch {
    return null;
  }
}

// Get all slugs (for static generation)
export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace('.mdx', ''));
}

// Get articles by category
export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => article.category === category);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const articles = getAllArticles();
  const categories = new Set(articles.map(a => a.category));
  return Array.from(categories).sort();
}
