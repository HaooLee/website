import React from 'react'
import SectionCard from '@/components/sectionCard'
import ProblemItem from '@/components/problemItem'
import TabBarCard from '@/components/tabBarCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import styles from './index.less'
import {connect} from 'react-redux'
import Head from 'next/head'


@connect()
export default class IntelligenceSms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-renzheng.png',
          title: ['短信未被认证', '被拦截率高']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-fuza.png',
          title: ['内容繁杂', '用户打开率低']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-gongneng.png',
          title: ['通知类短信', '功能单一']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-zifu.png',
          title: ['短信内容篇幅', '受到字符限制']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-zhuanhua.png',
          title: ['短信营销', '转化效果差']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-fasong.png',
          title: ['营销短信', '发送量受限']
        }
      ],
      products: [
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-accurate.png',
          title: '精确度高',
          desc: '拥有独创的短信语义识别引擎'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-sample.png',
          title: '样本丰富',
          desc: '每天解析32亿条短信'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-service.png',
          title: '精准提供服务',
          desc: '能够基于自然语义解析技术，根据用户场景，精准提供服务'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-cover.png',
          title: '高效覆盖',
          desc: '号码、卡片、内容精准识别'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-put-in.png',
          title: '投放可控',
          desc: '投放可控、稳定、快速'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-private.png',
          title: '隐私保护',
          desc: '符合GDPR要求，保护用户隐私'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-intercept.png',
          title: '降低拦截率',
          desc: '文案、模板预审流程，降低拦截率'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-change.png',
          title: '提升转化率',
          desc: '一键直达，缩短用户办理路径，提升转化率'
        }
      ],
      coreList: [
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-duanxinyanzheng.png',
          title: '短信来源号码进行可信认证',
          coreSrc: '/static/images/intelligenceSms/core2-2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-duanxinyanzheng-active.png',
          matchTitle: '短信号码认证',
          highlightImage: 'https://img.teddymobile.cn/www/images/intelligenceSms/高亮1.png',
          imgClassName: 'sms-highlight-1'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-kapian.png',
          title: '核心内容可进行卡片化展示，简洁清晰',
          coreSrc: '/static/images/intelligenceSms/core2-2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-kapian-active.png',
          matchTitle: '内容卡片展示',
          highlightImage: '/static/images/intelligenceSms/高亮2.png',
          imgClassName: 'sms-highlight-2'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-zhineng.png',
          title: '根据场景可智能匹配按钮一键跳转后续服务',
          coreSrc: '/static/images/intelligenceSms/core2-2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-zhineng-active.png',
          matchTitle: '服务一键直达',
          highlightImage: 'https://img.teddymobile.cn/www/images/intelligenceSms/高亮3.png',
          imgClassName: 'sms-highlight-3'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-service3.png',
          title: '短信公众号页面享受更多服务',
          coreSrc: '/static/images/intelligenceSms/core2-2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-service3-active.png',
          matchTitle: '短信公众号',
          highlightImage: 'https://img.teddymobile.cn/www/images/intelligenceSms/高亮4.png',
          imgClassName: 'sms-highlight-4'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-shape.png',
          title: '支持跳转 H5、APP、快应用、一键拨号、验证码复制',
          coreSrc: '/static/images/intelligenceSms/core2-2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/intelligenceSms/icon-shape-active.png',
          matchTitle: '跳转多应用',
          highlightImage: 'https://img.teddymobile.cn/www/images/intelligenceSms/高亮5.png',
          imgClassName: 'sms-highlight-5'
        }
      ],
      tabBarList: [
        {
          name: '企业认证',
          active: true,
          type: 'company'
        },
        {
          active: false,
          name: '短信卡片',
          type: 'card'
        },
        {
          active: false,
          name: '场景按钮',
          type: 'btn'
        },
        {
          active: false,
          name: '短信菜单',
          type: 'menu'
        }
      ],
      activeType: 'company'
    }
    this.barContent = {
      'company': {
        src: 'https://img.teddymobile.cn/www/images/intelligenceSms/company-auth.png',
        name: '企业认证',
        desc: <div className="apply-desc__content">
                <p>可本地解析，智能识别企业名称、LOGO</p>
                <p>每条成功触达用户的短信提供品牌展示效果</p>
                <p>区别长串数字，提升用户信任度</p>
                <p>提高短信打开阅读率</p>
              </div>
      },
      'card': {
        src: 'https://img.teddymobile.cn/www/images/intelligenceSms/card-new2.png',
        name: '短信卡片',
        desc: <div className="apply-desc__content">
          <p>短信内容本地智能解析，形成结构化卡片视图</p>
          <p>优化展现形式，场景化呈现</p>
          <p>降低用户阅读成本，提升用户体验</p>
          <p>搭配按钮增加业务入口，提高用户转化</p>
        </div>
      },
      'btn': {
        src: 'https://img.teddymobile.cn/www/images/intelligenceSms/scenic-btn.png',
        name: '场景按钮',
        desc: <div className="apply-desc__content">
          <p>场景识别按钮，不同场景搭配不同业务按钮</p>
          <p>快速跳转H5/app/快应用</p>
          <p>一键回复代码</p>
          <p>一键拨号直达客服</p>

        </div>
      },
      'menu': {
        src: 'https://img.teddymobile.cn/www/images/intelligenceSms/menu.png',
        name: '短信菜单',
        desc: <div className="apply-desc__content">
          <p>结束通知即结束的传统短信模式</p>
          <p>一键链接企业与用户，快速跳转H5/app/快应用</p>
          <p>根据用户特征，针对不同场景匹配对应菜单，实现千人千面，精准投放，提升业务转化</p>
        </div>
      }
    }
  }
  clickCallback = (index, row) => {
    const {tabBarList} = this.state
    tabBarList.forEach((item, idx) => {
      if(index === idx) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.setState({
      tabBarList: [...tabBarList],
      activeType: row.type
    })
  }

  handleJoinNow(){
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
  }

  render () {
    const {problems, products, coreList, tabBarList, activeType} = this.state
    return (
      <>
        <Head>
          <title>泰迪熊移动—智能短信|短信菜单|短信公众号|短信验证码|营销短信</title>
          <meta name="keywords" content="智能短信,短信菜单,短信公众号,短信验证码,营销短信" />
          <meta name="description" content="智能短信是泰迪熊移动为合作伙伴提供的一款短信服务产品，通过技术开发，实现将传统短信以公众号形式发送，适用于短信验证码、短信通知及短信推广服务国内短信发送跨运营商、跨终端，直搭手机厂商专属OTT通道，服务范围覆盖8亿用户"/>
        </Head>
        <ProductBanner videoSrc={'https://img.teddymobile.cn/www/video/zndx.mp4'} title={'智能短信'} desc={'带你了解短信新形态,体验营销新玩法'} src={'https://img.teddymobile.cn/www/images/intelligenceSms/banner.png'} customClassName={'sms-banner'}></ProductBanner>
        <SectionCard title={'你的短信通常会遇到的问题'} bgc={"#fff"} >
          <ProblemItem problems={problems} customClassName={'sms-problem'}></ProblemItem>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent
            coreList={coreList}
            coreClassName={'sms-core'}
          ></CoreContent>
        </SectionCard>
        <SectionCard title={'应用形态'} bgc={'#fff'}>
            <div>
              <TabBarCard list={tabBarList} customClassName={'sms-tab-bar'} clickCallback={this.clickCallback}></TabBarCard>
              <div className="tab-content clearfix">
                  <div className="tab-content__left">
                    <div className="tab-content__left__desc">
                      {this.barContent[activeType].desc}
                      <div className="tab-content__left__btn" onClick={e=>this.handleJoinNow()}>马上合作</div>
                    </div>
                  </div>
                  <div className="tab-content__right clearfix">
                    <div className="tab-content__right__item">
                      <img src={this.barContent[activeType].src} />
                      <p>{this.barContent[activeType].name}</p>
                    </div>
                    {/* <div className="tab-content__right__item">
                      <img src="https://img.teddymobile.cn/www/images/intelligenceSms/jianhang.png" />
                      <p>企业认证</p>
                    </div>
                    <div  className="tab-content__right__img">
                      <img src="https://img.teddymobile.cn/www/images/intelligenceSms/jianhang-scale.png" />
                    </div> */}
                  </div>
              </div>
            </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
            <ProductAdvantage
              products={products}
              customClassName={'sms-product__item'}
            ></ProductAdvantage>
        </SectionCard>

        <style jsx>{styles}</style>
      </>
    )
  }
}
