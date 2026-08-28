import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const BLOCKED_TERMS = [
  '성인', '야동', '포르노', '누드', '성행위', '잔혹', '시체',
  'porn', 'porno', 'nude', 'sex', 'gore',
];

const TRANSLATIONS: Record<string, string> = {
  '웃는': 'smiling', '가족': 'family', '어린이': 'child', '아이': 'child',
  '아기': 'baby', '여성': 'woman', '여자': 'woman', '남성': 'man',
  '남자': 'man', '인물': 'person', '사람': 'person', '노인': 'senior',
  '직장인': 'office worker', '요리사': 'chef', '운동선수': 'athlete',
  '고양이': 'cat', '강아지': 'dog', '개': 'dog', '바다': 'ocean',
  '해변': 'beach', '산': 'mountain', '숲': 'forest', '도시': 'city',
  '야경': 'night city', '케이크': 'cake', '커피': 'coffee',
};

type PexelsPhoto = {
  id: number; width: number; height: number; url: string;
  photographer: string; photographer_url: string; alt?: string;
  src: { large?: string; landscape?: string };
};

function translateQuery(query: string) {
  return Object.entries(TRANSLATIONS).reduce(
    (result, [korean, english]) => result.replaceAll(korean, ` ${english} `),
    query,
  ).replace(/\s+/g, ' ').trim();
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.trim() ?? '';
  if (!query || query.length > 60) {
    return NextResponse.json({ error: '검색어는 1자 이상 60자 이하로 입력해 주세요.' }, { status: 400 });
  }
  if (BLOCKED_TERMS.some((term) => query.toLowerCase().includes(term))) {
    return NextResponse.json({ error: '가족 모두가 즐길 수 있는 검색어를 입력해 주세요.' }, { status: 400 });
  }

  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return NextResponse.json({ error: '이미지 검색을 준비하고 있어요.' }, { status: 503 });

  const url = new URL('https://api.pexels.com/v1/search');
  url.searchParams.set('query', translateQuery(query));
  url.searchParams.set('per_page', '20');
  url.searchParams.set('orientation', 'landscape');
  url.searchParams.set('locale', 'ko-KR');

  try {
    const response = await fetch(url, {
      headers: { Authorization: apiKey },
      next: { revalidate: 86400 },
    });
    if (!response.ok) {
      console.error('Pexels search failed', response.status);
      return NextResponse.json({ error: '이미지 검색이 잠시 원활하지 않아요.' }, { status: 502 });
    }

    const data = (await response.json()) as { photos?: PexelsPhoto[] };
    const photos = (data.photos ?? [])
      .filter((photo) => photo.width >= photo.height && (photo.src.large || photo.src.landscape))
      .slice(0, 10)
      .map((photo) => ({
        id: `pexels-${photo.id}`,
        url: photo.src.large ?? photo.src.landscape!,
        label: photo.alt?.trim() || `${query} 이미지`,
        credit: `Photo by ${photo.photographer} on Pexels`,
        sourceUrl: photo.url,
        photographerUrl: photo.photographer_url,
      }));

    if (photos.length < 10) {
      return NextResponse.json({ error: '조건에 맞는 이미지를 충분히 찾지 못했어요.' }, { status: 404 });
    }
    return NextResponse.json(
      { photos },
      { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' } },
    );
  } catch (error) {
    console.error('Pexels search error', error instanceof Error ? error.message : 'unknown error');
    return NextResponse.json({ error: '이미지 검색이 잠시 원활하지 않아요.' }, { status: 502 });
  }
}
