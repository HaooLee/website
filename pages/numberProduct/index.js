import {Component} from 'react'
import SectionCard from '@/components/sectionCard'
import ProductBanner from '@/components/productBanner'
import ProblemItem from '@/components/problemItem'
import CoreContent from '@/components/coreContent'
import styles from './index.less'

export default class NumberProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: '/static/images/numberProduct/icon-saoraodianhua.png',
          title: ['骚扰电话','不胜其烦']
        },
        {
          src: '/static/images/numberProduct/icon-qiyedianhua.png',
          title: ['企业电话','频频被拒接']
        },
        {
          src: '/static/images/numberProduct/icon-biaoji.png',
          title: ['电话号码','被恶意标注']
        }
      ],
      coreList: [
        {
          src: '/static/images/numberProduct/icon-jingzhunshibie.png',
          title: '准确识别陌生电话来源，保障用户手机安全'
        },
        {
          src: '/static/images/numberProduct/icon-renzhengyonghu.png',
          title: '为企业提供号码认证服务，进行有效品牌展示'
        },
        {
          src: '/static/images/numberProduct/icon-xunihaoma.png',
          title: '支持400、虚拟号段、个人号段'
        }
      ]
    }
  }
  render() {
    const {problems, coreList} = this.state
    return (
      <>
        <ProductBanner title={'号码认证'} desc={'来电接的安心，去电不被拒绝'} src={'/static/images/numberProduct/banner.png'}></ProductBanner>
        <SectionCard title={'你的号码认证通常会遇到的问题'} bgc={'#FFFFFF'}>
          <div className="problem-wrap">
            <ProblemItem problems={problems}></ProblemItem>
          </div>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent
            src={'/static/images/sms.png'}
            coreList={coreList}
            customStyle={{
              marginBottom: '70px'
            }}
            imgCustomStyle={{
              marginRight: '133px'
            }}
          ></CoreContent>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
