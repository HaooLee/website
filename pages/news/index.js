import {Component} from 'react'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import axios from '@/util/http'
import NewsCard from '@/components/newsCard'
import Head from 'next/head'
import React from "react";

export default class News extends Component {
  static async getInitialProps({Component, router, ctx}) {
    try {
      const {data:{data}} = await axios.get(`${process.browser?'':'http://test-bg-td.teddymobile.cn'}/api/newsCategory/lists`)
      const {data:{data:{list}}} = await axios.get(`${process.browser?'':'http://test-bg-td.teddymobile.cn'}/api/news/getlist?type=${data[0].id}`)
      return {news: list, list: data}
    }catch (e) {
      return {news: [],list: []}
    }
  }
  constructor(props) {
    super(props)
    this.state.news = props.news
    this.state.currentTypeIndex = props.list[0].id
    this.state.list = props.list.map((i, idx) => {
      let active = false
      if (idx === 0) {
        active = true
      }
      return {
        ...i,
        active
      }
    })
  }



  state = {

    // list: [
    //   {
    //     name: '资讯列表',
    //     active: true
    //   },
    //   {
    //     name: '专题区',
    //     active: false
    //   },
    //   {
    //     name: '荣誉',
    //     active: false
    //   },
    //   {
    //     name: '疫情',
    //     active: false
    //   }
    // ]
  }


   clickCallback = async (index,i) => {
    const {list} = this.state
    list.forEach((item, idx) => {
      if(index === idx) {
        item.active = true
      } else {
        item.active = false
      }
    })
    const {data} = await axios.get('/api/news/getlist?type=' + i.id)
    this.setState({
      news: data.data.list,
      currentTypeIndex:i.id,
      list: [...list]
    })
  }
  render() {
    const {list,news,currentTypeIndex} = this.state
    // const {} = this.props
    return (
      <>
        <Head>
          <title>泰迪熊移动资讯</title>
          <meta name="keywords" content="泰迪熊移动资讯" />
          <meta name="description" content="泰迪熊移动以智能连接人与服务为使命，专注于提供基于大数据和场景的智能服务。公司以智能短信、号码识别、5G场景消息、快应用等产品为主导，致力于成为客户信赖的智慧通讯服务提供商。"/>
        </Head>
        <div className="banner">
          <div className="banner__text w">
            新闻动态
          </div>
        </div>
        <div className="w news clearfix">
          <SliderList list={list} clickCallback={this.clickCallback}></SliderList>
          <ul className="news__content col-10">
            {news.map((item, idx) => (
              <NewsCard item={item} type={currentTypeIndex} key={idx}></NewsCard>
            ))}
            {/* <div className="load-more">加载更多</div> */}
          </ul>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
