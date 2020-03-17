import React from 'react'
import styles from './index.less'

export default class SectionCard extends React.Component{
  constructor(props){
    super(props)

  }

  render() {
    const {title, bgc, desc, children, overflow, titleClass=''} =  this.props
    return (
      <>
        <section className="clearfix" style={{backgroundColor:bgc || '#fff'}}>
          <div className="w">
            <h2 className={titleClass}>{title}</h2>
            <p className="desc">{desc}</p>
            {!overflow && children}
          </div>
          {overflow && children}
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
