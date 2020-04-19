import {Component} from 'react'
import SectionCard from '@/components/sectionCard'
import ProductBanner from '@/components/productBanner'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import ProblemItem from '@/components/problemItem'
import styles from './index.less'
import React from "react";

export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coreList: [
        {
          title: '准确识别陌生电话来源，保障用户手机安全',
          src: '/static/images/dspProduct/icon-pingtai.png',
          imgStyle: {
            width: '52px',
            height: '34px',
            marginTop: '10px'
          }
        },
        {
          title: '为企业提供号码认证服务，进行有效品牌展示',
          src: '/static/images/dspProduct/icon-xiaoguo.png',
          imgStyle: {
            width: '39px',
            height: '39px'
          }
        },
        {
          title: '支持400、虚拟号段、个人号码',
          src: '/static/images/dspProduct/icon-changshang.png',
          imgStyle: {
            width: '37px',
            height: '33px'
          }
        }
      ],
      products: [
        {
          title: '用户覆盖广',
          desc: '日均请求量高达47亿次，用户覆盖广。',
          src: '/static/images/auth/icon-fugai@2x.png'
        },
        {
          title: '识别精准',
          desc: '采用实时大数据挖掘技术，每日更新 7000万号码数据，识别精准。',
          src: '/static/images/auth/icon-shibie@2x.png'
        },
        {
          title: '服务优势',
          desc: '多维度的校验数据，准确率达到了 99.9%的超高水平。',
          src: '/static/images/auth/icon-zhunquelvgao@2x.png'
        }
      ],
      problems: [
        {
          title: '骚扰电话不胜其烦',
          src: '/static/images/auth/saoraodianhua.png'
        },
        {
          title: '企业电话频频被拒接 ',
          src: '/static/images/auth/icon-qiyedianhua@2x.png'
        },
        {
          title: '号码被恶意标注',
          src: '/static/images/auth/icon-biaoji@2x.png'
        }
      ]
    }
  }
  render() {
    const {coreList, products, problems} = this.state
    return (
      <>
        <ProductBanner
          title={'号码认证'}
          desc={'来电接的安心，去电不被拒绝'}
          src={'/static/images/auth/banner.png'}
          imgCustomStyle={{
            width: '397px',
            height: '383px'
          }}
        ></ProductBanner>
        <SectionCard title={'你的消息通常会遇到的问题'} bgc={"#fff"} >
          <ProblemItem problems={problems}></ProblemItem>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <div className="core-content-wrap">
            <CoreContent
              src={'/static/images/quickAppProduct/phone.png'}
              coreList={coreList}
              customStyle={{'marginBottom': '75px'}}
              imgCustomStyle={{width: '296px', height: '600px', marginRight: '133px'}}
              listStyle={{marginTop: '105px'}}
            ></CoreContent>
          </div>
        </SectionCard>
        <SectionCard title={'应用形态'}  >
          <div className="tab-content clearfix">
            <div className="tab-content__left">
              <div>
                <p>本地解析智能识别企业名称、LOGO 每条成功触达用户的短信提供品牌展示效果 企业认证区别长串数字 提升用户信任度 提高短信打开阅读率</p>
                <div className="tab-content__left__btn">马上合作</div></div>
            </div>
            <div className="tab-content__right clearfix">
              <div className="tab-content__right__item">
                <img src="/static/images/auth/auth-phone.png" />
                <p>其他样例</p>
              </div>
              <div className="tab-content__right__item">
                <img src="/static/images/auth/auth-phone-2.png" />
                <p>企业认证</p>
              </div>
            </div>
          </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={"#F8FAFF"}>
          <ProductAdvantage
            products={products}
            customStyle={{
              boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.15)',
              width: '330px',
              height: '222px',
              borderRadius: '3px'
            }}
          ></ProductAdvantage>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
