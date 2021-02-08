import Head from 'next/head'
import { usePlayer } from 'lib/hooks/use-player'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  headerText?: string
  button?: React.ReactNode
  navigation?: boolean
  pageTitle?: string
  metaDescription?: string
}

export default function Layout({
  children,
  headerText = null,
  button = null,
  navigation = true,
  pageTitle = 'Podcasts',
  metaDescription = 'Podcasts App | Next.js, SWR and AudioBoom API',
}: Props) {
  const { isPlaying, current } = usePlayer()

  return (
    <>
      <Head>
        <title>
          {isPlaying
            ? `Playing: ${current.title} | ${current.channel.title}`
            : pageTitle}
        </title>
        <meta name="description" content={metaDescription} />
      </Head>

      <Header navigation={navigation} headerText={headerText} button={button} />

      <main className={`main-container ${current ? 'playing' : ''}`}>
        {children}
      </main>

      <Footer />

      <style jsx>{`
        .main-container {
          padding: 3.5rem 1.5rem 4rem;
          transition: padding 0.25s;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: 768px) {
          .main-container {
            padding: 2rem 5rem 7rem;
          }
        }
        @media screen and (min-width: 1024px) {
          .main-container {
            padding: 2rem 12rem 7rem;
          }
          .main-container.playing {
            padding: 2rem 26rem 7rem 4rem;
          }
        }
        @media screen and (min-width: 1440px) {
          .main-container {
            padding: 2rem 18rem 7rem;
          }
          .main-container.playing {
            padding: 2rem 30rem 7rem 8rem;
          }
        }
      `}</style>
    </>
  )
}
