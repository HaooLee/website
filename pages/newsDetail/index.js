import {Component} from 'react'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import axios from 'axios'
import Head from 'next/head'

import React from "react"
export default class NewsDetail extends Component {
  static async getInitialProps({Component, router, ctx, req, query}) {
    try {
      const {id} = query
      const {data} = await axios.post('http://php.bjdglt.com:8091/V1.4/news/detail', {nid: id})
      return {newsDetail: data.data}
    }catch (e) {
      return {newsDetail:{content:""}}
    }

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
    const {newsDetail} = this.props
    return (
      <>
        <Head>
          <title>{newsDetail.news_title + '-泰迪熊移动'}</title>
          <meta name="keywords" content="泰迪熊移动资讯" />
          <meta name="description" content={newsDetail.news_des}/>
          <link rel="stylesheet" href="/static/css/news.css"/>
        </Head>
        <div className="banner">
          <div className="banner__text w">
            新闻动态
          </div>
        </div>
        <div className="w news clearfix">
          {/*<SliderList list={list} clickCallback={this.clickCallback}></SliderList>*/}
          <div className="news__detail">
            <p className="news__detail__title">{newsDetail.news_title}</p>
            <div className="news__detail__company">
              <img src="http://img.teddymobile.cn/www/images/news/logo.png" />
              <span>泰迪资讯 | {newsDetail.news_time?.replace(/\s[\x00-\xff]*/g,'')} </span>
            </div>
            <div className="news__detail__content ">
              <div className={'container'} dangerouslySetInnerHTML = {{ __html: newsDetail.content }} style={{overflow:'hidden'}}></div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
