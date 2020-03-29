import React from 'react'
import styles from './index.less'

export default class Footer extends React.Component {

  privacyStatementShow(){
    this.setState({

    })
  }

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
                  <li>关于泰迪熊移动</li>
                  <li>
                    <a href="/about">公司介绍</a>
                  </li>
                  <li>
                    <a href="/join">加入我们</a>
                  </li>
                  <li onClick={e=> this.privacyStatementShow()}>隐私申明</li>
                  <li>
                    <a href="/numberSign">申诉通道</a>
                  </li>
               </ul>
               <ul className="company__item company__link">
                 <ul>
                   <li>友情链接</li>
                   <li>
                      <div className="friendly">OPPO</div>
                      <div className="friendly">VIVO</div>
                      <div className="friendly">联想</div>
                      <div className="friendly">魅族</div>
                      <div className="friendly">小米</div>
                      <div className="friendly">一加</div>
                      <div className="friendly">Alios</div>
                      <div className="friendly">乐视</div>
                      <div className="friendly">金立</div>
                      <div className="friendly">中国移动</div>
                      <div className="friendly">中国联通</div>
                      <div className="friendly">中国电信</div>

                   </li>
                 </ul>
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
