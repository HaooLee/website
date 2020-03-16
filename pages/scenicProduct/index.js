import React from 'react'
import SectionCard from '@/components/sectionCard'
import ProblemItem from '@/components/problemItem'
import TabBarCard from '@/components/TabBarCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import styles from './index.less'

export default class ScenicProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: '/static/images/scenicProduct/icon-chengben.png',
          title: '成本高'
        },
        {
          src: '/static/images/scenicProduct/icon-neirong.png',
          title: '内容受字符限制'
        },
        {
          src: '/static/images/scenicProduct/icon-lanjie.png',
          title: '被拦截率高'
        },
        {
          src: '/static/images/scenicProduct/icon-tuiguang.png',
          title: '推广效果差'
        },
        {
          src: '/static/images/scenicProduct/icon-tiyancha.png',
          title: '用户体验差'
        }
      ],
      products: [
        {
          src: '/static/images/scenicProduct/cost.png',
          title: '节省成本',
          desc: '消息升级，价格更低，节省短信成本。'
        },
        {
          src: '/static/images/scenicProduct/limit.png',
          title: '突破限制',
          desc: '突破传统短信字符限制。'
        },
        {
          src: '/static/images/scenicProduct/effect.png',
          title: '提高效率',
          desc: '降低短信拦截率、投诉率。'
        },
        {
          src: '/static/images/scenicProduct/remain.png',
          title: '短信留存',
          desc: '消息留存在短信列表中。'
        },
        {
          src: '/static/images/scenicProduct/marketing.png',
          title: '精准营销',
          desc: '场景触发，营销更精准。'
        },
        {
          src: '/static/images/scenicProduct/experience.png',
          title: '体验提升',
          desc: '富媒体消息，营销短信多元化， 用户体验提升，功能承载更多。'
        }
      ],
      coreList: [
        {
          src: '/static/images/scenicProduct/icon-changshang.png',
          title: '厂商网络OTT通道发送：发送成本更低，降低投诉风险'
        },
        {
          src: '/static/images/scenicProduct/icon-xiaoxi.png',
          title: '富媒体消息 ：快应用、视频、音频、语音、多图文、位置等多原画形态，提高用户体验的同时能够促进营销短信的效果转化。 '
        },
        {
          src: '/static/images/scenicProduct/icon-chufa.png',
          title: '基于用户使用场景触发消息推送 ：精准营销，效率提升'
        },
        {
          src: '/static/images/scenicProduct/icon-zhineng.png',
          title: '支持 chatbot：智能客服 ，智能推送消息'
        }
      ],
      tabBarList: [{
        id: 1,
        name: '卡片'
      }, {
        id: 2,
        name: '多图文'
      }, {
        id: 3,
        name: '视频'
      }, {
        id: 4,
        name: '音频'
      }, {
        id: 5,
        name: '位置快应用'
      }]
    }
  }
  render () {
    const {problems, products, coreList, tabBarList} = this.state
    return (
      <>
        <ProductBanner title={'场景消息'} desc={'场景消息——千人千面的智慧场景营销服务'} src={'/static/images/scenicProduct/banner.png'}></ProductBanner>
        <SectionCard title={'你的场景消息通常会遇到的问题'} bgc={"#fff"} >
          <ProblemItem problems={problems}></ProblemItem>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent 
            src={'/static/images/sms.png'} 
            coreList={coreList} 
            customStyle={{
              marginBottom: '70px'
            }}
            imgCustomStyle={{
              marginRight: '89px'
            }}
          ></CoreContent>
        </SectionCard>
        <SectionCard title={'应用形态'} bgc={'#fff'}>
          <div>
              <TabBarCard list={tabBarList} width={'1200px'}></TabBarCard>
              <div className="tab-content clearfix">
                  <div className="tab-content__left">
                    <div>
                      <p>文案文案文案文案文案文案 文案文案文案文案文案文案文案文 文案文案文案文案文案文案文案文案文 文案文案文案文案文案文案文案 文案文案文案文案文案文案文案文案文 </p>
                      <div className="tab-content__left__btn">马上合作</div></div>
                  </div>
                  <div className="tab-content__right clearfix">
                    <div className="tab-content__right__item">
                      <img src="/static/images/intelligenceSms/zhaohang.png" />
                      <p>其他样例</p>
                    </div>
                    <div className="tab-content__right__item">
                      <img src="/static/images/intelligenceSms/jianhang.png" />
                      <p>卡片</p>
                    </div>
                    <div  className="tab-content__right__img">
                      <img src="/static/images/intelligenceSms/jianhang-scale.png" />
                    </div>
                  </div>
              </div>
            </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
          <ProductAdvantage 
            products={products} 
            customStyle={{
              width: '330px',
              height: '222px'
            }}
          ></ProductAdvantage>
        </SectionCard>

        <style jsx>{styles}</style>
      </>
    )
  }
}
