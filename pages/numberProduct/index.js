import {Component} from 'react'
import SectionCard from '@/components/sectionCard'
import ProductBanner from '@/components/productBanner'
import ProblemItem from '@/components/problemItem'
import CoreContent from '@/components/coreContent'
import ProductAdvantage from '@/components/productAdvantage'
import styles from './index.less'
import {connect} from 'react-redux';
import Head from 'next/head'
import React from "react";

@connect(({floatWindowVisible})=>({visible:floatWindowVisible}))
export default class NumberProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-saoraodianhua.png',
          title: ['骚扰电话','不胜其烦']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-qiyedianhua.png',
          title: ['企业电话','频频被拒接']
        },
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-biaoji.png',
          title: ['电话号码','被恶意标注']
        }
      ],
      coreList: [
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-jingzhunshibie.png',
          title: '准确识别陌生电话来源，保障用户手机安全',
          coreSrc: 'https://img.teddymobile.cn/www/images/numberProduct/core1.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/numberProduct/icon-jingzhunshibie-active.png',
          matchTitle: '识别陌生来电'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-renzhengyonghu.png',
          title: '为企业提供号码认证服务，进行有效品牌展示',
          coreSrc: 'https://img.teddymobile.cn/www/images/numberProduct/core2.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/numberProduct/icon-renzhengyonghu-active.png',
          matchTitle: '企业号码认证'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-xunihaoma.png',
          title: '支持400、虚拟号段、个人号码',
          coreSrc: 'https://img.teddymobile.cn/www/images/numberProduct/core3.png',
          activeIcon: 'https://img.teddymobile.cn/www/images/numberProduct/icon-xunihaoma-active.png',
          matchTitle: '支持多种号段'
        }
      ],
      products: [
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-fugai.png',
          title: '用户覆盖广',
          desc: '日均请求量高达47亿次，用户覆盖广'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-shibie.png',
          title: '识别精准',
          desc: <div>
            <p>采用实时大数据挖掘技术，每日更新7000万</p>
            <p>号码数据，识别精准</p>
          </div>
        },
        {
          src: 'https://img.teddymobile.cn/www/images/numberProduct/icon-zhunquelvgao.png',
          title: '准确率高',
          desc: <div>
            <p>多维度的校验数据，准确率达到了 99.9%</p>
            <p>的超高水平</p>
          </div>
        }
      ]
    }
  }
  render() {
    const {problems, coreList, products} = this.state
    return (
      <>
        <Head>
          <title>泰迪能移动—号码识别|企业号码认证|号码标记</title>
          <meta name="keywords" content="号码识别,企业号码认证,号码标记" />
          <meta name="description" content="泰迪熊移动号码识别日均请求量高达47亿次，采用实时大数据挖掘技术，每日更新7000万号码数据，使用机器学习算法分析号码行为，多维度的校验数据，可准确识别陌生电话来源，保障用户手机安全并可为企业提供号码认证服务，进行有效品牌展示。"/>

        </Head>
        <ProductBanner customClassName={'number-banner'} title={'号码认证'} desc={'来电接的安心，去电不被拒绝'} src={'https://img.teddymobile.cn/www/images/numberProduct/banner.png'}></ProductBanner>
        <SectionCard title={'你的通话通常会遇到的问题'} bgc={'#FFFFFF'}>
          <div className="problem-wrap">
            <ProblemItem customClassName={'number-problem'} problems={problems}></ProblemItem>
          </div>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <CoreContent
            coreList={coreList}
            coreClassName={'number-product-core'}
          ></CoreContent>
        </SectionCard>
        <SectionCard title={'应用形态'} bgc={"#fff"} >
        <div className="tab-content clearfix">
            <div className="tab-content__left">
              <div className="apply-desc__content">
                <p>识别号码来源，保证通话安全</p>
                <p>企业号码有效认证，提高品牌曝光</p>
                <div className="tab-content__left__btn" onClick={() => {
                  this.props.dispatch({type:'FLOAT_WINDOW_SHOW'})
                }}>马上合作</div>
              </div>
            </div>
            <div className="tab-content__right clearfix">
              <div className="tab-content__right__item">
                <img src="https://img.teddymobile.cn/www/images/numberProduct/apply.png" />
                {/* <p>其他样例</p> */}
              </div>
              {/* <div className="tab-content__right__item">
                <img src="https://img.teddymobile.cn/www/images/numberProduct/apply-phone2.png" />
                <p>卡片</p>
              </div> */}
            </div>
          </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
          <ProductAdvantage
            products={products}
            customClassName={'number-product__item'}
          ></ProductAdvantage>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
