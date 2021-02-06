import Head from 'next/head'
import { usePlayer } from 'lib/hooks/use-player'
import Header from './Header'

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
    </>
  )
}
