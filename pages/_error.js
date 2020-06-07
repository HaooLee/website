import React from 'react'
import Link from 'next/link'


export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <>
        <div className={'error-wrap'}>
          <img src="/static/images/404.jpg" alt=""/>
          <p>1. 您访问的地址不存在，请确认网页地址是否正确。</p>
          <p>2. 网页地址正确，可能系统正在更新，请稍后再试。</p>
          <p>3. 如果以上方法不能解决，请联系网站客服。</p>
          <p>了解泰迪熊移动：<Link href="https://www.teddymobile.cn"><a>https://www.teddymobile.cn/</a></Link></p>

        </div>
        <style jsx>
          {
            `
                  .error-wrap{
                    padding-bottom:100px;
                    img{
                      display:block;
                      height:400px;
                      margin:auto;
                    }
                    p {
                      color:#717171;
                      width:350px;
                      margin:auto;
                      line-height:30px;
                      a {
                        color:#0692e0;
                      }
                    }

                  }
                  @media screen and (max-width: 980px) {
                    .error-wrap {
                      img {
                        width:100%;
                        height:auto;
                      }
                      p {
                        width:290px;
                        a {
                          color:#0692e0;
                        }
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
