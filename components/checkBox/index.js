import React from "react";
import styles from './index.less'


export default class CheckBox extends React.Component {

  constructor(props) {
    super(props)
    this.state.checked = !!props.checked
  }

  state = {

  }

  componentWillReceiveProps({checked},_) {
    if(this.state.checked !== checked){
      this.setState({
        checked
      })
    }
  }

  handleChange = (e) =>{
    const {onChange=()=>{}} = this.props
    onChange(e.target.checked)
    this.setState({
      checked:e.target.checked
    })
  }

  render() {
    const {checked} = this.state
    return (
      <>
        <label className={`checkbox-wrapper ${checked?'checkbox-wrapper-checked':''}`}>
          <span className={`checkbox ${checked?'checkbox-checked':''}`}>
          <input type="checkbox" className="checkbox-input" onChange={this.handleChange}  checked={checked} />
          <span className="checkbox-inner"></span>
          </span>
          <span>{this.props.children}</span>
        </label>
        <style jsx>{styles}</style>
      </>
  )
  }
  }

CheckBox.Group = (props)=>{
    const { options = [],onChange = ()=>{} } = props
    let selection = []
    const handleChange = (idx, checked) =>{
      if(checked){
        selection.push(options[idx])
      }else {
        selection = selection.filter(i=> i !== options[idx])
      }
      onChange(selection)
    }

    return (
      <>
        {
          options.map((i,idx)=>{
            return <CheckBox key={idx} checked={false} onChange={handleChange.bind(this,idx)}>{i}</CheckBox>
          })
        }
      </>
    )

}
