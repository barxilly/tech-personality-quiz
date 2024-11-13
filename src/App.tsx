import './App.css'
import { Card, Center, Stack, Image, Flex, Text, useMantineColorScheme, Progress } from '@mantine/core'
import '@mantine/core/styles.css'

let current = 0;

/*
 * Personalities:
 * 1. I use Arch btw
 * 2. Default
 * 3. Money go bye-bye
 * 4. I don't know what a computer is
 */

let A = 0
let B = 0
let C = 0
let D = 0

const questions = [
  ['What OS do you use / would you prefer to use?', 'Windows', 'Linux', 'MacOS'],
  ['What do you prefer to make?', 'Websites', 'Mobile Apps', 'Desktop Apps'],
  ['What is most fun?', 'Hardware Projects', 'Software Projects', 'Server Projects'],
  ['Which do you use the most?', 'HTML', 'Python', 'C'],
  ['Which IDE is the best?', 'VS Code', 'IntelliJ', 'Vim'],
  ['What do you use for emails', 'Gmail', 'Outlook', 'Self-host']
]

const deets = [
  ['B', 'A', 'C'],
  ['D', 'A', 'B'],
  ['A', 'B', 'D'],
  ['D', 'B', 'A'],
  ['B', 'C', 'A'],
  ['B', 'D', 'A']
]

const images = [
  [
    'https://seekvectors.com/files/download/Windows%2011-01.png',
    'https://www.shareicon.net/download/2015/09/16/101872_debian.svg',
    'https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png'
  ],
  [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Chromium_Logo.svg/2048px-Chromium_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png',
    'https://cdn.worldvectorlogo.com/logos/microsoft-store-2022.svg'
  ],
  [
    'https://cdn-icons-png.flaticon.com/512/7248/7248067.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png',
    'https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_aws_logo_icon_170593.png'
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
  ],
  [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png',
    'https://seeklogo.com/images/I/intellij-idea-logo-F0395EF783-seeklogo.com.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png'
  ],
  [
    'https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/826px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png',
    'https://www.freeiconspng.com/thumbs/email-server-icon-png/mail-server-icon-png-1.png'
  ]
]

function App() {
  const theme = useMantineColorScheme()
  theme.setColorScheme('auto')



  return (
    <>
      <Center style={{ verticalAlign: 'middle', height: '100vh' }}>
        <Stack>
          <Progress value={0} id="prog" />
          <Text size="xl" className='q' align="center">Question</Text>

          <Flex className='ansflex' >
            <Card shadow="sm" padding="lg" radius="lg" withBorder className='anscard' onClick={() => bye(1)}>
              <Card.Section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="https://seekvectors.com/files/download/Windows%2011-01.png"
                  alt="image"
                  className='ansimg'
                  id="img1"
                />
              </Card.Section>

              <Text size="xl" weight={700} align="center" id="ans1">
                ANS 1
              </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="lg" withBorder className='anscard' onClick={() => bye(2)}>
              <Card.Section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="https://seekvectors.com/files/download/Windows%2011-01.png"
                  alt="image"
                  className='ansimg'
                  id="img2"
                />
              </Card.Section>

              <Text size="xl" weight={700} align="center" id="ans2">
                ANS 2
              </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="lg" withBorder className='anscard' onClick={() => bye(3)}>
              <Card.Section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="https://seekvectors.com/files/download/Windows%2011-01.png"
                  alt="image"
                  className='ansimg'
                  id="img3"
                />
              </Card.Section>

              <Text size="xl" weight={700} align="center" id="ans3">
                ANS 3
              </Text>
            </Card>
          </Flex>
        </Stack>
      </Center>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1200px-MacOS_logo.svg.png" width={1} height={1} onLoad={load} />
    </>
  )
}

function bye(int: number) {
  console.log(int)
  const cards = document.getElementsByClassName('anscard')
  cards[int - 1].style.backgroundColor = 'aquamarine'
  const header = document.getElementsByClassName('q')[0]
  const a1 = document.getElementById('ans1')
  const a2 = document.getElementById('ans2')
  const a3 = document.getElementById('ans3')
  const i1 = document.getElementById('img1')
  const i2 = document.getElementById('img2')
  const i3 = document.getElementById('img3')
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.animation = 'upandaway 0.7s forwards'
    setTimeout(() => {
      cards[i].style.backgroundColor = 'transparent'
      cards[i].style.animation = 'upandawayr 0.7s forwards'
    }, 100)
  }
  header.style.animation = 'upandaway 0.7s forwards'
  setTimeout(() => {
    current += 1
    const prog = document.getElementsByClassName('m_2242eb65')[0]
    console.log(prog)
    prog.style.width = (current / questions.length) * 100 + '%'
    if (current >= questions.length) {
      const ansflex = document.getElementsByClassName('ansflex')[0]
      ansflex.style.display = 'none'
      if (A > B && A > C && A > D) {
        header.innerHTML = 'A'
      } else if (B > A && B > C && B > D) {
        header.innerHTML = 'B'
      } else if (C > A && C > B && C > D) {
        header.innerHTML = 'C'
      } else if (D > A && D > B && D > C) {
        header.innerHTML = 'D'
      } else {
        header.innerHTML = '?'
      }
    } else {
      if (deets[current][0] === 'A') {
        A += 1
      } else if (deets[current][0] === 'B') {
        B += 1
      } else if (deets[current][0] === 'C') {
        C += 1
      } else if (deets[current][0] === 'D') {
        D += 1
      }
      load()
    }
    header.style.animation = 'upandawayr 0.7s forwards'
  }, 100)
}

function load() {
  const a1 = document.getElementById('ans1')
  const a2 = document.getElementById('ans2')
  const a3 = document.getElementById('ans3')
  const i1 = document.getElementById('img1')
  const i2 = document.getElementById('img2')
  const i3 = document.getElementById('img3')
  const q = document.getElementsByClassName('q')[0]
  q.innerHTML = questions[current][0]
  a1.innerHTML = questions[current][1]
  a2.innerHTML = questions[current][2]
  a3.innerHTML = questions[current][3]
  i1.src = images[current][0]
  i2.src = images[current][1]
  i3.src = images[current][2]
}

export default App
