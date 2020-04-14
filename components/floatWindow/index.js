import react from 'react'
import styles from './index.less'

export default class FloatWindow extends react.Component{

  render() {


    return (
      <>
        <div className="floating_ck">
          <dl>
            <dd className="consult">
              <a>客服热线</a>
              <div className="floating_left"><span>400-680-6000</span></div>
            </dd>
            <dd className="words">
              <a href="javascript:void(0);" id="partnership_mask_show" rel="nofollow">合作加盟</a>
            </dd>
          </dl>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}
