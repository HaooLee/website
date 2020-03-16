import React from 'react'
import styles from './index.less'
export default class ProductBanner extends React.Component {
  render() {
    const {src, title, desc, imgCustomStyle={}} = this.props
    return (
      <>
        <section className="banner">
          <div className="banner-content w">
            <div className="banner__desc">
              <h1 className="banner__desc__title">{title}</h1>
              <p className="banner__desc__content">{desc}</p>
            </div>
            <img className="banner__img" src={src} style={imgCustomStyle} />
          </div>
        </section>
        <style jsx>{styles}</style>
      </>
    )
  }
}