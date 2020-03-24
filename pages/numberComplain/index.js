import {Component} from 'react'
import styles from './index.less'

export default class NumberComplain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headers: [
        {
          name: '企业号码申诉通道',
          active: true,
          type: 'company'
        },
        {
          name: '个人用户号码申诉通道',
          active: false,
          type: 'personal'
        }
      ],
      activeType: 'company'
    }
  }
  headerItemClick = (idx, row) => {
    const {headers} = this.state 
    headers.forEach((item, index) => {
      if(index === idx) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.setState({
      headers: [...headers],
      activeType: row.type
    })
  }
  render() {
    const {headers, activeType} = this.state
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            {/* 认证通道 */}
          </div>
        </div>
        <div className="complain-wrap">
          <div className="complain-bg"></div>
          <div className="complain w">
            <div className="complain__header clearfix">
              {headers.map((item, idx) => (
                <div key={idx} className={`complain__header__item ${item.active ? 'active' : ''}`} onClick={this.headerItemClick.bind(this, idx, item)}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="complain__content">
             {activeType === 'company' &&  <div className="form">
                <div className="form__item">
                  <div className="form__item__label">申诉号码</div>
                  <div className="form__item__input">
                    <input placeholder="输入号码，如果是座机号请加上区号" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉人手机号</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您最常用的手机号，以便我们及时联系并申诉" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">验证码</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的手机验证码" type="text" />
                    <a className="form__item__input__code">获取验证码</a>
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">添加证明</div>
                  <div className="form__item__input form__item__input--v">
                    <div className="form__item__input__item">
                      <input placeholder="身份证正面照" type="text" />
                      <div className="upload">
                        <img src="/static/images/numberSign/upload-icon.png" />
                        <span>选择文件</span>
                      </div>
                    </div>
                    <div className="form__item__input__item">
                      <input placeholder="号码归属证明" type="text" />
                      <div className="upload">
                        <img src="/static/images/numberSign/upload-icon.png" />
                        <span>选择文件</span>
                      </div>
                    </div>
                    <div className="form__item__input__item">
                      <input placeholder="其他证明" type="text" />
                      <div className="upload">
                        <img src="/static/images/numberSign/upload-icon.png" />
                        <span>选择文件</span>
                      </div>
                    </div>
                  </div>  
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉企业全称</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的企业全称" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉原因</div>
                  <div className="form__item__input">
                    <input placeholder="请说明您的申诉原因" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">联系方式</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">联系邮箱/QQ</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系邮箱及QQ" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__btn">确认提交</div>
                </div>
              </div>}

              {
                activeType === 'personal' &&  <div className="form">
                <div className="form__item">
                  <div className="form__item__label">申诉号码</div>
                  <div className="form__item__input">
                    <input placeholder="输入号码，如果是座机号请加上区号" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">验证码</div>
                  <div className="form__item__input">
                    <input placeholder="请输入您的手机验证码" type="text" />
                    <a className="form__item__input__code">获取验证码</a>
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉人姓名</div>
                  <div className="form__item__input">
                    <input placeholder="请填写您的姓名" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">申诉原因</div>
                  <div className="form__item__input">
                    <input placeholder="请说明您的申诉原因" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__label">联系方式</div>
                  <div className="form__item__input">
                    <input placeholder="请留下您的联系电话，以便我们能够及时为您提供服务" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__btn">确认提交</div>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    )
  }
}