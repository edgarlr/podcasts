import NextHead from 'next/head'

const Head = () => {
  return (
    <NextHead>
      {/* Fonts */}
      <link
        rel="preload"
        href="/fonts/fira-sans-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/fira-sans-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* status bar transparent */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* General and Manifest */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* ICONS */}
      <meta
        name="msapplication-TileImage"
        content="/static/images/ms-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#131414"
      />
    </NextHead>
  )
}

export default Head
