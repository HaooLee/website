import {Component} from 'react'
import Link from 'next/link'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import axios from 'axios'
import NewsCard from '@/components/newsCard'
export default class News extends Component {
  static async getInitialProps({Component, router, ctx}) {
    const {data} = await axios.get('http://php.bjdglt.com:8091/V1.4/news/getinfo')
    return {news: data.data}
  }
  constructor(props) {
    super(props)
    this.state = {
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
              <NewsCard item={item} key={idx}></NewsCard>
            ))}
            {/* <div className="load-more">加载更多</div> */}
          </ul>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
