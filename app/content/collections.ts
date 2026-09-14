export type Language = 'ko' | 'en';
export type CollectionCopy = { title: string; summary: string; alt: string; why: string; clues: [string, string][]; trap: string; challenge: string };
export const collections: { slug: string; photoId: string; pieces: number; ko: CollectionCopy; en: CollectionCopy }[] = [
  {
    slug: 'mountain-lake', photoId: '1470770841072-f978cf4d019e', pieces: 20,
    ko: {
      title: '산과 호수: 반사와 실물 구분하기',
      summary: '오른쪽 오두막과 물가의 경계에서 시작해, 호수에 비친 산을 구분하는 입문 퍼즐입니다.',
      alt: '산 아래 호수와 오른쪽 나무 오두막, 물에 비친 산과 나무',
      why: '이 사진은 회색 산, 짙은 초록 숲, 따뜻한 갈색 오두막이 서로 다른 기준점이 됩니다. 넓은 풍경이지만 눈에 띄는 건물이 한쪽에 있어 처음부터 모든 조각을 비교할 필요가 없습니다. 반면 호수에는 같은 산과 나무가 거꾸로 비쳐 있어, 색만 보고 조각을 놓으면 실수하기 쉽습니다. 20피스로 큰 위치 관계를 익힌 뒤 48피스에서 반사의 차이를 살펴보세요.',
      clues: [
        ['오른쪽 오두막의 지붕', '회색 지붕과 갈색 벽이 만나는 긴 선을 찾으세요. 지붕은 하늘과 맞닿아 있지 않고 짙은 숲 앞에 있습니다. 갈색 조각을 모은 뒤 그 위에 회색 선이 이어지는지 확인하면 오두막의 위치가 좁혀집니다.'],
        ['숲과 호수가 만나는 높이', '나무가 위로 자라는 쪽과 물에 거꾸로 비친 쪽을 나눕니다. 물가를 가로지르는 가느다란 경계는 양쪽을 구분하는 단서입니다. 화면 중앙이라고 단정하지 말고 원본에서 실제 높이를 먼저 확인하세요.'],
        ['구름과 반사의 질감', '산 앞의 구름은 흐릿한 흰 덩어리이고, 호수의 반사에는 잔물결이 만드는 가로 방향의 변화가 있습니다. 비슷한 회색 조각 두 개가 헷갈린다면 밝기보다 가로로 끊기는 질감이 있는지 비교하세요.'],
      ],
      trap: '왼쪽 위와 아래에는 모두 어두운 나뭇가지가 있습니다. 검은색이라는 이유만으로 모서리에 놓지 말고 가지 뒤가 하늘인지 물인지 확인하세요. 플레이판과 관찰 사진은 같은 4:3 영역을 사용하므로 원본 사진의 바깥쪽과 혼동하지 않아도 됩니다.',
      challenge: '20피스를 마쳤다면 같은 사진을 48피스로 바꾸세요. 이번에는 오두막을 먼저 맞추지 말고 물가를 기준으로 위·아래를 나눠보세요. 어느 방법에서 원본 확인이 덜 필요했는지 비교하면 자신에게 맞는 출발점을 찾을 수 있습니다.',
    },
    en: {
      title: 'Mountain lake: read the reflection',
      summary: 'Start at the cabin and shoreline, then separate the mountains from their reflections in this beginner puzzle.',
      alt: 'Mountain lake with a wooden cabin on the right and reflected mountains and trees',
      why: 'Gray rock, dark green forest, and a warm brown cabin provide three different anchors. The prominent building on one side lets you narrow your search without comparing every piece at once. The lake also repeats the mountains and trees upside down, so matching color alone can be misleading. Start with 20 pieces to learn the layout, then use 48 to study the reflections.',
      clues: [
        ['The cabin roof on the right', 'Find the long line between the gray roof and brown wall. The roof sits in front of dark forest, not open sky. Group the brown pieces and look for the roof line running above them.'],
        ['The height of the shoreline', 'Separate upright trees from their upside-down reflections. A narrow shoreline divides them. Do not assume that it runs through the exact center: check its actual height in the reference before placing a green piece.'],
        ['Cloud texture versus water texture', 'Clouds in front of the mountains form soft white patches. Reflections in the lake are interrupted by horizontal ripples. When two gray pieces look similar, compare those horizontal interruptions rather than brightness alone.'],
      ],
      trap: 'Dark branches appear in both the upper and lower left. Check whether the background is sky or water before placing a dark corner. The study image and game use the same 4:3 crop, so use the view on this page as your reference.',
      challenge: 'After completing 20 pieces, try 48 with the same photo. Start at the shoreline instead of the cabin. Compare how often each approach makes you consult the reference; that tells you which anchor works better for you.',
    },
  },
  {
    slug: 'sunlit-forest', photoId: '1441974231531-c6227db76b6e', pieces: 48,
    ko: {
      title: '햇살 드는 숲: 비슷한 초록 사이의 길',
      summary: '나뭇잎의 색보다 빛의 방향, 줄기의 굵기, 아래쪽 흙길을 따라가는 관찰 퍼즐입니다.',
      alt: '왼쪽에서 햇살이 들어오는 숲과 수직 나무줄기, 아래쪽의 밝은 흙길',
      why: '숲은 초록색이 많아 한눈에는 모든 조각이 비슷해 보입니다. 이 사진을 고른 이유는 왼쪽의 밝은 빛과 아래쪽 흙길이 반복되는 나무 사이에서도 방향을 알려주기 때문입니다. 48피스에서는 줄기 하나를 여러 조각으로 연결해야 하므로 색 분류 다음 단계인 선의 연속성을 연습할 수 있습니다. 처음이라면 20피스로 낮춰 길의 위치부터 익혀도 좋습니다.',
      clues: [
        ['먼저 아래쪽 길의 윤곽', '갈색 흙과 초록 잎이 만나는 굽은 경계를 찾습니다. 흙길을 완성하면 나무줄기가 어디에서 시작되는지 확인할 기준이 생깁니다. 넓은 갈색 면만 찾기보다 길의 가장자리를 따라 붙이세요.'],
        ['왼쪽의 밝은 통로', '햇빛이 들어오는 노란빛 부분을 짙은 초록과 구분합니다. 밝은 조각도 모두 같은 위치는 아닙니다. 그 위를 가로지르는 가느다란 가지가 있는지 확인해 왼쪽 밝은 영역 안에서 순서를 정하세요.'],
        ['줄기의 굵기와 그림자', '줄기처럼 보이는 수직선이 여러 개라면 양쪽 경계 사이의 폭을 비교합니다. 위아래가 이어질 때 굵기와 밝은 면의 방향도 함께 이어져야 합니다. 선 하나만 맞고 옆의 잎이 끊긴다면 다른 줄기일 수 있습니다.'],
      ],
      trap: '초록색 조각을 무작위로 바꾸면 우연히 맞은 줄기까지 흐트러집니다. 연결이 확인된 줄기 주변에서만 후보를 찾고, 근거 없는 이동은 줄여보세요. 직소 모드에서는 굴곡이 비슷해도 원래 자리가 아니면 조각이 고정되지 않습니다.',
      challenge: '48피스를 두 가지 모드로 각각 풀어보세요. 정사각형 교환에서는 줄기의 연결을, 직소 끼우기에서는 줄기와 조각의 굴곡을 함께 봅니다. 이동 횟수 집계 방식이 다르므로 숫자로 우열을 비교하기보다 어떤 단서가 도움이 됐는지 기록하세요.',
    },
    en: {
      title: 'Sunlit forest: find a path through green',
      summary: 'Follow the light, trunk widths, and earthy path rather than relying on leaf color.',
      alt: 'Sunlight entering a forest from the left, vertical tree trunks, and a bright dirt path below',
      why: 'A forest can make every green piece look alike. This photograph has a bright opening on the left and an earthy path below that give direction to the repeating trunks. At 48 pieces, each trunk spans several tiles, making this a useful exercise in continuous lines. If it feels overwhelming, start at 20 and learn where the path sits first.',
      clues: [
        ['Trace the lower path first', 'Find the curved boundary where brown earth meets green leaves. The path provides an anchor for the bases of the trees. Work along its edges instead of collecting only large brown patches.'],
        ['Locate the bright opening on the left', 'Separate the yellow light from deep green shade. Bright pieces are not interchangeable: look for thin branches crossing the light to determine their order within that region.'],
        ['Compare trunk widths and shadows', 'When several pieces show vertical lines, compare the distance between the two sides of each trunk. The width and the illuminated side should continue across the join. A line that matches while nearby leaves break may belong to another tree.'],
      ],
      trap: 'Random swaps among green pieces can disturb a trunk you have already assembled. Work outward from a confirmed join. In shape mode, a similar outline is not enough: a piece only stays in its original position.',
      challenge: 'Try 48 pieces in both modes. In square swap, follow trunk continuity; in shape fit, combine that clue with the outline. Move counts use different rules in the two modes, so compare the clues that helped rather than treating the totals as a fair competition.',
    },
  },
  {
    slug: 'city-skyline', photoId: '1477959858617-67f85cf4f1df', pieces: 48,
    ko: {
      title: '도시 스카이라인: 높이와 지붕으로 찾기',
      summary: '분홍빛 하늘, 푸른 수면, 크기가 다른 건물 사이에서 위치를 좁혀가는 퍼즐입니다.',
      alt: '분홍빛 하늘과 푸른 수면 앞에 서로 다른 높이의 건물이 모여 있는 도시',
      why: '이 사진은 작은 창문이 많지만 시작할 단서는 큽니다. 위쪽의 분홍빛 하늘과 푸른 수면, 아래쪽 건물들이 층을 이루고 있어 넓은 영역부터 나눌 수 있습니다. 건물마다 높이와 지붕 형태가 달라 반복 무늬만 있는 사진보다 기준점을 만들기 쉽습니다. 48피스에서 건물의 외곽을 읽고, 120피스에서는 지붕과 벽면의 밝기를 비교해보세요.',
      clues: [
        ['하늘과 수면의 수평 경계', '분홍색에서 청록색으로 바뀌는 긴 수평선을 먼저 찾습니다. 창문이 없는 파란 조각은 건물보다 수면일 가능성이 높지만, 유리벽일 수도 있으므로 주변에 직선 프레임이 있는지 함께 보세요.'],
        ['높이 솟은 건물의 꼭대기', '중앙 부근의 어두운 고층 건물과 오른쪽의 밝은 높은 건물은 서로 다른 기준점입니다. 꼭대기의 모양을 확인한 뒤 벽면을 아래로 연결하세요. 가장 높은 건물이 반드시 사진 정중앙에 있는 것은 아닙니다.'],
        ['지붕과 벽이 만나는 모서리', '밝은 지붕과 어두운 벽면이 만나는 각을 찾으세요. 비슷한 창문 격자보다 지붕의 방향과 건물이 가리는 영역이 위치를 더 잘 알려줍니다. 앞쪽 건물의 외곽을 완성하면 뒤쪽 건물 조각의 범위를 좁힐 수 있습니다.'],
      ],
      trap: '창문 줄이 연결된다고 같은 건물은 아닙니다. 줄 간격, 벽의 색, 빛을 받는 방향까지 확인하세요. 사진의 위쪽 하늘도 단색이 아니라 구름이 흩어져 있으므로 막히면 구름 가장자리로 돌아가도 좋습니다.',
      challenge: '같은 사진으로 20·48·120피스를 비교해보세요. 20에서는 건물 덩어리, 48에서는 지붕, 120에서는 벽면과 그림자 경계가 더 중요한 단서가 됩니다. 화면이 좁아 창문을 구분할 수 없다면 조각 수를 낮추는 것이 더 유용한 연습입니다.',
    },
    en: {
      title: 'City skyline: use height and rooftops',
      summary: 'Find your position between a pink sky, blue water, and buildings of different heights.',
      alt: 'City buildings of different heights in front of blue water beneath a pink sky',
      why: 'There are many small windows here, but the starting clues are large. Pink sky, blue water, and buildings form broad layers. Different heights and roof shapes provide anchors among the repeating patterns. Use 48 pieces to read building outlines, then try 120 to compare rooftops and the light on individual walls.',
      clues: [
        ['The horizontal sky and water boundary', 'Find the long line where pink changes to blue-green. A blue piece without windows may be water, but it could be glass: check for straight frames before deciding.'],
        ['The tops of the tallest buildings', 'A dark tower near the middle and a tall bright building on the right make distinct anchors. Identify a top first, then connect its walls downward. Do not assume the tallest structure sits exactly in the center.'],
        ['Corners between roofs and walls', 'Look for angles between a bright roof and a dark wall. Roof direction and overlapping buildings reveal position more reliably than a repeated window grid. A completed foreground outline narrows the space available to buildings behind it.'],
      ],
      trap: 'Continuous window rows do not prove that two pieces belong to one building. Check their spacing, wall color, and lighting direction. The sky also contains scattered clouds; their edges offer another starting point when the buildings become difficult.',
      challenge: 'Compare 20, 48, and 120 pieces with this same photo. At 20, use building groups; at 48, use roofs; at 120, inspect walls and shadow boundaries. If your screen makes the windows too small to distinguish, reducing the count gives you a more useful exercise.',
    },
  },
];

export function collectionPhoto(item: typeof collections[number], locale: Language) {
  return { id: item.slug, url: `https://images.unsplash.com/photo-${item.photoId}?auto=format&fit=crop&w=1200&h=900&q=85`, label: item[locale].title, credit: 'Photo from Unsplash', sourceUrl: 'https://unsplash.com' };
}
