import React from 'react'
import SectionCard from '@/components/sectionCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import styles from './index.less'


export default class QuickAppProduct extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      coreList: [
        {
          title: '高效转化 ：数字化营销',
          src: '/static/images/quickAppProduct/icon-zhuanhua.png'
        },
        {
          title: '产品专业 ：满足各类业务需求',
          src: '/static/images/quickAppProduct/icon-zhuanye.png'
        },
        {
          title: '品牌提升 ：专业的品牌服务',
          src: '/static/images/quickAppProduct/icon-pinpai.png'
        },
        {
          title: '营销拓客 ：全渠道推广获客',
          src: '/static/images/quickAppProduct/icon-yingxiao.png'
        },
        {
          title: '运营管理 ：数据推动业务增长 ',
          src: '/static/images/quickAppProduct/icon-yunying.png'
        },
        {
          title: '服务支持 ：专业运营支持 ',
          src: '/static/images/quickAppProduct/icon-fuwu.png'
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
      ]
    }
  }
  render() {
    const {coreList, products, industryList} = this.state
    return (
      <>
        <ProductBanner title={'快应用'} desc={'无需下载安装，即点即用，享受原生应用的性能体验'} src={'/static/images/quickAppProduct/banner.png'}></ProductBanner>
        <SectionCard title={'平台介绍'} bgc={"#fff"} >
          <div className="intro w">
            泰迪熊移动科技快应用场景营销解决方案致力于打造多流量入口以及场景化的快应用生态建设。泰迪熊移动的快应用解决方案深度集成进各厂商手机系统中，具有“免安装、免存储、一键直达、更新直接推送”四大体验优势，泰迪熊移动的快应用凭借自身独有的近场服务能力，在精准位置识别下通过合适的产品通道和界面向用户提供更便捷的服务，让用户通过手机更容易获取到自己所需的服务。可以在操作系统层面实现用户需求与应用服务间的无缝连接，提升用户的使用体验的同时，还能够助力企业自身产品的传播和留存，为后续提供更高效的服务打下用户基础。
          </div>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent 
            src={'/static/images/quickAppProduct/phone.png'} 
            coreList={coreList} 
            customStyle={{background: '#fff', 'marginBottom': '60px', 'padding': '25px 25px 25px 0', borderRadius: '10px', width: '516px'}}
            imgCustomStyle={{width: '358px', height: '726px', marginTop: '60px', marginRight: '115px'}}
          ></CoreContent>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#fff'}>
          <ProductAdvantage 
            products={products} 
            customStyle={{
              boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.15)',
              width: '228px',
              height: '222px',
              borderRadius: '3px',
              textAlign: 'left'
            }}
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