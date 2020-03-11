import React from 'react'
import styles from './index.less'

export default class SolutionCard extends React.Component{
  constructor(props){
    super(props)

  }

  render() {
    const {src, title} =  this.props
    return (
      <>
       <div className="solution-card">
         <div className="pic-wrap">
           <img src={src} alt=""/>
         </div>
         <p>{title}</p>
       </div>
        <style jsx>
          {styles}
        </style>
      </>
    )
  }
}
