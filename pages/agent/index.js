import { Component } from 'react'
import Link from 'next/link'
import SectionCard from '@/components/sectionCard'
import Router from 'next/router'
import styles from './index.less'
import Slider from "react-slick"

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30,right:-30}} src="/static/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30,left:-30}} src="/static/images/left.png"/>
  )
}
export default class Agent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          src: '/static/images/agent/message-icon.png',
          linkTo:'/intelligenceSms',
          name: '智能短信'
        },
        {
          src: '/static/images/agent/scenic-icon.png',
          linkTo:'/scenicProduct',
          name: '5G场景消息'
        },
        {
          src: '/static/images/agent/auth-icon.png',
          linkTo:'/numberProduct',
          name: '号码认证'
        }
      ],
      footerProducts: [
        {
          src: '/static/images/agent/quickApp-icon.png',
          linkTo:'/quickAppProduct',
          name: '快应用'
        },
        {
          src: '/static/images/agent/platform-icon.png',
          linkTo:'/dspProduct',
          name: '全域场景增量营销平台'
        }
      ],
      supports: [
        {
          src: '/static/images/agent/pre-sales.png',
          title: '售前支持',
          desc: '基于泰迪熊移动在各行业、领域的标杆方案及样板积累，帮助代理商全方位开展客户经营活动。面向市场，启动企业智能营销服务产业链一体化的宣传力度，让客户在短信的智能产品上选择泰迪熊移动，同时更加关注代理商服务专业性及价值多元性。'
        },
        {
          src: '/static/images/agent/ability.png',
          title: '能力提升',
          desc: '泰迪熊移动渠道秉持专业、系统、规模、持续的理念，帮助代理商培养专业人才，提升代理商团队的组织能力，建设学习型组织，通过推动团队进步满足代理商各业务及组织需求。'
        },
        {
          src: '/static/images/agent/marketing.png',
          title: '营销支持',
          desc: '泰迪熊移动通过专项市场活动，以线上、线下相结合的方式，可以帮助代理商用户快速收获产品所带来的价值，帮助代理商经营效益实现最大化。同时代理商还可以申请专家及顾问资源，定向或远程支持代理商的相关市场活动，帮助缩短销售周期，加快落单，赢得更多的利润！'
        }
      ],
      partnerList: [
        {
          src: '/static/images/agent/dianhui.png',
          name: '点惠',
          desc: '点惠信息技术（上海）有限公司，是一家专业从事计算机信息技术领域研发、应用和服务的高新技术企业，致力于打造围绕企业通信的智能服务平台。',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>
          ],
          typeName: '号码认证'
        },
        {
          src: '/static/images/agent/zhuoxin.png',
          name: '欣网卓信',
          desc: '浙江欣网卓信科技有限公司成立于2004年，系上市公司万隆光电［300710］子公司。公司是国内领先的移动互联网，智慧运营服务提供商，专业为运营商提供线上线下一体的增值业务综合运营服务。',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>,
            <Link href={'/intelligenceSms'}>
              <a style={{color: '#355EA6'}}>智能短信</a>
            </Link>
          ],
          typeName: '号码认证、智能短信'
        },
        {
          src: '/static/images/agent/wanhao.png',
          name: '万号',
          desc: '北京万号信息技术咨询有限公司，致力于将高效地链接人与服务。为企业提供除微信、运营商，两大通道之外的第三种高效触达用户信道。',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>
          ],
          typeName: '号码认证'
        },
        {
          src: '/static/images/agent/weihu.png',
          name: '微呼',
          desc: '北京微呼科技有限公司（简称“微呼科技”）作为国内深耕行业的“智能应用解决方案”提供商，一直专注于toB、toG领域，搭建了口碑优秀的智能语音、通信、号码认证平台，形成自主且完善的智能应用解决方案。',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>
          ],
          typeName: '号码认证'
        },
        {
          src: '/static/images/agent/bojian.png',
          name: '博见百约',
          desc: '北京博见百约科技有限公司是一家致力于服务金融领域企业，以科技为驱动力，全方位提供行业解决方案及科技人员外包业务高科技公司。',
          types: [
            <Link href={'/intelligenceSms'}>
              <a style={{color: '#355EA6'}}>智能短信</a>
            </Link>
          ],
          typeName: '智能短信'
        },
        {
          src: '/static/images/agent/高斯通.png',
          name: '高斯通',
          desc: '深圳市高斯通信息技术有限公司，在2001年全球首度提出企业应用短信服务模式及标准，创立了企业应用短信服务行业，并迅速成为行业领导者',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>
          ],
          typeName: '号码认证'
        },
        {
          src: '/static/images/agent/国都.png',
          name: '国都',
          desc: '北京国都互联科技有限公司注册于北京市中关村高新科技产业实验园区，注册资金1000万元，公司致力于成为国内最具影响力的移动通讯服务商之一',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>,
            <Link href={'/intelligenceSms'}>
              <a style={{color: '#355EA6'}}>智能短信</a>
            </Link>
          ],
          typeName: '号码认证、智能短信'
        },
        {
          src: '/static/images/agent/联动优势.png',
          name: '联动优势',
          desc: '联动优势是一家互联网高新技术企业，成立于2003年，面向金融机构和产业经济提供综合性金融科技服务，助力政府机构推进科技监管与智慧政务建设',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>
          ],
          typeName: '号码认证'
        },
        {
          src: '/static/images/agent/中天嘉华.png',
          name: '中天嘉华',
          desc: '中天嘉华信息技术有限公司（简称：嘉华信息）致力于通过大型联络中心（呼叫中心）、软件系统、数据挖掘技术等优势为中国保险、银行等大型金融企业，提供全面深入的金融产品营销服务解决方案',
          types: [
            <Link href={'/numberProduct'}>
              <a style={{color: '#355EA6'}}>号码认证</a>
            </Link>
          ],
          typeName: '号码认证'
        }
      ]
    }
  }
  componentWillMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const {products, footerProducts, supports, partnerList} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      // dotsClass:'slick-dots teddy-dots',
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      rows: 2,
      className: 'agent-slider'
    }
    const matchSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // dotsClass:'slick-dots teddy-dots',
      autoplay: true,
      arrows: false
    }
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            平台化发展、产业链共赢
          </div>
        </div>
        <SectionCard title={'合作伙伴遍及全国'}>
          <div className="partner">
            <div className="map-img clearfix">
              {/* <img className="map-img__new" src='/static/images/agent/map1.png' />
              <img className="map-img__new" src='/static/images/agent/map2.png' /> */}
              <img className="map-img__new" src='/static/images/agent/map-new.gif' />
            </div>
          </div>
        </SectionCard>

        <SectionCard title={'代理商列表'} bgc={'#F8FAFF'}>
          <div className="agent-list">
            {/*<div className="agent-list__title"></div>*/}
            <div className="agent-list__content clearfix">
              <div className="slider-wrap">
                <Slider {...settings}>
                  {partnerList.map((item, idx) => (
                    <div className="agent-list__content__item clearfix" key={idx}>
                      <div className="agent-list__content__item__img-wrap">
                        <img className="agent-list__content__item__img" src={item.src} />
                      </div>
                      <div className="agent-list__content__item__info">
                        <p className="agent-list__content__item__info__title">{item.name}</p>
                        <p className="agent-list__content__item__info__desc">{item.desc}</p>
                        <div className="agent-list__content__item__info__tag">
                          <span>代理产品：</span>
                          <span className="tag__type">
                            {item.types.map((typeDom, idx) => <span key={idx}>{typeDom}</span>)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="match-slider-wrap">
                <Slider {...matchSettings}>
                  {partnerList.map((item, idx) => (
                    <div className="agent-list__content__item clearfix" key={idx}>
                      <div className="agent-list__content__item__img-wrap">
                        <img className="agent-list__content__item__img" src={item.src} />
                      </div>
                      <div className="agent-list__content__item__info">
                        <p className="agent-list__content__item__info__title">{item.name}</p>
                        <p className="agent-list__content__item__info__desc">{item.desc}</p>
                        <div className="agent-list__content__item__info__tag">
                          <span>代理产品：</span>
                          <span className="tag__type">
                            {item.types.map((typeDom, idx) => <span key={idx}>{typeDom}</span>)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title={'诚邀加盟'} bgc={'#fff'}>
          <div className="agent-info">
          智能通讯市场环境和客户需求的不断演变，单靠一家或几家公司，远远不够支撑一个产业，泰迪熊渠道在"平台化发展 产业链共赢"策略下，致力于打造一个全新的智能通讯产业联盟。在未来，泰迪熊移动将坚实基础，建立更大更全的产业链，实现经营模式的转型升级。
          </div>
        </SectionCard>
        <SectionCard title={'代理产品'} bgc={'#F8FAFF'}>
          <div className="product-wrap">
            <div className="product clearfix">
              {
                products.map((item, idx) => (
                  <div className="product__item" key={idx} onClick={e=>Router.push({pathname: item.linkTo})}>
                    <div className="product__item__content">
                      <img className="product__item__content__img" src={item.src} />
                      <p className="product__item__content__name">{item.name}</p>
                    </div>
                  </div>
                ))
              }
              <div className="footer-product">
              {
                footerProducts.map((item, idx) => (
                  <div className="product__item" key={idx} onClick={e=>Router.push({pathname: item.linkTo})}>
                    <div className="product__item__content">
                      <img className="product__item__content__img" src={item.src} />
                      <p className="product__item__content__name">{item.name}</p>
                    </div>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </SectionCard>
        <SectionCard title={'加盟流程'} bgc={'#FFFFFF'}>
          <div className="process clearfix">
              <div className="process__item">
                <div className="process__item__content">
                  <img src="/static/images/agent/icon-agent.png" />
                  <p>代理申请</p>
                </div>
              </div>
              <div className="process__dot">
                <div className="process__dot__item process__dot__item--1"></div>
                <div className="process__dot__item process__dot__item--2"></div>
                <div className="process__dot__item process__dot__item--3"></div>
              </div>
              <div className="process__item">
                <div className="process__item__content">
                  <img src="/static/images/agent/icon-assess.png" />
                  <p>分析评估</p>
                </div>
              </div>
              <div className="process__dot">
                <div className="process__dot__item process__dot__item--4"></div>
                <div className="process__dot__item process__dot__item--5"></div>
                <div className="process__dot__item process__dot__item--6"></div>
              </div>
              <div className="process__item">
                <div className="process__item__content">
                  <img src="/static/images/agent/icon-talk.png" />
                  <p>合作洽谈</p>
                </div>
              </div>
              <div className="process__dot">
                <div className="process__dot__item process__dot__item--7"></div>
                <div className="process__dot__item process__dot__item--8"></div>
                <div className="process__dot__item process__dot__item--9"></div>
              </div>
              <div className="process__item">
                <div className="process__item__content">
                  <img src="/static/images/agent/icon-confirm.png" />
                  <p>确认合作</p>
                </div>
              </div>
              <div className="process__dot">
                <div className="process__dot__item process__dot__item--10"></div>
                <div className="process__dot__item process__dot__item--11"></div>
                <div className="process__dot__item process__dot__item--12"></div>
              </div>
              <div className="process__item">
                <div className="process__item__content">
                  <img src="/static/images/agent/icon-cert.png" />
                  <p>授权证书</p>
                </div>
              </div>
          </div>
        </SectionCard>
        <SectionCard title={'代理支持'} bgc={'#F8FAFF'}>
          <div className="support clearfix">
            {supports.map((item, idx) => (
              <div className="support__item" key={idx}>
                <div className="support__item__img">
                  <img src={item.src} />
                </div>
                <div className="support__item__content">
                  <p className="support__item__content__title">{item.title}</p>
                  <p className="support__item__content__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
