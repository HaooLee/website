import {Component} from 'react'
import styles from './index.less'

export default class NumberAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headers: [
        {
          name: '企业号码认证申请',
          active: true,
          type: 'company'
        }
      ],
      activeType: 'company'
    }
  }
  headerItemClick = (idx, row) => {
    const {headers} = this.state 
    headers.forEach((item, index) => {
      if(index === idx) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.setState({
      headers: [...headers],
      activeType: row.type
    })
  }
  render() {
    const {headers, activeType} = this.state
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            认证通道
          </div>
        </div>
        <div className="complain-wrap">
          <div className="complain-bg"></div>
          <div className="complain w">
            <div className="complain__header clearfix">
              {headers.map((item, idx) => (
                <div key={idx} className={`complain__header__item ${item.active ? 'active' : ''}`} onClick={this.headerItemClick.bind(this, idx, item)}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="complain__content">
             {activeType === 'company' &&  <div className="form">
                <div className="form__item">
                  <div className="form__item__label">企业名称</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您希望认证的企业名称" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉人姓名</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的姓名" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉企业全称</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的企业全称" type="text" />
                  </div>
                </div>
                
                <div className="form__item">
                  <div className="form__item__label">联系电话</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">所属城市</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的所属城市" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">所属行业</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的所属行业" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__btn">确认提交</div>
                </div>
              </div>}
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}