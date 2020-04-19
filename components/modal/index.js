import React from 'react'
import styles from './index.less'

export default class Modal extends React.Component{
  constructor(props){
    super(props)
    this.state.visible = props.visible
  }

  state={}
  touchmove = e =>{
    e.stopPropagation()
    e.preventDefault()
  }

  componentWillReceiveProps({visible}, nextContext) {
    if(this.state.visible !== visible){
      this.setState({
        visible
      })
    }
  }

  componentDidMount() {
    document.getElementById("modal-mask").addEventListener('touchmove', this.touchmove, { passive: false })
    document.getElementById("modal-mask").addEventListener('scroll', this.touchmove, { passive: false })
  }

  componentWillUnmount() {
    document.getElementById("modal-mask").removeEventListener('touchmove', this.touchmove,)
    document.getElementById("modal-mask").removeEventListener('scroll', this.touchmove,)
  }

  handleCloseClick = () =>{
   if( this.props.onCancel ){
    this.props.onCancel()
     return
   }
    this.setState({
      visible:false
    })
  }

  render(){
    const {title,children} = this.props
    const {visible} = this.state
    return (
      <>
        {/* */}
        <div style={{display:visible?'block':'none'}} className="modal-mask" id="modal-mask" >
          <div className="modal-wrap">
            <div className="close" onClick={()=>this.handleCloseClick()}>×</div>
            {title && <div className="title">{title}</div>}
            {
              children
            }
          </div>

        </div>
        <style jsx>{styles}</style>
      </>
    )
  }

}
