import React from "react";
import styles from './index.less'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }


  state = {
    timeLine:[
      {time:'2014',content:'泰迪熊移动成立'},
      {time:'2015',content:'获得58赶集千万天使轮投资 与主流手机厂商建立合作关系, 智能短信 号码识别产品'},
      {time:'2016',content:['完成A轮融资','成立上海分公司','公司团队成长100余人','用户数突破1亿']},
      {time:'2017',content:['完成B轮融资','用户数突破4亿']},
      {time:'2018',content:['8月用户数突破6亿','4月完成1.88亿元C轮融资','公司团队成长200余人']},
      {time:'2019',content:'3月用户数突破7亿'},
      ]
  }

  render() {
    const { timeLine } = this.state
    const top = timeLine.filter((i, idx)=>idx % 2)
    const bottom = timeLine.filter((i, idx)=>!(idx % 2))
    return (
      <>
        <div className="time-line">
          <div className="top clearfix">
            {
              top.map((i,idx)=>{
                return (
                  <div className="top-item" key={idx}>
                    <div className="content">
                      {
                      Array.isArray(i.content)? (i.content.map((item,index)=><p key={index}>{item}</p>)):(<span>{i.content}</span>)
                     }
                    </div>
                    <span className="time">{i.time}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="line-wrap">
            <span className="line"></span>
          </div>
          <div className="bottom clearfix">
            {
              bottom.map((i,idx)=>{
                return (
                  <div className="top-item" key={idx}>
                    <div className="content">{
                      Array.isArray(i.content)? (i.content.map((item,index)=><p key={index}>{item}</p>)):(<span>{i.content}</span>)
                    }</div>
                    <span className="time">{i.time}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="time-line-mobile">
          <ul className="time-line-wrap">
            {
              timeLine.map((i,idx)=>{
                return (
                  <li key={idx} className="time-line-item clearfix">
                    <span className="line"></span>
                    <div className="time-wrap">
                      <span className="time'">{i.time}</span>
                    </div>
                    <div className="content">
                      {
                        Array.isArray(i.content)?i.content.map((item, index) => <p key={index}>{item}</p>):<p>{i.content}</p>
                      }
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <style jsx>{styles}</style>
      </>

    )


  }
}
