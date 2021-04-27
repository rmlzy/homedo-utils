// libs
module.exports.dayjs = require('dayjs');
module.exports.Cookies = require('js-cookie');
module.exports.downloadFile = require('js-file-download');
module.exports.md5 = require('md5');
module.exports.sha256 = require('js-sha256').sha256;
module.exports.sha224 = require('js-sha256').sha224;
module.exports.base64 = require('js-base64').Base64;
module.exports.NP = require('number-precision');

// functions from lodash
module.exports.isArguments = require('lodash/isArguments');
module.exports.isArrayBuffer = require('lodash/isArrayBuffer');
module.exports.isArrayLike = require('lodash/isArrayLike');
module.exports.isArrayLikeObject = require('lodash/isArrayLikeObject');
module.exports.isBoolean = require('lodash/isBoolean');
module.exports.isBuffer = require('lodash/isBuffer');
module.exports.isDate = require('lodash/isDate');
module.exports.isElement = require('lodash/isElement');
module.exports.isEmpty = require('lodash/isEmpty');
module.exports.isEqualWith = require('lodash/isEqualWith');
module.exports.isError = require('lodash/isError');
module.exports.isFunction = require('lodash/isFunction');
module.exports.isLength = require('lodash/isLength');
module.exports.isMap = require('lodash/isMap');
module.exports.isMatch = require('lodash/isMatch');
module.exports.isMatchWith = require('lodash/isMatchWith');
module.exports.isNative = require('lodash/isNative');
module.exports.isNil = require('lodash/isNil');
module.exports.isNull = require('lodash/isNull');
module.exports.isNumber = require('lodash/isNumber');
module.exports.isObject = require('lodash/isObject');
module.exports.isObjectLike = require('lodash/isObjectLike');
module.exports.isPlainObject = require('lodash/isPlainObject');
module.exports.isRegExp = require('lodash/isRegExp');
module.exports.isSet = require('lodash/isSet');
module.exports.isString = require('lodash/isString');
module.exports.isSymbol = require('lodash/isSymbol');
module.exports.isTypedArray = require('lodash/isTypedArray');
module.exports.isUndefined = require('lodash/isUndefined');
module.exports.isWeakMap = require('lodash/isWeakMap');
module.exports.isWeakSet = require('lodash/isWeakSet');
module.exports.cloneDeep = require('lodash/cloneDeep');

// functions from validator
module.exports.isAscii = require('validator/lib/isAscii');
module.exports.isBase64 = require('validator/lib/isBase64');
module.exports.isEmail = require('validator/lib/isEmail');
module.exports.isIp = require('validator/lib/isIp');
module.exports.isJSON = require('validator/lib/isJSON');
module.exports.isMD5 = require('validator/lib/isMD5');
module.exports.isURL = require('validator/lib/isURL');
module.exports.isUUID = require('validator/lib/isUUID');

// functions form homedo team
module.exports.isChineseMobile = require('./homedo').isChineseMobile;
module.exports.isQQ = require('./homedo').isQQ;
module.exports.isWeChat = require('./homedo').isWeChat;
module.exports.isIdCard = require('./homedo').isIdCard;
module.exports.isBankCard = require('./homedo').isBankCard;
module.exports.isCreditCode = require('./homedo').isCreditCode;
module.exports.safeJsonStringify = require('./homedo').safeJsonStringify;
module.exports.safeJsonParse = require('./homedo').safeJsonParse;
module.exports.generateUuid = require('./homedo').generateUuid;
module.exports.attachUuid = require('./homedo').attachUuid;
module.exports.removeUuid = require('./homedo').removeUuid;
module.exports.dateToWeek = require('./homedo').dateToWeek;
module.exports.deleteEmptyValueFromObject = require('./homedo').deleteEmptyValueFromObject;
module.exports.replaceWithBr = require('./homedo').replaceWithBr;
module.exports.humanizeMoney = require('./homedo').humanizeMoney;
module.exports.humanizeNumber = require('./homedo').humanizeNumber;
module.exports.humanizeFileSize = require('./homedo').humanizeFileSize;
module.exports.humanizeRMB = require('./homedo').humanizeRMB;
module.exports.getFileName = require('./homedo').getFileName;
module.exports.getFileExt = require('./homedo').getFileExt;
module.exports.detectBrowser = require('./homedo').detectBrowser;
