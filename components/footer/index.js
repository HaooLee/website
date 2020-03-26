import React from 'react'
import styles from './index.less'

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-wrap">
          <div className="w">
             <div className="company-info clearfix">
               <ul className="info">
                 <li>
                   <img src="/static/images/qr.png" alt=""/>
                 </li>
                 <li>
                   客服电话：400-680-6000
                 </li>
                 <li>
                   客服邮箱：kefu@teddymobile.cn
                 </li>
                 <li>
                   商务邮箱：bd@teddymobile.cn
                 </li>
                 <li>
                   北京总部：北京市海淀区信息路甲28号7层D座7A3
                 </li>
               </ul>
               <div className="company__content">
               <ul className="company__item company__product">
                  <li>产品</li>
                  <li>
                    <a href="/intelligenceSms">智能短信</a>
                  </li>
                  <li>
                    <a href="/scenicProduct">场景消息</a>
                  </li>
                  <li>
                    <a href="/numberProduct">号码认证</a>
                  </li>
                  <li>
                    <a href="/quickAppProduct">快应用</a>
                  </li>
                  <li>
                    <a href="/dspProduct">DSP(全域场景营销平台）</a>
                  </li>
               </ul>
               <ul className="company__item company__intro">
                  <li>关于我们</li>
                  <li>公司介绍</li>
                  <li>
                    <a href="/join">加入我们</a>
                  </li>
                  <li>隐私申明</li>
                  <li>申诉通道</li>
               </ul>
               <ul className="company__item company__link">
                 <li>友情链接</li>
                 <li>OPPO</li>
                 <li>vivo</li>
                 <li>联想</li>
                 <li>魅族</li>
               </ul>
               </div>
             </div>
            <hr/>
            <div className="registered-NO">
              <span>Copyright &copy; 2014-2020 北京泰迪熊移动科技有限公司 </span><a href="http://www.beian.miit.gov.cn" target="_blank" rel="nofollow">京ICP备14051668号-2</a>
            </div>

          </div>
        </footer>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
