import {Component} from 'react'
import Slider from "react-slick";
import SectionCard from '@/components/sectionCard';
import TimeLine from '@/components/timeLine'
import ProductAdvantage from '@/components/productAdvantage'
import Head from 'next/head'



import styles from './index.less'
import React from "react";

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="https://img.teddymobile.cn/www/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="https://img.teddymobile.cn/www/images/left.png"/>
  )
}


export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressList: [
        {
          src: 'https://img.teddymobile.cn/www/images/about/icon-beijing.png',
          name: '北京 | 总部',
          address: '北京市朝阳区酒仙桥南路5号院'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/icon-shenzheng.png',
          name: '深圳',
          address: '深圳市南山区学府路216号田厦金牛广场B座'
        },
        {
          src: '/static/images/about/icon-zhejiang.png',
          name: '杭州',
          address: '浙江省杭州拱墅区远洋国际B座'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/icon-shanghai.png',
          name: '上海',
          address: '上海市浦东区环科路515号1号楼'
        },

      ],
      contactList: [
        {
          src: 'https://img.teddymobile.cn/www/images/about/icon-jishu.png',
          name: '技术及问题反馈',
          email: '邮箱：kefu@teddymobile.cn',
          phone: ''
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/icon-shangwu.png',
          name: '商务合作',
          email: '邮箱：bd@teddymobile.cn',
          phone: ''
        }
      ],
      products: [
      {
        title: '使命',
        desc: '智能连接人与服务',
        src: 'https://img.teddymobile.cn/www/images/dspProduct/icon-chanpin.png'
      },
      {
        title: '愿景',
        desc: '服务世界大多数人',
        src: 'https://img.teddymobile.cn/www/images/dspProduct/icon-ziyuan.png'
      },
      {
        title: '价值观',
        desc: '客户第一、团队合作、激情、敬业',
        src: 'https://img.teddymobile.cn/www/images/dspProduct/icon-fuwu.png'
      }
    ],
      honorList: [
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2016年度极最具潜力大数据和智能化服务商”.jpg',
          time: '2016年',
          title: '获 "2016年度极最具潜力大数据和智能化服务商"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2016年度最具技术领导力人物”奖.jpg',
          time: '2016年',
          title: '获"2016年度最具技术领导力人物"奖'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2017创业黑马企业级服务成长组TOP20“.jpg',
          time: '2017年',
          title: '获"2017创业黑马企业级服务成长组TOP20"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2017年中国年度创新成长企业100强”.jpg',
          time: '2017年',
          title: '获"2017年中国年度创新成长企业100强"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2017手机天鹅奖年度最佳终端解决方案奖”.jpg',
          time: '2017年',
          title: '获"2017手机天鹅奖年度最佳终端解决方案奖"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2017商业影响力人工智能领域 最具创新企业TOP5.jpg',
          time: '2017年',
          title: '获"2017商业影响力人工智能领域 最具创新企业TOP5"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2017年全球商业创新大赛技术营销类 铜奖“.jpg',
          time: '2017年',
          title: '获"2017年全球商业创新大赛技术营销类 铜奖"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2017-2018年度码号卫士奖“.jpg',
          time: '2017年',
          title: '获"2017-2018年度码号卫士奖"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2018中国大数据准独角兽“.jpg',
          time: '2018年',
          title: '获"2017年中国年度创新成长企业100强"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2018中国智能企业服务年度创新力企业“.jpg',
          time: '2018年',
          title: '获"2018中国智能企业服务年度创新力企业"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2018最具商业价值创业公司“.jpg',
          time: '2018年',
          title: '获"2018最具商业价值创业公司"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2018金比特 最佳智能营销平台&效果案例标杆奖”.jpg',
          time: '2018年',
          title: '获"2018金比特 最佳智能营销平台&效果案例标杆奖"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2018金触点最佳具技术创新力营销产品与技术营销案例”.jpg',
          time: '2018年',
          title: '获"2018金触点最佳具技术创新力营销产品+技术营销案例"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2018中国创新成长企业100强“.jpg',
          time: '2018年',
          title: '获"2018中国创新成长企业100强"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2018中国最具商业潜力成长型科技企业TOP20“.jpg',
          time: '2018年',
          title: '获"2018中国最具商业潜力成长型科技企业TOP20"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2018年年度企业服务独角兽与企业服务产品TOP50“.jpg',
          time: '2018年',
          title: '获"2018年年度企业服务独角兽+企业服务产品TOP50"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获“2019手机天鹅奖最佳手机应用”.jpg',
          time: '2019年',
          title: '获"2019手机天鹅奖最佳手机应用"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2019 中国数据智能创新企业50强“.jpg',
          time: '2019年',
          title: '获"2019 中国数据智能创新企业50强"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2019中国创业企业新苗榜-年度高成长企业“.jpg',
          time: '2019年',
          title: '获"2019中国创业企业新苗榜-年度高成长企业"'
        },
        {
          src: 'https://img.teddymobile.cn/www/images/about/获”2019金瑞奖最佳AI创新营销案例奖”.jpg',
          time: '2019年',
          title: '获"2019金瑞奖最佳AI创新营销案例奖"'
        },
      ].reverse()
    }
  }
  render() {
    const {addressList, contactList, honorList, products} = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    const matchSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
      <>

        <Head>
          <title>关于泰迪熊移动</title>
          <meta name="keywords" content="关于泰迪熊移动" />
          <meta name="description" content="泰迪熊移动以智能连接人与服务为使命，专注于提供基于大数据和场景的智能服务。公司以智能短信、号码识别、5G场景消息、快应用等产品为主导，致力于成为客户信赖的智慧通讯服务提供商。"/>
        </Head>
        <div className="banner">
          <div className="banner__text w">
            关于我们
          </div>
        </div>
        <SectionCard title={'泰迪熊移动介绍'} bgc={'#FFFFFF'}>
          <div className="intro">
            <p>北京泰迪熊移动科技有限公司成立于2014年，是一家综合性智能科技公司，获得国家高新技术企业认证。公司总部位于北京，并在上海、深圳、浙江设有分子公司。</p>
            <p>泰迪熊移动以“智能连接人与服务，消息沟通未来生活”为使命，专注为5G消息场景生态建设提供智慧服务。业务围绕智能手机应用、智慧新零售、金融服务等多场景，基于智能短信、5G场景消息、快应用等产品，融合人工智能、大数据、云计算等先进技术，为客户提供多元化的解决方案，致力于成为客户信赖的智慧通讯服务提供商。</p>
            <p>泰迪熊移动已为vivo、OPPO、京东、淘宝、苏宁、携程、屈臣氏、建设银行、招商银行、百度以及三大运营商等国内百家企业提供大数据和场景服务，覆盖快消品、电商、零售、互联网、运营商、手机厂商、金融、旅游、教育等数十个行业，助力客户建设5G消息场景生态。</p>
          </div>
        </SectionCard>
        <SectionCard title={'发展历程'} bgc={'#F8FAFF'}>
            <div className="w">
              <TimeLine />
              {/*<img className="develop__img" src="https://img.teddymobile.cn/www/images/about/about.png" />*/}
              {/*<img className="develop__img--match" src="https://img.teddymobile.cn/www/images/about/about-match.png" />*/}
            </div>
        </SectionCard>
        <SectionCard title={'技术优势'} bgc={'#355EA6'} titleClass={'title-white'}>
          <div className="technology-advantage">
            <p className="technology-advantage__title">Ted-Brain 智慧大脑——是泰迪熊移动自主研发的科技智慧大脑，基于人工智能、大数据、云计算能力为产品提供强大的技术支撑，一站式技术支持-为全行业带来赋能。</p>
            <ul className="technology-advantage__list clearfix">
              <li className="technology-advantage__list__item">
                <img src="https://img.teddymobile.cn/www/images/about/icon-moshenghaoma.png" />
                <p className="technology-advantage__list__item__title">陌生号码识别引擎</p>
                <p className="technology-advantage__list__item__desc">号码识别率99.9%，日均识别号码47亿次， 日均号码数据新增7000万</p>
              </li>
              <li className="technology-advantage__list__item">
                <img src="https://img.teddymobile.cn/www/images/about/icon-zhinengduanxin.png" />
                <p className="technology-advantage__list__item__title">智能短信识别引擎</p>
                <p className="technology-advantage__list__item__desc">基于NLP技术、触达十万+智能场景、 日均解析32亿条数据</p>
              </li>
              <li className="technology-advantage__list__item">
                <img src="https://img.teddymobile.cn/www/images/about/icon-zhihui.png" />
                <p className="technology-advantage__list__item__title">5G场景消息服务</p>
                <p className="technology-advantage__list__item__desc">多种富媒体消息格式，同时支持通话挂机、位置识别等场景定向能力</p>
              </li>
            </ul>
          </div>
        </SectionCard>
        <SectionCard title={'荣誉奖项'} bgc={'#F8FAFF'}>
          <div className="honor-list">
            <Slider {...settings}>
              {
                honorList.map((item, index) => (
                  <div key={index} className="honor-list__item">
                    <img src={item.src} />
                    <div className="honor-list__item__info">
                      <p className="honor-list__item__info__time">{item.time}</p>
                      <p className="honor-list__item__info__title">{item.title}</p>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
          <div className="honor-list--match">
            <Slider {...matchSettings}>
            {
              honorList.map((item, index) => (
                <div key={index} className="honor-list__item">
                  <img src={item.src} />
                  <div className="honor-list__item__info">
                    <p className="honor-list__item__info__time">{item.time}</p>
                    <p className="honor-list__item__info__title">{item.title}</p>
                  </div>
                </div>
              ))
            }
            </Slider>
          </div>
        </SectionCard>
        <SectionCard title={'联系我们'} bgc={'#FFFFFF'}>
          <div className="contact-list clearfix">
            <div className="contact-list__address">
            {
              addressList.map((item, index) => (
                <div className="contact-list__item" key={index}>
                  <div className="contact-list__item__img">
                    <img src={item.src} />
                  </div>
                  <div className="contact-list__item__info">
                    <p className="contact-list__item__info__name">{item.name}</p>
                    <p className="contact-list__item__info__address">{item.address}</p>
                  </div>
                </div>
              ))
            }
            </div>
            <div className="concact-list__concact">
            {
              contactList.map((item, index) => (
                <div className="contact-list__item" key={index}>
                  <div className="contact-list__item__img">
                    <img src={item.src} />
                  </div>
                  <div className="contact-list__item__info">
                    <p className="contact-list__item__info__name">{item.name}</p>
                    <div className="contact-list__item__info__address">
                      <p>{item.email}</p>
                      <p>{item.phone}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </SectionCard>
        <SectionCard title={'企业文化'} bgc={'#F8FAFF'}>
          <ProductAdvantage
            products={products}
            customClassName={'join-product__item'}
          ></ProductAdvantage>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
