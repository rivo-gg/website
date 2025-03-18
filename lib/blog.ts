import { Post, Tag } from '@/types/blog';

const url = process.env.MARBLE_API_URL;
const key = process.env.MARBLE_WORKSPACE_KEY;

export async function getPosts() {
  try {
    const raw = await fetch(`${url}/${key}/posts`);
    const data: Post[] = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTags() {
  try {
    const raw = await fetch(`${url}/${key}/tags`);
    const data: Tag[] = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSinglePost(slug: string) {
  try {
    const raw = await fetch(`${url}/${key}/posts/${slug}`);
    const data: Post = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const plainText = content.replace(/<[^>]*>/g, "").trim();
  const wordCount = plainText.split(/\s+/).length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}