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
        <link type="favicon" rel="shortcut icon" href="/static/images/favicon.ico" />
        <link href="https://cdn.bootcss.com/slick-carousel/1.6.0/slick.min.css" rel="stylesheet" />
        <link href="https://cdn.bootcss.com/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet" />
        <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
        </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
