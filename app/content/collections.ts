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
  {
    slug: 'sunset-beach', photoId: '1507525428034-b723cf961d3e', pieces: 30,
    ko: {
      title: '해 질 무렵 해변: 수평선과 파도 결 따라가기',
      summary: '곧은 수평선, 굽은 포말, 모래 위의 빛을 서로 다른 선으로 읽는 30피스 퍼즐입니다.',
      alt: '노을빛 하늘 아래 청록색 바다와 굽은 흰 파도, 젖은 모래 위로 이어지는 반사',
      why: '이 사진은 하늘·바다·모래가 큰 층으로 나뉘어 처음 분류하기 쉽지만, 경계의 성격은 서로 다릅니다. 수평선은 곧고, 해안의 포말은 화면 아래를 향해 굽으며, 햇빛의 반사는 세로로 길게 이어집니다. 30피스에서는 이 세 방향을 한 조각 안에서 비교할 수 있어 색보다 선을 먼저 읽는 연습에 알맞습니다. 왼쪽의 작은 육지는 단색 영역 사이에서 위치를 확정하는 보조 기준점이 됩니다.',
      clues: [
        ['가장 곧은 수평선', '하늘과 바다가 만나는 선은 사진 전체에서 가장 길고 곧습니다. 위쪽은 옅은 파랑과 구름, 아래쪽은 청록색 물결이므로 선의 양쪽 질감까지 함께 확인하세요. 수평선 조각을 먼저 한 줄로 모으면 위아래 후보가 크게 줄어듭니다.'],
        ['아래로 굽는 흰 포말', '파도 가장자리의 흰 선은 왼쪽에서 시작해 화면 아래 중앙으로 휘어집니다. 흰색만 맞추지 말고 곡선이 어느 방향으로 꺾이는지 보세요. 포말 바깥쪽은 매끈한 젖은 모래이고 안쪽은 잔물결이 있는 바다입니다.'],
        ['노을빛이 만드는 세로 길', '해는 왼쪽 수평선 가까이에 있고 밝은 반사는 바다와 모래 위로 세로 방향으로 이어집니다. 노란빛 조각을 무조건 하늘에 두지 말고 물결이나 모래의 가는 선이 함께 보이는지 확인하세요.'],
      ],
      trap: '하늘의 분홍빛과 젖은 모래의 분홍빛은 색만 보면 비슷합니다. 하늘에는 부드러운 구름 덩어리가 있고 모래에는 가늘고 평행한 물결 자국이 있습니다. 오른쪽 바다는 색 변화가 작으므로 처음부터 그 영역을 무작위로 바꾸기보다 수평선과 포말을 완성한 뒤 남은 위치로 좁히세요.',
      challenge: '20피스에서는 하늘·바다·모래의 세 층을 먼저 나누고, 48피스에서는 포말의 굴곡과 잔물결 방향을 따라가 보세요. 같은 사진에서 원본을 몇 번 확인했는지 손으로 기록하면 큰 색 영역과 가는 선 중 어느 단서에 더 의존하는지 알 수 있습니다.',
    },
    en: {
      title: 'Sunset beach: follow the horizon and foam',
      summary: 'Read a straight horizon, curved foam, and reflected light as three different kinds of line.',
      alt: 'Turquoise sea beneath a sunset sky, curved white foam, and warm light reflected across wet sand',
      why: 'Sky, sea, and sand form three broad layers, but each boundary behaves differently. The horizon is straight, the foam curves toward the bottom of the frame, and the reflection stretches vertically. At 30 pieces, enough of each direction remains inside a tile to practise reading line before color. The small strip of land on the left provides a secondary anchor among the broad areas.',
      clues: [
        ['The straight horizon', 'The line between sky and sea is the longest straight boundary in the photograph. Pale sky and clouds sit above it, while turquoise ripples sit below. Build this row first to eliminate many wrong upper and lower positions.'],
        ['The curve of white foam', 'The foam begins on the left and bends toward the lower middle. Match the direction of the curve, not only its white color. Smooth wet sand lies outside the curve and textured water lies inside it.'],
        ['The vertical path of reflected light', 'The sun is low on the left, and its reflection runs through water and sand. A warm yellow tile does not automatically belong in the sky: check for ripples or fine sand lines within it.'],
      ],
      trap: 'Pink sky and warm wet sand can look alike by color. Clouds form soft masses, while sand carries fine parallel marks. Leave the low-detail water on the right until the horizon and foam have narrowed its possible positions.',
      challenge: 'Use 20 pieces to separate the three broad layers, then try 48 and follow individual bends in the foam. Make a simple tally whenever you open the original; it reveals whether broad color or narrow lines give you the stronger clue.',
    },
  },
  {
    slug: 'snow-fox', photoId: '1474511320723-9a56873867b5', pieces: 30,
    ko: {
      title: '눈밭의 붉은 여우: 윤곽과 색 대비 찾기',
      summary: '귀와 얼굴의 작은 형태에서 시작해 붉은 몸통, 검은 다리, 푸른 눈밭을 연결하는 동물 퍼즐입니다.',
      alt: '푸른빛 눈밭에 서 있는 붉은 여우와 검은 다리, 밝은 가슴 털',
      why: '중앙의 여우는 따뜻한 주황색이고 배경은 차가운 청회색이라 큰 분류가 명확합니다. 그러나 몸통은 털결 변화가 작고 배경은 초점이 흐려, 조각 수가 늘면 단색처럼 보이는 후보가 생깁니다. 30피스에서는 귀·눈·코처럼 작은 형태와 등·배·다리의 큰 윤곽을 함께 사용할 수 있습니다. 인물이나 동물 사진에서 얼굴만 찾은 뒤 막히는 상황을 연습하기 좋은 사진입니다.',
      clues: [
        ['두 귀와 눈 사이의 삼각형', '귀 끝의 검은 부분과 두 눈, 코가 만드는 삼각형은 가장 구별하기 쉬운 기준점입니다. 얼굴 조각을 맞춘 뒤 귀 바깥쪽이 배경과 만나는 선을 따라 머리의 위치를 확정하세요.'],
        ['주황색 등과 흰 가슴의 경계', '등은 오른쪽으로 거의 수평에 가깝게 이어지고, 목 아래의 흰 털은 불규칙하게 퍼집니다. 밝은 털이라고 모두 눈밭은 아닙니다. 털 끝이 가늘게 갈라지는지, 배경처럼 매끈하게 흐려지는지 비교하세요.'],
        ['검은 다리와 눈밭의 접점', '앞다리 두 개와 뒤쪽 다리는 서로 간격이 다릅니다. 검은 세로선 아래에서 눈이 가려지는 위치를 확인하면 다리의 순서를 정할 수 있습니다. 다리 사이로 보이는 푸른 배경도 중요한 모양입니다.'],
      ],
      trap: '몸통 중앙의 주황색 조각은 털결만으로 좌우를 구분하기 어렵습니다. 먼저 등의 위쪽 선과 배 아래의 어두운 경계를 완성한 뒤 그 사이를 채우세요. 흐린 배경 조각은 선명도가 낮다는 이유로 같은 위치가 아니며, 왼쪽 위의 밝은 회색과 오른쪽의 푸른 회색은 색온도가 다릅니다.',
      challenge: '30피스에서는 얼굴에서 바깥쪽으로 확장하고, 48피스에서는 다리와 배경이 만드는 빈 공간부터 맞춰보세요. 완성 뒤 어떤 순서에서 몸통의 단색 조각이 덜 남았는지 비교하면 인물·동물 퍼즐의 효율적인 출발점을 찾을 수 있습니다.',
    },
    en: {
      title: 'Red fox on snow: trace silhouette and contrast',
      summary: 'Begin with ears and face, then connect the orange body, dark legs, pale chest, and blue snow.',
      alt: 'Red fox standing on blue snow with dark legs and a pale chest',
      why: 'The fox is warm orange against a cool blue-gray background, so the first separation is clear. As the count rises, the body has few large changes and the background is deliberately soft. Thirty pieces preserve both small landmarks such as ears and eyes and the larger outline of back, belly, and legs. It is a useful study of what to do after an animal face is complete.',
      clues: [
        ['The triangle between ears, eyes, and nose', 'Dark ear tips, two eyes, and the nose make the most distinctive anchor. Complete the face, then follow the edge where the ears meet the background to confirm its position.'],
        ['Orange back against the pale chest', 'The back runs almost horizontally to the right, while pale chest fur breaks into an irregular edge below the neck. A bright patch may be fur rather than snow; compare fine hair edges with the smooth blurred background.'],
        ['Dark legs meeting the snow', 'The two front legs and rear leg have different spacing. Check where each dark vertical shape hides the snow. The blue negative spaces between the legs are clues, not empty detail.'],
      ],
      trap: 'Orange body tiles are hard to order by fur texture alone. Complete the upper back and darker belly edge, then fill the space between them. Soft background tiles are not interchangeable: the upper left is lighter gray while the right side shifts toward deeper blue.',
      challenge: 'At 30 pieces, work outward from the face. At 48, start with the negative spaces around the legs. Compare which route leaves fewer plain body tiles unresolved near the end.',
    },
  },
  {
    slug: 'chocolate-cake', photoId: '1578985545062-69928b1d9587', pieces: 48,
    ko: {
      title: '초콜릿 케이크: 반복 장식과 흐르는 선 구분하기',
      summary: '둥근 윗면, 반복되는 크림, 길이가 다른 초콜릿 방울을 비교하는 48피스 정물 퍼즐입니다.',
      alt: '둥근 초콜릿 케이크 위의 반복 크림 장식과 옆면을 따라 흐르는 초콜릿, 흰 케이크 받침',
      why: '정물 사진은 배경이 단순해 쉬워 보이지만, 이 케이크의 크림 장식과 초콜릿 방울은 비슷한 형태가 반복됩니다. 큰 원형 윤곽과 밝은 받침은 위치를 잡아주고, 작은 장식은 세부 비교를 요구합니다. 48피스에서는 같은 갈색 안에서도 광택·회전 방향·방울 길이를 읽을 수 있어 반복 무늬를 다루는 연습에 적합합니다.',
      clues: [
        ['윗면의 타원형 가장자리', '원형 케이크는 화면에서 타원처럼 보입니다. 윗면의 짙고 반짝이는 초콜릿과 옆면의 밝은 갈색이 만나는 곡선을 먼저 찾으세요. 이 곡선은 장식 조각의 위아래를 결정하는 기준선입니다.'],
        ['크림 장식의 회전 방향', '각 크림은 비슷하지만 주름이 감기는 방향과 그림자가 다릅니다. 위쪽 뒤편의 장식은 작고 일부가 가려지며, 앞쪽은 더 크고 선명합니다. 크기와 선명도를 함께 보면 앞뒤 위치를 나눌 수 있습니다.'],
        ['길이가 다른 초콜릿 방울', '옆면의 짙은 초콜릿은 아래로 흐르는 길이가 모두 다릅니다. 방울 끝의 높이와 옆 방울 사이의 간격을 비교하세요. 갈색 면적보다 검은 세로선의 순서를 기억하는 편이 정확합니다.'],
      ],
      trap: '크림 하나가 완전하게 보인다고 사진 위쪽에 있는 것은 아닙니다. 앞쪽 장식도 완전한 형태로 보입니다. 장식 아래가 케이크 윗면인지 옆면인지 확인하고, 배경의 밝은 타일과 흰 받침 타일은 무늬와 초점 차이로 구분하세요.',
      challenge: '20피스에서는 케이크의 전체 윤곽을, 48피스에서는 방울 길이를, 80피스에서는 크림 주름과 초콜릿 토핑의 방향을 기준으로 삼아보세요. 같은 정물에서 반복이 어느 조각 수부터 부담이 되는지 직접 비교할 수 있습니다.',
    },
    en: {
      title: 'Chocolate cake: separate repetition from flow',
      summary: 'Compare the oval top, repeating cream swirls, and chocolate drips of different lengths.',
      alt: 'Round chocolate cake with repeating cream swirls, chocolate drips, and a white cake stand',
      why: 'The plain background makes this still life look easy, but cream swirls and chocolate drips repeat across the cake. The large circular outline and bright stand establish position while small decorations demand closer comparison. At 48 pieces, gloss, rotation, and drip length remain visible enough to practise handling repetition within one color family.',
      clues: [
        ['The oval rim of the top', 'A circular cake appears as an oval from this angle. Find the curve where the dark glossy top meets the lighter side. This line establishes whether each decoration sits above or below the rim.'],
        ['The direction of each cream swirl', 'The swirls look similar, but their folds and shadows turn differently. Decorations at the back appear smaller and partly hidden; front swirls are larger and sharper. Use both size and focus to separate rows.'],
        ['Chocolate drips of different lengths', 'Each dark drip ends at a different height. Compare its endpoint and the gap to neighboring drips. Remembering the order of dark vertical lines is more reliable than matching a broad brown area.'],
      ],
      trap: 'A complete cream swirl is not automatically in the back row; front decorations can also be fully visible. Check whether the area below it is the top or side of the cake. Separate pale background from the white stand by pattern and focus.',
      challenge: 'Use the overall silhouette at 20 pieces, drip length at 48, and the direction of cream folds and sprinkles at 80. The same still life reveals when repetition becomes more demanding for you.',
    },
  },
];

export function collectionPhoto(item: typeof collections[number], locale: Language) {
  return { id: item.slug, url: `https://images.unsplash.com/photo-${item.photoId}?auto=format&fit=crop&w=1200&h=900&q=85`, label: item[locale].title, credit: 'Photo from Unsplash', sourceUrl: 'https://unsplash.com' };
}
