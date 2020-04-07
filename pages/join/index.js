import {Component} from 'react'
import SectionCard from '@/components/sectionCard'
import ProductAdvantage from '@/components/productAdvantage'
import styles from './index.less'
import axios from 'axios'
export default class Join extends Component {
  static async getInitialProps({Component, router, ctx}) {
    const {data} = await axios.get('http://php.bjdglt.com:8091/V1.4/recruit/getinfo', {
      'job_cate': 0
    })
    return {allJoins: data.data}
  }
  constructor(props) {
    super(props)
    this.state = {
      tabBar: [
        {
          name: '所有职位',
          active: true,
          id: 0
        },
        {
          name: '产品',
          active: false,
          id: 1
        },
        {
          name: '运营',
          active: false,
          id: 2
        },
        {
          name: '技术',
          active: false,
          id: 3
        },
        {
          name: '销售',
          active: false,
          id: 4
        },
        {
          name: '职能',
          active: false,
          id: 5
        }
      ],
      products: [
        {
          title: '使命',
          desc: '智能连接人与服务',
          src: '/static/images/dspProduct/icon-chanpin.png'
        },
        {
          title: '愿景',
          desc: '服务世界大多数人',
          src: '/static/images/dspProduct/icon-ziyuan.png'
        },
        {
          title: '价值观',
          desc: '客户第一、团队合作、激情、敬业',
          src: '/static/images/dspProduct/icon-fuwu.png'
        }
      ]
    }
  }
  switchTabBar = (idx) => {
    const {tabBar} = this.state 
    const {allJoins} = this.props
    tabBar.forEach((item, index) => {
      if(index === idx) {
        item.active = true 
      } else {
        item.active = false
      }
    })
    this.setState({
      tabBar: [...tabBar]
    })
  }
  render() {
    const {tabBar, products} = this.state
    const {allJoins} = this.props
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            加入我们
          </div>
        </div>
        {/* 职位列表 */}
        <div className="positions">
          <div className="positions__header">
            <ul className="tab-bar w clearfix">
              {tabBar.map((item, index) => (
                <li key={index} className={`tab-bar__item ${item.active ? 'active' : ''}`} onClick={this.switchTabBar.bind(this, index)}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="positions__content">
            <div className="w">
              <ul className="tab-bar__content clearfix">
                {
                  allJoins.map((item, idx) => <li className="tab-bar__content__item" key={idx}>
                    <a>{item.title}</a>
                  </li> )
                }
                {/* <li className="tab-bar__content__item">
                  <a>高级销售经理（运营商板块）</a>
                  <div className="tab-bar__content__item__detail">
                    <div>
                      <p>工作地点：</p>
                      <p>工作地点：北京市</p>
                    </div>
                    <div>
                      <p>岗位职责：</p>
                      <ol>
                        <li>负责三大运营商智能短信的整体营销，指定周期性的营销方案</li>
                        <li>负责三大运营商智能短信的整体营销，指定周期性的营销方案</li>
                        <li>负责三大运营商智能短信的整体营销，指定周期性的营销方案</li>
                      </ol>
                    </div>
                    <div>
                      <p>应职要求：</p>
                      <ol>
                        <li>负责三大运营商智能短信的整体营销，指定周期性的营销方案</li>
                        <li>负责三大运营商智能短信的整体营销，指定周期性的营销方案</li>
                        <li>负责三大运营商智能短信的整体营销，指定周期性的营销方案</li>
                      </ol>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <SectionCard title={'企业文化'} bgc={'#F8FAFF'}>
            <ProductAdvantage 
              products={products} 
              customClassName={'join-product__item'}
            ></ProductAdvantage>
          </SectionCard>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}