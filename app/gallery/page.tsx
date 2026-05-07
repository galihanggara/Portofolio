import { client } from '@/sanity/lib/client';
import { GalleryPage } from '../components/PortfolioComponents';

const POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "image": image.asset->url,
  body
}`;

export default async function GalleryRoutePage() {
  const posts = await client.fetch(POSTS_QUERY);

  const projects = posts.map((post: any, idx: number) => ({
    title: post.title,
    tags: post.body ? post.body.map((block: any) => block._type || 'Content') : [],
    imageUrl: post.image || 'https://via.placeholder.com/400x300',
    marginTopClass: idx % 2 === 1 ? 'md:mt-16' : ''
  }));

  return <GalleryPage projects={projects} />;
}
