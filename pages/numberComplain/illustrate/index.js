import React from 'react'
import Link from 'next/link'


export default class Illustrate extends React.Component {

  componentDidMount() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <>
        <div className={'tips-wrap w'}>
          <h2>申诉说明</h2>
          <p>1.为什么我经常接到骚扰电话，但显示“号码识别服务由泰迪熊移动提供/数据由泰迪熊移动提供”？</p>
          <p>答： 您使用的手机支持陌生号码智能识别功能，此服务由泰迪熊移动提供。温馨提示：如遇到此类电话，提醒您谨慎接听。</p>
          <p>2.什么是名称展示？</p>
          <p>答：拨打号码时，显示“某公司/店铺的名称”。例如：“北京泰迪熊移动科技有限公司”或“泰迪熊”。</p>
          <p>3.什么是标记展示?</p>
          <p>答：拨打号码时，显示“被多少人标记为某个内容”。例如：“被20人标记为广告推销”。</p>
          <p>4.为什么拨打号码时，显示“某公司/店铺的名称”。例如：“北京泰迪熊移动科技有限公司”或“泰迪熊”?</p>
          <p>答： 这是泰迪熊移动基于号码大数据为企业提供的移动端品牌展示服务。</p>
          <p>5、假如我的号码被标记了，例如：“快递送餐/广告推销”,数据由泰迪熊移动提供，需要如何处理？</p>
          <p>答：号码标识问题可进入泰迪熊移动官网：<a href="https://www.teddymobile.cn">https://www.teddymobile.cn</a>进行处理;具体步骤:官网首页--号码标识--号码申诉--个人/企业提交申诉（座机号码需要加区号）。</p>
          <p>6、号码申诉是否收费?</p>
          <p>答：通过泰迪熊移动进行号码申诉，不收取任何费用。</p>
          <p>7、号码申诉提交后，处理时效是多久？</p>
          <p>答：收到您的申诉后，我们的工作人员会在3-5个工作日内处理完成。</p>
          <p>8、我的号码申诉已成功，为什么号码还有展示？</p>
          <p>答：您收到申诉成功的短信通知后，需要3-5个工作日的同步时间。</p>
          <p>9、号码标记申诉失败，需如何处理？</p>
          <p>答：申诉回复的短信，会告知您申诉失败的原因。请您根据驳回原因进行修正，并重新申请。 </p>
        </div>
        <style jsx>
          {
            `

                  .tips-wrap{

                    max-width:800px;
                    padding:60px 30px 0px;
                    color: #717171;
                    font-size: 14px;
                    line-height: 30px;
                    margin: 0 auto 100px;

                    h2 {
                      font-size:20px;
                      font-weight:bold;
                      text-align:center;
                      margin-bottom:40px;
                    }
                    p:nth-child(odd){
                      font-weight: bold;

                    }
                  }


                  `
          }
        </style>
      </>
    )
  }
}
