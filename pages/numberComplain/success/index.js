import React from 'react'
import Link from 'next/link'


export default class Success extends React.Component {

  componentDidMount() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <>
        <div className={'success-wrap'}>
          <img src="/static/images/success.png" alt=""/>
          <p className={'title'}>号码申诉提交成功。</p>
          <p className={'desc'}>号码申诉提交成功，请耐心等待3-7个工作日的审核时间。审核结果将以短信告知，请您注意查收。</p>

        </div>
        <style jsx>
          {
            `
                  .success-wrap{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    padding:245px 0;
                    .title {
                      width:330px;
                      height:42px;
                      margin-top:30px;
                      font-size:30px;
                      font-weight:400;
                      color:rgba(51,51,51,1);
                      line-height:42px;
                      text-align:center;
                    }
                    .desc {
                      width:540px;
                      height:28px;
                      font-size:20px;
                      margin-top:30px;
                      font-weight:400;
                      color:rgba(51,51,51,1);
                      line-height:28px;
                      text-align:center;
                    }
                  }
                  @media screen and (max-width: 980px) {
                    .success-wrap{
                      display: flex;
                      justify-content: center;
                      flex-direction: column;
                      align-items: center;
                      padding:145px 0;
                      .title {
                        height:42px;
                        margin-top:30px;
                        font-size:20px;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:42px;
                        text-align:center;
                      }
                      .desc {
                        width:auto;
                        height:28px;
                        font-size:12px;
                        margin-top:30px;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:28px;
                        text-align:center;
                      }
                    }
                  }

                  `
          }
        </style>
      </>
    )
  }
}
