import React from 'react'
import styles from './index.less'

export default class Header extends React.Component {

  state = {
    routers:[
      {
        title:"首页",
        link:"/",
        enable:true,
        routers:[]
      },
      {
        title:'产品',
        link:'/',
        enable:true,
        routers:[
          {
            title:"智能短信",
            link:"/intelligenceSms",
            enable:true
          },
          {
            title:"场景消息",
            link:"/scenicProduct",
            enable:true
          },
          {
            title:"号码认证",
            link:"/numberProduct",
            enable:true
          },
          {
            title:"快应用",
            link:"/quickAppProduct",
            enable:true
          },
          {
            title:"全域场景增量营销平台",
            link:"/dspProduct",
            enable:true
          }

        ]
      },
      {
        title:'解决方案',
        link:'/solution',
        enable:true
      },
      {
        title:'客户成功故事',
        link:'/case',
        enable:true
      },
      {
        title:'代理加盟',
        link:'/agent',
        enable:true
      },
      {
        title:'认证通道',
        link:'/numberSign',
        enable:true
      },
      {
        title:'关于泰迪熊移动',
        link:'/about',
        enable:true
      }
      ],
    secEle:[]
  }

  mouseenterHandler = (routers)=>{
    this.setState({
      secEle:routers.map((i, idx)=><div style={{padding:20}} key={idx}>
        <a href={i.link}>{i.title}</a>
      </div>)
    })
  }

  mouseLeaveHandler = ()=>{
    this.setState({
      secEle:[]
    })
  }

  render() {
    const {routers, secEle} =  this.state
    return (
      <>
        <header>
          <div className="w header-content">
            <a href="https://www.teddymobile.cn/" className="logo" title="泰迪熊移动">泰迪熊移动</a>
            <ul className="nav">
              {
                routers.map((i,idx)=>{
                  return (
                    <li className="nav-item" key={idx} onMouseEnter={e => this.mouseenterHandler(i.routers || [])}>
                        <a href={i.link}>{i.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="header-content-sec" onMouseLeave={e=> this.mouseLeaveHandler()}>
            <div className="w sec-wrap">
              {
                secEle
              }
            </div>
          </div>
        </header>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
