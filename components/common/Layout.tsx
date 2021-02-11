import Head from 'next/head'
import { usePlayer } from 'lib/hooks/use-player'
import Header from './Header'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import cn from 'classnames'

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
  pageTitle = 'Listen and discover free podcasts',
  metaDescription = 'Next.js, SWR and AudioBoom API',
}: Props) {
  const { isPlaying, current } = usePlayer()

  return (
    <>
      <Head>
        <title>
          {isPlaying
            ? `Playing: ${current.title} | ${current.channel.title}`
            : `${pageTitle} | Podcasts`}
        </title>
        <meta name="description" content={metaDescription} />
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
