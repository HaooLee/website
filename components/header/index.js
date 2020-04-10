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
      type:'insurance',
      business:[
        {
          src:'/static/images/header/矢量智能对象@2x.png',
          link:'/case',
          style:{
            width: 132,
            height: 25
          }
        }
      ]
    },
    {
      name: '运营商',
      type:'operator',
      business:[
        {
          src:'/static/images/header/联通白@2x.png',
          link:'',
          style:{
            width: 64,
            height: 35,
            marginRight:31,
          }
        },
        {
          src:'/static/images/header/移动白@2x.png',
          link:'',
          style:{
            width: 100,
            height: 31,
            marginRight: 90,
          }
        },
        {
          src:'/static/images/header/中国电信白 2@2x.png',
          link:'',
          style:{
            width: 30,
            height: 37,
            marginRight: 4,

          }
        },
        // {
        //   src:'/static/images/header/21cn@2x.png',
        //   link:'',
        //   style:{
        //     width: 37,
        //     height: 37,
        //     marginRight: 24,
        //   }
        // },
        {
          src:'/static/images/header/中互移白 2@2x.png',
          link:'',
          style:{
            width: 148,
            height: 37,
          }
        },

      ]
    },
    {
      name: '在线教育',
      type:'education',
      business:[
        {
          src:'/static/images/header/vipkid@2x.png',
          link:'',
          style:{
            width: 92,
            height: 39
          }
        }
      ]
    },
    {
      name: '新零售',
      type:'resale',
      business:[
        {
          src:'/static/images/header/屈臣氏白@2x.png',
          link:'',
          style:{
            width: 76,
            height: 36
          }
        }
      ]
    },
    {
      name: 'OTA',
      type:'OTA',
      business:[
        {
          src:'/static/images/header/携程@2x.png',
          link:'',
          style:{
            width: 93,
            height: 35
          }
        }
      ]
    },
    {
      name: '本地生活',
      type:'live',
      business:[
        {
          src:'/static/images/header/美团白 2@2x.png',
          link:'',
          style:{
            width: 58,
            height: 52,
            marginRight: 24,
          }
        },
        {
          src:'/static/images/header/饿了么白@2x.png',
          link:'',
          style:{
            width: 91,
            height: 23
          }
        },
      ]
    },
    {
      name: '电商',
      type:'e-commerce',
      business:[
        {
          src:'/static/images/header/途虎养车 2@2x.png',
          link:'',
          style:{
            width: 108,
            height: 22
          }
        }
      ]
    },
    {
      name: '互联网金融',
      type:'finance',
      business:[
        {
          src:'/static/images/header/度小满@2x.png',
          link:'',
          style:{
            width: 110,
            height: 45
          }
        }
      ]
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
                                    <div className="business" key={idx}>
                                      <Link href={`/case/${i.type}`}>
                                        <a className="business-title">{i.name}</a>
                                      </Link>
                                      {
                                        i.business && i.business.map((item, index) => <Link href={`/case/${i.type} #${index}`} key={index} ><a><img style={item.style} src={item.src} alt=""/></a></Link>)
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
                          i.routes && i.routes.length > 0 && (<ul style={{overflow:'hidden',transition:'all linear .4s',height: i.opened?i.routes.length * 51:0}}>
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
