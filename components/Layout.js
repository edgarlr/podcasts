import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Layout extends Component {
  render() {
    const { children, title} = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <header>
          <Link href='/'>
            <a>Podcast</a>
          </Link>
        </header>

        {children}

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          header a {
            color: #fff;
            text-decoration: none;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            background: #fff;
            font-family: system-ui;
          }
        `}</style>
      </div>
    );
  }
}
