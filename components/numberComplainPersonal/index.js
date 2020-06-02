import {Component} from 'react'
import axios from 'axios'
import NotificationSystem from 'react-notification-system'
import styles from './index.less'
import Head from 'next/head'
import React from "react";

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
    }
  }
  notificationSystem = React.createRef()

  companyValues = {}

  companyRules = {
    'code':[{required:true,msg:'验证码不能为空'}],
    'phone': [{required:true,msg:'申诉号码不能为空'}],
    'contactPhone': [{required:true,msg:'联系方式不能为空'}],
    'contactOther': [{required:true,msg:'联系邮箱/QQ不能为空'}],
    'reason': [{required:true,msg:'申诉理由不能为空'}]
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
      activeType: row.type,
      fileContent: ''
    })
    this.companyValues = {}
  }
  fileChange = async (type, ev) => {
    const {fileContent} = this.state
    const {value, files} = ev.currentTarget
    let idx = value.lastIndexOf('\\')
    fileContent[type] = value.slice(idx+1)
    this.setState({
      fileContent
    })
    const params = new FormData()
    params.append('source', files[0])
    const {data} = await axios.post(`http://php.bjdglt.com:8091/V1.4/file/upload`, params)
    const notification = this.notificationSystem.current
    if(data.code == 200) {
      notification.addNotification({
        title: '提示',
        message: '上传成功',
        level: 'success'
      })
    } else {
      notification.addNotification({
        title: '提示',
        message: '上传失败',
        level: 'error'
      })
    }
    if(type === 'idCard') {
      this.companyValues.file1 = data.data
    }
    if(type === 'numCard') {
      this.companyValues.file2 = data.data
    }
    if(type === 'otherCard') {
      this.companyValues.file3 = data.data
    }
  }
  companyFormChange = (type, ev) => {
    const val = ev.currentTarget.value
    this.companyValues[type] = val
  }
  companyFormSubmit = async (type) => {
    if(this.validate(this.companyValues, this.companyRules)){
      console.log(this.companyValues)
      let params = new FormData()
      Object.entries(this.companyValues).forEach((item, index) => {
        params.append(item[0], item[1])
      })
      const {data} = await axios.post(`/single/numberComplain` , params)
      const notification = this.notificationSystem.current

      if (data.code == 200) {
        notification.addNotification({
          title: '提示',
          message: '申诉成功',
          level: 'success'
        })
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
      companyErrors['phone'] = {}
      this.setState({
        companyErrors
      })
      const {data} = await axios.post(`/sms/send`, {
        phone
      })
      if(data.code == 200) {
        this.setState({
          codeDisabled:true
        })
        let sec = 60
        let timer = setInterval(()=>{
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
      companyErrors['contactPhone'] = {err:true,msg: '请输入正确的手机号'}
      this.setState({
        companyErrors
      })
    }

  }
  // 短信验证
  smsVerify = async () => {
    const {companyErrors} = this.state
    const {code, phone} = this.companyValues
    console.log(code, phone)
    if(code && this.checkPhone(phone)) {
      const {data} = await axios.post('/sms/verify', {code, phone})
      if(data.code == 200) {
        companyErrors['code'] = {}
      }else {
        companyErrors['code'] = {err:true,msg: '验证码不正确'}
      }
      this.setState({
        companyErrors
      })
    }
  }
  render() {
    const {headers, activeType, fileContent, companyErrors,codeDisabled, codeText} = this.state
    return (
      <>
        <Head>
          <title>泰迪熊移动—号码认证|申诉|平台|查询|标记</title>
          <meta name="keywords" content="企业号码认证,标记取消,号码识别" />
          <meta name="description" content="通话时显示专属商企名片、 商企名片将进入中国庞大黄页库。 超过4亿级用户终端宣传显示。若您的号码变更或被错误显示，请号码所有人提交申诉。"/>
        </Head>

        <div className="form">
                <div className="form__item form__item--required">
                  <div className="form__item__label">申诉号码</div>
                  <div className="form__item__input">
                    <input placeholder="仅支持手机号，如需申诉座机号请转到企业申诉入口" type="text" onChange={this.companyFormChange.bind(this, 'phone')} />
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
                <div className="form__item form__item--required">
                  <div className="form__item__label">申诉人姓名</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的姓名" type="text" onChange={this.companyFormChange.bind(this, 'name')} />
                    {companyErrors['name']?.err && <span className={'errMsg'}>{companyErrors['name'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">申诉原因</div>
                  <div className="form__item__input">
                    <input placeholder="请说明您的申诉原因" type="text" onChange={this.companyFormChange.bind(this, 'reason')} />
                    {companyErrors['reason']?.err && <span className={'errMsg'}>{companyErrors['reason'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">联系方式</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" type="text" onChange={this.companyFormChange.bind(this, 'contactPhone')} />
                    {companyErrors['contactPhone']?.err && <span className={'errMsg'}>{companyErrors['contactPhone'].msg}</span>}
                  </div>
                </div>
                <div className="form__item" onClick={this.companyFormSubmit.bind(this, 'person')}>
                  <div className="form__item__btn">确认提交</div>
                </div>
              </div>

        <NotificationSystem ref={this.notificationSystem} />
        <style jsx>{styles}</style>
      </>
    )
  }
}
