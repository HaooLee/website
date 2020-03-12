import React from 'react'
import styles from './index.less'

export default class NewsCard extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
  const {picSrc,logoSrc ,desc,company,date} = this.props
    return (
      <>
        <div className="news-card-wrap">
          <div className="pic-wrap">
            <img src={picSrc} alt=""/>
          </div>
          <div className="content">
              <a className="title" href="" >开发者大会</a>
            <div className="desc-wrap">
              <p className="desc">{desc}</p>
            </div>
            <div className="date-wrap">
              <img src={logoSrc} alt=""/>
              <span>{company}</span>
              <span> | </span>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
