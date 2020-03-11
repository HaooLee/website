import React from 'react'
import styles from './index.less'

export default class SectionCard extends React.Component{
  constructor(props){
    super(props)

  }

  render() {
    const {title, bgc, desc, children} =  this.props
    return (
      <>
        <section className="clearfix" style={{backgroundColor:bgc || '#fff'}}>
          <div className="w">
            <h2>{title}</h2>
            <p className="desc">{desc}</p>
            {children}
          </div>
        </section>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
