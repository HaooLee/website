import {Component} from 'react'
import Link from 'next/link'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import axios from 'axios'
export default class News extends Component {
  static async getInitialProps({Component, router, ctx}) {
    const {data} = await axios.get('http://php.bjdglt.com:8091/V1.4/news/getinfo')
    console.log(data.data)
    return {news: data.data}
  }
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
      ],
      list: [
        {
          name: '资讯列表',
          active: true
        },
        {
          name: '专题区',
          active: false
        },
        {
          name: '荣誉',
          active: false
        },
        {
          name: '疫情',
          active: false
        }
      ]
    }
  }


  clickCallback = (index) => {
    const {list} = this.state
    list.forEach((item, idx) => {
      if(index === idx) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.setState({
      list: [...list]
    })
  }
  render() {
    const {list} = this.state
    const {news} = this.props
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            新闻动态
          </div>
        </div>
        <div className="w news clearfix">
          <SliderList list={list} clickCallback={this.clickCallback}></SliderList>
          <ul className="news__content col-10">
            {news.map((item, idx) => (
              <li className="news__content__item clearfix" key={idx}>
                <img className="news__content__item__img" src={'/static/images/news/company.png'} />
                <div className="news__content__item__info">
                  <p className="news__content__item__info__title">
                    <Link href={`/newsDetail?id=${item.nid}`}>
                      <a style={{color: '#000'}}>{item.news_title}</a>
                    </Link>
                  </p>
                  <p className="news__content__item__info__desc">{item.news_des}</p>
                  <div className="news__content__item__info__footer">
                    <img src="/static/images/news/logo.png" />
                    <span>泰迪资讯 | {item.news_time.replace(/\s[\x00-\xff]*/g,'')} </span>
                  </div>
                  <div className="news__content__item__info__footer--match">
                    <img src="/static/images/news/logo.png" />
                    <span className="news__content__item__info__footer--match__teddy">泰迪资讯</span>
                    <span className="news__content__item__info__footer--match__time">{item.news_time.replace(/\s[\x00-\xff]*/g,'')}</span>
                  </div>
                </div>
              </li>
            ))}
            {/* <div className="load-more">加载更多</div> */}
          </ul>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
