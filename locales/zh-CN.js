import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from './zh.js';

let appLocale = {
  messages: {
    ...zhMessages,
  },
  locale: 'zh-CN',
  data: appLocaleData,
};

export default appLocale;
