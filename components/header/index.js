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
        enable:true
      },
      {
        title:'解决方案',
        link:'/',
        enable:true
      },
      {
        title:'案例',
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
        link:'/',
        enable:true
      },
      {
        title:'关于我们',
        link:'/about',
        enable:true
      }
      ]
  }

  render() {
    const {routers} =  this.state
    return (
      <>
        <header>
          <div className="w header-content">
            <a href="https://www.teddymobile.cn/" className="logo" title="泰迪熊移动">泰迪熊移动</a>
            <ul className="nav">
              {
                routers.map((i,idx)=>{
                  return (
                    <li className="nav-item" key={idx}>
                        <a href={i.link}>{i.title}</a>
                    </li>
                  )
                })
              }
            </ul>
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
