import React from 'react'
import styles from './index.less'

export default class CoreContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coreList: (this.props.coreList || []).map((item, idx) => {
        if(idx === 0) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      } )
    }
  }
  coreHover = (row, index) => {
    const {coreList} = this.state 
    coreList.map((item, idx) => {
      if(idx === index) {
        item.active = true 
      } else {
        item.active = false
      }
    })
    this.setState({
      coreList
    })
  }
  render() {
    const {listStyle={}, coreClassName=""} = this.props
    const {coreList} = this.state
    return (
      <>
        <div className={`core-content w clearfix ${coreClassName}`}>
          {coreList.map((item, index) => (
            <div className={`core-content__img ${item.imgClassName}`} style={{display: item.active ? 'block' : 'none'}}>
              <img src={item.coreSrc}/>
              {item.highlightImage && <img src={item.highlightImage} className="high-light-image" />}
            </div>
          ))}
          <div className="core-content__list" style={listStyle}>
            {
              coreList.map((item, index) => (
                <div key={index} className={`core-content__item  ${item.active ? 'active' : ''}`} onMouseEnter={this.coreHover.bind(this, item, index)}>
                  <div className="core-content__item__img-wrap">
                    <img src={item.active ? item.activeIcon : item.src}/>
                  </div>
                  <p className="core-content__item__text">{item.title}</p>
                  <p className="core-content__item__text--match">{item.matchTitle}</p>
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
