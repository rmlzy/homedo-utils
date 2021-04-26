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
   * 判断字符串是否是微信号
   * @param {String} string
   * @return {Boolean}
   */
  export function isWeChat(string: string): boolean;

  /**
   * 判断字符串是否是统一社会信用代码
   * @param {String} string
   * @return {Boolean}
   */
  export function isCreditCode(string: string): boolean;

  /**
   * 生成uuid
   */
  export function generateUuid(): string;

  /**
   * JSON转字符串
   * @param {Object} json
   */
  export function safeJsonStringify(json): string;

  /**
   * 字符串转JSON
   * @param {String} str
   */
  export function safeJsonParse(str): any;

  /**
   * 二维数组追加 uuid 参数
   * @param {Array} arr
   */
  export function attachUuid(arr): any[];

  /**
   * 移除二维数组中的 uuid
   * @param {Array} arr
   */
  export function removeUuid(arr): any[];

  /**
   * 获取某个日期是星期几
   * @param {String} date
   */
  export function dateToWeek(date): string;

  /**
   * 换行符转 <br/> 标签
   */
  export function replaceWithBr(): string;

  /**
   * 金额加千分位, 保留两位小数
   * @param {String | Number} num
   */
  export function humanizeMoney(num: string | number): string;

  /**
   * 数字加千分位
   * @param {String | Number} num
   */
  export function humanizeNumber(num: string | number): string;

  /**
   * 金额转大写
   * @param {String | Number} num
   */
  export function humanizeRMB(num: string | number): string;

  /**
   * 从文件地址中截取文件名称
   * @param {String} fileUrl
   */
  export function getFileName(fileUrl: string): string;

  /**
   * 从文件名中截取后缀名
   * @param {String} fileName
   */
  export function getFileExt(fileName: string): string;

  /**
   * 检测当前浏览器的名称和版本
   */
  export function detectBrowser(): IBrowser;
}
