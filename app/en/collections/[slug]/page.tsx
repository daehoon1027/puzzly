import { notFound } from 'next/navigation';
import { collections } from '../../../content/collections';
import { contentMetadata } from '../../../content/metadata';
import { CollectionDetail } from '../../../components/collection-pages';
export const dynamicParams = false;
export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = collections.find(item => item.slug === slug);
  if (!item) notFound();
  const subject = item.en.title.split(':')[0];
  return contentMetadata(
    `/collections/${slug}`,
    'en',
    `${subject} · ${item.pieces} Pieces | Free Online Photo Puzzle`,
    `${item.en.summary} Start this free ${item.pieces}-piece photo puzzle with no account required.`,
  );
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!collections.some(item => item.slug === slug)) notFound();
  return <CollectionDetail slug={slug} locale="en" />;
}
