import React from 'react'
import styles from './index.less'

export default class CoreContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {coreList = [], src, customStyle={}, imgCustomStyle={}} = this.props
    return (
      <>
        <div className="core-content w clearfix">
          <img src={src} style={imgCustomStyle} />
          <div className="core-content__list">
            {
              coreList.map((item, index) => (
                <div key={index} className={`core-content__item clearfix ${index === 0 ? 'active' : ''}`} style={customStyle}>
                  <div className="core-content__item__img-wrap">
                    <img src={item.src} />
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