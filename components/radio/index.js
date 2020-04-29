import React,{ useState } from "react";
import styles from './index.less'


export default class Radio extends React.Component {

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
        <label className={`radio-wrapper ${checked?'radio-wrapper-checked':''}`}>
          <span className={`radio ${checked?'radio-checked':''}`}>
          <input type="radio" className="radio-input" onChange={this.handleChange}  checked={checked} />
          <span className="radio-inner"></span>
          </span>
          <span>{this.props.children}</span>
        </label>
        <style jsx>{styles}</style>
      </>
  )
  }
  }

Radio.Group = (props)=>{
    const { options = [],onChange = ()=>{} } = props
    const [currentChecked,setCurrentChecked] = useState(props.defaultValue)
    onChange(options[currentChecked])
    const handleChange = (idx) =>{
      onChange(options[idx])
      setCurrentChecked(idx)
    }

    return (
      <>
        {
          options.map((i,idx)=>{
            return <Radio key={idx} checked={currentChecked == idx} onChange={handleChange.bind(this,idx)}>{i}</Radio>
          })
        }
      </>
    )

}
