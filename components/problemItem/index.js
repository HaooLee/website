import React from 'react'
import styles from './index.less'
export default class ProblemItem extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    const {problems=[], customClassName=""} = this.props
    return (
      <>
          <div className={`w clearfix problem ${customClassName}`}>
            {
              problems.map((item, index) => (
                <div key={index} className={`problem-item`} style={{width: (100 / problems.length) + '%'}}>
                  <div className="problem-item__content">
                    <img src={item.src} />
                  </div>
                  <p className="problem-item__text">
                    {
                      Array.isArray(item.title)?item.title.map((i, idx)=><span key={idx}>{i}</span>):<span>{item.title}</span>
                    }
                  </p>
                </div>
              ))
            }
          </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
