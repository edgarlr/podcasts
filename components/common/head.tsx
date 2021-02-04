import { useRef } from 'react'
import NextHead from 'next/head'

const Head = () => {
  const link = useRef(null)

  return (
    <NextHead>
      {/* Google fonts */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        ref={link}
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
        onLoad={() => (link.current!.rel = 'stylesheet')}
      />

      {/* status bar transparent */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* General and favicon */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="manifest" href="/static/manifest.json" key="site-manifest" />

      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/static/images/ms-icon-144x144.png"
      />

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-touch-icon.png"
      />
      <link
        rel="mask-icon"
        href="/static/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/images/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/images/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/images/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/images/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/images/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/images/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/images/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/images/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/images/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/images/favicon-16x16.png"
      />
    </NextHead>
  )
}

export default Head
