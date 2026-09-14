import { notFound } from 'next/navigation';
import { collections } from '../../content/collections';
import { contentMetadata } from '../../content/metadata';
import { CollectionDetail } from '../../components/collection-pages';
export const dynamicParams = false;
export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = collections.find(item => item.slug === slug);
  if (!item) notFound();
  return contentMetadata(`/collections/${slug}`, 'ko', item.ko.title, item.ko.summary);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!collections.some(item => item.slug === slug)) notFound();
  return <CollectionDetail slug={slug} locale="ko" />;
}
