import {Component} from 'react'
import styles from './index.less'

export default class NumberComplain extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            {/* 认证通道 */}
          </div>
        </div>
        <div className="complain-wrap">
          <div className="complain-bg"></div>
          <div className="complain w">
            <div className="complain__header clearfix">
              <div className="complain__header__item active">
              企业号码申诉通道
              </div>
              <div className="complain__header__item">
              个人用户号码申诉通道
              </div>
            </div>
            <div className="complain__content">
              <div className="form">
                <div className="form__item clearfix">
                  <div className="form__item__label">申诉号码</div>
                  <div className="form__item__input">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}