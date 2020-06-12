import {Component} from 'react'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import axios from '@/util/http'
import Head from 'next/head'
import React from "react"
import Link from 'next/link'


export default class NewsDetail extends Component {
  static async getInitialProps({Component, router, ctx, req, query}) {
    try {
      const {id,type = 1} = query
      const {data} = await axios.post(`${process.browser?'':'http://test-bg-td.teddymobile.cn'}/api/news/detail`, {nid: id, type})
      return {newsDetail: data.data, type}
    }catch (e) {
      return {newsDetail:{current:""}, type}
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
    const {newsDetail:{current,prev,next},type} = this.props
    return (
      <>
        <Head>
          <title>{current.news_title + '-泰迪熊移动'}</title>
          <meta name="keywords" content={current.news_source} />
          <meta name="description" content={current.news_des}/>
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
            <p className="news__detail__title">{current.news_title}</p>
            <div className="news__detail__company">
              <img src="https://img.teddymobile.cn/www/images/news/logo.png" />
              <span>泰迪熊移动资讯 | {current.news_time?.replace(/\s[\x00-\xff]*/g,'')} </span>
            </div>
            <div className={'pagination clearfix'}>
              <div className={'prev'}>
                {
                  prev? <Link href={`newsDetail?id=${prev.nid}&type=${type}`}><a>上一篇 : {prev.news_title}</a></Link>:<span>上一篇 : 暂无</span>
                }
              </div>
              <div className={'next'}>
                {
                  next? <Link href={`newsDetail?id=${next.nid}&type=${type}`}><a>下一篇 : {next.news_title}</a></Link>:<span>下一篇 : 暂无</span>
                }
              </div>

            </div>
            <div className="news__detail__content ">
              <div className={'container'} dangerouslySetInnerHTML = {{ __html: current.content }} style={{overflow:'hidden'}}></div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
