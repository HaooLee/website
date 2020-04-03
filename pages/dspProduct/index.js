import {Component} from 'react'
import SectionCard from '@/components/sectionCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import ProblemItem from '@/components/problemItem'
import styles from './index.less'

export default class DspProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coreList: [
        {
          title: '平台：科技+负能广告投放管理',
          src: '/static/images/dspProduct/icon-pingtai.png',
          // imgStyle: {
          //   width: '52px',
          //   height: '34px',
          //   marginTop: '10px'
          // }
        },
        {
          title: '效果：以人为核心的全域场景覆盖',
          src: '/static/images/dspProduct/icon-xiaoguo.png',
          // imgStyle: {
          //   width: '39px',
          //   height: '39px'
          // }
        },
        {
          title: '资源：合作市场主流厂商，覆盖用户7亿',
          src: '/static/images/dspProduct/icon-changshang.png',
          // imgStyle: {
          //   width: '37px',
          //   height: '33px'
          // }
        }
      ],
      products: [
        {
          title: '产品优势',
          desc: 'DMP数据整合服、DSP流量交易服务。',
          src: '/static/images/dspProduct/icon-chanpin.png'
        },
        {
          title: '资源优势',
          desc: 'TOP级媒体资源 、头部广告位资源。',
          src: '/static/images/dspProduct/icon-ziyuan.png'
        },
        {
          title: '服务优势',
          desc: '数据化服务能力、程序化平台运营、 场景化流量覆盖、目标化运营增长。',
          src: '/static/images/dspProduct/icon-fuwu.png'
        }
      ],
      problems: [
        {
          title: '提高转化率',
          src: '/static/images/dspProduct/icon-zhuanhua.png'
        },
        {
          title: '提高品牌认知 ',
          src: '/static/images/dspProduct/icon-pinpai.png'
        },
        {
          title: '提升关注度',
          src: '/static/images/dspProduct/icon-guanzhun.png'
        },
        {
          title: '提升接触度',
          src: '/static/images/dspProduct/icon-jiechu.png'
        }
      ]
    }
  }
  render() {
    const {coreList, products, problems} = this.state
    return (
      <>
        <ProductBanner
          title={'全域场景营销平台'}
          desc={'提供全场景人群覆盖、优质丰富的媒体资源、 最具创意的呈现形式，以及一站式、全流程的投放及优化服务。'}
          src={'/static/images/dspProduct/banner.png'}
          customClassName={'dsp-banner'}
        ></ProductBanner>
        <SectionCard title={'平台介绍'} bgc={"#fff"} >
          <div className="intro">
            <img src="/static/images/dspProduct/intro.png" />
          </div>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <div className="core-content-wrap" id="core-content">
            <CoreContent
              coreList={coreList}
              coreClassName={'dsp-core'}
              src={'/static/images/quickAppProduct/phone.png'}
            >
            </CoreContent>
          </div>
        </SectionCard>
        <SectionCard title={'平台优势'} bgc={'#fff'}>
          <ProductAdvantage
            products={products}
            customClassName={'dsp-product__item'}
          ></ProductAdvantage>
        </SectionCard>
        <SectionCard title={'帮你解决'} bgc={"#F8FAFF"} >
          <ProblemItem problems={problems}></ProblemItem>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
