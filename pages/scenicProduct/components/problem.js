import React from 'react'
import styles from './problem.less'
export default class ProblemItem extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    const {src, title} = this.props
    return (
      <>
        <div className="problem-item">
          <div className="problem-item__content">
            <img src={src} />
          </div>
          <p className="problem-item__text">{title}</p>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}