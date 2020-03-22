import {Component} from 'react'
import Slider from "react-slick";
import TabBarCard from '@/components/tabBarCard'
import SectionCard from '@/components/sectionCard'
import styles from './index.less'

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
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
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
            <div className="solution__content">
              <Slider {...settings}>
                <div>1</div>
                <div>2</div>
              </Slider>
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