import React from 'react'
import styles from './index.less'
import {connect} from "react-redux";

@connect(({floatWindowVisible})=>({visible:floatWindowVisible}))
export default class ProductBanner extends React.Component {

  showModal = () => {
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
  }

  render() {
    const {src, title, desc, customClassName} = this.props
    return (
      <>
        <section className={`banner ${customClassName}`}>
          <div className="banner-content w">
            <div className="banner__desc">
              <h1 className="banner__desc__title">{title}</h1>
              <p className="banner__desc__content">{desc}</p>
              <div className="buttons clearfix">
                {/* <a href="" className="watch-video">观看视频</a> */}
                <a onClick={this.showModal} className="more">马上合作</a>
              </div>
            </div>

            <img className="banner__img" src={src} />
          </div>
        </section>
        <style jsx>{styles}</style>
      </>
    )
  }
}
