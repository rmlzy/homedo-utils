declare module 'hmd-utils' {
  export = HmdUtils;
}

interface IBrowser {
  name: string;
  version: string;
}

// @ts-ignore
declare namespace HmdUtils {
  /**
   * 判断字符串是否是国内手机号码
   * @param {String} string
   * @return {Boolean}
   */
  export function isChineseMobile(string: string): boolean;

  /**
   * 判断字符串是否是QQ号码
   * @param {String} string
   * @return {Boolean}
   */
  export function isQQ(string: string): boolean;

  /**
   * 判断字符串是否是微信号
   * @param {String} string
   * @return {Boolean}
   */
  export function isWeChat(string: string): boolean;

  /**
   * 判断字符串是否是身份证号
   * @param {String} string
   * @return {Boolean}
   */
  export function isIdCard(string: string): boolean;

  /**
   * 判断字符串是否是银行卡号
   * @param {String} string
   * @return {Boolean}
   */
  export function isBankCard(string: string): boolean;

  /**
   * 判断字符串是否是统一社会信用代码
   * @param {String} string
   * @return {Boolean}
   */
  export function isCreditCode(string: string): boolean;

  /**
   * JSON转字符串
   * @param {Object} json
   * @return {String}
   */
  export function safeJsonStringify(json): string;

  /**
   * 字符串转JSON
   * @param {String} str
   * @return {Object}
   */
  export function safeJsonParse(str): any;

  /**
   * 生成uuid
   * @return {String}
   */
  export function generateUuid(): string;

  /**
   * 二维数组追加 uuid 参数
   * @param {Array} arr
   * @return {Array}
   */
  export function attachUuid(arr): any[];

  /**
   * 移除二维数组中的 uuid
   * @param {Array} arr
   * @return {Array}
   */
  export function removeUuid(arr): any[];

  /**
   * 获取某个日期是星期几
   * @param {String} date
   * @return {String}
   */
  export function dateToWeek(date): string;

  /**
   * 移除对象中值为空的属性
   * @param {Object} obj
   * @return {Object}
   */
  export function deleteEmptyValueFromObject(obj): object;

  /**
   * 换行符转 <br/> 标签
   * @param {String} str
   * @return {String}
   */
  export function replaceWithBr(str): string;

  /**
   * 金额加千分位, 保留两位小数
   * @param {String | Number} num
   * @return {String}
   */
  export function humanizeMoney(num: string | number): string;

  /**
   * 数字加千分位
   * @param {String | Number} num
   * @return {String}
   */
  export function humanizeNumber(num: string | number): string;

  /**
   * 金额转大写
   * @param {String | Number} num
   * @return {String}
   */
  export function humanizeRMB(num: string | number): string;

  /**
   * 文件大小转可视化, byte 转 KB, MB
   * @param {Number} bytes
   * @return {String}
   */
  export function humanizeFileSize(bytes: number): string;

  /**
   * 从文件地址中截取文件名称
   * @param {String} fileUrl
   * @return {String}
   */
  export function getFileName(fileUrl: string): string;

  /**
   * 从文件名中截取后缀名
   * @param {String} fileName
   * @return {String}
   */
  export function getFileExt(fileName: string): string;

  /**
   * 检测当前浏览器的名称和版本
   * @return {Object}
   */
  export function detectBrowser(): IBrowser;
}
