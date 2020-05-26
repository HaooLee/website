import React from 'react'
import styles from './index.less'

export default class Footer extends React.Component {

  state={
    isModalShow:false
  }

  privacyStatementShow(){
    this.setState({
      isModalShow:true
    })
  }

  privacyStatementHide(){
    this.setState({
      isModalShow:false
    })
  }

  render() {
    const {isModalShow} = this.state
    return (
      <>
        <footer className="footer-wrap">
          <div className="mask" id="mask" style={{display: isModalShow? 'block':'none'}} >
            <div className="statement">
              <h2>用户隐私权保护声明</h2>
              <a onClick={()=>this.privacyStatementHide()} className="close" id="close">×</a>
              <p>用户隐私权保护声明（简称“本隐私政策”）由北京泰迪熊移动科技有限公司（简称“公司”）和用户签订（简称“您”）。公司深知个人信息对您的重要性，我们将按法律法规的要求，并会尽全力保护您的隐私。您在向公司提交个人或隐私数据之前，请您必审慎阅读、充分理解本隐私政策各条款的内容，特别是免除或者限制责任的条款阅读、了解并同意本隐私政策。如果您不同意本隐私政策的任何内容，您应立即停止使用公司的产品和/或服务。当您使用公司任一产品和/或服务时，则表示您同意且完全理解本隐私政策现有及其可能随时更新的全部内容</p>
              <h3>1.本隐私政策的使用范围</h3>
              <p>公司旗下所有的产品和/或服务（包括公司所有的产品和/或服务以及未设独立隐私政策的公司相关产品和/或服务）均适用本隐私政策，但某些特定产品和/或服务还将适用特定的隐私政策，我们将在向您提供这些特定产品和/或服务前说明。</p>
              <p>上述特定产品和/或服务的隐私政策构成本隐私政策的一部分，如与本隐私政策有不一致之处，以特定产品和/或服务的隐私政策为准。</p>
              <p>除非本隐私政策另有明确所指，本隐私政策不适用于通过我们的产品和/或服务而接入的由第三方独立为您提供的产品和/或服务的情形，您可自行选择是否访问、使用第三方提供的产品和/或服务。请注意，如果您使用第三方的产品和／或服务时向其提供您的个人信息，您的信息应当适用该第三方的隐私声明或类似政策，我们对任何第三方不当使用或披露由您提供的信息不承担任何法律责任。</p>
              <h3>2.信息收集</h3>
              <p>为了向您提供更好的用户服务，公司会在您自愿选择服务/或提供信息的情况下系统自动存储必要信息。我们会采取合理的实际措施和技术措施，以保护所收集的与产品和/或服务有关的信息。请注意，虽然公司采取了合理的措施保护，但是互联网上不排除因黑客行为、第三人恶意导致信息遭他人非法使用或泄露，此类情况公司不作出任何承诺与保证。</p>
              <h3>3.我们收集的信息包括</h3>
              <p>(1) 日志信息。当您使用公司服务时，服务器会自动记录一些信息，例如您对我们服务的使用情况、IP地址、所访问服务的URL、终端设备的类型以及访问日期和时间等。</p>
              <p>(2) 设备信息。当您使用具有定位功能的服务时，系统会自动处理有关设备的粗略和/或精确位置信息。</p>
              <p>(3) 联系人信息。当您使用公司产品和/或服务时，提供的企业证照、申请人邮箱、电话等，及号码申诉时，提供的姓名、身份证信息、号码归属证明等。</p>
              <p>(4) 以上数据信息都采用匿名的方式。同时，我们也会对信息采取加密处理，保证信息的安全性。</p>
              <h3>4.我们会将收集的信息用于以下目的</h3>
              <p>(1) 通过使用收集的信息，公司会向您提供个性化的服务，还可以帮助公司改进产品和/或服务，并用于开发新的产品和/或服务。</p>
              <p>(2) 公司会以高度的勤勉义务对待这些信息，除非事先获得您的授权或本隐私政策另有规定外，不会将这些信息对外公开或向第三方提供（公司关联公司除外）。</p>
              <p>(3) 公司仅为实现本隐私权政策中声明之目的，可能会与合作伙伴共同向您提供您所要求的服务或者共同向您展示您可能感兴趣的内容。
                在信息为该项产品和/或服务所必须的情况下，您同意公司可与其分享必要的信息。并且，公司会要求其确保数据安全并且禁止用于任何其他用途。除此之外，公司不会向任何无关第三方（公司关联公司除外）提供或分享信息。</p>
              <p>(4) 公司可能会对产品使用情况进行统计。同时，公司可能会与公众分享这些统计信息，以展示我们服务的整体使用趋势，这些统计信息不包含您的任何身份识别信息</p>
              <p>(5)
                在如下情况下，公司可能会披露您的信息：a.事先获得您的授权；b.根据法律、法规、法律程序的要求或政府主管部门的强制性要求；c.以学术研究或公共利益为目的；d.出于维护您或其他个人的生命、财产等重大合法权益；e.为维护公司的合法权益，例如查找、预防、处理欺诈或安全方面的问题；f.符合相关服务条款或使用协议的规定。</p>
              <h3>5.信息安全</h3>
              <p>(1)
                公司会采取各种预防措施来保护您的个人信息，以保障您的个人信息免遭丢失、盗用和误用，以及被擅自取阅、披露、更改或销毁。为确保您个人信息的安全，我们有严格的信息安全规定和流程，并有专门的信息安全团队在公司内部严格执行上述措施。</p>
              <p>(2) 公司会采取合理可行的措施只收集可以达到已告知目的的最少量的个人信息。公司只会在达成本政策所述目的所需的期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。</p>
              <p>(3) 互联网并非绝对安全的环境，在不幸发生个人信息安全事件后，我们将按照法律法规的要求向您告知。</p>
              <h3>6.未成年人信息保护</h3>
              <p>公司非常重视对未成年人信息的保护。若您是18周岁以下的未成年人，在使用公司的服务前，应事先取得您的家长或法定监护人的同意。</p>
              <h3>7.修订</h3>
              <p>公司随时会对本隐私权保护声明进行修订。您可以随时在公司官方页面（<a href="//www.teddymobile.cn/"> http://www.teddymobile.cn/ </a>）上查看最新版本的本隐私政策。对于重大变更，公司还会提供更为显著的通知（包括会通过重点标记、官网公示等方式进行通知）。在该种情况下，若您继续使用公司的服务，即表示同意受经修订的本政策的约束。如果您还有其他问题和建议，请联系北京泰迪熊移动科技有限公司。公司会始终致力于充分保护用户信息，并为您提供更优质的体验和服务。
              </p>
            </div>
          </div>
          <div className="w">
             <div className="company-info clearfix">
               <ul className="info">
                 <li>
                   <img src="http://img.teddymobile.cn/www/images/qr.png" alt=""/>
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
                    <a href="/scenicProduct">5G场景消息</a>
                  </li>
                  <li>
                    <a href="/numberProduct">号码认证</a>
                  </li>
                  <li>
                    <a href="/quickAppProduct">快应用</a>
                  </li>
                  <li>
                    <a href="/dspProduct">全域场景增量营销平台</a>
                  </li>
               </ul>
               <ul className="company__item company__intro">
                  <li>关于我们</li>
                  <li>
                    <a href="/about">公司介绍</a>
                  </li>
                  <li>
                    <a href="/join">加入我们</a>
                  </li>
                  <li onClick={e=> this.privacyStatementShow()} style={{cursor:'pointer'}}>隐私申明</li>
                  <li>
                    <a href="/numberComplain">申诉通道</a>
                  </li>
               </ul>
               <ul className="company__item company__link">
                 <ul>
                   <li>友情链接</li>
                   <li>
                      <div className="friendly"><a href="https://www.oppo.com/cn/">OPPO</a></div>
                      <div className="friendly">
                        <a href="https://www.vivo.com.cn/">vivo</a>
                      </div>
                     <div className="friendly">
                       <a href="http://www.alios.cn/">Alios</a>
                     </div>
                     <div className="friendly">
                       <a href="https://www.lenovo.com.cn/">联想</a>
                     </div>
                      <div className="friendly">
                        <a href="https://www.meizu.com/">魅族</a>
                      </div>
                     <div className="friendly">
                       <a href="http://www.10086.cn">中国移动</a>
                     </div>
                      <div className="friendly">
                        <a href="https://www.mi.com/">小米</a>
                      </div>
                      <div className="friendly">
                        <a href="https://www.oneplus.com/cn">一加</a>
                      </div>
                     <div className="friendly">
                       <a href="http://www.chinaunicom.com.cn/">中国联通</a>
                     </div>
                     <div className="friendly">
                       <a href="https://www.gionee.com/">金立</a>
                     </div>
                      <div className="friendly">
                        <a href="http://www.le.com/">乐视</a>
                      </div>
                      <div className="friendly">
                        <a href="http://www.chinatelecom.com.cn/">中国电信</a>
                      </div>

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
