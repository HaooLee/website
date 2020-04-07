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
    console.log(data.data)
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
    this.state.allJoins = props.allJoins
  }
  switchTabBar = (idx) => {
    const {tabBar, allJoins} = this.state
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

  handleClick=(item, index)=>{
    const {allJoins} = this.state
    const a = !item.opened
    allJoins.forEach(i=>{
      i.opened = false
    })
    item.opened = a
    this.setState({
      allJoins
    })

  }

  render() {
    const {tabBar,allJoins, products} = this.state
    const currentId = tabBar.filter((i)=>i.active)[0].id
    // console.log(allJoins)
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
                  currentId == 0 ?allJoins.map((item, idx) => <li className="tab-bar__content__item" key={idx}>
                    <p className="title" onClick={()=> this.handleClick(item,idx)}>{item.title}</p>
                    {
                      item.opened && <div className="tab-bar__content__item">
                        <div className="tab-bar__content__item__detail">
                          <div>
                            <p className="work-place">工作地点：</p>
                            <p className="work-place-content"> {item.working_place}</p>
                          </div>
                          <div>
                            <p className="work-duty">岗位职责：</p>
                            <p className="work-duty-content">{item.duty}</p>
                          </div>
                          <div>
                            <p className="work-require">应职要求：</p>
                            <p className="work-require-content">{item.requier}</p>
                          </div>
                        </div>
                      </div>
                    }
                  </li> ):allJoins.filter(i=>i.job_cate == currentId).map((item, idx) => <li className="tab-bar__content__item" key={idx}>
                    <p className="title" onClick={()=> this.handleClick(item,idx)}>{item.title}</p>
                    {
                      item.opened && <div className="tab-bar__content__item">
                        <div className="tab-bar__content__item__detail">
                          <div>
                            <p className="work-place">工作地点：</p>
                            <p className="work-place-content"> {item.working_place}</p>
                          </div>
                          <div>
                            <p className="work-duty">岗位职责：</p>
                            <p className="work-duty-content">{item.duty}</p>
                          </div>
                          <div>
                            <p className="work-require">应职要求：</p>
                            <p className="work-require-content">{item.requier}</p>
                          </div>
                        </div>
                      </div>
                    }
                  </li>)
                }
                {/*  */}
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
