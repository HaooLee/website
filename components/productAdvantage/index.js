import React from 'react'
import styles from './index.less'

export default class ProductAdvantage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {products = [], customClassName='', parentClassName=''} = this.props
    return (
      <>
        <div className={`product clearfix ${parentClassName}`}>
          {products.map((item, index) => (
            <div className={`product__item ${customClassName}`} key={index}>
              <div className="product__item-content">
                <div className="product__item__img"><img src={item.src} /></div>
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