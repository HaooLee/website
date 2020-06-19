import React from 'react'
import Link from 'next/link'
import Router from 'next/router'



export default class Illustrate extends React.Component {

  componentDidMount() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <>
        <div className={'tips-wrap w'}>
          <h2>企业大量号码标记申诉说明</h2>
          <p>1.通过企业官方邮箱将申诉资料发送至客服邮箱“kefu@teddymobile.cn”</p>
          <p>2.泰迪熊移动工作人员会尽快处理，并在7-15个工作日内，回复申诉邮件，告知申诉结果</p>
          <p>3.具体要求如下：</p>
          <p className={'indent'}>(1)邮件标题格式：企业大量号码标记申诉-公司名称-号码数量 如：企业大量号码标记申诉-泰迪熊移动科技-100</p>
          <p className={'indent'}>(2)申诉号码数量需100以上，如数量不满100，提交企业大量号码标记申诉不予受理</p>
          <p className={'indent'}>(3)申诉材料：</p>
          <p className={'indent-point'}>申诉号码需整理成表格的形式（需确认号码在泰迪熊移动有标识）</p>
          <p className={'indent-point'}>企业营业执照</p>
          <p className={'indent-point'}>申诉人需提供身份证、工作证明（申诉人身份证、工作证明，需为同一个人）</p>
          <p className={'indent-point'}>运营商开具的号码归属证明，如：开户过户单/缴费记录单/业务受理单/话费详单等</p>
          <p>注意：号码归属证明必须包含证明开具日期，电话号码、机主姓名/公司名称并加盖清晰的运营商公章</p>
          <p>4.请确保资料清晰完整，真实有效并严格按照上述要求发送申诉，否则将不予受理</p>
          <div className={'back'} onClick={()=>{Router.back()}}>返回</div>
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
                    p.indent{
                      text-indent:1em;
                    }
                    p.indent-point{
                      position:relative;
                      text-indent:2em;
                      :before{
                        position:absolute;
                        content:'';
                        width:5px;
                        height:5px;
                        background-color:#000;
                        display: block;
                        border-radius:3px;
                        left: 2%;
                        top: 50%;
                        transform: translateY(-50%);
                      }
                    }

                  }
                  .back{
                   width: 100px;
                    height: 40px;
                    border-radius: 5px;
                    margin: 30px auto;
                    background-color: #0189d3;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    font-size: 16px;
                    cursor: pointer;
                    &:hover {
                      opacity:.8;
                    }
                  }


                  `
          }
        </style>
      </>
    )
  }
}
