import react from 'react'
import styles from './index.less'
import Modal from '@/components/modal';
import Select from '@/components/select'
import CheckBox from '@/components/checkBox'
import Radio from '@/components/radio'
import {connect} from 'react-redux';
import {floatWindowShow,floatWindowHide} from '@/store';

const CheckBoxGroup = CheckBox.Group
const RadioGroup = Radio.Group


@connect(({floatWindowVisible})=>({visible:floatWindowVisible}))
export default class FloatWindow extends react.Component {
  state = {
    // visible: false,
    options: [
      "医疗健康", "机械设备", "软件游戏", "教育培训", "商务服务", "装修装饰", "生活用品", "生活服务", "交通类", "电子电工", "化工及材料", "家用电器", "农林牧渔", "旅游及票务", "服装鞋帽", "休闲娱乐", "安全安保", "食品餐饮", "节能环保", "金融服务", "IT产品", "化妆品", "房地产", "通信服务", "办公文教", "图书音像", "母婴用品", "铃声短信", "彩票", "电子商务", "社交", "招聘", "资讯", "分类信息", "其他"],
    errors:{}
  }

  values = {}

  showModal = () => {
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
  }

  rules = {
    company:[{required:true,msg:'公司名称不能为空'}],
    contactPerson:[{required:true,msg:'联系人不能为空'}],
    contactPhone:[{required:true,msg:'联系电话不能为空'}],
    city:[{required:true,msg:'所属城市不能为空'}],
    trade:[{required:true,msg:'行业不能为空'}],
    product:[{required:true,msg:'行业不能为空'}],

  }

  validate = (data, rules) =>{
    try {
      Object.entries(rules).forEach((item,index)=>{
        item[1].forEach((i)=>{
          if(i.required){
            if(!data[item[0]]) {
              // throw new Error(i.message)
              const {errors} = this.state
              errors[item[0]] = {err:true,msg:i.msg}
              this.setState({
                errors
              })
            }else {
              const {errors} = this.state
              errors[item[0]] = {err:false}
            }
          }
        })
      })
    }catch (e) {

      return false
    }
    return true
  }

  onSubmit = () => {

    if(this.validate(this.values, this.rules)){
      console.log(this.values)
    }


  }

  formChange = (name, value) => {
    this.values[name] = value
  }
  hideModel = () => {
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_HIDE'})
  }
  render() {

    const { options, errors} = this.state
    const {visible} = this.props
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
          onCancel={this.hideModel}
        >
          <div className="form">
            <div className="form__item form__item--required">
              <div className="form__item__label">合作模式</div>
              <div className="form__item__input">
                <RadioGroup options={['商业合作','代理加盟']} defaultValue={0} onChange={this.formChange.bind(this, 'mode')}></RadioGroup>
                {errors['mode']?.err && <span className={'errMsg'}>{errors['mode'].msg}</span>}

              </div>
            </div><div className="form__item form__item--required">
              <div className="form__item__label">公司名称</div>
              <div className="form__item__input">
                <input placeholder="请输入公司名称" className={errors['company']?.err ? 'err' :''} onChange={e=>this.formChange.call(this, 'company',e.target.value)} type="text"/>
                {/*{errors.filter(i=>i.key == "company" && i.err).map(i=><span className={'errMsg'}>{i.msg}</span>)}*/}
                {errors['company']?.err && <span className={'errMsg'}>{errors['company'].msg}</span>}
              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">联系人</div>
              <div className="form__item__input">
                <input placeholder="请填写您的姓名" className={errors['contactPerson']?.err ? 'err' :''} onChange={e=>this.formChange.call(this, 'contactPerson',e.target.value)} type="text"/>
                {errors['contactPerson']?.err && <span className={'errMsg'}>{errors['contactPerson'].msg}</span>}
              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">联系电话</div>
              <div className="form__item__input">
                <input placeholder="留下您最常用的联系电话,以便我们能及时为您提供服务" className={errors['contactPhone']?.err ? 'err' :''} onChange={e=>this.formChange.call(this, 'contactPhone',e.target.value)}
                       type="text"/>
                {errors['contactPhone']?.err && <span className={'errMsg'}>{errors['contactPhone'].msg}</span>}

              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">所属城市</div>
              <div className="form__item__input">
                <input placeholder="填写所属城市" className={errors['city']?.err ? 'err' :''} onChange={e=>this.formChange.call(this, 'city',e.target.value)}
                       type="text"/>
                {errors['city']?.err && <span className={'errMsg'}>{errors['city'].msg}</span>}

              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">行业</div>
              <div className="form__item__input">
                <Select placeholder={"请选择行业类别"} options={options} className={errors['trade']?.err ? 'err' :''} onChange={this.formChange.bind(this, 'trade')}/>
                {errors['trade']?.err && <span className={'errMsg'}>{errors['trade'].msg}</span>}

              </div>
            </div>
            <div className="form__item form__item--required">
              <div className="form__item__label">产品选项</div>
              <div className="form__item__input">
                <CheckBoxGroup onChange={this.formChange.bind(this, 'product')} options={['智能短信','号码认证', '5G消息','快应用']} />
                {errors['product']?.err && <span className={'errMsg'}>{errors['product'].msg}</span>}

              </div>
            </div>
            <button className={'submit'} onClick={this.onSubmit}>
              确认提交
            </button>
          </div>
        </Modal>
        <style jsx>{styles}</style>
      </>
    )
  }
}
