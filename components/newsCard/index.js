import React from 'react'
import styles from './index.less'
import Link from 'next/link'
export default class NewsCard extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
  const {item = {}, customClassName="", type=""} = this.props
    return (
      <>
        <Link href={`/newsDetail?id=${item.nid}&type=${type}`} passHref>
          <a className={customClassName}>
            <li className="news__content__item clearfix">
              <img className="news__content__item__img" src={item.news_cover || 'https://img.teddymobile.cn/www/images/news/company.png'} />
              <div className="news__content__item__info">
                <div className="news__content__item__info__title">
                  <p style={{color: '#000'}}>{item.news_title}</p>
                </div>
                <p className="news__content__item__info__desc">{item.news_des}</p>
                <div className="news__content__item__info__footer">
                  <img src="https://img.teddymobile.cn/www/images/news/logo.png" />
                  <span>泰迪熊移动资讯 | {item.news_time ? item.news_time.replace(/\s[\x00-\xff]*/g,'') : ''} </span>
                </div>
                <div className="news__content__item__info__footer--match">
                  <img src="https://img.teddymobile.cn/www/images/news/logo.png" />
                  <span className="news__content__item__info__footer--match__teddy">泰迪熊移动资讯</span>
                  <span className="news__content__item__info__footer--match__time">{item.news_time ? item.news_time.replace(/\s[\x00-\xff]*/g,'') : ''}</span>
                </div>
              </div>
            </li>
          </a>
        </Link>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
