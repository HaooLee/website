import App, {Container} from 'next/app'
import React from 'react'
import Head from 'next/head'
import globalStyles from './global.less'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FloatWindow from '@/components/Floatwindow'

// import { addLocaleData, IntlProvider } from 'react-intl';

//导入中英文对象
// import _ZH from '../locales/zh-CN';


export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  getLocale(languages){
    const appLocale = this.getLocaleDatas(languages);
    addLocaleData(...appLocale.data);
    return appLocale;
  }

  getLocaleDatas(lang) {
    let result = {};
    switch (lang) {
      case 'zh-CN':
        result = _ZH;
        break;
      // case 'en-US':
      //   result = _EN;
      //   break;
      default:
        result = _ZH;
    }
    return result;
  }

  render() {
    const {Component, pageProps} = this.props
    // router.query.lang当前语言 - 需要通过修改server.js传入query.lang
    // 根据url设置语言
    //const languages = router.query.lang || 'zh-CN';
    //const appLocale = this.getLocale(languages);


    return <>
      {/*<IntlProvider*/}
        {/*locale={appLocale.local}*/}
        {/*messages={appLocale.messages}*/}
      {/*>*/}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
        <Header/>
        <div style={{paddingTop: '60px'}}>
          <Component {...pageProps} />
        </div>
      <FloatWindow />
      <Footer />


      {/*</IntlProvider>,*/}

      <style global jsx>
        {
          globalStyles
        }
      </style>
    </>
  }
}
