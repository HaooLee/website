import React, { Component, createRef } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'
import styles from './index.less'

const eventKeys = ["ps-scroll-y", "ps-scroll-x", "ps-scroll-up", "ps-scroll-down", "ps-scroll-left", "ps-scroll-right", "ps-y-reach-start", "ps-y-reach-end", "ps-x-reach-start", "ps-x-reach-end"]

const defaultConfig = {wheelPropagation: true}
export default class Scroller extends Component {

  constructor (props) {
    super(props)
    this.scrollRef = createRef()
    this.ps = null
    this.config = {...defaultConfig, ...this.props.scrollOption}
  }

  static defaultProps = {
    scrollToX: 0,
    scrollToY: 0,
  }

  componentDidMount () {
    console.log(this.config)
    this.ps = new PerfectScrollbar(this.scrollRef.current, this.config)
    this.addEventsListener()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.scrollToX !== this.props.scrollToX) {
      this.scrollRef.current.scrollLeft = this.props.scrollX
    }
    if (prevProps.scrollToY !== this.props.scrollToY) {
      this.scrollRef.current.scrollTop = this.props.scrollY
    }
  }

  componentWillUnmount () {
    this.removeEventsListener()
    this.ps.destroy()
  }

  componentDidUpdate () {
    this.ps && this.ps.update()
  }

  addEventsListener () {
    const el = this.scrollRef.current
    eventKeys.forEach(key => {
      const camelCaseKey = `on-${key}`.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
      if (typeof this.props[camelCaseKey]) {
        el.addEventListener(key, this.props[camelCaseKey])
      }
    })
  }

  removeEventsListener () {
    const el = this.scrollRef.current
    eventKeys.forEach(key => {
      const camelCaseKey = `on-${key}`.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
      if (typeof this.props[camelCaseKey]) {
        el.removeEventListener(key, this.props[camelCaseKey])
      }
    })
  }

  render () {
    return (
      <div className="scroll-wrap" ref={this.scrollRef}>
        {this.props.children}
        <style lang="less" jsx>{styles}</style>
      </div>
    )
  }
}