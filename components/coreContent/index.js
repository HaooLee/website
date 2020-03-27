import React from 'react'
import styles from './index.less'

export default class CoreContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {coreList = [], src, customStyle={}, imgCustomStyle={}, listStyle={}, children, coreClassName=""} = this.props
    return (
      <>
        <div className={`core-content w clearfix ${coreClassName}`}>
          {/* <img src={src} style={imgCustomStyle} /> */}
          {children}
          <div className="core-content__list" style={listStyle}>
            {
              coreList.map((item, index) => (
                <div key={index} className={`core-content__item clearfix ${index === 0 ? 'active' : ''}`} style={customStyle}>
                  <div className="core-content__item__img-wrap">
                    <img src={item.src} style={item.imgStyle || {}} />
                  </div>
                  <p className="core-content__item__text">{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}