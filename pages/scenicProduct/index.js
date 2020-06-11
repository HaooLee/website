import React from 'react'
import SectionCard from '@/components/sectionCard'
import ProblemItem from '@/components/problemItem'
import TabBarCard from '@/components/tabBarCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import {connect} from 'react-redux'
import styles from './index.less'
import Head from 'next/head'


@connect()
export default class ScenicProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-chengben.png',
          title: '成本高'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-neirong.png',
          title: '内容受字符限制'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-lanjie.png',
          title: '被拦截率高'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-tuiguang.png',
          title: '推广效果差'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-tiyancha.png',
          title: '用户体验差'
        }
      ],
      products: [
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/cost.png',
          title: '节省成本',
          desc: '消息升级，价格更低，节省短信成本'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/limit.png',
          title: '突破限制',
          desc: '突破传统短信字符限制'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/effect.png',
          title: '提高效率',
          desc: '降低短信拦截率、投诉率'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/remain.png',
          title: '短信留存',
          desc: '消息留存在短信列表中'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/marketing.png',
          title: '精准营销',
          desc: '场景触发，营销更精准'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/experience.png',
          title: '体验提升',
          desc: <><p>富媒体消息，营销短信多元化，</p><p> 用户体验提升，功能承载更多</p></>
        }
      ],
      coreList: [
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-changshang.png',
          title: '厂商网络OTT通道发送：发送成本更低，降低投诉风险',
          coreSrc: 'https://img.teddymobile.cn/www/images/scenicProduct/core3.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-changshang-active.png',
          matchTitle: '网络通道发送',
          highlightImage: 'https://img.teddymobile.cn/www/images/scenicProduct/高亮2.png',
          imgClassName: 'text-image'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-xiaoxi.png',
          title: '富媒体消息 ：快应用、视频、音频、语音、多图文、位置等多原画形态，提高用户体验的同时能够促进营销短信的效果转化。 ',
          coreSrc: 'https://img.teddymobile.cn/www/images/scenicProduct/core2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-xiaoxi-active.png',
          matchTitle: '富媒体消息',
          highlightImage: 'https://img.teddymobile.cn/www/images/scenicProduct/高亮3.png',
          imgClassName: 'scenic-image'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-chufa.png',
          title: '基于用户使用场景触发消息推送 ：精准营销，效率提升',
          coreSrc: 'https://img.teddymobile.cn/www/images/scenicProduct/core3.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-chufa-active.png',
          matchTitle: '基于场景触发',
          highlightImage: 'https://img.teddymobile.cn/www/images/scenicProduct/高亮4.png',
          imgClassName: 'chatbot-image'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-zhineng.png',
          title: '支持 chatbot：智能客服 ，智能推送消息',
          coreSrc: 'https://img.teddymobile.cn/www/images/scenicProduct/core4.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/scenicProduct/icon-zhineng-active.png',
          matchTitle: '支持chatbot',
          highlightImage: 'https://img.teddymobile.cn/www/images/scenicProduct/泰迪旅游.png',
          imgClassName: 'firm-image'
        }
      ],
      tabBarList: [{
        name: '文本',
        active: true,
        type: 'text'
      }, {
        name: '卡片',
        active: false,
        type: 'card'
      }, {
        name: '多图文',
        active: false,
        type: 'more-pic-text'
      }, {
        name: '快应用',
        active: false,
        type: 'quick-app'
      }, {
        name: '视频',
        active: false,
        type: 'video'
      }, {
        name: '音频',
        active: false,
        type: 'audio'
      }, {
        name: '位置',
        active: false,
        type: 'location'
      }],
      activeType: 'text'
    }
    this.barContent = {
      'text': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/core3.png',
        name: '文本消息',
        desc: <div className="apply-desc__content">
          <p>低成本，多字数，突破传统短信70字符限制，满足企业长短信需求</p>
          <p>厂商报备，过审无拦截</p>
          <p>企业认证，品牌曝光</p>
        </div>
      },
      'card': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/card.png',
        name: '卡片消息',
        desc: <div className="apply-desc__content">
          <p>优化展现形式，场景化呈现</p>
          <p>降低用户阅读成本，提升用户体验</p>
          <p>搭配按钮增加业务入口，提高用户转化</p>
        </div>
      },
      'more-pic-text': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/more-pic-text.png',
        name: '多图文消息',
        desc: <div className="apply-desc__content">
          <p>活动主题</p>
          <p>关键内容呈现</p>
          <p>场景化赋能</p>
        </div>
      },
      'quick-app': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/quick-app.png',
        name: '快应用消息',
        desc: <div className="apply-desc__content">
          <p>基于用户场景，下发快应用消息</p>
          <p>短链路，强留存</p>
          <p>一键直达快应用</p>
        </div>
      },
      'video': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/视频消息.png',
        name: '视频消息',
        desc: <div className="apply-desc__content">
          <p>内容丰富</p>
          <p>视觉冲击力强</p>
          <p>趣味性强</p>
        </div>
      },
      'audio': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/音频消息.png',
        name: '音频消息',
        desc: <div className="apply-desc__content">
          <p>接收者的感知度更强</p>
          <p>提醒效果更好</p>
        </div>
      },
      'location': {
        src: 'https://img.teddymobile.cn/www/images/scenicProduct/位置消息.png',
        name: '位置消息',
        desc: <div className="apply-desc__content">
          <p>精准定位</p>
          <p>方便快捷</p>
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
          <title>泰迪熊移动—5G消息|场景消息|5G场景消息</title>
          <meta name="keywords" content="5G消息,场景消息,5G场景消息" />
          <meta name="description" content="泰迪移动5G场景消息，可基于用户行为，通过短信、挂机、位置场景触发多种富媒体消息推送，有文本 、卡片  、多图文、视频、 位置、音频、快应用等多种邢式，5G场景消息单独存在于短信列表内，为客户提供千人千面的智慧场景营销服务。"/>
        </Head>
        <ProductBanner customClassName={'scenic-banner'} title={'5G场景消息'} desc={'千人千面的智慧场景营销服务'} src={'https://img.teddymobile.cn/www/images/scenicProduct/banner-new.png'}></ProductBanner>
        <SectionCard title={'你的短信通常会遇到的问题'} bgc={"#fff"} >
          <ProblemItem customClassName={'scenic-problem'} problems={problems}></ProblemItem>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent
            coreList={coreList}
            coreClassName={'scenic-core'}
          >
          </CoreContent>
        </SectionCard>
        <SectionCard title={'应用形态'} bgc={'#fff'}>
          <div>
              <TabBarCard list={tabBarList} customClassName={'scenic-tab-bar'} clickCallback={this.clickCallback}></TabBarCard>
              <div className="tab-content clearfix">
                  <div className="tab-content__left">
                    <div className="tab-content__left__desc">
                      {this.barContent[activeType] ? this.barContent[activeType].desc : ''}
                      <div className="tab-content__left__btn" onClick={e=>this.handleJoinNow()}>马上合作</div>
                    </div>
                  </div>
                  <div className="tab-content__right clearfix">
                    <div className="tab-content__right__item">
                      <img src={this.barContent[activeType].src} />
                      <p>{this.barContent[activeType].name}</p>
                    </div>
                  </div>
              </div>
          </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
          <ProductAdvantage
            products={products}
            customClassName={'scenic-product__item'}
          ></ProductAdvantage>
        </SectionCard>

        <style jsx>{styles}</style>
      </>
    )
  }
}
