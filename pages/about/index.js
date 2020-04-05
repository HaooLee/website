import {Component} from 'react'
import Slider from "react-slick";
import SectionCard from '@/components/sectionCard'
import TimeLine from '@/components/Timeline'
import styles from './index.less'

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="/static/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="/static/images/left.png"/>
  )
}


export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressList: [
        {
          src: '/static/images/about/icon-beijing.png',
          name: '北京 | 总部',
          address: '北京市朝阳区酒仙桥南路5号院'
        },
        {
          src: '/static/images/about/icon-shenzheng.png',
          name: '深圳',
          address: '北京市朝阳区酒仙桥南路5号院'
        },
        {
          src: '/static/images/about/icon-shanghai.png',
          name: '上海',
          address: '北京市朝阳区酒仙桥南路5号院'
        }
      ],
      contactList: [
        {
          src: '/static/images/about/icon-jishu.png',
          name: '技术及问题反馈',
          email: '邮箱：123456@teddymobile',
          phone: '电话：010-234521'
        },
        {
          src: '/static/images/about/icon-shangwu.png',
          name: '商务合作',
          email: '邮箱：123456@teddymobile',
          phone: '电话：010-234521'
        }
      ],
      honorList: [
        {
          src: '/static/images/about/2016互联网周刊人物奖.jpg',
          time: '2016年',
          title: '互联网周刊人物奖'
        },
        {
          src: '/static/images/about/2016极客网最具潜力大数据和智能化服务商.jpg',
          time: '2016年',
          title: '极客网最具潜力大数据和智能化服务商'
        },
        {
          src: '/static/images/about/2017创业邦创新成长100强奖牌.jpg',
          time: '2017年',
          title: '创业邦创新成长100强奖牌.jpg'
        },
        {
          src: '/static/images/about/2017创业黑马”企业服务成长组TOP20“.jpg',
          time: '2017年',
          title: '创业黑马”企业服务成长组TOP20“'
        },
        {
          src: '/static/images/about/2017品途人工智能领域 最具创新企业TOP5.jpg',
          time: '2017年',
          title: '品途人工智能领域 最具创新企业TOP5'
        },
        {
          src: '/static/images/about/2017年金触点奖杯.jpg',
          time: '2017年',
          title: '金触点奖杯'
        },
        {
          src: '/static/images/about/2017手机天鹅奖.jpg',
          time: '2017年',
          title: '2017手机天鹅奖'
        },
        {
          src: '/static/images/about/2018不凡商业”最具商业价值创业公司“.jpg',
          time: '2018年',
          title: '不凡商业”最具商业价值创业公司“'
        },
        {
          src: '/static/images/about/2018亿欧”中国智能企业服务年度创新力企业“奖杯.jpg',
          time: '2018年',
          title: '亿欧”中国智能企业服务年度创新力企业“奖杯'
        },
        {
          src: '/static/images/about/2018创业邦”创新成长100强“奖杯.jpg',
          time: '2018年',
          title: '创业邦”创新成长100强“奖杯'
        },
        {
          src: '/static/images/about/2018创业黑马”中国大数据准独角兽“.jpg',
          time: '2018年',
          title: '创业黑马”中国大数据准独角兽“'
        },
        {
          src: '/static/images/about/2018年创业黑马”企业服务独角兽“+”企业服务产品TOP50“.jpg',
          time: '2018年',
          title: '创业黑马”企业服务独角兽“+”企业服务产品TOP50“'
        },
        {
          src: '/static/images/about/2018甲子20”最具商业潜力成长型企业TOP20“.jpg',
          time: '2018年',
          title: '甲子20”最具商业潜力成长型企业TOP20“'
        },
        {
          src: '/static/images/about/2018码号卫士奖杯.jpg',
          time: '2018年',
          title: '码号卫士奖杯'
        },
        {
          src: '/static/images/about/2018金比特 最佳智能营销平台&效果案例标杆奖.jpg',
          time: '2018年',
          title: '金比特 最佳智能营销平台&效果案例标杆奖'
        },
        {
          src: '/static/images/about/2018金触点最佳具技术创新力营销产品+技术营销案例.jpg',
          time: '2018年',
          title: '金触点最佳具技术创新力营销产品+技术营销案例'
        },
        {
          src: '/static/images/about/2019 爱分析 中国数据智能创新企业50强.jpg',
          time: '2019年',
          title: '2019 爱分析 中国数据智能创新企业50强'
        },
        {
          src: '/static/images/about/2019快应用获手机天鹅奖“2019最佳手机应用”.jpg',
          time: '2019年',
          title: '快应用获手机天鹅奖“2019最佳手机应用”'
        },
        {
          src: '/static/images/about/2019证券时报中国创业企业新苗榜-年度高成长企业.jpg',
          time: '2019年',
          title: '证券时报中国创业企业新苗榜-年度高成长企业'
        },
        {
          src: '/static/images/about/2019金瑞奖“最佳AI创新营销案例奖”.jpg',
          time: '2019年',
          title: '金瑞奖“最佳AI创新营销案例奖”'
        }
      ]
    }
  }
  render() {
    const {addressList, contactList, honorList} = this.state
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
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            关于我们
          </div>
        </div>
        <SectionCard title={'泰迪熊移动介绍'} bgc={'#FFFFFF'}>
          <div className="intro">
            <p>北京泰迪熊移动科技有限公司成立于2014年，是一家综合性智能科技公司，获得国家高新技术企业认证。公司总部位于北京，并在上海、深圳设有子公司。</p>
            <p>泰迪熊移动以智能连接人与服务为使命，专注于提供基于大数据和场景的智能服务。公司以智能短信公众号、智慧场景公众号、快应用等产品为主导，融合人工智能大数据、云计算等先进技术，致力于成为客户信赖的智慧场景生态服务提供商。</p>
            <p>泰迪熊移动已为vivo、OPPO、京东、淘宝、苏宁、携程、屈臣氏、建设银行、招商银行、百度等国内百家企业提供大数据和场景服务，覆盖快消、电商、零售、互联网、手机厂商、金融、旅游、教育等数十个行业，助力客户建设场景生态。</p>
          </div>
        </SectionCard>
        <SectionCard title={'发展历程'} bgc={'#F8FAFF'}>
            <div className="w">
              <TimeLine></TimeLine>
              {/*<img className="develop__img" src="/static/images/about/about.png" />*/}
              {/*<img className="develop__img--match" src="/static/images/about/about-match.png" />*/}
            </div>
        </SectionCard>
        <SectionCard title={'技术优势'} bgc={'#355EA6'} titleClass={'title-white'}>
          <div className="technology-advantage">
            <p className="technology-advantage__title">Ted-Brain 智慧大脑——是泰迪熊移动自主研发的科技智慧大脑，基于人工智能、大数据、云计算能力为产品提供强大的技术支撑，一站式技术支持-为全行业带来赋能。</p>
            <ul className="technology-advantage__list clearfix">
              <li className="technology-advantage__list__item">
                <img src="/static/images/about/icon-moshenghaoma.png" />
                <p className="technology-advantage__list__item__title">陌生号码识别引擎</p>
                <p className="technology-advantage__list__item__desc">号码识别率99.9%，日均识别号码47亿次， 日均号码数据新增7000万</p>
              </li>
              <li className="technology-advantage__list__item">
                <img src="/static/images/about/icon-zhinengduanxin.png" />
                <p className="technology-advantage__list__item__title">智能短信识别引擎</p>
                <p className="technology-advantage__list__item__desc">基于NLP技术、触达十万+智能场景、 日均解析15亿条数据</p>
              </li>
              <li className="technology-advantage__list__item">
                <img src="/static/images/about/icon-zhihui.png" />
                <p className="technology-advantage__list__item__title">智慧场景的近场服务</p>
                <p className="technology-advantage__list__item__desc">10亿+位置数据、1W+品牌覆盖、 92% POI覆盖率</p>
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
        <style jsx>{styles}</style>
      </>
    )
  }
}
