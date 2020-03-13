import React from 'react'
import styles from './index.less'
export default class ProblemItem extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    const {src, title, num = 5} = this.props
    return (
      <>
        <div className="problem-item" style={{width: (100 / num) + '%'}}>
          <div className="problem-item__content">
            <img src={src} />
          </div>
          <p className="problem-item__text">
            <span>{title}</span>
          </p>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}