import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico"/>
        {/*<link rel="stylesheet" href="/static/css/antd.css"/>*/}
        <link rel="stylesheet" href="/static/css/restcss.css"/>
        <link href="https://cdn.bootcss.com/slick-carousel/1.6.0/slick.min.css" rel="stylesheet" />
        <link href="https://cdn.bootcss.com/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
