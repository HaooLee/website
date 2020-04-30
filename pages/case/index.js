import {Component} from 'react'
import SliderList from '@/components/sliderList'
import styles from './index.less'
import Link from 'next/link'
import router from 'next/router'
export default class Case extends Component {

  static async getInitialProps({req={}}){
    const {params:{type} = {type:''}} =  req
    console.log(req)
    return {type}
  }

  constructor(props) {
    super(props)
    const list = [
      {
        name: '保险行业',
        active: false,
        type: 'insurance'
      },
      {
        name: '运营商',
        active: false,
        type: 'operator'
      },
      {
        name: '在线教育',
        active: false,
        type: 'education'
      },
      {
        name: '新零售',
        active: false,
        type: 'resale'
      },
      {
        name: 'OTA',
        active: false,
        type: 'OTA'
      },
      {
        name: '本地生活',
        active: false,
        type: 'live'
      },
      {
        name: '电商',
        active: false,
        type: 'e-commerce'
      },
      {
        name: '互联网金融',
        active: false,
        type: 'finance'
      }
    ].map(i=>{
      if(i.type === props.type){
        i.active = true
      }
      return i
    })
    if(!(list.some(i=>i.active))){
      list[0].active = true
    }

    this.state = {
      list,
      cases: {
        'OTA': [
          {
            src: '/static/images/case/xiecheng.png',
            title: '携程',
            desc: '携程旅行网创立于1999年，总部设在中国上海，员工超过30000人，目前公司已在北京、广州、深圳、成都、杭州、南京、厦门、重庆、青岛、武汉、三亚、南通等95个境内城市，新加坡、首尔、香港等22个境外城市设立分支机构，在中国南通、苏格兰爱丁堡设立服务联络中心。专注全面旅行服务。集无线应用、酒店预订、机票预订、旅游度假、商旅管理、旅游资讯服务于一体，为用户打造全方位的旅行方案。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          }
        ],
        'insurance': [
          {
            src: '/static/images/case/zhaoshang.png',
            title: '招商信诺',
            desc: '招商信诺人寿保险有限公司是由两家信誉卓著的百年名企共同出资创立的中美合资寿险公司，投资双方股东分别为信诺北美人寿保险公司和招商局集团下属子公司。2013年，招商信诺完成了股权转让，招商银行正式成为招商信诺的中方股东。 信诺北美人寿保险公司创建于1792年，是美国第一家股份制保险公司，现隶属于美国信诺保险集团。美国信诺保险集团是美国四大商业健康保险公司之一，在全球30个国家和地区开展业务，向世界8000多万客户提供保险产品和服务，拥有超过100万名健康专家及相关设施构成的全球网络。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          }
        ],
        'education': [
          {
            src: '/static/images/case/vipKid.png',
            title: 'VIPKID',
            desc: 'VIPKID，创立于2013年底，由长江商学院孵化，北极光、经纬中国、创新工场和红杉资本和真格基金联合投资，通过1对1实时在线视频学习平台，把中国小朋友和北美外教进行连接。2014年6月1日VIPKID学习平台上线。 截至目前，VIPKID共有超过260万的注册用户，付费用户超过20万。VIPKID拥有北美外教资源，使用的教材也是符合CCSS（美国小学课程标准）的教材。2017年8月，VIPKID推出全球首个100%浸入式教学在线少儿中文教育平台Lingo Bus，正式发力中文出海业务。截至2019年8月，VIPKID平台付费学生规模超过70万人，北美外教数量超过9万人。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          }
        ],
        'resale': [
          {
            src: '/static/images/case/watsons.png',
            title: '屈臣氏',
            desc: '屈臣氏在中国内地超过470个城市拥有超过3,600家店铺和逾6,500万名会员，是国内为大众所熟知的保健及美妆产品零售连锁店。屈臣氏在质量与创新方面建立了相当声誉，为顾客奉上令人惊喜不断和物超所值的购物环境，从而赢得顾客高度信赖。屈臣氏是屈臣氏集团的旗舰保健美容品牌，一直通过为消费者提供个人化的咨询及建议，配以多元化产品种类，让消费者每天都能LOOK GOOD, FEEL GREAT。屈臣氏的业务遍布13个亚洲及欧洲市场，包括中国内地、中国香港、中国台湾、中国澳门、新加坡、泰国、越南、马来西亚、菲律宾、印度尼西亚、俄罗斯、土耳其及乌克兰，经营超过7,200家店铺，当中超过1,500家提供专业药房服务。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>,
              <Link href={'/scenicProduct'}>
                <a style={{color: '#355EA6'}}>5G场景消息</a>
              </Link>,
              <Link href={'/quickAppProduct'}>
                <a style={{color: '#355EA6'}}>快应用</a>
              </Link>
            ],
            typeName: '智能短信、5G场景消息、快应用'
          }
        ],
        'live': [
          {
            src: '/static/images/case/meituan.png',
            title: '美团',
            desc: '美团的使命是“帮大家吃得更好，生活更好”。作为中国领先的生活服务电子商务平台，公司拥有美团、大众点评、美团外卖等消费者熟知的App，服务涵盖餐饮、外卖、打车、共享单车、酒店旅游、电影、休闲娱乐等200多个品类，业务覆盖全国2800个县区市。截至2019年9月30日止十二个月，美团年度交易用户总数达4.4亿，平台活跃商户总数达590万，用户平均交易笔数为26.5笔。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          },
          {
            src: '/static/images/case/eleme.png',
            title: '饿了么',
            desc: '“饿了么”是2008年创立的本地生活平台，主营在线外卖、新零售、即时配送和餐饮供应链等业务。创业10年，饿了么以“Everything 30min”为使命，致力于用科技打造本地生活服务平台，推动了中国餐饮行业的数字化进程，将外卖培养成中国人继做饭、堂食后的第三种常规就餐方式。.4亿，平台活跃商户总数达590万，用户平均交易笔数为26.5笔。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          }
        ],
        'e-commerce': [
          {
            src: '/static/images/case/tuhu.png',
            title: '途虎养车',
            desc: '途虎养车作为专业的“汽车养护电商平台”，主营轮胎、机油、汽车保养、汽车美容、车品等，为客户提供：线上预约+线下安装的养车方式。 途虎养车拥有13000 多家合作安装门店，服务能力覆盖31个省直辖市、405个城市。用户可以在途虎养车官网、APP、电话、微信平台上享受专业的365天*16小时的售前售后服务 &#911-3] 。截止至2018年，途虎养车是深受中国消费者信赖的汽车养护电商平台。2018年9月，途虎养车入驻中国消费者协会电商消费维权直通车（绿色通道）平台，成为中消协电商直通车平台23家入驻企业之一。 ',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          }
        ],
        'finance': [
          {
            src: '/static/images/case/duxiaoman.png',
            title: '度小满金融',
            desc: '2018年4月，百度金融服务事业组正式完成拆分融资协议签署，启用全新品牌“度小满金融”，实现独立运营。百度在2015年12月14日成立金融服务事业群组，利用人工智能技术在金融领域布局。目前，度小满金融通过“有钱花”、“度小满理财”、“度小满钱包”以及“磐石金科平台”、“智能语音机器人”等产品与服务，完成了在消费信贷、财务管理、支付以及金融科技领域的布局。 作为一家金融科技公司，在智能金融时代，度小满金融将充分发挥百度的AI优势和技术实力，携手金融机构合作伙伴，用科技为更多人提供值得信赖的金融服务。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          }
        ],
        'operator': [
          {
            src: '/static/images/case/zh-liantong.png',
            title: '联通在线',
            desc: '联通在线信息科技有限公司（以下简称“联通在线”）是中国联通面向消费互联 网领域设立的全资平台控股公司。联通在线聚焦2C创新领域，通过实施特区制度搞活机制体制，实现专业领域统 筹规划、资源协同、合资合作和业务规模突破，不断提升创新能力和核心竞争力， 为公众互联网及家庭互联网用户提供统一的应用和内容入口。 联通在线深度挖掘电信运营商独有优势基础资源，以聚焦APPS为中心，以网络 资源运营、内容与应用聚合、代计费、触点整合、通信创新、渠道推广、安全服务、 精准营销等八大核心能力为牵引，以视频、音乐、阅读、游戏、家庭互联网等五大聚 合领域为突破，提供一点接入、全网服务的优质应用及能力产品，实现对联通集团各 省级分公司、基地、子公司以及业界合作伙伴的一体化服务，进一步开拓消费互联网 业务的新天地。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          },
          {
            src: '/static/images/case/zh-yidong.png',
            title: '中移在线',
            desc: '中移在线服务有限公司（简称“在线服务公司”）于2014年10月在河南省洛阳市注册成立，是由中国移动通信集团有限公司设立的全资专业子公司，致力于成为客户满意和社会信赖的数字化、智能化服务专家。 公司秉承“为客户创造便捷和快乐”的使命，建立集10086热线、短信、微信、微博、APP等多渠道服务体系，服务全网8.87亿客户。同时不断深化业务转型，加快数字服务创新，推出中移云客服、人证比对一体机、智能安防等产品及解决方案。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          },
          {
            src: '/static/images/case/zh-dianxin.png',
            title: '中国电信世纪龙',
            desc: '21CN（www.21cn.com）成立于1999年，是中国电信全资子公司。 21CN是中国最早的互联网企业之一，也是中国电信旗下最具媒体价值、排名最靠前的互联网品牌企业。 21CN近年来致力于移动互联网领域与云计算领域的产品研发，为个人和企业用户提供媒体资讯、电子邮箱、移动应用与云存储等方面的服务，并带来优质体验，从国内十大综合性门户网站转型为提供移动互联网服务的企业。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          },
          {
            src: '/static/images/case/zh-yidong-net.png',
            title: '中移互联网',
            desc: '中移互联网有限公司（以下简称“中移互联网公司”）是中国移动面向互联网领域设立的专业子公司，负责全网互联网业务的统一运营，致力于成为移动互联网特色产品的引领者、互联网优质平台服务的提供者和可持续增长价值的创造者。 中移互联网公司始终坚持“客户为先、以人为本、创新为要、合作为重”的企业价值观，面向融合通信（和飞信）、移动应用商场（MM）、云业务（和彩云、139邮箱、和家相册）、通信增值业务（和留言、和多号）、能力开放平台（互联网计费、统一认证、大数据等）等发展方向开展业务运营，各项互联网业务稳步增长，公司主要业务月活跃用户超5亿。',
            types: [
              <Link href={'/intelligenceSms'}>
                <a style={{color: '#355EA6'}}>智能短信</a>
              </Link>
            ],
            typeName: '智能短信'
          },

        ]
      },
      activeType: list.filter(i=>i.active)[0].type,
      activeItem: null,
      activeIndex: list.findIndex(i=>i.active)
    }
  }
  handleResize = () => {
    const {activeItem} = this.state
    if(activeItem) {
      this.setState({
        activeItem: null
      })
    }
  }

  componentDidMount() {
    // window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    // window.removeEventListener('resize',this.handleResize)
  }


  clickCallback = (index,item) => {
    // const {list} = this.state
    // let type = ''
    // list.forEach((item, idx) => {
    //   if(index === idx) {
    //     item.active = true
    //     type = item.type
    //   } else {
    //     item.active = false
    //   }
    // })
    router.replace({
      pathname:`/case/${item.type}`
    })
    // this.setState({
    //   list: [...list],
    //   activeType: type,
    //   activeItem: null,
    //   activeIndex: -1
    // })
  }
  contentItemClick = (item, idx) => {
    if(window.innerWidth < 980) {
      this.setState({
        activeItem: item,
        activeIndex: idx
      })
    }
  }
  render() {
    const {list, activeType, cases, activeItem, activeIndex} = this.state
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            这些成功的企业正在使用泰迪熊移动
          </div>
        </div>
        <div className="w cases clearfix">
          <SliderList list={list} clickCallback={this.clickCallback}></SliderList>
          <div className="cases__content-wrap col-10">
            <div className="cases__content">
              {(cases[activeType] || []).map((item, idx) => (
                <div key={idx} id={idx}>
                <div className="cases__content__item clearfix" key={idx} onClick={this.contentItemClick.bind(this, item, idx)}>
                  <div className="cases__content__item__img">
                    <img src={item.src} />
                  </div>
                  <div className="cases__content__item__info">
                    <p className="cases__content__item__info__title">{item.title}</p>
                    <p className="cases__content__item__info__desc">{item.desc}</p>
                    <p className="cases__content__item__info__tag">
                      <span>使用产品：</span>
                      <span className="tag__type">
                      {item.types.map((typeDom, idx) => <span key={idx}>{typeDom}</span>)}
                      </span>
                    </p>
                  </div>

                </div>
                {
                  activeItem && activeIndex === idx && <div className="cases__content--match">
                    <p className="cases__content--match__title">{activeItem.title}</p>
                    <p className="cases__content--match__desc">{activeItem.desc}</p>
                    <p className="cases__content--match__tag">
                      <span className="tag__text">使用产品：</span>
                      <span className="tag__type">
                        {activeItem.types.map((typeDom, idx) => <span key={idx}>{typeDom}</span>)}
                      </span>
                    </p>
                  </div>
                }
                </div>
              ))}
            </div>

          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
