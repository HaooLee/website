import {Component} from 'react'
import styles from './index.less'

export default class SliderList extends Component {
  constructor(props) {
    super(props)
  }
  clickAction = (index, item) => {
    const {clickCallback} = this.props
    clickCallback && clickCallback(index, item)
  }
  render() {
    const {list=[]} = this.props
    return (
      <>
        <ul className="news__tab-bar">
          {list.map((item, index) => (
            <li key={index} className={`news__tab-bar__item ${item.active ? 'active' : ''}`} onClick={this.clickAction.bind(this, index, item)}>{item.name}</li>
          ))}
        </ul>
        <style jsx>{styles}</style>
      </>
    )
  }
}