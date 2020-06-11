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
        <link rel="stylesheet" href="/static/css/restcss.css"/>
        <link type="favicon" rel="shortcut icon" href="https://img.teddymobile.cn/www/images/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900" />
        <link href="https://cdn.bootcss.com/slick-carousel/1.6.0/slick.min.css" rel="stylesheet" />
        <link href="https://cdn.bootcss.com/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script src="/static/js/flexible.js"></script>
        <script src="/static/js/statistics.js"></script>
        </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
