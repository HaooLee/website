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
          <p className={'title'}>号码认证信息提交成功。</p>
          <p className={'desc'}>我们会尽快安排工作人员与您联系，为您提供号码认证服务。</p>

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
