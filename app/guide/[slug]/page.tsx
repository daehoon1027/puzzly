import { notFound } from 'next/navigation';
import { GuideDetail } from '../../components/guide-pages';
import { guides } from '../../content/guides';
import { contentMetadata } from '../../content/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return contentMetadata(`/guide/${slug}`, 'ko', guide.ko.title, guide.ko.summary);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!guides.some((item) => item.slug === slug)) notFound();
  return <GuideDetail slug={slug} locale="ko" />;
}
