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
  const subject = item.ko.title.split(':')[0];
  return contentMetadata(
    `/collections/${slug}`,
    'ko',
    `${subject} ${item.pieces}피스 | 무료 온라인 사진 퍼즐`,
    `${item.ko.summary} 회원가입 없이 ${item.pieces}피스 사진 퍼즐을 바로 시작할 수 있습니다.`,
  );
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!collections.some(item => item.slug === slug)) notFound();
  return <CollectionDetail slug={slug} locale="ko" />;
}
