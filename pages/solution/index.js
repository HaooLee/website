import {Component} from 'react'
import Slider from "react-slick";
import TabBarCard from '@/components/tabBarCard'
import SectionCard from '@/components/sectionCard'
import styles from './index.less'

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <img />
    </div>
  )
}
export default class Solution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabBarList: [{
        id: 1,
        name: '银行/保险'
      }, {
        id: 2,
        name: '运营商'
      }, {
        id: 3,
        name: '互联网'
      }, {
        id: 4,
        name: '新零售'
      }, {
        id: 5,
        name: '快消品'
      }, {
        id: 6,
        name: '电商'
      }]
    }
  }
  render() {
    const {tabBarList} = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            解决方案
          </div>
        </div>
        <div className="solution">
          <div className="w">
            <div className="solution__tab-bar">
              <TabBarCard list={tabBarList} width={'1193px'}></TabBarCard>
            </div>
            <div className="solution__content clearfix">
              <div className="solution__content__slider">
                <Slider {...settings}>
                  <img src="/static/images/solution/teddy-bank.png" className="solution__content__img" />
                  <img src="/static/images/solution/teddy-bank2.png" className="solution__content__img" />
                  <img src="/static/images/solution/teddy-bank.png" className="solution__content__img" />
                  <img src="/static/images/solution/teddy-bank2.png" className="solution__content__img" />
                </Slider>
              </div>
              <div className="solution__content__info">
                <ul className="info__list">
                  <li className="info__list__item">
                    <div className="info__list__item__img">
                      <img src="/static/images/solution/icon-hangyefuneng.png" />
                      <span>行业赋能</span>
                    </div>
                    <p className="info__list__item__desc">依托泰迪熊移动自研核心技术产品，赋能银行/保险业，升级传统短信，如为金融企业提供品牌认证、短信菜单等功能，助推金融机构提高普惠金融效率。</p>
                  </li>
                  <li className="info__list__item">
                    <div className="info__list__item__img">
                      <img src="/static/images/solution/icon-jiazhidian.png" />
                      <span>价值点</span>
                    </div>
                    <p className="info__list__item__desc">为金融企业解决传统短信功能单一、触达即结束等问题； 为银行/保险企业提供品牌认证服务； 符合GDPR要求，保护用户隐私； 一键直达，缩短用户办理路径，提升转化率。</p>
                  </li>
                </ul>
                <div className="solution__content__info__btn">马上合作</div>
              </div>
            </div>
          </div>
        </div>
        <SectionCard title={'合作伙伴'} bgc={'#F8FAFF'}>
          <div className="partner">
            <ul className="partner__list clearfix">
              {
                new Array(9).fill({}).map((item, idx) => (
                  <li className="partner__list__item" key={idx}>
                    <img className="partner__list__item__img" src="/static/images/solution/jingdong.png" />
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
}