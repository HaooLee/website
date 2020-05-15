import {Component} from 'react'
import SectionCard from '@/components/sectionCard'
import styles from './index.less'
import axios from 'axios'
import Head from 'next/head'
import React from "react";


export default class Join extends Component {
  static async getInitialProps({Component, router, ctx}) {
    const {data} = await axios.get('http://php.bjdglt.com:8091/V1.4/recruit/getinfo', {
      'job_cate': 0
    })
    console.log(data.data)
    return {allJoins: data.data}
  }
  constructor(props) {
    super(props)
    this.state = {
      tabBar: [
        {
          name: '所有职位',
          active: true,
          id: 0
        },
        {
          name: '产品',
          active: false,
          id: 1
        },
        {
          name: '运营',
          active: false,
          id: 2
        },
        {
          name: '技术',
          active: false,
          id: 3
        },
        {
          name: '销售',
          active: false,
          id: 4
        },
        {
          name: '职能',
          active: false,
          id: 5
        }
      ],
    }
    this.state.allJoins = props.allJoins
  }
  switchTabBar = (idx) => {
    const {tabBar, allJoins} = this.state
    tabBar.forEach((item, index) => {
      if(index === idx) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.setState({
      tabBar: [...tabBar]
    })
  }

  handleClick=(item, index)=>{
    const {allJoins} = this.state
    const a = !item.opened
    allJoins.forEach(i=>{
      i.opened = false
    })
    item.opened = a
    this.setState({
      allJoins
    })

  }

  render() {
    const {tabBar,allJoins, products} = this.state
    const currentId = tabBar.filter((i)=>i.active)[0].id
    // console.log(allJoins)
    return (
      <>
        <Head>
          <title>加入泰迪熊移动</title>
          <meta name="keywords" content="加入泰迪熊移动" />
          <meta name="description" content="泰迪熊移动以智能连接人与服务为使命，专注于提供基于大数据和场景的智能服务。公司以智能短信、号码识别、5G场景消息、快应用等产品为主导，致力于成为客户信赖的智慧通讯服务提供商。"/>
        </Head>
        <div className="banner">
          <div className="banner__text w">
            加入我们
          </div>
        </div>
        {/* 职位列表 */}
        <div className="positions">
          <div className="positions__header">
            <ul className="tab-bar w clearfix">
              {tabBar.map((item, index) => (
                <li key={index} className={`tab-bar__item ${item.active ? 'active' : ''}`} onClick={this.switchTabBar.bind(this, index)}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="positions__content">
            <div className="w">
              <ul className="tab-bar__content clearfix">
                {
                  currentId == 0 ?allJoins.map((item, idx) => <li className="tab-bar__content__item" key={idx}>
                    <p className="title" onClick={()=> this.handleClick(item,idx)}>{item.title}</p>
                    {
                      item.opened && <div className="tab-bar__content__item">
                        <div className="tab-bar__content__item__detail">
                          <div>
                            <p className="work-place">工作地点：</p>
                            <p className="work-place-content"> {item.working_place}</p>
                          </div>
                          <div>
                            <p className="work-duty">岗位职责：</p>
                            <p className="work-duty-content">{item.duty}</p>
                          </div>
                          <div>
                            <p className="work-require">应职要求：</p>
                            <p className="work-require-content">{item.requier}</p>
                          </div>
                        </div>
                      </div>
                    }
                  </li> ):allJoins.filter(i=>i.job_cate == currentId).map((item, idx) => <li className="tab-bar__content__item" key={idx}>
                    <p className="title" onClick={()=> this.handleClick(item,idx)}>{item.title}</p>
                    {
                      item.opened && <div className="tab-bar__content__item">
                        <div className="tab-bar__content__item__detail">
                          <div>
                            <p className="work-place">工作地点：</p>
                            <p className="work-place-content"> {item.working_place}</p>
                          </div>
                          <div>
                            <p className="work-duty">岗位职责：</p>
                            <p className="work-duty-content">{item.duty}</p>
                          </div>
                          <div>
                            <p className="work-require">应职要求：</p>
                            <p className="work-require-content">{item.requier}</p>
                          </div>
                        </div>
                      </div>
                    }
                  </li>)
                }
                {/*  */}
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
