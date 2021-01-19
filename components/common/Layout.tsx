import Head from 'next/head'
import { usePlayer } from 'lib/contexts'
import { colors } from 'styles/theme'
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
  navigation = false,
  pageTitle = 'Podcasts',
  metaDescription = 'Podcasts App | Next.js, SWR and AudioBoom API',
}: Props) {
  const { isPlaying, current } = usePlayer()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          {isPlaying
            ? `${current.title} | ${current.channel.title}`
            : pageTitle}
        </title>
        <meta name="description" content={metaDescription} />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      <Header navigation={navigation} headerText={headerText} button={button} />

      <main className={`main-container ${current ? 'playing' : ''}`}>
        {children}
      </main>

      <style jsx global>{`
        body {
          background: ${colors.white};
          color: ${colors.darkGray};
        }
        a {
          color: ${colors.darkGray};
        }
      `}</style>
    </>
  )
}
