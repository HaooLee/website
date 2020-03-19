import {Component} from 'react'
import styles from './index.less'

export default class Join extends Component {
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
      ]
    }
  }
  switchTabBar = (idx) => {
    const {tabBar} = this.state 
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
    const {tabBar} = this.state
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
                <li>
                  <a>高级销售经理（运营商板块）</a>
                </li>
                <li>
                  <a>渠道经理</a>
                </li>
                <li>
                  <a>Android研发经理</a>
                </li>
                <li>
                  <a>Android负责人</a>
                </li>
                <li>
                  <a>平台产品专家/平台产品总监</a>
                </li>
                <li>
                  <a>售前产品</a>
                </li>
                <li>
                  <a>高级项目经理</a>
                </li>
                <li>
                  <a>大客户销售（银行版图）</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}