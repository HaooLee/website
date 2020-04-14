import react from 'react'
import styles from './index.less'
import Modal from '@/components/modal';
import Select from '@/components/select'

export default class FloatWindow extends react.Component {
  state = {
    visible: false,
    options: [
      "医疗健康", "机械设备", "软件游戏", "教育培训", "商务服务", "装修装饰", "生活用品", "生活服务", "交通类", "电子电工", "化工及材料", "家用电器", "农林牧渔", "旅游及票务", "服装鞋帽", "休闲娱乐", "安全安保", "食品餐饮", "节能环保", "金融服务", "IT产品", "化妆品", "房地产", "通信服务", "办公文教", "图书音像", "母婴用品", "铃声短信", "彩票", "电子商务", "社交", "招聘", "资讯", "分类信息", "其他"]
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  onSubmit = values => {
    console.log(values)
  }

  formChange = () => {

  }

  render() {

    const {visible, options} = this.state

    return (
      <>
        <div className="floating_ck">
          <dl>
            <dd className="consult">
              <a>客服热线</a>
              <div className="floating_left"><span>400-680-6000</span></div>
            </dd>
            <dd className="words">
              <a onClick={() => this.showModal()} id="partnership_mask_show" rel="nofollow">合作加盟</a>

            </dd>
          </dl>
        </div>
        <Modal
          visible={visible}
          title={'合作加盟'}
        >
          <div className="form">
            <div className="form__item form__item--required">
              <div className="form__item__label">公司名称</div>
              <div className="form__item__input">
                <input placeholder="请输入公司名称" onChange={this.formChange.bind(this, 'company')} type="text"/>
              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">联系人</div>
              <div className="form__item__input">
                <input placeholder="请填写您的姓名" onChange={this.formChange.bind(this, 'name')} type="text"/>
              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">联系电话</div>
              <div className="form__item__input">
                <input placeholder="留下您最常用的联系电话,以便我们能及时为您提供服务" onChange={this.formChange.bind(this, 'name')}
                       type="text"/>
              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">所属城市</div>
              <div className="form__item__input">
                <input placeholder="留下您最常用的联系电话,以便我们能及时为您提供服务" onChange={this.formChange.bind(this, 'name')}
                       type="text"/>
              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">行业</div>
              <div className="form__item__input">
                <Select placeholder={"请选择行业类别"} options={options} onChange={this.formChange.bind(this, 'cate')}/>
              </div>
            </div>
            {/*<div className="form__item form__item--required">*/}
              {/*<div className="form__item__label">产品选项</div>*/}
              {/*<div className="form__item__input">*/}

              {/*</div>*/}
            {/*</div>*/}

          </div>

        </Modal>
        <style jsx>{styles}</style>
      </>
    )
  }
}
