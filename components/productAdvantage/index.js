import React from 'react'
import styles from './index.less'

export default class ProductAdvantage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {products = [], customStyle={}} = this.props
    return (
      <>
        <div className="product clearfix">
          {products.map((item, index) => (
            <div className="product__item" key={index} style={customStyle}>
              <div className="product__item-content">
                <div><img src={item.src} /></div>
                <p className="product__item__title">{item.title}</p>
                <p className="product__item__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}