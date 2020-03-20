import {Component} from 'react'
import styles from './index.less'

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [
        {
          src: '/static/images/news/company.png',
          title: '开发者大会',
          desc: '开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会'
        },
        {
          src: '/static/images/news/company.png',
          title: '开发者大会',
          desc: '开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会'
        },
        {
          src: '/static/images/news/company.png',
          title: '开发者大会',
          desc: '开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会'
        },
        {
          src: '/static/images/news/company.png',
          title: '开发者大会',
          desc: '开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会'
        },
        {
          src: '/static/images/news/company.png',
          title: '开发者大会',
          desc: '开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会'
        },
        {
          src: '/static/images/news/company.png',
          title: '开发者大会',
          desc: '开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会'
        }
      ]
    }
  }
  render() {
    const {news} = this.state
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            新闻动态
          </div>
        </div>
        <div className="w news clearfix">
          <ul className="news__tab-bar">
            <li className="news__tab-bar__item active">资讯列表</li>
            <li className="news__tab-bar__item">专题区</li>
            <li className="news__tab-bar__item">荣誉</li>
            <li className="news__tab-bar__item">疫情</li>
          </ul>
          <ul className="news__content">
            {news.map((item, idx) => (
              <li className="news__content__item clearfix" key={idx}>
                <img className="news__content__item__img" src={item.src} />
                <div className="news__content__item__info">
                  <p className="news__content__item__info__title">{item.title}</p>
                  <p className="news__content__item__info__desc">{item.desc}</p>
                  <div className="news__content__item__info__footer">
                    <img src="/static/images/news/logo.png" />
                    <span>泰迪资讯 | 2020年2月14日 </span>
                  </div>
                </div>
              </li>
            ))}
            <div className="load-more">加载更多</div>
          </ul>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}