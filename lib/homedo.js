const dayjs = require('dayjs');
const rmb = require('rmb-x');
const numbro = require('numbro');
const { v4 } = require('uuid');
const cloneDeep = require('lodash/cloneDeep');
const { REGEX } = require('./constant');

function testRegExp(string, regex) {
  return regex.test(string);
}

module.exports.generateUuid = v4;

module.exports.isChineseMobile = function isChineseMobile(string) {
  return testRegExp(string, REGEX.mobile);
};

module.exports.isQQ = function isQQ(string) {
  return testRegExp(string, REGEX.qq);
};

module.exports.isWeChat = function isWeChat(string) {
  return testRegExp(string, REGEX.weChat);
};

module.exports.isIdCard = function isIdCard(string) {
  return testRegExp(string, REGEX.idCardNum);
};

module.exports.isBankCard = function isBankCard(string) {
  return testRegExp(string, REGEX.bankCardNum);
};

module.exports.isCreditCode = function isCreditCode(string) {
  return testRegExp(string, REGEX.creditCode);
};

module.exports.safeJsonStringify = function safeJsonStringify(json) {
  let str = '';
  try {
    str = JSON.stringify(json);
  } catch (e) {
    console.error('safeJsonStringify Failed: ', e);
  }
  return str;
};

module.exports.safeJsonParse = function safeJsonParse(str) {
  let json;
  try {
    json = JSON.parse(str);
  } catch (e) {
    console.error('safeJsonParse Failed: ', e);
  }
  return json;
};

module.exports.attachUuid = function attachUuid(arr) {
  arr = cloneDeep(arr || []);
  return arr.map((item) => {
    item.uuid = v4();
    return item;
  });
};

module.exports.removeUuid = function removeUuid(arr) {
  arr = cloneDeep(arr || []);
  return arr.map((item) => {
    delete item.uuid;
    return item;
  });
};

module.exports.dateToWeek = function dateToWeek(date) {
  const WEEKS = ['一', '二', '三', '四', '五', '六', '日'];
  if (!date) return '';
  const n = dayjs(date).weekday();
  const week = WEEKS[n];
  return week ? `星期${week}` : '';
};

module.exports.deleteEmptyValueFromObject = function deleteEmptyValueFromObject(
  obj
) {
  obj = obj || {};
  const result = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (![null, undefined, ''].includes(value)) {
      result[key] = value;
    }
  });
  return result;
};

module.exports.replaceWithBr = function replaceWithBr(str) {
  return (str || '').replace(/\r\n|\r|\n/g, '<br/>');
};

module.exports.humanizeMoney = function humanizeMoney(num) {
  return numbro(num || 0).format({
    thousandSeparated: true,
    mantissa: 2
  });
};

module.exports.humanizeNumber = function humanizeNumber(num) {
  return numbro(num || 0).format({
    thousandSeparated: true
  });
};

module.exports.humanizeFileSize = function humanizeFileSize(num) {
  // TODO
  return num;
};

module.exports.humanizeRMB = function humanizeRMB(str) {
  return rmb(str);
};

module.exports.getFileName = function getFileName(fileUrl) {
  return (fileUrl || '').split('/').pop();
};

module.exports.getFileExt = function getFileExt(fileName) {
  return (fileName || '').split('.').pop();
};

module.exports.detectBrowser = function detectBrowser() {
  let ua = navigator.userAgent;
  let tem;
  let M =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: tem[1] || '' };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem != null) {
      return { name: 'Opera', version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1]
  };
};
