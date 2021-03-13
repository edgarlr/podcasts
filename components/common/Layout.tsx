import Head from 'next/head'
import { usePlayer } from 'lib/hooks/use-player'
import Header from './Header'
import Footer from './Footer'
import cn from 'classnames'
import { DefaultOgImage, SITE_URL } from '@lib/constants'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
  headerText?: string
  button?: React.ReactNode
  navigation?: boolean
  pageTitle?: string
  metaDescription?: string
  image?: string
  type?: 'website' | 'article'
  date?: string
}

export default function Layout({
  children,
  headerText = null,
  button = null,
  navigation = true,
  pageTitle = 'Listen and discover free podcasts',
  metaDescription = 'Next.js, SWR and AudioBoom API',
  image = DefaultOgImage,
  type = 'website',
  date,
}: Props) {
  const { isPlaying, current } = usePlayer()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          {isPlaying
            ? `Playing: ${current.title} | ${current.channel.title}`
            : `${pageTitle} | Podcasts`}
        </title>

        {/* SEO */}
        <meta name="og:title" content={pageTitle} />

        <link rel="canonical" href={`${SITE_URL}${router.asPath}`} />

        <meta name="robots" content="follow, index" />

        <meta name="description" content={metaDescription} />

        <link rel="canonical" href={`${SITE_URL}${router.asPath}`} />

        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Podcasts" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={metaDescription} />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@edgarlr_" />
        {date && <meta property="article:published_time" content={date} />}
      </Head>

      <Header navigation={navigation} headerText={headerText} button={button} />

      <main
        className={cn('main-container', {
          ['playing']: current,
        })}
      >
        {children}
      </main>

      <Footer />

      <style jsx>{`
        .main-container {
          padding: 3.5rem 1.5rem 4rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: 768px) {
          .main-container {
            padding: 3.5rem 5rem 7rem;
          }
        }
        @media screen and (min-width: 1024px) {
          .main-container {
            padding: 3.5rem 12rem 7rem;
            transition: padding 0.25s;
          }
          .main-container.playing {
            padding: 3.5rem 26rem 7rem 4rem;
          }
        }
        @media screen and (min-width: 1440px) {
          .main-container {
            padding: 3.5rem 18rem 7rem;
          }
          .main-container.playing {
            padding: 3.5rem 30rem 7rem 8rem;
          }
        }
      `}</style>
    </>
  )
}
