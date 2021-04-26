const { REGEX } = require('./constant');

const isChineseMobile = (string) => REGEX.mobile.test(string);

const isQQ = (string) => REGEX.qq.test(string);

const isIdCard = (string) => REGEX.idCardNum.test(string);

const isBankCard = (string) => REGEX.bankCardNum.test(string);

const isWeChat = (string) => REGEX.weChat.test(string);

const isCreditCode = (string) => REGEX.creditCode.test(string);

module.exports = {
  isChineseMobile,
  isQQ,
  isIdCard,
  isBankCard,
  isWeChat,
  isCreditCode
};
