import React from 'react'
import SectionCard from '@/components/sectionCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import styles from './index.less'
import TabBarCard from '@/components/tabBarCard'


export default class QuickAppProduct extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      coreList: [
        {
          title: '高效转化 ：数字化营销',
          src: '/static/images/quickAppProduct/icon-zhuanhua.png',
          coreSrc: '/static/images/quickAppProduct/core1.png',
          activeIcon: '/static/images/quickAppProduct/icon-zhuanhua.png'
        },
        {
          title: '产品专业 ：满足各类业务需求',
          src: '/static/images/quickAppProduct/icon-zhuanye.png',
          coreSrc: '/static/images/quickAppProduct/core2.png',
          activeIcon: '/static/images/quickAppProduct/icon-zhuanye.png'
        },
        {
          title: '品牌提升 ：专业的品牌服务',
          src: '/static/images/quickAppProduct/icon-pinpai.png',
          coreSrc: '/static/images/quickAppProduct/core3.png',
          activeIcon: '/static/images/quickAppProduct/icon-pinpai.png'
        },
        {
          title: '营销拓客 ：全渠道推广获客',
          src: '/static/images/quickAppProduct/icon-yingxiao.png',
          coreSrc: '/static/images/quickAppProduct/core4.png',
          activeIcon: '/static/images/quickAppProduct/icon-yingxiao.png'
        },
        {
          title: '运营管理 ：数据推动业务增长 ',
          src: '/static/images/quickAppProduct/icon-yunying.png',
          coreSrc: '/static/images/quickAppProduct/core5.png',
          activeIcon: '/static/images/quickAppProduct/icon-yunying.png'
        },
        {
          title: '服务支持 ：专业运营支持 ',
          src: '/static/images/quickAppProduct/icon-fuwu.png',
          coreSrc: '/static/images/quickAppProduct/core6.png',
          activeIcon: '/static/images/quickAppProduct/icon-fuwu.png'
        }
      ],
      products: [
        {
          src: '/static/images/quickAppProduct/icon-shengji.png',
          title: '低成本易升级',
          desc: '贴近H5标准，采用前端技术栈开发，无碎片。低成本更新。'
        },
        {
          src: '/static/images/quickAppProduct/icon-transform.png',
          title: '高转化',
          desc: '线上一步激活，精准直达。'
        },
        {
          src: '/static/images/quickAppProduct/icon-changjing.png',
          title: '场景丰富',
          desc: '智慧桌面、智慧识屏、语音助手、智慧场景，多入口、易触达。'
        },
        {
          src: '/static/images/quickAppProduct/icon-qiangliucun.png',
          title: '强留存',
          desc: '支持创建桌面快捷方式、PUSH消息，助力开发者拉新、促活。 '
        }
      ],
      industryList: [
        {
          name: '电商',
          src: '/static/images/quickAppProduct/e-commerce.png'
        },
        {
          name: '新零售',
          src: '/static/images/quickAppProduct/new-retail.png'
        },
        {
          name: '金融服务',
          src: '/static/images/quickAppProduct/financial-service.png'
        },
        {
          name: '互联网行业',
          src: '/static/images/quickAppProduct/internet.png'
        }
      ],
      tabBarList: [{
        name: '全局搜索',
        active: true,
        type: 'global-search'
      }, {
        name: '负一屏',
        active: false,
        type: 'hi-board'
      }, {
        name: '语音助手',
        active: false,
        type: 'siri'
      }, {
        name: '厂商专属推荐',
        active: false,
        type: 'firm'
      }, {
        name: '智能短信',
        active: false,
        type: 'sms'
      }, {
        name: '场景消息',
        active: false,
        type: 'scenic'
      }],
      activeType: 'global-search',
    }
    
    this.barContent = {
      'global-search': {
        src: '/static/images/quickAppProduct/全局搜索.png',
        name: '全局搜索',
        desc: <div className="apply-desc__content">
          <p>低成本，多字数，突破传统短信70字符限制，满足企业长短信需求</p>
          <p>厂商报备，过审无拦截</p>
          <p>企业认证，品牌曝</p>
        </div>
      },
      'hi-board': {
        src: '/static/images/quickAppProduct/负一屏.png',
        name: '负一屏',
        desc: <div className="apply-desc__content">
          <p>优化展现形式，场景化呈现</p>
          <p>降低用户阅读成本，提升用户体验</p>
          <p>搭配按钮增加业务入口，提高用户转化</p>
        </div>
      },
      'siri': {
        src: '/static/images/quickAppProduct/语音助手.png',
        name: '语音助手',
        desc: <div className="apply-desc__content">
          <p>多图文展现形式，视觉体验佳</p>
          <p>展示形态满足用户点击习惯，转化效果好</p>
        </div>
      },
      'firm': {
        src: '/static/images/quickAppProduct/厂商专属推荐.png',
        name: '厂商专属推荐',
        desc: <div className="apply-desc__content">
          <p>基于用户场景，下发快应用消息</p>
          <p>短链路，强留存</p>
          <p>一键直达快应用</p>
        </div>
      },
      'sms': {
        src: '/static/images/quickAppProduct/智能短信.png',
        name: '智能短信',
        desc: <div className="apply-desc__content">
          <p>基于用户场景，下发快应用消息</p>
          <p>短链路，强留存</p>
          <p>一键直达快应用</p>
        </div>
      },
      'scenic': {
        src: '/static/images/quickAppProduct/场景消息.png',
        name: '场景消息',
        desc: <div className="apply-desc__content">
          <p>基于用户场景，下发快应用消息</p>
          <p>短链路，强留存</p>
          <p>一键直达快应用</p>
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
  render() {
    const {coreList, products, industryList, tabBarList, activeType} = this.state
    const types = ['global-search', 'hi-board', 'siri', 'firm', 'sms', 'scenic']
    return (
      <>
        <ProductBanner title={'快应用'} desc={'无需下载安装，即点即用，享受原生应用的性能体验'} src={'/static/images/quickAppProduct/banner.png'} customClassName={'quick-app-banner'}></ProductBanner>
        <SectionCard title={'平台介绍'} bgc={"#fff"} >
          <div className="intro w">
            泰迪熊移动科技快应用场景营销解决方案致力于打造多流量入口以及场景化的快应用生态建设。泰迪熊移动的快应用解决方案深度集成进各厂商手机系统中，具有“免安装、免存储、一键直达、更新直接推送”四大体验优势，泰迪熊移动的快应用凭借自身独有的近场服务能力，在精准位置识别下通过合适的产品通道和界面向用户提供更便捷的服务，让用户通过手机更容易获取到自己所需的服务。可以在操作系统层面实现用户需求与应用服务间的无缝连接，提升用户的使用体验的同时，还能够助力企业自身产品的传播和留存，为后续提供更高效的服务打下用户基础。
          </div>
        </SectionCard>
        {/* <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent 
            src={'/static/images/quickAppProduct/phone.png'} 
            coreList={coreList} 
            coreClassName={'quick-app-core'}
          ></CoreContent>
        </SectionCard> */}
        <SectionCard title={'应用形态'} bgc={'#F8FAFF'}>
          <div>
              <TabBarCard list={tabBarList} customClassName={'quick-tab-bar'} clickCallback={this.clickCallback}></TabBarCard>
              {
                types.map((item, idx) => (
                  <div key={idx} style={{display: item === activeType ? 'block' : 'none'}}>
                    <div className="tab-content clearfix">
                        <div className="tab-content__left">
                          <div className="tab-content__left__desc">
                            {this.barContent[item] ? this.barContent[item].desc : ''}
                            <div className="tab-content__left__btn">马上合作</div>
                          </div>
                        </div>
                        <div className="tab-content__right clearfix">
                          <div className="tab-content__right__item">
                            <img src={this.barContent[item].src} />
                            <p>{this.barContent[item].name}</p>
                          </div>
                        </div>
                    </div>
                  </div>
                ))
              }
          </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#fff'}>
          <ProductAdvantage 
            products={products} 
            customClassName={'quick-app-product__item'}
          ></ProductAdvantage>
        </SectionCard>
        <SectionCard title={'覆盖行业'} bgc={"#F8FAFF"} >
          <div className="industry-list w clearfix">
            {industryList.map((item, index) => (
              <div className="industry-list__item" key={index}>
                <img src={item.src} />
                <div className="industry-list__item__text">{item.name}</div>
              </div>
            ))}
          </div>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}