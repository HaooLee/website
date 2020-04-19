import {Component} from 'react'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import axios from 'axios'
export default class NewsDetail extends Component {
  static async getInitialProps({Component, router, ctx, req, query}) {
    console.log(query)
    const {id} = query
    console.log(id)
    const {data} = await axios.post('http://php.bjdglt.com:8091/V1.4/news/detail', {nid: id})
    return {newsDeatail: data.data}
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
    const {newsDeatail} = this.props
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            新闻动态
          </div>
        </div>
        <div className="w news clearfix">
          <SliderList list={list} clickCallback={this.clickCallback}></SliderList>
          <div className="news__detail col-10">
            <p className="news__detail__title">{newsDeatail.news_title}</p>
            <div className="news__detail__company">
              <img src="/static/images/news/logo.png" />
              <span>泰迪资讯 | {newsDeatail.news_time.replace(/\s[\x00-\xff]*/g,'')} </span>
            </div>
            <div className="news__detail__content">
              <div dangerouslySetInnerHTML = {{ __html: newsDeatail.content }} style={{overflow:'hidden'}}></div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
