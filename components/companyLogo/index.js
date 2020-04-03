import React from 'react'
import styles from './index.less'

export default class CompanyLogo extends React.Component{
  constructor(props){
    super(props)
  }

  state={
    styleType:{
      0:"#C1C1C1",
      1:"#DCDCDC",
      2:'#ECECEC',
      3:'#EfEfEf'
    }
  }

  render() {
    const {styleType} = this.state
    const {styleNum, logoSrc} = this.props
    return (
      <>
        <div className="company-logo" style={{backgroundColor:styleType[styleNum % 4]}}>
          {logoSrc && <img src={logoSrc} alt=""/>}
        </div>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
