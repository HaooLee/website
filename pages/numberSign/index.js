import {Component} from 'react'
import styles from './index.less'
import Head from 'next/head'
import React from "react";


export default class NumberSign extends Component {

  render() {
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
        <div className="w">
          <div className="sign clearfix">
            <div className="sign__item">
              <img className="sign__item__img" src="http://img.teddymobile.cn/www/images/numberSign/authentication.png" />
              <div className="sign__item__info">
                <p className="sign__item__info__title">企业号码认证</p>
                <p className="sign__item__info__desc">通话时显示专属商企名片。 商企名片将进入中国庞大黄页库。 超过3亿级用户终端宣传显示。</p>
              </div>
              <a className="sign__item__btn" href="/numberAuth">立即申请</a>
            </div>
            <div className="sign__item">
              <img className="sign__item__img" src="http://img.teddymobile.cn/www/images/numberSign/complain.png" />
              <div className="sign__item__info">
                <p className="sign__item__info__title">号码申诉</p>
                <p className="sign__item__info__desc">若您的号码变更或被错误显示，请号码所有人提交申诉。</p>
              </div>
              <a className="sign__item__btn" href="/numberComplain">立即申诉</a>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
