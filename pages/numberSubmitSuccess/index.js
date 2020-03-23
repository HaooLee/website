import {Component} from 'react'
import styles from './index.less'

export default class SubmitSuccess extends Component {
  render() {
    return (
      <>
        <div className="w">
          <div className="submit-success">
            <div className="submit-success__img-wrap"><img className="submit-success__img" src="/static/images/numberSign/icon-submit.png" /></div>
            <p className="submit-success__text">号码认证信息提交成功。</p>
            <p className="submit-success__feedback">我们会尽快安排工作人员与您联系，为您提供号码认证服务。</p>
            <a className="submit-success__back">返回认证通道</a>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}