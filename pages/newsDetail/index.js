import {Component} from 'react'
import SliderList from '@/components/sliderList'
import styles from './index.less'

export default class NewsDetail extends Component {
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
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            新闻动态
          </div>
        </div>
        <div className="w news clearfix">
          <SliderList list={list} clickCallback={this.clickCallback}></SliderList>
          <div className="news__detail">
            <p className="news__detail__title">开发者大会开发者大会开发者大会开发者大会</p>
            <div className="news__detail__company">
              <img src="/static/images/news/logo.png" />
              <span>泰迪资讯 | 2020年2月14日 </span>
            </div>
            <div className="news__detail__content">
              <p>开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会开发者大会</p>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}