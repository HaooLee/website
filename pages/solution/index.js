import {Component} from 'react'
import Slider from "react-slick";
import {connect} from 'react-redux'
import TabBarCard from '@/components/tabBarCard'
import SectionCard from '@/components/sectionCard'
import styles from './index.less'
import { withRouter } from 'next/router'
import Head from 'next/head'
import React from "react";

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="https://img.teddymobile.cn/www/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="https://img.teddymobile.cn/www/images/left.png"/>
  )
}


@connect()
export default withRouter(class Solution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabBarList: [{
        active: false,
        name: '银行/保险',
        type: 'bank'
      }, {
        active: false,
        name: '运营商',
        type: 'operator'
      }, {
        active: false,
        name: '互联网',
        type: 'net'
      }, {
        active: false,
        name: '新零售',
        type: 'new-retail'
      }, {
        active: false,
        name: '快消品',
        type: 'FMCG'
      }, {
        active: false,
        name: '电商',
        type: 'e-commerce'
      }],
      solutions: {
        'bank': {
          images: [
            'https://img.teddymobile.cn/www/images/solution/bank1.png',
            'https://img.teddymobile.cn/www/images/solution/bank2.png'
          ],
          industryDesc: <span>依托泰迪熊移动自研核心技术产品，赋能银行/保险业，升级传统短信，如为金融企业提供品牌认证、短信菜单等功能，助推金融机构提高普惠金融效率。</span>,
          worthDesc: <div className="solution-desc__content">
            <p>为银行/保险企业解决传统短信功能单一、触达即结束等问题</p>
            <p>为银行/保险企业提供品牌认证服务</p>
            <p>符合GDPR要求，保护用户隐私</p>
            <p>一键直达，缩短用户办理路径，提升转化率</p>
          </div>
        },
        'operator': {
          images: [
            'https://img.teddymobile.cn/www/images/solution/operator1.png',
            'https://img.teddymobile.cn/www/images/solution/operator2.png'
          ],
          industryDesc: <span>泰迪熊移动自研智能短信产品，通过短信卡片功能打破70个字符限制，为运营商提供用户服务赋能，降低用户阅读成本，提升用户体验。</span>,
          worthDesc: <div className="solution-desc__content">
            <p>通过短信卡片功能，打破传统短信70个字符限制</p>
            <p>提升用户体验</p>
            <p>卡片、内容精准识别、高效覆盖</p>
            <p>保护用户隐私</p>
          </div>
        },
        'net': {
          images: [
            'https://img.teddymobile.cn/www/images/solution/net1.png',
            'https://img.teddymobile.cn/www/images/solution/net2.png'
          ],
          industryDesc: <span>提升互联网企业短信推广效率，支持一键调起H5、APP、快应用，一键链接企业与用户。<br />&nbsp;</span>,
          worthDesc: <div className="solution-desc__content">
            <p>投放可控、稳定、快速</p>
            <p>文案、模板预审流程，降低拦截率</p>
            <p>海量流量，覆盖OPPO、vivo全量机型等70%主流手机厂商<br />&nbsp;</p>
          </div>
        },
        'new-retail': {
          images: [
            'https://img.teddymobile.cn/www/images/solution/new-retail1.png',
            'https://img.teddymobile.cn/www/images/solution/new-retail2.png'
          ],
          industryDesc: <span>赋能新零售企业，打通线上线下营销，在传统短信的基础上进行升级，为新零售企业提供线上营销渠道，同时通过场景营销，助力新零售企业线下营销。</span>,
          worthDesc: <div className="solution-desc__content">
            <p>产品功能手机终端出厂自带，无需下载、关注</p>
            <p>为新零售企业提供品牌认证服务</p>
            <p>号码、卡片、内容精准识别、高效覆盖<br />&nbsp;</p>
          </div>
        },
        'FMCG': {
          images: [
            'https://img.teddymobile.cn/www/images/solution/FMCG1.png',
            'https://img.teddymobile.cn/www/images/solution/FMCG2.png'
          ],
          industryDesc: <span>通过泰迪熊移动自研产品技术，赋能快消品行业，为快消品行业提供高效粉丝维护及用户需求收集渠道，一键链接企业与用户。<br />&nbsp;</span>,
          worthDesc: <div className="solution-desc__content">
            <p>解决传统短信功能单一、触达即结束等问题</p>
            <p>海量流量，覆盖OPPO、vivo全量机型等70%主流手机厂商</p>
            <p>提升用户体验，保护用户隐私<br />&nbsp;</p>
          </div>
        },
        'e-commerce': {
          images: [
            'https://img.teddymobile.cn/www/images/solution/e-commerce1.png',
            'https://img.teddymobile.cn/www/images/solution/e-commerce2.png'
          ],
          industryDesc: <span>赋能电商行业短信营销，打破传统短信字数限制的同时，降低电商企业营销短信拦截率，专业的技术运营团队实时响应，保障客户服务质量。</span>,
          worthDesc: <div className="solution-desc__content">
            <p>投放可控、稳定、快速</p>
            <p>文案、模板预审流程，降低拦截率</p>
            <p>专业运营团队根据数据报告，优化菜单文案、链接配置，提升用户体验</p>
          </div>
        }
      },
      activeType: 'bank',
      partnerImages: [
        ['https://img.teddymobile.cn/www/images/solution/partner/招商信诺备份@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/中国联通@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/中国移动@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/中移互联网@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/中国电信@2x.png', 'https://img.teddymobile.cn/www/images/solution/partner/21CN@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/编组@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/位图@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/携程@2x.png'],
        ['https://img.teddymobile.cn/www/images/solution/partner/度小满@2x.png']
      ]
    }


     let res =  this.state.tabBarList.find(i=>i.type == props.router.query.cate)
      if(res){
        res.active = true
        this.state.activeType = props.router.query.cate
      }else {
        this.state.tabBarList[0].active = true
      }




  }
  tabBarClick = (idx, row) => {
    const {tabBarList} = this.state
    tabBarList.forEach((item, index) => {
      if(idx === index) {
        item.active = true
      } else {
        item.active = false
      }
    })
    let activeType = row.type
    this.setState({
      tabBarList: [...tabBarList],
      activeType: activeType
    })
  }

  handleJoinNow(){
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
  }

  render() {
    const {tabBarList, solutions, activeType, partnerImages} = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
      <>
        <Head>
          <title>智能通讯服务解决方案-泰迪熊移动</title>
          <meta name="keywords" content="泰迪熊移动,智能通讯服务解决方案" />
          <meta name="description" content="泰迪熊移动为不同行业提供专业的全场景营销解决方案"/>
        </Head>
        <div className="banner">
          <div className="banner__text w">
            解决方案
          </div>
        </div>
        <div className="solution">
          <div className="w">
            <div className="solution__tab-bar">
              <TabBarCard list={tabBarList} customClassName={'solution-tab-bar'} clickCallback={this.tabBarClick}></TabBarCard>
            </div>
            <div className="solution__content clearfix">
              {
                tabBarList.map((item, idx) => (
                  <div key={idx} className="clearfix solution__content__card" style={{display: activeType === item.type ? 'flex' : 'none'}}>
                    <div className="solution__content__slider">
                      <Slider {...settings}>
                        {solutions[item.type] && solutions[item.type].images.map((item, index) => (
                          <img key={index} src={item} className="solution__content__img" />
                        ))}
                      </Slider>
                    </div>
                    <div className="solution__content__info">
                      <ul className="info__list">
                        <li className="info__list__item">
                          <div className="info__list__item__img">
                            <img src="https://img.teddymobile.cn/www/images/solution/icon-hangyefuneng.png" />
                            <span>行业赋能</span>
                          </div>
                          <p className="info__list__item__desc">{solutions[item.type] && solutions[item.type]['industryDesc']}</p>
                        </li>
                        <li className="info__list__item">
                          <div className="info__list__item__img">
                            <img src="https://img.teddymobile.cn/www/images/solution/icon-jiazhidian.png" />
                            <span>价值点</span>
                          </div>
                          <div className="info__list__item__desc">{solutions[item.type] && solutions[item.type]['worthDesc']}</div>
                        </li>
                      </ul>
                      <div className="solution__content__info__btn" onClick={e=> this.handleJoinNow()}>马上合作</div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <SectionCard title={'合作伙伴'} bgc={'#F8FAFF'}>
          <div className="partner">
            <ul className="partner__list clearfix">
              {
                partnerImages.map((item, idx) => (
                  <li className="partner__list__item" key={idx}>
                    {
                      item.map((imgSrc, imgIdx) => (
                        <img className="partner__list__item__img" src={imgSrc} key={imgIdx} />
                      ))
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
})
