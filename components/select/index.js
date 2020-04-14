import React from "react";
import styles from './index.less'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }


  state = {
    opened:false,
    currentValue:null
  }

  handleSelectWrapClick = ()=>{
    const {opened} = this.state
    this.setState({
      opened:!opened
    })
  }

  handleOptionClick = (option) =>{
    const {currentVlaue} = this.state
    if(currentVlaue !== option.value){
      this.setState({
        currentValue:option.value,
        currentLabel:option.label
      })
    }
  }

  handleMouseLeave = ()=>{
    const {opened} = this.state
    if(opened){
      this.setState({
        opened:false
      })
    }
  }

  render() {
    const {opened,currentValue,currentLabel} = this.state
    const {options = [],placeholder = '请选择'} = this.props
    const optRes = options.map(i =>{
      if(typeof i === 'string'){
        return {label:i,value:i}
      }else {
        return i
      }
    })
    return (
      <>
        <div className={`select-wrap ${opened? 'active':''}`} onMouseLeave={e=>this.handleMouseLeave()} onClick={e=>{this.handleSelectWrapClick()}}>
          {
            currentLabel || placeholder
          }
          <div className="options" style={{height: opened?170:0}}>
            {
              optRes.map((i,idx)=>{
                return (
                  <div className={`option ${currentValue === i.value? 'active':''}`} key={idx} onClick={e => this.handleOptionClick(i)}>
                    {
                      i.label
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
