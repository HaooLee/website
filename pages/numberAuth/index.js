import {Component} from 'react'
import axios from 'axios'
import styles from './index.less'
import Head from 'next/head'
import React from "react"
import Router from 'next/router'

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
      errors:{}
    }
  }
  notificationSystem = React.createRef()
  values = {}
  rules = {
    name:[{required:true,msg:'认证人姓名不能为空'}],
    'company_name':[{validator: (value, callback = ()=> {}) => {
      if(!value) {
        callback('认证企业不能为空')
        return
      }
      if(value.indexOf('公司') < 0) {
        callback('认证企业必须包含公司两个字符')
        return
      }
      callback()
    }}],
    phone:[{validator: (value, callback = ()=> {}) => {
      if(!value) {
        callback('联系电话不能为空')
        return
      }
      const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
      if(!reg.test(value)) {
        callback('联系电话格式不合法')
        return
      }
      callback()
    }}],
    city:[{required:true,msg:'所属城市不能为空'}],
    industry:[{required:true,msg:'行业不能为空'}],
    email:[{validator: (value, callback = ()=> {}) => {
      if(!value) {
        callback('邮箱不能为空')
        return
      }
      const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      if(!reg.test(value)) {
        callback('邮箱格式不合法')
        return
      }
      callback()
    }}],
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

  validate = (data, rules) =>{
    let isValid = true
    try {
      const {errors} = this.state
      Object.entries(rules).forEach((item,index)=>{
        item[1].forEach((i)=>{
          if(i.required){
            if(!data[item[0]]) {
              errors[item[0]] = {err:true,msg:i.msg}
              isValid = false
            }else {
              errors[item[0]] = {err:false}
            }
          }
          if(i.validator) {
            i.validator(data[item[0]], (msg) => {
              if(msg) {
                errors[item[0]] = {err:true,msg: msg}
                isValid = false
              } else {
                errors[item[0]] = {err:false}
              }
            })
          }
        })
      })
      this.setState({
        errors
      })
    }catch (e) {

      return false
    }
    return isValid
  }

  formSubmit = async () => {
    if(this.validate(this.values, this.rules)){
      let params = new FormData()
      Object.entries(this.values).forEach((item, index) => {
        params.append(item[0], item[1])
      })
      const {data} = await axios.post(`/api/company/numberAuth`, params)
      if (data.code == 200) {
        Router.push('/numberAuth/success')
      }
    }
  }
  clearError = (prop) => {
    const {errors} = this.state
    errors[prop] = {}
    this.setState({
      errors
    })
  }

  formChange = (type, ev) => {
    const val = ev.currentTarget.value

    this.values[type] = val
  }
  render() {
    const {headers, activeType, errors} = this.state
    return (
      <>
        <Head>
          <title>泰迪熊移动—号码认证|申诉|平台|查询|标记</title>
          <meta name="keywords" content="企业号码认证,标记取消,号码识别" />
          <meta name="description" content="通话时显示专属商企名片、 商企名片将进入中国庞大黄页库。 超过4亿级用户终端宣传显示。若您的号码变更或被错误显示，请号码所有人提交申诉。"/>
        </Head>
        <div className="banner">
          <div className="banner__text w">
            号码标识
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
                    <input placeholder="请填写您的姓名" onFocus={()=> this.clearError('name')} onChange={this.formChange.bind(this, 'name')} type="text" />
                    {errors['name']?.err && <span className={'errMsg'}>{errors['name'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">认证企业全称</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的企业全称" onFocus={()=> this.clearError('company_name')} onChange={this.formChange.bind(this, 'company_name')} type="text" />
                    {errors['company_name']?.err && <span className={'errMsg'}>{errors['company_name'].msg}</span>}
                  </div>
                  {/* {companyError && <div className="form__item__input--error">
                    必须包含公司这两个字符
                  </div>} */}
                </div>

                <div className="form__item form__item--required">
                  <div className="form__item__label">联系电话</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" onFocus={()=> this.clearError('phone')} onChange={this.formChange.bind(this, 'phone')} type="text" />
                    {errors['phone']?.err && <span className={'errMsg'}>{errors['phone'].msg}</span>}
                  </div>
                  {/* {phoneError && <div className="form__item__input--error">
                    必须是纯数字
                  </div>} */}
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">所属城市</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的所属城市" onFocus={()=> this.clearError('city')} onChange={this.formChange.bind(this, 'city')} type="text" />
                    {errors['city']?.err && <span className={'errMsg'}>{errors['city'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">所属行业</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的所属行业" onFocus={()=> this.clearError('industry')} onChange={this.formChange.bind(this, 'industry')} type="text" />
                    {errors['industry']?.err && <span className={'errMsg'}>{errors['industry'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">邮箱</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的邮箱" onFocus={()=> this.clearError('email')} onChange={this.formChange.bind(this, 'email')} type="text" />
                    {errors['email']?.err && <span className={'errMsg'}>{errors['email'].msg}</span>}
                  </div>
                  {/* {
                    emailError && <div className="form__item__input--error">
                    不能包含中文
                    </div>
                  } */}
                </div>
                <div className="form__item" >
                  <div className="form__item__btn" onClick={this.formSubmit}>确认提交</div>
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
