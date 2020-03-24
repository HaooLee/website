import {Component} from 'react'
import styles from './index.less'

export default class NumberSign extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            认证通道
          </div>
        </div>
        <div className="w">
          <div className="sign clearfix">
            <div className="sign__item">
              <img className="sign__item__img" src="/static/images/numberSign/authentication.png" />
              <div className="sign__item__info">
                <p className="sign__item__info__title">企业号码认证</p>
                <p className="sign__item__info__desc">通话时显示专属商企名片。 商企名片将进入中国庞大黄页库。 超过3亿级用户终端宣传显示。</p>
              </div>
              <div className="sign__item__btn">立即申请</div>
            </div>
            <div className="sign__item">
              <img className="sign__item__img" src="/static/images/numberSign/complain.png" />
              <div className="sign__item__info">
                <p className="sign__item__info__title">号码申诉</p>
                <p className="sign__item__info__desc">若您的号码变更或被错误显示，请号码所有人提交申诉。</p>
              </div>
              <div className="sign__item__btn">立即申请</div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}