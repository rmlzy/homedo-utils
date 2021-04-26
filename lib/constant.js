const REGEX = {
  /**
   * 来源: https://my.oschina.net/csensix/blog/405915
   */
  qq: /^[1-9]\d{4,9}$/,

  /**
   * 来源: https://my.oschina.net/csensix/blog/405915
   */
  mobile: /^1[0-9]{10}$/,

  /**
   * 来源: https://my.oschina.net/csensix/blog/405915
   */
  email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,

  /**
   * 短信验证码, 必须6位数字
   */
  mobileCode: /^\d{6}$/,

  /**
   * 身份证号码正则, 15位或18位的数字
   * 来源: https://segmentfault.com/a/1190000016696368
   */
  idCardNum: /^(\d{18}|\d{15}|\d{17}x|\d{17}X)$/,

  /**
   * 银行卡号校验
   */
  bankCardNum: /^([1-9]{1})(\d{14}|\d{18})$/,

  /**
   * 微信号校验
   */
  weChat: /^[a-zA-Z1-9]{1}[-_a-zA-Z0-9]{5,19}$/,

  /**
   * 社会统一信用代码校验
   */
  creditCode: /[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}/
};

module.exports = { REGEX };
