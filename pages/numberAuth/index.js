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
      activeType: 'company',
      form: {},
      phoneError: false,
      companyError: false
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
  formSubmit = () => {
    console.log(this.state.form)
  }
  formChange = (type, ev) => {
    const val = ev.currentTarget.value 
    if(type === 'company' && val.indexOf('公司') < 0) {
      this.setState({
        companyError: true
      })
    } else {
      this.setState({
        companyError: false
      })
    }
    if(type === 'phone' && !(/^[0-9]*$/.test(val))) {
      console.log('必须是纯数字')
      this.setState({
        phoneError: true
      })
      return 
    }
    const {form} = this.state 
    form[type] = val 
    this.setState({
      form,
      phoneError: false
    })
  }
  render() {
    const {headers, activeType, form, phoneError, companyError} = this.state
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
                <div className="form__item form__item--required">
                  <div className="form__item__label">认证人姓名</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的姓名" onChange={this.formChange.bind(this, 'name')} type="text" />
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">认证企业全称</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的企业全称" onChange={this.formChange.bind(this, 'company')} type="text" />
                  </div>
                  {companyError && <div className="form__item__input--error">
                    必须包含公司这两个字符
                  </div>}
                </div>

                <div className="form__item form__item--required">
                  <div className="form__item__label">联系电话</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" value={form.phone || ''} onChange={this.formChange.bind(this, 'phone')} type="text" />
                  </div>
                  {phoneError && <div className="form__item__input--error">
                    必须是纯数字
                  </div>}
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">所属城市</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的所属城市" onChange={this.formChange.bind(this, 'city')} type="text" />
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">所属行业</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的所属行业" onChange={this.formChange.bind(this, 'industy')} type="text" />
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">邮箱</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的邮箱" onChange={this.formChange.bind(this, 'email')} type="text" />
                  </div>
                </div>
                <div className="form__item" onClick={this.formSubmit}>
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
