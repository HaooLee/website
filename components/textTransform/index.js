import React from 'react'
import styles from './index.less'

export default class TextTransform extends React.Component{
  constructor(props){
    super(props)
    this.state.textArr = props.texts.concat(props.texts).map(i=>i.split(''))
  }
  state={
    currentIndex:0,
    textArr:[],
    animationIndex:0,
    duration: 3000
  }

  componentDidMount() {
    this.changeCurrentIndex()
  }

  changeCurrentIndex(){
    const {currentIndex, textArr} = this.state
    setTimeout(()=>{
      this.setState({
        currentIndex: currentIndex + 1 === textArr.length ? 0 : currentIndex + 1
      })
      this.changeCurrentIndex()
    },this.state.duration)

  }


  render() {
    const {currentIndex,animationIndex,textArr} = this.state
    return (
      <>
        <span className="text-transform-wrap">
          {
            textArr[currentIndex].map((i,idx)=>{
              return <span className={currentIndex % 2 == 1?"in":"out"} style={{animationDelay:`${idx / 10}s`}} key={idx}>{i}</span>
            })
          }
        </span>
        <style jsx>
          {
            styles
          }
        </style>
      </>
    )
  }
}
