import React from 'react'
import styles from './index.less'

export default class TabBarCard extends React.Component {
  constructor(props) {
    super(props)
  }
  clickAction = (idx, row) => {
    const {clickCallback = () => {}} = this.props
    clickCallback(idx, row)
  }
  render() {
    const {list=[], customClassName=""} = this.props
    return (
      <>
        <ul className={`tab-bar clearfix ${customClassName}`}>
          {list.map((item, index) => (
            <li key={index} className={`tab-bar__item ${item.active ? 'active' : ''}`} onClick={this.clickAction.bind(this, index, item)}>{item.name}</li>
          ))}
        </ul>

        <style jsx>{styles}</style>
      </>
    )
  }
}
