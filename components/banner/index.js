import Slider from "react-slick";
import React from "react";
import styles from './index.less'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state.banners = [
      {
        src: '/static/images/banner1.png',
        color: '#E94846'
      },
      {
        src: '/static/images/banner1.png',
        color: '#E94846'
      }
    ]
  }


  state = {
    carouselBgColor: '#fbf0de'
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // pauseOnFocus: true,
      dotsClass: 'slick-dots hhb-dot',
      // beforeChange: (oi, ni) => {
      //   this.setState({
      //     carouselBgColor: banners[ni].color
      //   })
      // }
    }

    const {banners} = this.state
    return (
      <div className="carousel">
          <div className="banner-wrap">
            <Slider {...settings}>
              {
                banners.map(i => {
                  return (
                    <div className="banner-item" style={{background: `url(${i.src}) no-repeat center center`}} key={i}>

                    </div>
                  )
                })
              }
            </Slider>
        </div>
        <style lang="less" jsx>{styles}</style>
      </div>
    )


  }
}
