import {Component} from 'react'
import axios from 'axios'
import NotificationSystem from 'react-notification-system'
import styles from './index.less'
import Head from 'next/head'
import React from "react";

export default class NumberComplainCompany extends Component {
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
      activeType: 'company',
      fileContent: {},
      companyErrors: {},
      codeText:'获取验证码',
      codeDisabled:false,
    }
  }
  notificationSystem = React.createRef()

  companyValues = {}

  companyRules = {
    // 'phone': [{required:true,msg:'申诉企业不能为空'}],
    'name': [{required:true,msg:'申诉企业不能为空'}],
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
    if(type === 'person') {
      delete this.companyValues.code
      delete this.companyRules.contactOther
    }
    if(this.validate(this.companyValues, this.companyRules)){
      console.log(this.companyValues)
      let params = new FormData()
      Object.entries(this.companyValues).forEach((item, index) => {
        params.append(item[0], item[1])
      })
      const {data} = await axios.post( `/company/numberComplain`, params)
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
    const {contactPhone} = this.companyValues
    if(this.checkPhone(contactPhone)){
      companyErrors['contactPhone'] = {}
      this.setState({
        companyErrors
      })
      const {data} = await axios.post(`/sms/send`, {
        phone:contactPhone
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
    const {code, contactPhone} = this.companyValues
    console.log(code, contactPhone)
    if(code && this.checkPhone(contactPhone)) {
      const {data} = await axios.post('/sms/verify', {code, phone:contactPhone})
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
            <div className="form">
                <div className="form__item form__item--required">
                  <div className="form__item__label">申诉号码</div>
                  <div className="form__item__input">
                    <input placeholder="输入号码，如果是座机号请加上区号" onChange={this.companyFormChange.bind(this, 'phone')} type="text" />
                    {companyErrors['phone']?.err && <span className={'errMsg'}>{companyErrors['phone'].msg}</span>}
                  </div>
                </div>
                 <div className="form__item form__item--required">
                  <div className="form__item__label">申诉人手机号</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您最常用的手机号，以便我们及时联系并申诉"  onChange={this.companyFormChange.bind(this, 'contactPhone')} type="text" />
                    {companyErrors['contactPhone']?.err && <span className={'errMsg'}>{companyErrors['contactPhone'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">验证码</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的手机验证码" type="text" onChange={this.companyFormChange.bind(this, 'code')} onBlur={this.smsVerify} />
                    <button className="form__item__input__code" onClick={this.getCode} disabled={codeDisabled}>{codeText}</button>
                    {companyErrors['code']?.err && <span className={'errMsg'}>{companyErrors['code'].msg}</span>}
                  </div>
                </div>
                <div className="form__item form__item--required">
                  <div className="form__item__label">添加证明</div>
                  <div className="form__item__input form__item__input--v">
                    <div className="form__item__input__item">
                      <input placeholder="身份证正面照" type="text" disabled />
                      <div className="upload">
                        <img src="http://img.teddymobile.cn/www/images/numberSign/upload-icon.png" />
                        <input className="file"  onChange={this.fileChange.bind(this, 'idCard')} type="file" id="idCard"/>
                        <label htmlFor="idCard">选择文件</label>
                      </div>
                      {
                        fileContent['idCard'] && <div className="file-content">{fileContent['idCard']}</div>
                      }
                    </div>
                    <div className="form__item__input__item">
                      <input placeholder="号码归属证明" type="text" disabled />
                      <div className="upload">
                        <img src="http://img.teddymobile.cn/www/images/numberSign/upload-icon.png" />
                        <input className="file" onChange={this.fileChange.bind(this, 'numCard')} type="file" id="numCard"/>
                        <label htmlFor="numCard">选择文件</label>
                      </div>
                      {
                        fileContent['numCard'] && <div className="file-content">{fileContent['numCard']}</div>
                      }
                    </div>
                    <div className="form__item__input__item">
                      <input placeholder="其他证明" type="text" disabled />
                      <div className="upload">
                        <img src="http://img.teddymobile.cn/www/images/numberSign/upload-icon.png" />
                        <input className="file" onChange={this.fileChange.bind(this, 'otherCard')} type="file" id="otherCard"/>
                        <label htmlFor="otherCard">选择文件</label>
                      </div>
                      {
                        fileContent['otherCard'] && <div className="file-content">{fileContent['otherCard']}</div>
                      }
                    </div>
                  </div>
                </div>
                <div className="form__item form__item--no-margin form__item--required">
                  <div className="form__item__label">申诉企业全称</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的企业全称" type="text" onChange={this.companyFormChange.bind(this, 'name')} />
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
                {/*<div className="form__item form__item--required">*/}
                  {/*<div className="form__item__label">联系方式</div>*/}
                  {/*<div className="form__item__input">*/}
                    {/*<input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" type="text" onChange={this.companyFormChange.bind(this, 'contactPhone')} />*/}
                    {/*{companyErrors['contactPhone']?.err && <span className={'errMsg'}>{companyErrors['contactPhone'].msg}</span>}*/}
                  {/*</div>*/}
                {/*</div>*/}
                <div className="form__item form__item--required">
                  <div className="form__item__label">联系邮箱/QQ</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系邮箱及QQ" type="text" onChange={this.companyFormChange.bind(this, 'contactOther')} />
                    {companyErrors['contactOther']?.err && <span className={'errMsg'}>{companyErrors['contactOther'].msg}</span>}
                  </div>
                </div>
                <div className="form__item" onClick={this.companyFormSubmit.bind(this, 'company')}>
                  <div className="form__item__btn">确认提交</div>
                </div>
              </div>
        <NotificationSystem ref={this.notificationSystem} />
        <style jsx>{styles}</style>
      </>
    )
  }
}
