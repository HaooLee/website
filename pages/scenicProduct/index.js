import React from 'react'
import Footer from '@/components/footer'
import styles from './index.less'

export default class ScenicProduct extends React.Component {
  render () {
    return (
      <>
        <section className="banner">
            <div className="banner-content">
              <div className="banner__desc">
                <h1 className="banner__desc__title">场景消息</h1>
                <p className="banner__desc__content">场景消息——千人千面的智慧场景营销服务</p>
              </div>
              <img className="banner__img" src="/static/images/scenicProduct/banner.png" />
            </div>
        </section>
        <Footer />

        <style jsx>{styles}</style>
      </>
    )
  }
}