import {Component} from 'react'
import axios from 'axios'
import NotificationSystem from 'react-notification-system'
import styles from './index.less'
import Head from 'next/head'
import React from "react"
import Router from 'next/router'


export default class NumberComplainPersonal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headers: [
        {
          name: '企业号码申诉通道',
          active: true,
          type: 'company'
        },
        {
          name: '个人用户号码申诉通道',
          active: false,
          type: 'personal'
        }
      ],
      fileContent: {},
      companyErrors: {},
      codeText:'获取验证码',
      codeDisabled:false,
      phoneMark:false,
      codeMark:false,
    }
  }
  notificationSystem = React.createRef()

  companyValues = {}
  timer=0
  companyRules = {
    'phone': [{required:true,msg:'申诉号码不能为空'}],
    'code': [{required:true,msg:'验证码不能为空'}]
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  validate = (data, rules, type) =>{
    let isValid = true
    try {
      const {companyErrors} = this.state
      let errors = companyErrors
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
        companyErrors: {...errors}
      })
    }catch (e) {

      return false
    }
    return isValid
  }


  companyFormChange = (type, ev) => {
    const val = ev.currentTarget.value
    this.companyValues[type] = val
  }

  companyFormSubmit = async () => {
    const {codeMark,phoneMark,companyErrors} = this.state
    if(!phoneMark) {
      companyErrors['phone'] = {err:true,msg:'该号码为空或无需提交申诉'}
      this.setState({
        companyErrors
      })
      return
    }
    if(!codeMark){
      companyErrors['code'] = {err:true,msg: '验证码不正确'}
      this.setState({
        companyErrors
      })
      return
    }
    if(this.validate(this.companyValues, this.companyRules)){
      let params = new FormData()
      Object.entries(this.companyValues).forEach((item, index) => {
        params.append(item[0], item[1])
      })
      const {data} = await axios.post(`/api/single/numberComplain` , params)
      const notification = this.notificationSystem.current

      if (data.code == 0) {
        Router.replace('/numberComplain/success')
      }else if(data.code == 1 || data.code == 2 || data.code == 3) {
        Router.replace('/numberComplain/done')
      }else {
        notification.addNotification({
          title: '提示',
          message: data.msg,
          level: 'error'
        })
      }
    }
  }

  checkPhone(phone){
    return /^1[3456789]\d{9}$/.test(phone)
  }
  getCode = async () => {
    // 获取验证码
    const {companyErrors} = this.state
    const {phone} = this.companyValues
    if(this.checkPhone(phone)){
      const {data} = await axios.post(`/api/sms/send`, {
        phone
      })
      if(data.code == 200) {
        this.setState({
          codeDisabled:true
        })
        let sec = 60
        this.timer = setInterval(()=>{
          if(--sec > 0){
            this.setState({
              codeText:`${sec}秒后重试`
            })
          }else {
            this.setState({
              codeText:`获取验证码`,
              codeDisabled:false
            })
            clearInterval(timer)
          }
        },1000)
      }
    }else {
      companyErrors['phone'] = {err:true,msg: '请输入正确的手机号'}
      this.setState({
        companyErrors
      })
    }

  }
  smsVerify = async () => {
    const {companyErrors} = this.state
    const {code, phone} = this.companyValues
    let codeMark = false
    if(code && this.checkPhone(phone)) {
      const {data} = await axios.post('/api/sms/verify', {code, phone})
      if(data.code == 200) {
        companyErrors['code'] = {}
        codeMark = true
      }else {
        companyErrors['code'] = {err:true,msg: '验证码不正确'}
      }
      this.setState({
        codeMark,
        companyErrors
      })
    }
  }

  phoneMarkCheck = async () => {
    const {companyErrors} = this.state
    const {phone} = this.companyValues
    if(!phone){
      companyErrors['phone'] ={}
      this.setState({
        companyErrors,
        phoneMark:false
      })
      return
    }
    if(!this.checkPhone(phone)){
      companyErrors['phone'] = {err:true,msg: '请输入正确的手机号'}
      this.setState({
        companyErrors,
        phoneMark:false
      })
      return
    }
    const {data:{code}} = await axios.post('/api/phone/check', {phone})
    if(code == 200){
      companyErrors['phone'] = {}
      this.setState({
        companyErrors,
        phoneMark:true
      })
    }else {
      let msg = ''
      switch (code) {
        case 1:
          msg = '该号码无标记，无需提交申诉'
          break
        case 2:
          msg = '号码标记已取消，手机端可能存在延时，请耐心等待3-5个工作日的同步时间'
          break
      }
      companyErrors['phone'] = {err:true,msg}
      this.setState({
        phoneMark:false,
        companyErrors
      })
    }

  }

  render() {
    const {headers, activeType, fileContent, companyErrors,codeDisabled, codeText} = this.state
    return (
      <>
        <div className="form">
                <div className="form__item form__item--required">
                  <div className="form__item__label">申诉号码</div>
                  <div className="form__item__input">
                    <input placeholder="仅支持手机号，如需申诉座机号请转到企业申诉入口" onBlur={this.phoneMarkCheck} type="text" onChange={this.companyFormChange.bind(this, 'phone')} />
                    {companyErrors['phone']?.err && <span className={'errMsg'}>{companyErrors['phone'].msg}</span>}
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">验证码</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的手机验证码" onBlur={this.smsVerify} onChange={this.companyFormChange.bind(this, 'code')} type="text" />
                    <button className="form__item__input__code" onClick={this.getCode} disabled={codeDisabled}>{codeText}</button>
                    {companyErrors['code']?.err && <span className={'errMsg'}>{companyErrors['code'].msg}</span>}
                  </div>
                </div>
                <div className="form__item" onClick={this.companyFormSubmit}>
                  <div className="form__item__btn">确认提交</div>
                </div>
              </div>

        <NotificationSystem ref={this.notificationSystem} />
        <style jsx>{styles}</style>
      </>
    )
  }
}
