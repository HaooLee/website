import React from 'react'
import styles from './index.less'

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="w header-content">
            <a href="https://www.teddymobile.cn/" className="logo" title="泰迪熊移动">泰迪熊移动</a>
            <ul className="nav">
              <li className="nav-item">
                <a href="">首页</a>
              </li>
              <li className="nav-item">
                <a href="">产品</a>
              </li>
              <li className="nav-item">
                <a href="">解决方案</a>
              </li>
              <li className="nav-item">
                <a href="">案例</a>
              </li>
              <li className="nav-item">
                <a href="">代理加盟</a>
              </li>
              <li className="nav-item">
                <a href="">认证通道</a>
              </li>
              <li className="nav-item">
                <a href="">关于我们</a>
              </li>
            </ul>
          </div>
        </header>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
