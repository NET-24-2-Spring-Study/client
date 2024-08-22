const titles = [
    'Q1. 친구가 배탈이 났다고 한다. 나의 반응은?',
    'Q2. 함께 대화를 하던 사람이 나보고 이렇게 말한다. 이 말에 대한 나의 생각은?',
    'Q3. 알바를 열심히 한 친구가 맥북을 샀다고 한다. 나의 반응은?',
    'Q4. 친구의 발표회에 갔다. 나의 반응은?',
    'Q5. 친구의 말에 대한 나의 반응은?',
    'Q6. 친구가 열심히 공부해서 친 시험에서 떨어졌다고 한다. 나의 반응은?',
    'Q7. 길을 가다 친구가 폰을 떨어뜨렸는데 액정이 깨졌다. 나의 반응은?',
    'Q8. 최근 기사에 대해 주변인과 대화 중 의견이 다름을 느꼈다.',
    'Q9. 친한 친구가 웃기게 넘어졌다. 그 때 나의 반응은?'
]
const questions = [
    '아.. 뭘 잘못 먹었나? 배탈 난 듯 ㅜㅜ',
    '넌 아는 것도 없으면서 왜 아는 척해?',
    '나 돈 모아서 맥북 샀어!',
    '잘봤어? 나 진짜 열심히 준비 했다..',
    '하루종일 넷플릭스 봐서 밤 새야 돼ㅠㅠ',
    '나 이번에 또 떨어졌어... 내 인생은 망한 걸까',
    '어떡해 스마트폰 액정이 깨졌어ㅜㅜ',
    '저건 좀 아니지 않아요?',
    '악..(하 이렇게 넘어지냐... 창피해)',
] // ‘저게 맞는 말 같은데,,’
const answerF = [
    '괜찮아? 많이 심해?',
    '응? (말을 왜 저렇게 해.. 상처 받게..)',
    '우와 축하해 고생 많았어',
    `하나 하나 준비하느라 진짜 고생 많았겠다... \n 네가 노력한 흔적이 보여서 더 감동적인 것 같아!`,
    '헐ㅠㅠ 졸리겠다..',
    '아니야ㅠ 🥺 다음에는 꼭 붙을 거야..!!',
    '산 지 얼마 안 된 폰이었잖아.. 화난다',
    '계속 다른 의견으로 대화하면 감정만 상하기\n 때문에 깊은 대화로 이어가지는 않는다.',
    '(나오는 웃음을 참으며) 크흑.. 괜찮냐?\n 너무 크게 넘어져서.. 완전 아플 것 같은데'
]
const answerT = [
    '헐 뭘 먹었길래 배탈이 나',
    '응? (뭐라는거야..)',
    '뭐 샀어 에어? 프로?',
    '다른 작품들 보다 네게 훨씬 더 잘한 것 같아!\n 여기서 네 작품만 보였어!!',
    '뭐 봤는데?',
    '아니야ㅠㅠ(흠... 뭐라고 위로해야하지ㅠ)',
    '액정 수리점 위치가.. 여긴데. 같이 가볼까?',
    '계속 토론을 하며 설득하거나\n 설득당할 때까지 대화한다.',
    'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 아 너무 웃었다 많이 아프냐?\n 무릎 쪽 한번 괜찮은지 확인해봐'
]