import {Component} from 'react'
import axios from 'axios'
import NotificationSystem from 'react-notification-system'
import NumberComplainCompany from '@/components/numberComplainCompany'
import NumberComplainPersonal from '@/components/numberComplainPersonal'
import styles from './index.less'
import Head from 'next/head'
import React from "react"
import Link from 'next/link'


export default class NumberComplain extends Component {
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

  render() {
    const {headers, activeType, fileContent, companyErrors,codeDisabled, codeText} = this.state
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
            <div style={{textAlign:'center',fontSize:18}}>
              <p style={{marginTop:30,marginBottom:10}}><Link href={'/numberComplain/illustrate'}>《申诉说明》</Link></p>
              <p><Link href={'/numberComplain/moreIllustrate'}>《企业大量号码标记申诉说明》</Link></p>
            </div>
            <div className="complain__content">
             {activeType === 'company' ? <NumberComplainCompany /> : <NumberComplainPersonal />}
            </div>

          </div>
        </div>
        <NotificationSystem ref={this.notificationSystem} />
        <style jsx>{styles}</style>
      </>
    )
  }
}
