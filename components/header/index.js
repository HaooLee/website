import React from 'react'
import styles from './index.less'
import Link from 'next/link'
import Router from 'next/router'

export default class Header extends React.Component {


  state = {
    routes:[
      {
        title:"首页",
        link:"/",
        enable:true,
        routes:[]
      },
      {
        title:'产品',
        link:'/',
        enable:true,
        routes:[
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
        routes: [
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
    customers: [
    {
      name: '保险行业',
      business:[
        {
          src:'',
          link:''
        }
      ]
    },
    {
      name: '运营商',
      active: false,
      type: 'operator'
    },
    {
      name: '在线教育',
        active: false,
      type: 'education'
    },
    {
      name: '新零售',
        active: false,
      type: 'resale'
    },
    {
      name: 'OTA',
        active: false,
      type: 'OTA'
    },
    {
      name: '本地生活',
        active: false,
      type: 'live'
    },
    {
      name: '电商',
        active: false,
      type: 'e-commerce'
    },
    {
      name: '互联网金融',
        active: false,
      type: 'finance'
    }
    ],
    isActive:false
  }

  mouseenterHandler = (i)=>{
    // if(!i.routes || i.routes.length === 0) return
    const { routes } = this.state
    i.opened = true
    this.setState({
      routes
    })
  }

  mouseLeaveHandler = (i)=>{
    // if(!i.routes || i.routes.length === 0) return
    const { routes } = this.state
    i.opened = false
    this.setState({
      routes
    })
  }

  handleCollapseClick(){
    const {routes} = this.state
    const { isActive } = this.state
    routes.forEach(i=>i.opened = false)
    this.setState({
      isActive:!isActive,
      routes: routes,
    })
  }

  handleMenuClick(i,idx){
    const {routes} = this.state
    routes.forEach(item=>{
      if(i != item)item.opened = false
    })
    if(i.routes && i.routes.length > 0){
      i.opened = !i.opened
    }else {
      this.setState({
        isActive:false
      })
    }

    this.setState({
      routes: routes,
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
    const {routes, customers,isActive} =  this.state
    return (
      <>
        <header>
          <div className="w header-content">
            <a href="https://www.teddymobile.cn/" className="logo" title="泰迪熊移动">泰迪熊移动</a>
            <ul className="nav">
              {
                routes.map((i,idx)=>{
                  return (
                    <li className="nav-item" key={idx} onMouseEnter={e => this.mouseenterHandler(i)} onMouseLeave={e => this.mouseLeaveHandler(i)}>
                      <Link href={i.link}><a>{i.title}</a></Link>
                      {
                        idx !== 3 ? ( //客户成功故事与其他不一样
                          (i.routes && i.routes.length > 0 ) &&
                          <ul className="nav-item-sec" style={{height: i.opened? i.routes.length * 60 : 0,width: idx === 6 ? '100%': 193}}>
                            {
                              i.routes.map((item, index)=>{
                                return (
                                  <li key={index}>
                                    <Link href={item.link} key={index}>
                                      <a>{item.title}</a>
                                    </Link>
                                  </li>)
                              })
                            }
                          </ul>
                        ):(
                          <div className="customers-wrap" style={{height: i.opened? 516:0}}>
                            <div className="w">
                              {
                                customers.map((i, idx)=>{
                                  return (
                                    <div className="business">
                                      <Link href={'/case'}>
                                        <a className="business-title">{i.name}</a>
                                      </Link>
                                      {

                                      }
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                        )
                      }
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
                  routes.map((i,idx)=>{
                    return (
                      <li className="mobile-nav-item" key={idx}>
                        <Link href={i.routes && i.routes.length > 0 ?'':i.link} passHref><a onClick={() => this.handleMenuClick(i, idx)}>{i.title}</a></Link>

                        {i.routes && i.routes.length > 0 && <span className={`arrow  ${i.opened? 'rotate':''}`}></span>}
                        {
                          i.routes && i.routes.length > 0 && (<ul style={{overflow:'hidden',transition:'all linear .4s',height: i.opened?i.routes.length * 61:0}}>
                              {
                                i.routes.map((item, index)=><li style={{paddingLeft:20,borderTop:'1px solid #ccc',backgroundColor:'#eee'}} key={index}>
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
