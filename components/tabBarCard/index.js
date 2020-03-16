import React from 'react'
import styles from './index.less'

export default class TabBarCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {list=[], width} = this.props
    return (
      <>
        <ul className="tab-bar clearfix" style={{width: width}}>
          {list.map((item, index) => (
            <li style={{width: `${100 / list.length}%`}} key={index} className={`tab-bar__item ${index === 0 ? 'active' : ''}`}>{item.name}</li>
          ))}
        </ul>

        <style jsx>{styles}</style>
      </>
    )
  }
}