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
  ['What do you use for emails', 'Gmail', 'Outlook', 'Self-host'],
  ['Where do you host your website?', 'Github', 'Vercel', 'My server'],
  ['What browser do you use?', 'Safari', 'Firefox', 'Chrome (Chromium)'],
  ['Which is the best?', 'PirateSoftware', 'Linus Tech Tips', 'MrWhoseTheBoss'],
  ['Where are you storing your files non-locally?', 'NAS', 'Google Drive', 'USB Drive'],
  ['Which is the best of these video games?', 'Minecraft', 'Doom', 'Fortnite'],
  ['Which of these is the most evil?', 'Apple', 'Microsoft', 'Google'],
  ['Which Windows version was the best?', 'Windows 7', 'Windows 8', 'Windows XP'],
]

const deets = [
  ['B', 'A', 'C'], // What OS do you use / would you prefer to use? // 1
  ['D', 'A', 'B'], // What do you prefer to make? // 2
  ['A', 'B', 'D'], // What is most fun? // 3
  ['D', 'B', 'A'], // Which do you use the most? // 4
  ['B', 'C', 'A'], // Which IDE is the best? // 5
  ['B', 'D', 'A'], // What do you use for emails // 6
  ['B', 'C', 'A'], // Where do you host your website? // 7
  ['C', 'A', 'B'], // What browser do you use? // 8
  ['A', 'B', 'D'], // Which is the best? // 9
  ['A', 'C', 'D'], // Where are you storing your files non-locally? // 10
  ['B', 'A', 'D'], // Which is the best of these video games? // 11
  ['D', 'B', 'A'], // Which of these is the most evil? // 12
  ['B', 'D', 'A'], // Which Windows version was the best? // 13
]

const images = [
  [
    'https://seekvectors.com/files/download/Windows%2011-01.png',
    'https://www.shareicon.net/download/2015/09/16/101872_debian.svg',
    'https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png'
  ], // What OS do you use / would you prefer to use?
  [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Chromium_Logo.svg/2048px-Chromium_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png',
    'https://cdn.worldvectorlogo.com/logos/microsoft-store-2022.svg'
  ], // What do you prefer to make?
  [
    'https://cdn-icons-png.flaticon.com/512/7248/7248067.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png',
    'https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_aws_logo_icon_170593.png'
  ], // Which IDE is the best?
  [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
  ], // What do you use for emails
  [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png',
    'https://seeklogo.com/images/I/intellij-idea-logo-F0395EF783-seeklogo.com.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png'
  ], // Where do you host your website?
  [
    'https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/826px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png',
    'https://www.freeiconspng.com/thumbs/email-server-icon-png/mail-server-icon-png-1.png'
  ], // What browser do you use?
  [
    'https://www.svgrepo.com/show/475654/github-color.svg',
    'https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg',
    'https://cdn2.iconfinder.com/data/icons/firewall-security/500/vab286_4_server_station_isometric_cartoon_center_computer_data-512.png'
  ], // Where do you host your website?
  [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Firefox_Developer_Edition_logo%2C_2019.svg/1997px-Firefox_Developer_Edition_logo%2C_2019.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png'
  ], // What browser do you use?
  [
    'https://static-cdn.jtvnw.net/jtv_user_pictures/9a1edcb1-7d62-48ab-b071-1ef64ab0f629-profile_image-300x300.png',
    'https://lastfm.freetls.fastly.net/i/u/ar0/57ef79fc6eade884c97bb284ff0ff9e1.jpg',
    'https://yt3.googleusercontent.com/elcW3neiv9S3v_PCP3aDdgNHOLobYZ-qjj8ydsqHMq9f0jN8mO-lVthwzynjeQoPrn5z8rGPfg=s900-c-k-c0x00ffffff-no-rj'
  ], // Which is the best?
  [
    'https://www.westerndigital.com/content/dam/store/en-us/assets/products/desktop/my-cloud-pro-series-pr4100/gallery/my-cloud-pro-series-pr4100-Hero1.png.thumb.1280.1280.png',
    'https://www.computerhope.com/issues/pictures/google-drive-logo.png',
    'https://www.westerndigital.com/content/dam/store/en-us/assets/products/usb-flash-drives/cruzer-blade-usb-2-0/gallery/cruzer-blade-usb-2-0-angle.png.thumb.1280.1280.png'
  ], // Where are you storing your files non-locally?
  [
    'https://preview.redd.it/i-improved-the-minecraft-launcher-icon-v0-jrrexgfwbyob1.png?width=1024&format=png&auto=webp&s=54bebe736f23c7d2f1d183b34cbd82645b1c7e6a',
    'https://ph.cleanpng.com/downloadpng/f6d9a54b903c7b6647aca6fcb4a2e758/L4Dxd6FrigIwappyR9p4cTBlR7XqgfZlamU1fahuYUmzcoG6U8Q3OmFme9M5N0C3RHB3jvc=.png',
    'https://static.cdnlogo.com/logos/f/35/fortnite.png'
  ], // Which is the best of these video games?
  [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1862px-Apple_Computer_Logo_rainbow.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/1024px-Microsoft_365_Copilot_Icon.svg.png',
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ], // Which of these is the most evil?
  [
    'https://archive.org/download/windows-logo-2006/Windows_logo__2006_.png',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7da8855e-55d1-4cd3-ba5b-f8f32c4cdc1d/df4yf7k-e676b275-3210-407c-ae4f-aafd8860d752.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkYTg4NTVlLTU1ZDEtNGNkMy1iYTViLWY4ZjMyYzRjZGMxZFwvZGY0eWY3ay1lNjc2YjI3NS0zMjEwLTQwN2MtYWU0Zi1hYWZkODg2MGQ3NTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L6Jd7PfGvNjt-IhDswZZxNWRrqdh18yYqoqYZoUumUQ',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b140052-cc50-4879-9382-26a89a456826/dfom9ho-0e411c0f-e367-480b-8c90-77ea71f64628.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiMTQwMDUyLWNjNTAtNDg3OS05MzgyLTI2YTg5YTQ1NjgyNlwvZGZvbTloby0wZTQxMWMwZi1lMzY3LTQ4MGItOGM5MC03N2VhNzFmNjQ2MjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._bgM5viRjgIDOMgIvGopnCOPfWOnS6zysnd4X4zHx5I'
  ], // Which windows version was the best?
]

function App() {
  const theme = useMantineColorScheme()
  theme.setColorScheme('auto')

  return (
    <>
      <Center id="cen" style={{ verticalAlign: 'middle', height: '100vh', opacity: '0', transition: 'opacity 0.5s ease-in-out' }}>
        <Stack>
          <Center>
            <Stack>
              <Progress value={0} id="prog" />
              <Text size="xl" className='q' style={{ textAlign: 'center' }}>Question</Text>
            </Stack>
          </Center>

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

              <Text size="xl" id="ans1">
                ANS 1
              </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="lg" withBorder className='anscard' onClick={() => bye(2)}>
              <Card.Section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="https://www.shareicon.net/download/2015/09/16/101872_debian.svg"
                  alt="image"
                  className='ansimg'
                  id="img2"
                />
              </Card.Section>

              <Text size="xl" id="ans2">
                ANS 2
              </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="lg" withBorder className='anscard' onClick={() => bye(3)}>
              <Card.Section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png"
                  alt="image"
                  className='ansimg'
                  id="img3"
                />
              </Card.Section>

              <Text size="xl" id="ans3">
                ANS 3
              </Text>
            </Card>
          </Flex>
        </Stack>
      </Center>
      <img src="https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png" width={1} height={1} onLoad={load} />
    </>
  )
}

function bye(int: number) {
  console.log(int)
  console.log('A is ' + A)
  console.log('B is ' + B)
  console.log('C is ' + C)
  console.log('D is ' + D)
  const cards = document.getElementsByClassName('anscard') as HTMLCollectionOf<HTMLElement>
  cards[int - 1].style.backgroundColor = 'aquamarine'
  const header = document.getElementsByClassName('q')[0] as HTMLElement
  /*const a1 = document.getElementById('ans1')
  const a2 = document.getElementById('ans2')
  const a3 = document.getElementById('ans3')
  const i1 = document.getElementById('img1')
  const i2 = document.getElementById('img2')
  const i3 = document.getElementById('img3')*/
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.animation = 'upandaway 0.7s forwards'
    setTimeout(() => {
      cards[i].style.backgroundColor = ''
      cards[i].style.animation = 'upandawayr 0.7s forwards'
    }, 100)
  }
  header.style.animation = 'upandaway 0.7s forwards'
  setTimeout(() => {
    current += 1
    const prog = document.getElementsByClassName('m_2242eb65')[0] as HTMLElement
    console.log(prog)
    prog.style.width = (current / questions.length) * 100 + '%'
    if (current >= questions.length) {
      const ansflex = document.getElementsByClassName('ansflex')[0] as HTMLElement
      ansflex.style.display = 'none'
      if (A > B && A > C && A > D) {
        header.innerHTML = 'Your personality type is \'I use Arch btw\''
      } else if (B > A && B > C && B > D) {
        header.innerHTML = 'Your personality type is \'Most Default Programmer\''
      } else if (C > A && C > B && C > D) {
        header.innerHTML = 'Your personality type is \'Money go bye-bye\''
      } else if (D > A && D > B && D > C) {
        header.innerHTML = 'Your personality type is \'I don\'t actually know what a computer is\''
      } else {
        header.innerHTML = 'Your personality type is \'Complete and utter nutcase\''
      }
    } else {
      if (deets[current][int - 1] === 'A') {
        A += 1
      } else if (deets[current][int - 1] === 'B') {
        B += 1
      } else if (deets[current][int - 1] === 'C') {
        C += 1
      } else if (deets[current][int - 1] === 'D') {
        D += 1
      } else {
        console.log('you\'ve fucked up')
      }
      load()
    }
    header.style.animation = 'upandawayr 0.7s forwards'
  }, 100)
}

function load() {
  console.log('loading')
  const a1 = document.getElementById('ans1') as HTMLElement
  const a2 = document.getElementById('ans2') as HTMLElement
  const a3 = document.getElementById('ans3') as HTMLElement
  const i1 = document.getElementById('img1') as HTMLImageElement
  const i2 = document.getElementById('img2') as HTMLImageElement
  const i3 = document.getElementById('img3') as HTMLImageElement
  const q = document.getElementsByClassName('q')[0] as HTMLElement
  q.innerHTML = questions[current][0]
  a1.innerHTML = questions[current][1]
  a2.innerHTML = questions[current][2]
  a3.innerHTML = questions[current][3]
  i1.src = images[current][0]
  i2.src = images[current][1]
  i3.src = images[current][2]
  console.log(i1.src)

  const cen = document.getElementById('cen') as HTMLElement
  cen.style.opacity = '1'

  console.log(images)

  // For all images, create an image element with 0 opacity in order to preload them
  for (let i = 0; i < images.length; i++) {
    for (let j = 0; j < images[i].length; j++) {
      const img = document.createElement('img')
      img.src = images[i][j]
      img.style.opacity = '0'
      img.style.width = '0'
      img.style.height = '0'
      document.body.appendChild(img)
    }
  }


}

export default App
