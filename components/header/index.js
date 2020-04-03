import React from 'react'
import styles from './index.less'
import Link from 'next/link'
import Router from 'next/router'

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
        enable:true,
        routers: [
          {
            title:"公司",
            link:"/about",
            enable:true
          },
          {
            title:"职位",
            link:"/join",
            enable:true
          },
          {
            title:"新闻",
            link:"/news",
            enable:true
          }
        ]
      }
      ],
    secEle:[],
    isActive:false
  }

  mouseenterHandler = (routers)=>{
    this.setState({
      secEle:routers.map((i, idx)=><div style={{padding:20}} key={idx}>
        <Link href={i.link}><a className="link" style={{color:'#fff'}}>{i.title}</a></Link>
      </div>)
    })
  }

  mouseLeaveHandler = ()=>{
    this.setState({
      secEle:[]
    })
  }

  handleCollapseClick(){
    const {routers} = this.state
    const { isActive } = this.state
    routers.forEach(i=>i.opened = false)
    this.setState({
      isActive:!isActive,
      routers: routers,
    })
  }

  handleMenuClick(i,idx){
    const {routers} = this.state
    routers.forEach(item=>{
      if(i != item)item.opened = false
    })
    if(i.routers && i.routers.length > 0){
      i.opened = !i.opened
    }else {
      this.setState({
        isActive:false
      })
    }

    this.setState({
      routers: routers,
    })
  }
  handleMaskClick(e){
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }
    if(e.target && e.target.matches('div')){
      this.setState({
        isActive:false
      })
    }
  }

  render() {
    const {routers, secEle,isActive} =  this.state
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
                        <Link href={i.routers && i.routers.length > 0 ?'':i.link}><a>{i.title}</a></Link>
                    </li>
                  )
                })
              }
            </ul>

            <div className={`collapse-button ${isActive?'collapse-active' : ''}` } onClick={e=>{this.handleCollapseClick()}} >
              <span className="icon-bar" ></span>
              <span className="icon-bar hide" ></span>
              <span className="icon-bar" ></span>
            </div>
            <div className={`mask ${isActive? 'active':''}`} onClick={ e =>this.handleMaskClick(e) }>
              <ul className={`mobile-nav`}>
                {
                  routers.map((i,idx)=>{
                    return (
                      <li className="mobile-nav-item" key={idx}>
                        <Link href={i.routers && i.routers.length > 0 ?'':i.link} passHref><a onClick={() => this.handleMenuClick(i, idx)}>{i.title}</a></Link>

                        {i.routers && i.routers.length > 0 && <span className={`arrow  ${i.opened? 'rotate':''}`}></span>}
                        {
                          i.routers && i.routers.length > 0 && (<ul style={{overflow:'hidden',transition:'all linear .4s',height: i.opened?i.routers.length * 61:0}}>
                              {
                                i.routers.map((item, index)=><li style={{paddingLeft:20,borderTop:'1px solid #ccc',backgroundColor:'#eee'}} key={index}>
                                  <Link href={item.link} passHref><a onClick={e=>this.setState({isActive:false})}>{item.title}</a></Link>
                                </li>)
                              }
                          </ul>)
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="header-content-sec" onMouseLeave={e=> this.mouseLeaveHandler()}>
            <div className="w sec-wrap">
              {
                secEle
              }
            </div>
          </div>
        </header>
        {/*<div className="hold" id="hold"></div>*/}
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
