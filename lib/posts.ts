import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = path.join(process.cwd(), 'content', 'posts');

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

const readFileContent = (filePath: string): string | null => {
  try {
    return fs.readFileSync(filePath, { encoding: 'utf8' });
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return null;
  }
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const fileContent = readFileContent(filePath);
  
  if (!fileContent) {
    return null; 
  }

  const { data, content } = matter(fileContent);
  return { metadata: { ...data, slug }, content };
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootDirectory);

  const posts = files
    .map(file => getPostMetadata(file))
    .sort((a, b) => {
      return new Date(b.publishedAt ?? '').getTime() - new Date(a.publishedAt ?? '').getTime();
    });

  return limit ? posts.slice(0, limit) : posts; 
}

export function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = readFileContent(filePath);

  if (!fileContent) {
    throw new Error(`Failed to read metadata from ${filePath}`); 
  }

  const { data } = matter(fileContent);
  return { ...data, slug };
}
