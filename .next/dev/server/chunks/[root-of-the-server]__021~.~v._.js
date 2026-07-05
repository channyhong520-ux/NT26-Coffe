module.exports = [
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/bakong-khqr/src/constant/khqrData.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const KHQRData = {
    currency: {
        usd: 840,
        khr: 116
    },
    merchantType: {
        merchant: "merchant",
        individual: "individual"
    }
};
module.exports = KHQRData;
}),
"[project]/node_modules/bakong-khqr/src/constant/errorCode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const errorCode = {
    BAKONG_ACCOUNT_ID_REQUIRED: {
        code: 1,
        message: "Bakong Account ID cannot be null or empty"
    },
    MERCHANT_NAME_REQUIRED: {
        code: 2,
        message: "Merchant name cannot be null or empty"
    },
    BAKONG_ACCOUNT_ID_INVALID: {
        code: 3,
        message: "Bakong Account ID is invalid"
    },
    TRANSACTION_AMOUNT_INVALID: {
        code: 4,
        message: "Amount is invalid"
    },
    MERCHANT_TYPE_REQUIRED: {
        code: 5,
        message: "Merchant type cannot be null or empty"
    },
    BAKONG_ACCOUNT_ID_LENGTH_INVALID: {
        code: 6,
        message: "Bakong Account ID Length is Invalid"
    },
    MERCHANT_NAME_LENGTH_INVALID: {
        code: 7,
        message: "Merchant Name Length is invalid"
    },
    KHQR_INVALID: {
        code: 8,
        message: "KHQR provided is invalid"
    },
    CURRENCY_TYPE_REQUIRED: {
        code: 9,
        message: "Currency type cannot be null or empty"
    },
    BILL_NUMBER_LENGTH_INVALID: {
        code: 10,
        message: "Bill Name Length is invalid"
    },
    STORE_LABEL_LENGTH_INVALID: {
        code: 11,
        message: "Store Label Length is invalid"
    },
    TERMINAL_LABEL_LENGTH_INVALID: {
        code: 12,
        message: "Terminal Label Length is invalid"
    },
    CONNECTION_TIMEOUT: {
        code: 13,
        message: "Cannot reach Bakong Open API service. Please check internet connection"
    },
    INVALID_DEEP_LINK_SOURCE_INFO: {
        code: 14,
        message: "Source Info for Deep Link is invalid"
    },
    INTERNAL_SREVER: {
        code: 15,
        message: "Internal server error"
    },
    PAYLOAD_FORMAT_INDICATOR_LENGTH_INVALID: {
        code: 16,
        message: "Payload Format indicator Length is invalid"
    },
    POINT_INITIATION_LENGTH_INVALID: {
        code: 17,
        message: "Point of initiation Length is invalid"
    },
    MERCHANT_CODE_LENGTH_INVALID: {
        code: 18,
        message: "Merchant code Length is invalid"
    },
    TRANSACTION_CURRENCY_LENGTH_INVALID: {
        code: 19,
        message: "Transaction currency Length is invalid"
    },
    COUNTRY_CODE_LENGTH_INVALID: {
        code: 20,
        message: "Country code Length is invalid"
    },
    MERCHANT_CITY_LENGTH_INVALID: {
        code: 21,
        message: "Merchant city Length is invalid"
    },
    CRC_LENGTH_INVALID: {
        code: 22,
        message: "CRC Length is invalid"
    },
    PAYLOAD_FORMAT_INDICATOR_TAG_REQUIRED: {
        code: 23,
        message: "Payload format indicator tag required"
    },
    CRC_TAG_REQUIRED: {
        code: 24,
        message: "CRC tag required"
    },
    MERCHANT_CATEGORY_TAG_REQUIRED: {
        code: 25,
        message: "Merchant category tag required"
    },
    COUNTRY_CODE_TAG_REQUIRED: {
        code: 26,
        message: "Country Code cannot be null or empty"
    },
    MERCHANT_CITY_TAG_REQUIRED: {
        code: 27,
        message: "Merchant City cannot be null or empty"
    },
    UNSUPPORTED_CURRENCY: {
        code: 28,
        message: "Unsupported currency"
    },
    INVALID_DEEP_LINK_URL: {
        code: 29,
        message: "Deep Link URL is not valid"
    },
    MERCHANT_ID_REQUIRED: {
        code: 30,
        message: "Merchant ID cannot be null or empty"
    },
    ACQUIRING_BANK_REQUIRED: {
        code: 31,
        message: "Acquiring Bank cannot be null or empty"
    },
    MERCHANT_ID_LENGTH_INVALID: {
        code: 32,
        message: "Merchant ID Length is invalid"
    },
    ACQUIRING_BANK_LENGTH_INVALID: {
        code: 33,
        message: "Acquiring Bank Length is invalid"
    },
    MOBILE_NUMBER_LENGTH_INVALID: {
        code: 34,
        message: "Mobile Number Length is invalid"
    },
    ACCOUNT_INFORMATION_LENGTH_INVALID: {
        code: 35,
        message: "Account Information Length is invalid"
    },
    TAG_NOT_IN_ORDER: {
        code: 36,
        message: "Tag is not in order"
    },
    LANGUAGE_PREFERENCE_REQUIRED: {
        code: 37,
        message: "Language Preference cannot be null or empty"
    },
    LANGUAGE_PREFERENCE_LENGTH_INVALID: {
        code: 38,
        message: "Language Preference Length is invalid"
    },
    MERCHANT_NAME_ALTERNATE_LANGUAGE_REQUIRED: {
        code: 39,
        message: "Merchant Name Alternate Language cannot be null or empty"
    },
    MERCHANT_NAME_ALTERNATE_LANGUAGE_LENGTH_INVALID: {
        code: 40,
        message: "Merchant Name Alternate Language Length is invalid"
    },
    MERCHANT_CITY_ALTERNATE_LANGUAGE_LENGTH_INVALID: {
        code: 41,
        message: "Merchant City Alternate Language Length is invalid"
    },
    PURPOSE_OF_TRANSACTION_LENGTH_INVALID: {
        code: 42,
        message: "Purpose of Transaction Length is invalid"
    },
    UPI_ACCOUNT_INFORMATION_LENGTH_INVALID: {
        code: 43,
        message: "Upi Account Information Length is invalid"
    },
    UPI_ACCOUNT_INFORMATION_INVALID_CURRENCY: {
        code: 44,
        message: "Upi Account Information Length does not accept USD"
    },
    EXPIRATION_TIMESTAMP_REQUIRED: {
        code: 45,
        message: "Expiration timestamp is required for dynamic KHQR"
    },
    KHQR_EXPIRED: {
        code: 46,
        message: "This dynamic KHQR has expired"
    },
    INVALID_DYNAMIC_KHQR: {
        code: 47,
        message: "This dynamic KHQR has invalid field transaction amount"
    },
    POINT_OF_INITIATION_METHOD_INVALID: {
        code: 48,
        message: "Point of Initiation Method is invalid"
    },
    EXPIRATION_TIMESTAMP_LENGTH_INVALID: {
        code: 49,
        message: "Expiration timestamp length is invalid"
    },
    EXPIRATION_TIMESTAMP_IN_THE_PAST: {
        code: 50,
        message: "Expiration timestamp is in the past"
    },
    INVALID_MERCHANT_CATEGORY_CODE: {
        code: 51,
        message: "Invalid merchant category code"
    }
};
module.exports = errorCode;
}),
"[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const khqrData = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/khqrData.js [app-route] (ecmascript)");
const errorCode = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/errorCode.js [app-route] (ecmascript)");
const emv = {
    PAYLOAD_FORMAT_INDICATOR: "00",
    DEFAULT_PAYLOAD_FORMAT_INDICATOR: "01",
    POINT_OF_INITIATION_METHOD: "01",
    STATIC_QR: "11",
    DYNAMIC_QR: "12",
    MERCHANT_ACCOUNT_INFORMATION_INDIVIDUAL: "29",
    MERCHANT_ACCOUNT_INFORMATION_MERCHANT: "30",
    BAKONG_ACCOUNT_IDENTIFIER: "00",
    MERCHANT_ACCOUNT_INFORMATION_MERCHANT_ID: "01",
    INDIVIDUAL_ACCOUNT_INFORMATION: "01",
    MERCHANT_ACCOUNT_INFORMATION_ACQUIRING_BANK: "02",
    MERCHANT_CATEGORY_CODE: "52",
    DEFAULT_MERCHANT_CATEGORY_CODE: "5999",
    TRANSACTION_CURRENCY: "53",
    TRANSACTION_AMOUNT: "54",
    DEFAULT_TRANSACTION_AMOUNT: "0",
    COUNTRY_CODE: "58",
    DEFAULT_COUNTRY_CODE: "KH",
    MERCHANT_NAME: "59",
    MERCHANT_CITY: "60",
    DEFAULT_MERCHANT_CITY: "Phnom Penh",
    CRC: "63",
    CRC_LENGTH: "04",
    ADDITIONAL_DATA_TAG: "62",
    BILLNUMBER_TAG: "01",
    ADDITIONAL_DATA_FIELD_MOBILE_NUMBER: "02",
    STORELABEL_TAG: "03",
    TERMINAL_TAG: "07",
    PURPOSE_OF_TRANSACTION: "08",
    TIMESTAMP_TAG: "99",
    CREATION_TIMESTAMP: "00",
    EXPIRATION_TIMESTAMP: "01",
    MERCHANT_INFORMATION_LANGUAGE_TEMPLATE: "64",
    LANGUAGE_PREFERENCE: "00",
    MERCHANT_NAME_ALTERNATE_LANGUAGE: "01",
    MERCHANT_CITY_ALTERNATE_LANGUAGE: "02",
    UNIONPAY_MERCHANT_ACCOUNT: "15",
    INVALID_LENGTH: {
        KHQR: 12,
        MERCHANT_NAME: 25,
        BAKONG_ACCOUNT: 32,
        AMOUNT: 13,
        COUNTRY_CODE: 3,
        MERCHANT_CATEGORY_CODE: 4,
        MERCHANT_CITY: 15,
        TIMESTAMP: 13,
        TRANSACTION_AMOUNT: 14,
        TRANSACTION_CURRENCY: 3,
        // TIMESTAMP: 13,
        BILL_NUMBER: 25,
        STORE_LABEL: 25,
        TERMINAL_LABEL: 25,
        PURPOSE_OF_TRANSACTION: 25,
        MERCHANT_ID: 32,
        ACQUIRING_BANK: 32,
        MOBILE_NUMBER: 25,
        ACCOUNT_INFORMATION: 32,
        MERCHANT_INFORMATION_LANGUAGE_TEMPLATE: 99,
        UPI_MERCHANT: 99,
        LANGUAGE_PREFERENCE: 2,
        MERCHANT_NAME_ALTERNATE_LANGUAGE: 25,
        MERCHANT_CITY_ALTERNATE_LANGUAGE: 15
    }
};
module.exports = {
    emv,
    errorCode,
    khqrData
};
}),
"[project]/node_modules/bakong-khqr/src/helper/crc16.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
var crcTable = [
    0x0000,
    0x1021,
    0x2042,
    0x3063,
    0x4084,
    0x50A5,
    0x60C6,
    0x70E7,
    0x8108,
    0x9129,
    0xA14A,
    0xB16B,
    0xC18C,
    0xD1AD,
    0xE1CE,
    0xF1EF,
    0x1231,
    0x0210,
    0x3273,
    0x2252,
    0x52B5,
    0x4294,
    0x72F7,
    0x62D6,
    0x9339,
    0x8318,
    0xB37B,
    0xA35A,
    0xD3BD,
    0xC39C,
    0xF3FF,
    0xE3DE,
    0x2462,
    0x3443,
    0x0420,
    0x1401,
    0x64E6,
    0x74C7,
    0x44A4,
    0x5485,
    0xA56A,
    0xB54B,
    0x8528,
    0x9509,
    0xE5EE,
    0xF5CF,
    0xC5AC,
    0xD58D,
    0x3653,
    0x2672,
    0x1611,
    0x0630,
    0x76D7,
    0x66F6,
    0x5695,
    0x46B4,
    0xB75B,
    0xA77A,
    0x9719,
    0x8738,
    0xF7DF,
    0xE7FE,
    0xD79D,
    0xC7BC,
    0x48C4,
    0x58E5,
    0x6886,
    0x78A7,
    0x0840,
    0x1861,
    0x2802,
    0x3823,
    0xC9CC,
    0xD9ED,
    0xE98E,
    0xF9AF,
    0x8948,
    0x9969,
    0xA90A,
    0xB92B,
    0x5AF5,
    0x4AD4,
    0x7AB7,
    0x6A96,
    0x1A71,
    0x0A50,
    0x3A33,
    0x2A12,
    0xDBFD,
    0xCBDC,
    0xFBBF,
    0xEB9E,
    0x9B79,
    0x8B58,
    0xBB3B,
    0xAB1A,
    0x6CA6,
    0x7C87,
    0x4CE4,
    0x5CC5,
    0x2C22,
    0x3C03,
    0x0C60,
    0x1C41,
    0xEDAE,
    0xFD8F,
    0xCDEC,
    0xDDCD,
    0xAD2A,
    0xBD0B,
    0x8D68,
    0x9D49,
    0x7E97,
    0x6EB6,
    0x5ED5,
    0x4EF4,
    0x3E13,
    0x2E32,
    0x1E51,
    0x0E70,
    0xFF9F,
    0xEFBE,
    0xDFDD,
    0xCFFC,
    0xBF1B,
    0xAF3A,
    0x9F59,
    0x8F78,
    0x9188,
    0x81A9,
    0xB1CA,
    0xA1EB,
    0xD10C,
    0xC12D,
    0xF14E,
    0xE16F,
    0x1080,
    0x00A1,
    0x30C2,
    0x20E3,
    0x5004,
    0x4025,
    0x7046,
    0x6067,
    0x83B9,
    0x9398,
    0xA3FB,
    0xB3DA,
    0xC33D,
    0xD31C,
    0xE37F,
    0xF35E,
    0x02B1,
    0x1290,
    0x22F3,
    0x32D2,
    0x4235,
    0x5214,
    0x6277,
    0x7256,
    0xB5EA,
    0xA5CB,
    0x95A8,
    0x8589,
    0xF56E,
    0xE54F,
    0xD52C,
    0xC50D,
    0x34E2,
    0x24C3,
    0x14A0,
    0x0481,
    0x7466,
    0x6447,
    0x5424,
    0x4405,
    0xA7DB,
    0xB7FA,
    0x8799,
    0x97B8,
    0xE75F,
    0xF77E,
    0xC71D,
    0xD73C,
    0x26D3,
    0x36F2,
    0x0691,
    0x16B0,
    0x6657,
    0x7676,
    0x4615,
    0x5634,
    0xD94C,
    0xC96D,
    0xF90E,
    0xE92F,
    0x99C8,
    0x89E9,
    0xB98A,
    0xA9AB,
    0x5844,
    0x4865,
    0x7806,
    0x6827,
    0x18C0,
    0x08E1,
    0x3882,
    0x28A3,
    0xCB7D,
    0xDB5C,
    0xEB3F,
    0xFB1E,
    0x8BF9,
    0x9BD8,
    0xABBB,
    0xBB9A,
    0x4A75,
    0x5A54,
    0x6A37,
    0x7A16,
    0x0AF1,
    0x1AD0,
    0x2AB3,
    0x3A92,
    0xFD2E,
    0xED0F,
    0xDD6C,
    0xCD4D,
    0xBDAA,
    0xAD8B,
    0x9DE8,
    0x8DC9,
    0x7C26,
    0x6C07,
    0x5C64,
    0x4C45,
    0x3CA2,
    0x2C83,
    0x1CE0,
    0x0CC1,
    0xEF1F,
    0xFF3E,
    0xCF5D,
    0xDF7C,
    0xAF9B,
    0xBFBA,
    0x8FD9,
    0x9FF8,
    0x6E17,
    0x7E36,
    0x4E55,
    0x5E74,
    0x2E93,
    0x3EB2,
    0x0ED1,
    0x1EF0
];
function crc16(s) {
    var crc = 0xFFFF;
    var j, i;
    s = Buffer.from(s);
    for(i = 0; i < s.length; i++){
        c = s[i];
        j = (c ^ crc >> 8) & 0xFF;
        crc = crcTable[j] ^ crc << 8;
    }
    const finalCheckSum = (crc ^ 0) & 0xFFFF;
    return getHexString(finalCheckSum);
}
function getHexString(crc) {
    let result = crc.toString(16).toUpperCase();
    const result_pad = pad(result, 4);
    return result_pad;
}
function pad(num, size) {
    num = num.toString();
    while(num.length < size)num = "0" + num;
    return num;
}
module.exports = crc16;
}),
"[project]/node_modules/bakong-khqr/src/CRCValidation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

class CRCValidation {
    constructor(valid){
        this.isValid = valid;
    }
}
module.exports = CRCValidation;
}),
"[project]/node_modules/bakong-khqr/src/model/response.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const md5 = __turbopack_context__.r("[project]/node_modules/md5/md5.js [app-route] (ecmascript)");
class KHQRData {
    constructor(qr){
        this.qr = qr;
        this.md5 = md5(qr);
    }
    getData() {
        return {
            qr: this.qr,
            md5: this.md5
        };
    }
}
class KHQRDeepLinkData {
    constructor(shortLink){
        this.shortLink = shortLink;
    }
    getData() {
        return {
            shortLink: this.shortLink
        };
    }
}
/**
 * A function for returning the KHQR response
 * the response has format
 * { status: { code: 0, errorCode: 0, message: '' },
 *   data: null }
 * How to use:
 * when error pass KHQRResponse(null, errorObject)
 * when success pass KHQRResponse(data, null)
 * @param {any} data
 * @param {any} errorObject
 * @returns
 */ function KHQRResponse(data, errorObject) {
    const isError = errorObject == null;
    const status = {
        code: !isError ? 1 : 0,
        errorCode: isError ? null : errorObject.code,
        message: isError ? null : errorObject.message
    };
    return {
        status: status,
        data: data
    };
}
module.exports = {
    KHQRData,
    KHQRDeepLinkData,
    KHQRResponse
};
}),
"[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const response = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/response.js [app-route] (ecmascript)");
module.exports = response;
}),
"[project]/node_modules/bakong-khqr/src/helper/deeplink.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const axios = __turbopack_context__.r("[project]/node_modules/axios/index.js [app-route] (ecmascript)");
const { errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
class SourceInfo {
    constructor(appIconUrl, appName, appDeepLinkCallback){
        this.appIconUrl = appIconUrl || null;
        this.appName = appName || null;
        this.appDeepLinkCallback = appDeepLinkCallback || null;
    }
}
function isValidLink(link) {
    try {
        let url = new URL(link);
        if (url.pathname != "/v1/generate_deeplink_by_qr") return false;
    } catch (error) {
        return false;
    }
    return true;
}
async function callDeepLinkAPI(url, data) {
    try {
        let response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json"
            },
            timeout: 45 * 1000
        });
        const respBody = response.data;
        // Getting Response
        const error = respBody.errorCode;
        if (response == undefined) throw KHQRResponse(null, errorCode.CONNECTION_TIMEOUT);
        if (error == 5) return KHQRResponse(null, errorCode.INVALID_DEEP_LINK_SOURCE_INFO);
        else if (error == 4) return KHQRResponse(null, errorCode.INTERNAL_SERVER_ERROR);
        return respBody;
    } catch (error) {
        if (error.code === 'ECONNABORTED') throw KHQRResponse(null, errorCode.CONNECTION_TIMEOUT);
        throw KHQRResponse(null, errorCode.CONNECTION_TIMEOUT);
    }
}
module.exports = {
    isValidLink,
    callDeepLinkAPI,
    SourceInfo
};
}),
"[project]/node_modules/bakong-khqr/src/model/information.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { khqrData } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const removeEmptyElement = (obj)=>{
    return Object.fromEntries(Object.entries(obj).filter(([_, v])=>v != null).filter(([_, v])=>v != undefined).filter(([_, v])=>v != ""));
};
class IndividualInfo {
    /**
     * Individual information
     * fill the params down below
     * @param {*} bakongAccountID
     * @param {*} merchantName
     * @param {*} merchantCity
     * @param {*} optional
     */ constructor(bakongAccountID, merchantName, merchantCity, optional = {}){
        optional = removeEmptyElement(optional);
        if (this.isObject(bakongAccountID) || this.isObject(merchantName) || this.isObject(merchantCity)) {
            throw "bakongAccountID, merchantName or merchantCity must be a string";
        }
        this.bakongAccountID = bakongAccountID;
        this.accountInformation = optional.accountInformation;
        this.acquiringBank = optional.acquiringBank;
        this.currency = optional.currency == undefined ? khqrData.currency.khr : optional.currency;
        this.amount = optional.amount;
        this.merchantName = merchantName;
        this.merchantCity = merchantCity;
        this.billNumber = optional.billNumber;
        this.storeLabel = optional.storeLabel;
        this.terminalLabel = optional.terminalLabel;
        this.mobileNumber = optional.mobileNumber;
        this.purposeOfTransaction = optional.purposeOfTransaction;
        this.languagePreference = optional.languagePreference;
        this.merchantNameAlternateLanguage = optional.merchantNameAlternateLanguage;
        this.merchantCityAlternateLanguage = optional.merchantCityAlternateLanguage;
        this.upiMerchantAccount = optional.upiMerchantAccount;
        this.expirationTimestamp = optional.expirationTimestamp;
        this.merchantCategoryCode = optional.merchantCategoryCode; // never empty('') due to removeEmptyElement, most likely <undefined>
    }
    isObject(val) {
        return val instanceof Object;
    }
}
class MerchantInfo extends IndividualInfo {
    /**
     * Merchant information
     * Fill the params down below
     * @param {*} bakongAccountID
     * @param {*} merchantName
     * @param {*} merchantCity
     * @param {*} merchantID
     * @param {*} acquiringBank
     * @param {*} optional
     */ constructor(bakongAccountID, merchantName, merchantCity, merchantID, acquiringBank, optional = {}){
        optional = removeEmptyElement(optional);
        super(bakongAccountID, merchantName, merchantCity, optional);
        if (this.isObject(merchantID) || this.isObject(acquiringBank)) {
            throw "merchantID and acquiringBank must be a string";
        }
        this.amount = optional.amount;
        this.merchantID = merchantID;
        this.acquiringBank = acquiringBank;
    }
    isObject(val) {
        return val instanceof Object;
    }
}
module.exports = {
    IndividualInfo,
    MerchantInfo
};
}),
"[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

class TagLengthString {
    constructor(tag, value){
        this.tag = tag;
        this.value = value;
        const length = String(value).length;
        this.length = length < 10 ? `0${length}` : String(length);
    }
    toString() {
        return `${this.tag}${this.length}${this.value}`;
    }
}
module.exports = TagLengthString;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/pointOfInitiationMethod.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class PointOfInitiationMethod extends TagLengthString {
    constructor(tag, value){
        if (value.length > 2) {
            throw KHQRResponse(null, errorCode.POINT_INITIATION_LENGTH_INVALID);
        }
        if (value !== emv.STATIC_QR && value !== emv.DYNAMIC_QR) {
            throw KHQRResponse(null, errorCode.POINT_OF_INITIATION_METHOD_INVALID);
        }
        super(tag, value);
    }
}
module.exports = PointOfInitiationMethod;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/payloadFormatIndicator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class PayloadFormatIndicator extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.PAYLOAD_FORMAT_INDICATOR_TAG_REQUIRED);
        else if (value.length > 2) throw KHQRResponse(null, errorCode.PAYLOAD_FORMAT_INDICATOR_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = PayloadFormatIndicator;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/CRC.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class CRC extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.CRC_TAG_REQUIRED);
        else if (value.length > 4) throw KHQRResponse(null, errorCode.CRC_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = CRC;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/globalUniqueIdentifier.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
// tag should be 29, 30
class GlobalUniqueIdentifier extends TagLengthString {
    constructor(tag, valueObject){
        if (valueObject == null) throw KHQRResponse(null, errorCode.MERCHANT_TYPE_REQUIRED);
        if (valueObject == null) valueObject = {
            bakongAccountID: null,
            merchantID: null,
            acquiringBank: null,
            accountInformation: null
        };
        // Get value from props object
        const bakongAccountID = valueObject.bakongAccountID;
        const merchantID = valueObject.merchantID;
        const acquiringBank = valueObject.acquiringBank;
        const isMerchant = valueObject.isMerchant;
        const accountInformation = valueObject.accountInformation;
        // Creating 3 instances
        // BakongAccountID: 00
        // MerchantID: 01
        // AcquiringBankName: 02
        const bakongAccountId = new BakongAccountID(emv.BAKONG_ACCOUNT_IDENTIFIER, bakongAccountID);
        let globalUniqueIdentifier = bakongAccountId.toString();
        if (isMerchant) {
            const merchantId = new MerchantId(emv.MERCHANT_ACCOUNT_INFORMATION_MERCHANT_ID, merchantID);
            const acquiringBankName = new AcquiringBank(emv.MERCHANT_ACCOUNT_INFORMATION_ACQUIRING_BANK, acquiringBank);
            if (merchantID != undefined) globalUniqueIdentifier += merchantId.toString();
            if (acquiringBank != undefined) globalUniqueIdentifier += acquiringBankName.toString();
            super(tag, globalUniqueIdentifier);
            this.merchantID = merchantId;
            this.acquiringBank = acquiringBankName;
            this.data = {
                bakongAccountID: bakongAccountId,
                merchantID: merchantId,
                acquiringBank: acquiringBankName
            };
        } else {
            if (accountInformation != undefined) {
                const accInformation = new AccountInformation(emv.INDIVIDUAL_ACCOUNT_INFORMATION, accountInformation);
                globalUniqueIdentifier += accInformation.toString();
            }
            if (acquiringBank != undefined) {
                const acquiringBankName = new AcquiringBank(emv.MERCHANT_ACCOUNT_INFORMATION_ACQUIRING_BANK, acquiringBank);
                globalUniqueIdentifier += acquiringBankName.toString();
            }
            super(tag, globalUniqueIdentifier);
            this.accountInformation = accountInformation;
            this.data = {
                bakongAccountID: bakongAccountId,
                accountInformation: accountInformation
            };
        }
        this.bakongAccountID = bakongAccountId;
    }
}
class BakongAccountID extends TagLengthString {
    constructor(tag, bakongAccountID){
        // Throw validation if there is
        // 1. No tag
        // 2. empty value of bakong account
        if (bakongAccountID == "" || bakongAccountID == null || bakongAccountID == undefined) throw KHQRResponse(null, errorCode.BAKONG_ACCOUNT_ID_REQUIRED);
        // Validating the bakong account is it is correct
        // name@bank_domain
        const bakongAccountDivide = bakongAccountID.split("@");
        // Validate on length of the bakong account
        if (bakongAccountID.length > emv.INVALID_LENGTH.BAKONG_ACCOUNT) throw KHQRResponse(null, errorCode.BAKONG_ACCOUNT_ID_LENGTH_INVALID);
        else if (bakongAccountDivide.length < 2) throw KHQRResponse(null, errorCode.BAKONG_ACCOUNT_ID_INVALID);
        super(tag, bakongAccountID);
    }
}
class AccountInformation extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.ACCOUNT_INFORMATION) throw KHQRResponse(null, errorCode.ACCOUNT_INFORMATION_LENGTH_INVALID);
        super(tag, value);
    }
}
class MerchantId extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.MERCHANT_ID_REQUIRED);
        else if (value.length > emv.INVALID_LENGTH.MERCHANT_ID) throw KHQRResponse(null, errorCode.MERCHANT_ID_LENGTH_INVALID);
        super(tag, value);
    }
}
class AcquiringBank extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.ACQUIRING_BANK_REQUIRED);
        else if (value.length > emv.INVALID_LENGTH.ACQUIRING_BANK) throw KHQRResponse(null, errorCode.ACQUIRING_BANK_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = GlobalUniqueIdentifier;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/transactionCurrency.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode, khqrData } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class TransactionCurrency extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.CURRENCY_TYPE_REQUIRED);
        else if (value.length > 3) throw KHQRResponse(null, errorCode.TRANSACTION_CURRENCY_LENGTH_INVALID);
        else if (![
            khqrData.currency.khr,
            khqrData.currency.usd
        ].includes(parseInt(value))) throw KHQRResponse(null, errorCode.UNSUPPORTED_CURRENCY);
        super(tag, value);
    }
}
module.exports = TransactionCurrency;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/countryCode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class CountryCode extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.COUNTRY_CODE_TAG_REQUIRED);
        else if (value.length > emv.INVALID_LENGTH.COUNTRY_CODE) throw KHQRResponse(null, errorCode.COUNTRY_CODE_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = CountryCode;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/merchantCity.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class MerchantCity extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.MERCHANT_CITY_TAG_REQUIRED);
        else if (value.length > emv.INVALID_LENGTH.MERCHANT_CITY) throw KHQRResponse(null, errorCode.MERCHANT_CITY_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = MerchantCity;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/merchantCategoryCode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class MerchantCategoryCode extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.MERCHANT_CATEGORY_TAG_REQUIRED);
        else if (value.length > emv.INVALID_LENGTH.MERCHANT_CATEGORY_CODE) throw KHQRResponse(null, errorCode.MERCHANT_CODE_LENGTH_INVALID);
        else if (!/^\d+$/.test(value)) {
            throw KHQRResponse(null, errorCode.INVALID_MERCHANT_CATEGORY_CODE);
        } else {
            const mcc = parseInt(value, 10);
            if (mcc < 0 || mcc > 9999) {
                throw KHQRResponse(null, errorCode.INVALID_MERCHANT_CATEGORY_CODE);
            }
        }
        super(tag, value);
    }
}
module.exports = MerchantCategoryCode;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/transactionAmount.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class TransactionAmount extends TagLengthString {
    constructor(tag, value){
        if (String(value).length > emv.INVALID_LENGTH.AMOUNT || String(value).includes("-") || value == "" || value == undefined || value == null) throw KHQRResponse(null, errorCode.TRANSACTION_AMOUNT_INVALID);
        super(tag, value);
    }
}
module.exports = TransactionAmount;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/merchantName.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class MerchantName extends TagLengthString {
    constructor(tag, value){
        if (value == "" || value == null || value == undefined) throw KHQRResponse(null, errorCode.MERCHANT_NAME_REQUIRED);
        else if (value.length > emv.INVALID_LENGTH.MERCHANT_NAME) throw KHQRResponse(null, errorCode.MERCHANT_NAME_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = MerchantName;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/timeStamp.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { errorCode, emv } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class TimeStamp extends TagLengthString {
    constructor(tag, timestamp, poi){
        const creationTimestamp = Number(timestamp?.creationTimestamp);
        const expirationTimestamp = Number(timestamp?.expirationTimestamp);
        if (poi === emv.DYNAMIC_QR) {
            if (!timestamp || !expirationTimestamp) {
                throw KHQRResponse(null, errorCode.EXPIRATION_TIMESTAMP_REQUIRED);
            }
            if (expirationTimestamp.toString().length !== emv.INVALID_LENGTH.TIMESTAMP) {
                throw KHQRResponse(null, errorCode.EXPIRATION_TIMESTAMP_LENGTH_INVALID);
            }
            if (isNaN(new Date(expirationTimestamp).getTime())) {
                throw KHQRResponse(null, errorCode.INVALID_DYNAMIC_KHQR);
            }
            if (expirationTimestamp < creationTimestamp) {
                throw KHQRResponse(null, errorCode.EXPIRATION_TIMESTAMP_IN_THE_PAST);
            }
            if (expirationTimestamp < Date.now()) {
                throw KHQRResponse(null, errorCode.KHQR_EXPIRED);
            }
        }
        let timestampString = "";
        const createdTimestamp = new TimeStampMiliSecond(emv.CREATION_TIMESTAMP, creationTimestamp);
        timestampString += createdTimestamp.toString();
        const expiredTimestamp = new TimeStampMiliSecond(emv.EXPIRATION_TIMESTAMP, expirationTimestamp);
        timestampString += expiredTimestamp.toString();
        super(tag, timestampString);
    }
}
class TimeStampMiliSecond extends TagLengthString {
    constructor(tag, value){
        super(tag, value);
    }
}
module.exports = TimeStamp;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/merchantInformationLanguageTemplate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class MerchantInformationLanguageTemplate extends TagLengthString {
    constructor(tag, value){
        if (value == null) {
            value = {
                languagePreference: null,
                merchantNameAlternateLanguage: null,
                merchantCityAlternateLanguage: null
            };
        }
        if (value.languagePreference && !value.merchantNameAlternateLanguage) throw KHQRResponse(null, errorCode.MERCHANT_NAME_ALTERNATE_LANGUAGE_REQUIRED);
        let merchantInformationLanguageTemplateString = "";
        if (value.merchantNameAlternateLanguage != undefined) {
            const perference = new LanguagePreference(emv.LANGUAGE_PREFERENCE, value.languagePreference);
            merchantInformationLanguageTemplateString += perference.toString();
        }
        if (value.merchantNameAlternateLanguage != undefined) {
            const alterName = new MerchantNameAlternateLanguage(emv.MERCHANT_NAME_ALTERNATE_LANGUAGE, value.merchantNameAlternateLanguage);
            merchantInformationLanguageTemplateString += alterName.toString();
        }
        if (value.merchantCityAlternateLanguage != undefined) {
            const alterCity = new MerchantCityAlternateLanguage(emv.MERCHANT_CITY_ALTERNATE_LANGUAGE, value.merchantCityAlternateLanguage);
            merchantInformationLanguageTemplateString += alterCity.toString();
        }
        super(tag, merchantInformationLanguageTemplateString);
        this.data = value;
    }
}
class LanguagePreference extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.LANGUAGE_PREFERENCE || value == "") throw KHQRResponse(null, errorCode.LANGUAGE_PREFERENCE_LENGTH_INVALID);
        super(tag, value);
    }
}
class MerchantNameAlternateLanguage extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.MERCHANT_NAME_ALTERNATE_LANGUAGE || value == "") throw KHQRResponse(null, errorCode.MERCHANT_NAME_ALTERNATE_LANGUAGE_LENGTH_INVALID);
        super(tag, value);
    }
}
class MerchantCityAlternateLanguage extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.MERCHANT_CITY_ALTERNATE_LANGUAGE || value == "") throw KHQRResponse(null, errorCode.MERCHANT_CITY_ALTERNATE_LANGUAGE_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = MerchantInformationLanguageTemplate;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/unionPayMerchant.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class UnionpayMerchantAccount extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.UPI_MERCHANT) throw KHQRResponse(null, errorCode.UPI_ACCOUNT_INFORMATION_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = UnionpayMerchantAccount;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/additionalData.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const TagLengthString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/tagLengthString.js [app-route] (ecmascript)");
class AdditionalData extends TagLengthString {
    constructor(tag, additionalData){
        if (additionalData == null) additionalData = {
            billNumberInput: null,
            mobileNumberInput: null,
            storeLabelInput: null,
            terminalLabelInput: null
        };
        // Getting information from additionalData
        const billNumberInput = additionalData.billNumber;
        const mobileNumberInput = additionalData.mobileNumber;
        const storeLabelInput = additionalData.storeLabel;
        const terminalLabelInput = additionalData.terminalLabel;
        const purposeOfTransaction = additionalData.purposeOfTransaction;
        let billNumber;
        let mobileNumber;
        let storeLabel;
        let terminalLabel;
        // Create additional data tag by combine all three sub tags
        let additionalDataString = "";
        if (billNumberInput != undefined) {
            billNumber = new BillNumber(emv.BILLNUMBER_TAG, billNumberInput);
            additionalDataString += billNumber.toString();
        }
        if (mobileNumberInput != undefined) {
            mobileNumber = new MobileNumber(emv.ADDITIONAL_DATA_FIELD_MOBILE_NUMBER, mobileNumberInput);
            additionalDataString += mobileNumber.toString();
        }
        if (storeLabelInput != undefined) {
            storeLabel = new StoreLabel(emv.STORELABEL_TAG, storeLabelInput);
            additionalDataString += storeLabel.toString();
        }
        if (terminalLabelInput != undefined) {
            terminalLabel = new TerminalLabel(emv.TERMINAL_TAG, terminalLabelInput);
            additionalDataString += terminalLabel.toString();
        }
        if (purposeOfTransaction != undefined) {
            const purpose = new PurposeOfTransaction(emv.PURPOSE_OF_TRANSACTION, purposeOfTransaction);
            additionalDataString += purpose.toString();
        }
        super(tag, additionalDataString);
        // class inherit the billNumber, storeLabel, terminalLabel
        this.billNumber = billNumber;
        this.mobileNumber = mobileNumber;
        this.storeLabel = storeLabel;
        this.terminalLabel = terminalLabel;
        this.data = {
            billNumber: billNumber,
            mobileNumber: mobileNumber,
            storeLabel: storeLabel,
            terminalLabel: terminalLabel,
            purposeOfTransaction: purposeOfTransaction
        };
    }
}
class BillNumber extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.BILL_NUMBER || value == "") throw KHQRResponse(null, errorCode.BILL_NUMBER_LENGTH_INVALID);
        super(tag, value);
    }
}
class StoreLabel extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.STORE_LABEL || value == "") throw KHQRResponse(null, errorCode.STORE_LABEL_LENGTH_INVALID);
        super(tag, value);
    }
}
class TerminalLabel extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.TERMINAL_LABEL || value == "") throw KHQRResponse(null, errorCode.TERMINAL_LABEL_LENGTH_INVALID);
        super(tag, value);
    }
}
class MobileNumber extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.MOBILE_NUMBER || value == "") throw KHQRResponse(null, errorCode.MOBILE_NUMBER_LENGTH_INVALID);
        super(tag, value);
    }
}
class PurposeOfTransaction extends TagLengthString {
    constructor(tag, value){
        if (value.length > emv.INVALID_LENGTH.PURPOSE_OF_TRANSACTION || value == "") throw KHQRResponse(null, errorCode.PURPOSE_OF_TRANSACTION_LENGTH_INVALID);
        super(tag, value);
    }
}
module.exports = AdditionalData;
}),
"[project]/node_modules/bakong-khqr/src/MerchantCode/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PointOfInitiationMethod = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/pointOfInitiationMethod.js [app-route] (ecmascript)");
const PayloadFormatIndicator = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/payloadFormatIndicator.js [app-route] (ecmascript)");
const CRC = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/CRC.js [app-route] (ecmascript)");
const GlobalUnqiueIdentifier = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/globalUniqueIdentifier.js [app-route] (ecmascript)");
const TransactionCurrency = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/transactionCurrency.js [app-route] (ecmascript)");
const CountryCode = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/countryCode.js [app-route] (ecmascript)");
const MerchantCity = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/merchantCity.js [app-route] (ecmascript)");
const MerchantCategoryCode = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/merchantCategoryCode.js [app-route] (ecmascript)");
const TransactionAmount = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/transactionAmount.js [app-route] (ecmascript)");
const MerchantName = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/merchantName.js [app-route] (ecmascript)");
const TimeStamp = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/timeStamp.js [app-route] (ecmascript)");
const MerchantInformationLanguageTemplate = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/merchantInformationLanguageTemplate.js [app-route] (ecmascript)");
const UnionpayMerchantAccount = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/unionPayMerchant.js [app-route] (ecmascript)");
const AdditionalData = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/additionalData.js [app-route] (ecmascript)");
module.exports = {
    PointOfInitiationMethod,
    PayloadFormatIndicator,
    CRC,
    GlobalUnqiueIdentifier,
    TransactionCurrency,
    CountryCode,
    MerchantCity,
    MerchantCategoryCode,
    TransactionAmount,
    MerchantName,
    TimeStamp,
    MerchantInformationLanguageTemplate,
    UnionpayMerchantAccount,
    AdditionalData
};
}),
"[project]/node_modules/bakong-khqr/src/controller/generateKHQR.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv, khqrData, errorCode } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const crc16 = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/helper/crc16.js [app-route] (ecmascript)");
const { PointOfInitiationMethod, PayloadFormatIndicator, GlobalUnqiueIdentifier, TransactionCurrency, CountryCode, MerchantCity, MerchantCategoryCode, TransactionAmount, MerchantName, TimeStamp, MerchantInformationLanguageTemplate, AdditionalData, UnionpayMerchantAccount } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/index.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
/**
 * Generate KHQR helper Function
 * 1. create object of subtags elements
 * 2. create the string by passing tag and value to the instances
 * 3. calculate CRC
 * 4. return the value
 * @param {object} information 
 * @param {string} type 
 * @returns string of KHQR
 */ function generateKHQR(information, type) {
    // Getting information from information instance
    // If the merchant QR, there will be the merchantID and acquiring bank
    let merchantInfo = {
        bakongAccountID: information.bakongAccountID,
        isMerchant: false
    };
    if (type == "merchant") merchantInfo = {
        bakongAccountID: information.bakongAccountID,
        merchantID: information.merchantID,
        acquiringBank: information.acquiringBank,
        isMerchant: true
    };
    else merchantInfo = {
        bakongAccountID: information.bakongAccountID,
        accountInformation: information.accountInformation,
        acquiringBank: information.acquiringBank,
        isMerchant: false
    };
    const additionalDataInformation = {
        billNumber: information.billNumber,
        mobileNumber: information.mobileNumber,
        storeLabel: information.storeLabel,
        terminalLabel: information.terminalLabel,
        purposeOfTransaction: information.purposeOfTransaction
    };
    const languageInformation = {
        languagePreference: information.languagePreference,
        merchantNameAlternateLanguage: information.merchantNameAlternateLanguage,
        merchantCityAlternateLanguage: information.merchantCityAlternateLanguage
    };
    try {
        const amount = information.amount;
        // Creating each tag
        const payloadFormatIndicator = new PayloadFormatIndicator(emv.PAYLOAD_FORMAT_INDICATOR, emv.DEFAULT_PAYLOAD_FORMAT_INDICATOR);
        // Static QR is when QR Code has no amount tag
        // in this case the amount is 0
        let QRType = emv.DYNAMIC_QR;
        if (amount == undefined || amount == 0) QRType = emv.STATIC_QR;
        const pointOfInitiationMethod = new PointOfInitiationMethod(emv.POINT_OF_INITIATION_METHOD, QRType);
        let upi;
        if (information.upiMerchantAccount) upi = new UnionpayMerchantAccount(emv.UNIONPAY_MERCHANT_ACCOUNT, information.upiMerchantAccount);
        // Setting tag for merchant account type
        let KHQRType = emv.MERCHANT_ACCOUNT_INFORMATION_INDIVIDUAL;
        if (type == "merchant") KHQRType = emv.MERCHANT_ACCOUNT_INFORMATION_MERCHANT;
        const globalUniqueIdentifier = new GlobalUnqiueIdentifier(KHQRType, merchantInfo);
        const merchantCategoryCode = new MerchantCategoryCode(emv.MERCHANT_CATEGORY_CODE, String(information.merchantCategoryCode ?? emv.DEFAULT_MERCHANT_CATEGORY_CODE));
        const currency = new TransactionCurrency(emv.TRANSACTION_CURRENCY, information.currency);
        if (information.currency == khqrData.currency.usd && upi) throw KHQRResponse(null, errorCode.UPI_ACCOUNT_INFORMATION_INVALID_CURRENCY);
        // Array of KHQR tags to loop and get the string of tags
        const KHQRInstances = [
            payloadFormatIndicator,
            pointOfInitiationMethod,
            upi || "",
            globalUniqueIdentifier,
            merchantCategoryCode,
            currency
        ];
        if (!(amount == undefined || amount == 0)) {
            let amountInput = information.amount;
            if (information.currency == khqrData.currency.khr) {
                if (amountInput % 1 == 0) amountInput = Math.round(amountInput);
                else throw KHQRResponse(null, errorCode.TRANSACTION_AMOUNT_INVALID);
            } else {
                const amountSplit = String(amountInput).split(".");
                const precision = amountSplit[1];
                if (precision != undefined && precision.length > 2) throw KHQRResponse(null, errorCode.TRANSACTION_AMOUNT_INVALID);
                if (precision != undefined) amountInput = parseFloat(amountInput).toFixed(2);
            }
            const amount = new TransactionAmount(emv.TRANSACTION_AMOUNT, amountInput);
            KHQRInstances.push(amount);
        }
        const countryCode = new CountryCode(emv.COUNTRY_CODE, emv.DEFAULT_COUNTRY_CODE);
        KHQRInstances.push(countryCode);
        const merchantName = new MerchantName(emv.MERCHANT_NAME, information.merchantName);
        KHQRInstances.push(merchantName);
        const merchantCity = new MerchantCity(emv.MERCHANT_CITY, String(information.merchantCity || emv.DEFAULT_MERCHANT_CITY));
        KHQRInstances.push(merchantCity);
        // Additional data wont be added if there is undefined
        let additionalData;
        const isEmptyAdditionalData = Object.values(additionalDataInformation).every((el)=>el == null || el == undefined || el == "");
        if (!isEmptyAdditionalData) {
            additionalData = new AdditionalData(emv.ADDITIONAL_DATA_TAG, additionalDataInformation);
            KHQRInstances.push(additionalData);
        }
        const isEmptyLanguageTEmplate = Object.values(languageInformation).every((el)=>el == null || el == undefined || el == "");
        if (!isEmptyLanguageTEmplate) {
            const languageTemplate = new MerchantInformationLanguageTemplate(emv.MERCHANT_INFORMATION_LANGUAGE_TEMPLATE, languageInformation);
            KHQRInstances.push(languageTemplate);
        }
        if (QRType === emv.DYNAMIC_QR) {
            if (!information.expirationTimestamp) {
                throw KHQRResponse(null, errorCode.EXPIRATION_TIMESTAMP_REQUIRED);
            }
            const timeStamp = new TimeStamp(emv.TIMESTAMP_TAG, {
                creationTimestamp: Date.now(),
                expirationTimestamp: information.expirationTimestamp
            }, QRType);
            KHQRInstances.push(timeStamp);
        }
        let khqrNoCrc = "";
        for(let i = 0; i < KHQRInstances.length; i++){
            khqrNoCrc += KHQRInstances[i].toString();
        }
        let khqr = khqrNoCrc + emv.CRC + emv.CRC_LENGTH;
        khqr += crc16(khqr);
        return khqr;
    } catch (error) {
        return error;
    }
}
module.exports = generateKHQR;
}),
"[project]/node_modules/bakong-khqr/src/constant/KHQRSubtag.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { emv } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
module.exports = {
    input: [
        {
            tag: "29",
            data: {
                bakongAccountID: null,
                accountInformation: null
            }
        },
        {
            tag: "30",
            data: {
                bakongAccountID: null,
                merchantID: null,
                acquiringBank: null
            }
        },
        {
            tag: "62",
            data: {
                billNumber: null,
                mobileNumber: null,
                storeLabel: null,
                terminalLabel: null,
                purposeOfTransaction: null
            }
        },
        {
            tag: "64",
            data: {
                languagePreference: null,
                merchantNameAlternateLanguage: null,
                merchantCityAlternateLanguage: null
            }
        },
        {
            tag: "99",
            data: {
                creationTimestamp: null,
                expirationTimestamp: null
            }
        }
    ],
    compare: [
        {
            tag: "29",
            subTag: emv.BAKONG_ACCOUNT_IDENTIFIER,
            name: "bakongAccountID"
        },
        {
            tag: "29",
            subTag: emv.MERCHANT_ACCOUNT_INFORMATION_MERCHANT_ID,
            name: "accountInformation"
        },
        {
            tag: "29",
            subTag: emv.MERCHANT_ACCOUNT_INFORMATION_ACQUIRING_BANK,
            name: "acquiringBank"
        },
        {
            tag: "62",
            subTag: emv.BILLNUMBER_TAG,
            name: "billNumber"
        },
        {
            tag: "62",
            subTag: emv.ADDITIONAL_DATA_FIELD_MOBILE_NUMBER,
            name: "mobileNumber"
        },
        {
            tag: "62",
            subTag: emv.STORELABEL_TAG,
            name: "storeLabel"
        },
        {
            tag: "62",
            subTag: emv.PURPOSE_OF_TRANSACTION,
            name: "purposeOfTransaction"
        },
        {
            tag: "62",
            subTag: emv.TERMINAL_TAG,
            name: "terminalLabel"
        },
        {
            tag: "64",
            subTag: emv.LANGUAGE_PREFERENCE,
            name: "languagePreference"
        },
        {
            tag: "64",
            subTag: emv.MERCHANT_NAME_ALTERNATE_LANGUAGE,
            name: "merchantNameAlternateLanguage"
        },
        {
            tag: "64",
            subTag: emv.MERCHANT_CITY_ALTERNATE_LANGUAGE,
            name: "merchantCityAlternateLanguage"
        },
        {
            tag: "99",
            subTag: emv.CREATION_TIMESTAMP,
            name: "creationTimestamp"
        },
        {
            tag: "99",
            subTag: emv.EXPIRATION_TIMESTAMP,
            name: "expirationTimestamp"
        }
    ]
};
}),
"[project]/node_modules/bakong-khqr/src/constant/KHQRTag.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Merchant class
const { PointOfInitiationMethod, PayloadFormatIndicator, TransactionCurrency, MerchantCategoryCode, CountryCode, MerchantCity, TransactionAmount, MerchantName, TimeStamp, AdditionalData, CRC, GlobalUnqiueIdentifier, MerchantInformationLanguageTemplate, UnionpayMerchantAccount } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/MerchantCode/index.js [app-route] (ecmascript)");
module.exports = [
    {
        tag: "00",
        type: "payloadFormatIndicator",
        required: true,
        instance: PayloadFormatIndicator
    },
    {
        tag: "01",
        type: "pointofInitiationMethod",
        required: false,
        instance: PointOfInitiationMethod
    },
    {
        tag: "15",
        type: "unionPayMerchant",
        required: false,
        instance: UnionpayMerchantAccount
    },
    {
        sub: true,
        tag: "29",
        type: "globalUnqiueIdentifier",
        required: true,
        instance: GlobalUnqiueIdentifier
    },
    {
        tag: "52",
        type: "merchantCategoryCode",
        required: true,
        instance: MerchantCategoryCode
    },
    {
        tag: "53",
        type: "transactionCurrency",
        required: true,
        instance: TransactionCurrency
    },
    {
        tag: "54",
        type: "transactionAmount",
        required: false,
        instance: TransactionAmount
    },
    {
        tag: "58",
        type: "countryCode",
        required: true,
        instance: CountryCode
    },
    {
        tag: "59",
        type: "merchantName",
        required: true,
        instance: MerchantName
    },
    {
        tag: "60",
        type: "merchantCity",
        required: true,
        instance: MerchantCity
    },
    {
        tag: "62",
        sub: true,
        type: "additionalData",
        required: false,
        instance: AdditionalData
    },
    {
        tag: "64",
        sub: true,
        type: "merchantInformationLanguageTemplate",
        required: false,
        instance: MerchantInformationLanguageTemplate
    },
    {
        tag: "99",
        sub: true,
        type: "timestamp",
        required: false,
        instance: TimeStamp
    },
    {
        tag: "63",
        type: "crc",
        required: true,
        instance: CRC
    }
];
}),
"[project]/node_modules/bakong-khqr/src/helper/cutString.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function cutString(string) {
    const sliceIndex = 2;
    // Get first 2
    const tag = string.slice(0, sliceIndex);
    const length = parseInt(string.slice(sliceIndex, sliceIndex * 2));
    const value = string.slice(sliceIndex * 2, sliceIndex * 2 + length);
    const slicedString = string.slice(sliceIndex * 2 + length);
    return {
        tag: tag,
        value: value,
        slicedString: slicedString
    };
};
}),
"[project]/node_modules/bakong-khqr/src/controller/decodeKHQR.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const KHQRSubtag = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/KHQRSubtag.js [app-route] (ecmascript)");
const KHQRTag = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/KHQRTag.js [app-route] (ecmascript)");
const cutString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/helper/cutString.js [app-route] (ecmascript)");
/**
 * Decode helper function
 * This decode funcition has a flow of
 * 1. Slice the string as each KHQR tag and store into memory
 * 2. Check if the required field exist
 * 3. Check if the KHQR Code given is in order or not
 * 4. Get the value of each tag and if there is subtag repeat number 1
 * @param {string} KHQRStringdecode
 */ function decodeKHQR(KHQRString) {
    const allField = KHQRTag.map((el)=>el.tag);
    const subtag = KHQRTag.filter((el)=>el.sub == true).map((obj)=>obj.tag);
    let requiredField = KHQRTag.filter((el)=>el.required == true).map((el)=>el.tag);
    const subTagInput = KHQRSubtag.input;
    const subTagCompare = KHQRSubtag.compare;
    let tags = {};
    let merchantType = null;
    let lastTag = "";
    let isMerchantTag = false;
    while(KHQRString){
        sliceTagObject = cutString(KHQRString);
        let { tag, value, slicedString } = sliceTagObject;
        if (tag == lastTag) break;
        const isMerchant = tag == "30";
        if (isMerchant) {
            merchantType = "30";
            tag = "29";
            isMerchantTag = true;
        } else if (tag == "29") merchantType = "29";
        if (allField.includes(tag)) {
            tags[tag] = value;
            requiredField = requiredField.filter((el)=>el != tag);
        }
        KHQRString = slicedString;
        lastTag = tag;
    }
    let decodeValue = {
        merchantType: merchantType
    };
    subTagInput.map((el)=>el.data).forEach((obj)=>decodeValue = {
            ...decodeValue,
            ...obj
        });
    KHQRTag.forEach((khqrTag)=>{
        const tag = khqrTag.tag;
        const khqr = KHQRTag.find((el)=>el.tag == tag);
        let value = tags[tag] == undefined ? null : tags[tag];
        let inputValue = value;
        if (subtag.includes(tag)) {
            const inputdata = cloneObject(findTag(subTagInput, tag).data);
            while(value){
                cutsubstring = cutString(value);
                const subtag = cutsubstring.tag;
                const subtagValue = cutsubstring.value;
                const slicedsubtag = cutsubstring.slicedString;
                let nameSubtag = subTagCompare.filter((el)=>el.tag == tag).find((el)=>el.subTag == subtag);
                if (nameSubtag != undefined) {
                    nameSubtag = nameSubtag.name;
                    if (isMerchantTag && nameSubtag == "accountInformation") nameSubtag = "merchantID";
                    inputdata[nameSubtag] = subtagValue;
                    inputValue = inputdata;
                }
                value = slicedsubtag;
            }
            decodeValue = {
                ...decodeValue,
                ...inputValue
            };
            try {
                new khqr.instance(tag, inputValue);
            } catch (error) {}
        } else {
            decodeValue[khqr.type] = value;
        // if (tag == "99" && value == null) decodeValue[khqr.type] = null;
        }
    });
    return decodeValue;
}
/**
 * Helper function for decode
 * It query from the object where tag is the same
 */ const findTag = (object, tag)=>object.find((el)=>el.tag == tag);
/**
 * Check if the array is in order algorithm
 */ const isInorder = (a)=>a.slice(1).every((e, i)=>e > a[i]);
const cloneObject = (obj)=>JSON.parse(JSON.stringify(obj));
module.exports = decodeKHQR;
}),
"[project]/node_modules/bakong-khqr/src/controller/decodeNonKHQR.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function isNumberic(value) {
    return /^\d+$/.test(value);
}
function isValid(tag, length, value) {
    return isNumberic(tag) && length === value.length;
}
function extractTLV(string) {
    const sliceIndex = 2;
    const tag = string.slice(0, sliceIndex);
    const length = parseInt(string.slice(sliceIndex, sliceIndex * 2));
    const value = string.slice(sliceIndex * 2, sliceIndex * 2 + length);
    const remainString = string.slice(sliceIndex * 2 + length);
    return {
        tag: tag,
        length: length,
        value: value,
        remainString: remainString
    };
}
/**
 * Decode a non-KHQR string
 *
 * @param {String} qr - The QR code string to decode.
 * @returns {Object} The decoded object.
 */ function decodeNonKhqr(qr) {
    const firstLevelData = {};
    const finalData = {};
    let remaningQR = qr;
    // first-level
    do {
        const { tag, length, value, remainString } = extractTLV(remaningQR);
        if (!isValid(tag, length, value)) break;
        firstLevelData[tag] = value;
        remaningQR = remainString;
    }while (remaningQR)
    // second-level
    for(const tag in firstLevelData){
        let remainingValue = firstLevelData[tag];
        finalData[tag] = remainingValue;
        const secondLevelData = {};
        const thirdLevelData = {};
        // check range 26-51, 80-99 and 64
        if (!(tag >= 26 && tag <= 51) && !(tag >= 80 && tag <= 99) && tag !== "64" && tag !== "62") continue;
        // check if value has emv format
        if (remainingValue.length >= 6) {
            do {
                const { tag: subTag, length, value: subValue, remainString } = extractTLV(remainingValue);
                if (!isValid(subTag, length, subValue)) break;
                remainingValue = remainString;
                // check for main tag is 62 and subtags range from 50-99
                if (tag === "62" && subTag >= 50 && subTag <= 99) {
                    let remainingValueL3 = subValue;
                    // third-level
                    do {
                        const { tag: subTagL3, length, value: valueL3, remainString } = extractTLV(remainingValueL3);
                        if (!isValid(subTagL3, length, valueL3)) break;
                        thirdLevelData[subTagL3] = valueL3;
                        remainingValueL3 = remainString;
                    }while (remainingValueL3)
                }
                if (Object.keys(thirdLevelData).length > 0) {
                    secondLevelData[subTag] = thirdLevelData;
                } else {
                    secondLevelData[subTag] = subValue;
                }
            }while (remainingValue)
            if (Object.keys(secondLevelData).length > 0) {
                finalData[tag] = secondLevelData;
            }
        }
    }
    return finalData;
}
module.exports = decodeNonKhqr;
}),
"[project]/node_modules/bakong-khqr/src/controller/decodeValidation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { errorCode, emv } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const KHQRSubtag = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/KHQRSubtag.js [app-route] (ecmascript)");
const KHQRTag = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/KHQRTag.js [app-route] (ecmascript)");
const cutString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/helper/cutString.js [app-route] (ecmascript)");
const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
/**
 * Decode helper function
 * This decode funcition has a flow of
 * 1. Slice the string as each KHQR tag and store into memory
 * 2. Check if the required field exist
 * 3. Check if the KHQR Code given is in order or not
 * 4. Get the value of each tag and if there is subtag repeat number 1
 * @param {string} KHQRString
 * @returns object of KHQR decode
 */ function decodeKHQRValidation(KHQRString) {
    const allField = KHQRTag.map((el)=>el.tag);
    const subtag = KHQRTag.filter((el)=>el.sub == true).map((obj)=>obj.tag);
    let requiredField = KHQRTag.filter((el)=>el.required == true).map((el)=>el.tag);
    const subTagInput = KHQRSubtag.input;
    const subTagCompare = KHQRSubtag.compare;
    let tags = [];
    let merchantType = "individual";
    let lastTag = "";
    while(KHQRString){
        sliceTagObject = cutString(KHQRString);
        let { tag, value, slicedString } = sliceTagObject;
        if (tag == lastTag) break;
        const isMerchant = tag == "30";
        if (isMerchant) {
            merchantType = "merchant";
            tag = "29";
        }
        if (allField.includes(tag)) {
            tags.push({
                tag: tag,
                value: value
            });
            // if (tag != "29" && tag != "30" && tag != "62") {
            //     const KHQRInstanceTest = KHQRTag.find(
            //         (el) => el.tag == tag
            //     ).instance;
            //     new KHQRInstanceTest(tag, value);
            // }
            requiredField = requiredField.filter((el)=>el != tag);
        }
        KHQRString = slicedString;
        lastTag = tag;
    }
    // tag pointofInitiationMethod 01, dynamic khqr 12
    if (tags.some((item)=>item.tag === "01" && item.value === "12")) {
        if (!tags.some((item)=>item.tag === "54")) {
            throw KHQRResponse(null, errorCode.INVALID_DYNAMIC_KHQR);
        }
        if (!tags.some((item)=>item.tag === "99")) {
            throw KHQRResponse(null, errorCode.EXPIRATION_TIMESTAMP_REQUIRED);
        }
    }
    // check required timestamp for dynamic KHQR (tag amount 54, tag timestamp 99)
    if (tags.some((item)=>item.tag === "54") && !tags.some((item)=>item.tag === "99")) {
        throw KHQRResponse(null, errorCode.EXPIRATION_TIMESTAMP_REQUIRED);
    }
    const requiredFieldNotExist = requiredField.length != 0;
    if (requiredFieldNotExist) {
        const requiredTag = requiredField[0];
        const missingInstance = findTag(KHQRTag, requiredTag).instance;
        new missingInstance(requiredTag, null);
    }
    // const khqrInOrder = isInorder(
    //     tags.map((e) => parseInt(e.tag)).splice(-1, 1)
    // );
    // if (!khqrInOrder) throw KHQRResponse(null, errorCode.TAG_NOT_IN_ORDER);
    let decodeValue = {
        merchantType: merchantType
    };
    subTagInput.map((el)=>el.data).forEach((obj)=>decodeValue = {
            ...decodeValue,
            ...obj
        });
    let poi = null;
    tags.forEach((khqrTag)=>{
        const tag = khqrTag.tag;
        const khqr = KHQRTag.find((el)=>el.tag == tag);
        let value = khqrTag.value;
        let inputValue = value;
        if (tag === emv.POINT_OF_INITIATION_METHOD) poi = value;
        if (subtag.includes(tag)) {
            const inputdata = cloneObject(findTag(subTagInput, tag).data);
            while(value){
                cutsubstring = cutString(value);
                const subtag = cutsubstring.tag;
                const subtagValue = cutsubstring.value;
                const slicedsubtag = cutsubstring.slicedString;
                let nameSubtag = subTagCompare.filter((el)=>el.tag == tag).find((el)=>el.subTag == subtag);
                if (nameSubtag != undefined) {
                    nameSubtag = nameSubtag.name;
                    inputdata[nameSubtag] = subtagValue;
                    inputValue = inputdata;
                }
                value = slicedsubtag;
            }
            decodeValue = {
                ...decodeValue,
                ...inputValue
            };
            if (tag === emv.TIMESTAMP_TAG) {
                new khqr.instance(tag, inputValue, poi);
            } else {
                new khqr.instance(tag, inputValue);
            }
        } else {
            const instance = new khqr.instance(tag, inputValue);
            decodeValue[khqr.type] = instance.value;
        }
    });
    return decodeValue;
}
/**
 * Helper function for decode
 * It query from the object where tag is the same
 */ const findTag = (object, tag)=>object.find((el)=>el.tag == tag);
/**
 * Check if the array is in order algorithm
 */ const isInorder = (a)=>a.slice(1).every((e, i)=>e > a[i]);
const cloneObject = (obj)=>JSON.parse(JSON.stringify(obj));
module.exports = decodeKHQRValidation;
}),
"[project]/node_modules/bakong-khqr/src/helper/checkAccountID.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const { errorCode, emv } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
const axios = __turbopack_context__.r("[project]/node_modules/axios/index.js [app-route] (ecmascript)");
async function isAccountIDExist(url, accountID) {
    // Check account ID length
    if (accountID.length > emv.INVALID_LENGTH.BAKONG_ACCOUNT) throw KHQRResponse(null, errorCode.BAKONG_ACCOUNT_ID_LENGTH_INVALID);
    if (accountID.split("@").length != 2) throw KHQRResponse(null, errorCode.BAKONG_ACCOUNT_ID_INVALID);
    // fetch from URL
    try {
        let response = await axios.post(url, {
            accountId: accountID
        }, {
            header: {
                "Content-Type": "application/json"
            },
            timeout: 45 * 1000
        });
        const respData = response.data;
        // Getting Response
        const responseCode = respData.responseCode;
        const error = respData.errorCode;
        if (error == 11) return {
            bakongAccountExisted: false
        };
        if (error == 12) throw KHQRResponse(null, errorCode.BAKONG_ACCOUNT_ID_INVALID);
        // Return value
        if (responseCode == 0) return {
            bakongAccountExisted: true
        };
        else return {
            bakongAccountExisted: false
        };
    } catch (error) {
        if (error.code === 'ECONNABORTED') throw KHQRResponse(null, errorCode.CONNECTION_TIMEOUT);
        throw KHQRResponse(null, errorCode.CONNECTION_TIMEOUT);
    }
}
module.exports = isAccountIDExist;
}),
"[project]/node_modules/bakong-khqr/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Constant variable
const { khqrData, errorCode, emv } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/constant/index.js [app-route] (ecmascript)");
// Controller for decoding and encoding
const crc16 = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/helper/crc16.js [app-route] (ecmascript)");
const CRCValidation = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/CRCValidation.js [app-route] (ecmascript)");
// Controller for deeplink
const { isValidLink, callDeepLinkAPI, SourceInfo } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/helper/deeplink.js [app-route] (ecmascript)");
// Model
const { KHQRDeepLinkData, KHQRResponse } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/index.js [app-route] (ecmascript)");
const { IndividualInfo, MerchantInfo } = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/model/information.js [app-route] (ecmascript)");
const generateKHQR = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/controller/generateKHQR.js [app-route] (ecmascript)");
const decodeKHQRString = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/controller/decodeKHQR.js [app-route] (ecmascript)");
const decodeNonKHQR = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/controller/decodeNonKHQR.js [app-route] (ecmascript)");
const md5 = __turbopack_context__.r("[project]/node_modules/md5/md5.js [app-route] (ecmascript)");
const decodeKHQRValidation = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/controller/decodeValidation.js [app-route] (ecmascript)");
const isAccountIDExist = __turbopack_context__.r("[project]/node_modules/bakong-khqr/src/helper/checkAccountID.js [app-route] (ecmascript)");
class BakongKHQR {
    /**
     * Generate Individual
     * Passing indivualInfo which is the instance of the IndividualInfo
     * Example: const indivualInfo = new IndividualInfo("devit@abaa",
        khqrData.currency.khr,
        "devit",
        "Battambang",
        optionalData)
     * @param {*} individualInfo 
     * @returns object of KHQR Response
     */ generateIndividual(individualInfo) {
        const khqr = generateKHQR(individualInfo, khqrData.merchantType.individual);
        if (khqr.status != undefined) return khqr;
        const result = {
            qr: khqr,
            md5: md5(khqr)
        };
        return KHQRResponse(result, null);
    }
    /**
     * Generate Individual
     * Passing indivualInfo which is the instance of the IndividualInfo
     * Example: const indivualInfo = new MerchantInfo("devit@abaa",
        khqrData.currency.usd,
        "devit",
        "Battambang",
        optionalData)
     * @param {*} individualInfo 
     * @returns String of KHQR
     */ generateMerchant(merchantInfo) {
        const khqr = generateKHQR(merchantInfo, khqrData.merchantType.merchant);
        if (khqr.status != undefined) return khqr;
        const result = {
            qr: khqr,
            md5: md5(khqr)
        };
        return KHQRResponse(result, null);
    }
    /**
     * Decode function
     * It is a static function
     * so you can use it as const decodeResult = BakongKHQR.decode(KHQRString)
     * @param {String} KHQRString
     * @returns object of KHQR Response
     */ static decode(KHQRString) {
        const decodedData = decodeKHQRString(KHQRString);
        return KHQRResponse(decodedData, null);
    // try {
    //     const isValidKHQR = this.verify(KHQRString).isValid;
    //     if (!isValidKHQR || KHQRString.length < emv.INVALID_LENGTH.KHQR)
    //         throw KHQRResponse(null, errorCode.KHQR_INVALID);
    //     const decodedData = decodeKHQRString(KHQRString);
    //     return KHQRResponse(decodedData, null);
    // } catch (error) {
    //     return error;
    // }
    }
    /**
     * Decode a non-KHQR string
     * 
     * @param {*} KHQRString - The QR code string to decode.
     * @returns {Object} The decoded object.
     */ static decodeNonKhqr(KHQRString) {
        return KHQRResponse(decodeNonKHQR(KHQRString), null);
    }
    /**
     * Verify KHQR
     * This function is a static function
     * it can be used as const isVerifiedKHQR = BakongKHQR.verify(KHQRString)
     * @param {String} KHQRString 
     * @returns Verification object
     */ static verify(KHQRString) {
        const isCorrectFormCRC = checkCRCRegExp(KHQRString);
        if (!isCorrectFormCRC) return new CRCValidation(false);
        const crc = KHQRString.slice(-4);
        const KHQRNoCrc = KHQRString.slice(0, -4);
        const validCRC = crc16(KHQRNoCrc) == crc.toUpperCase();
        const isValidCRC = new CRCValidation(validCRC);
        try {
            if (!isValidCRC.isValid || KHQRString.length < emv.INVALID_LENGTH.KHQR) throw KHQRResponse(null, errorCode.KHQR_INVALID);
            decodeKHQRValidation(KHQRString);
            return new CRCValidation(true);
        } catch (error) {
            return new CRCValidation(false);
        }
    }
    /**
     * Generate Deep Link
     * @param {String} url 
     * @param {String} qr 
     * @param {SourceInfo} sourceInfo (optional)
     * @returns 
     */ static async generateDeepLink(url, qr, sourceInfo) {
        // check invalid url
        const validURL = isValidLink(url);
        if (!validURL) return KHQRResponse(null, errorCode.INVALID_DEEP_LINK_URL);
        // check qr is valid (CRC)
        const isValidKHQR = this.verify(qr);
        if (!isValidKHQR.isValid) return KHQRResponse(null, errorCode.KHQR_INVALID);
        // check data source field
        if (sourceInfo) {
            if (!sourceInfo.appIconUrl || !sourceInfo.appName || !sourceInfo.appDeepLinkCallback) return KHQRResponse(null, errorCode.INVALID_DEEP_LINK_SOURCE_INFO);
        }
        // call API to generate deeplink
        try {
            const data = await callDeepLinkAPI(url, {
                qr: qr
            });
            const deepLinkData = new KHQRDeepLinkData(data.data.shortLink);
            return KHQRResponse(deepLinkData.getData(), null);
        } catch (error) {
            return error;
        }
    }
    /**
     * Check Bakong Account wether it is exist or not
     * @param {*} url 
     * @param {*} bakongID 
     * @returns 
     */ static async checkBakongAccount(url, bakongID) {
        try {
            const accountExistResponse = await isAccountIDExist(url, bakongID);
            return KHQRResponse(accountExistResponse, null);
        } catch (error) {
            return error;
        }
    }
}
function checkCRCRegExp(crc) {
    const crcRegExp = /6304[A-Fa-f0-9]{4}$/;
    return crcRegExp.test(crc);
}
module.exports = {
    BakongKHQR,
    khqrData,
    SourceInfo,
    IndividualInfo,
    MerchantInfo
};
}),
"[project]/node_modules/axios/lib/cancel/Cancel.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;
}),
"[project]/node_modules/axios/lib/cancel/CancelToken.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Cancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/Cancel.js [app-route] (ecmascript)");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++){
            token._listeners[i](cancel);
        }
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) {
            // Cancellation has already been requested
            return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) {
        this._listeners.push(listener);
    } else {
        this._listeners = [
            listener
        ];
    }
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
        return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
        this._listeners.splice(index, 1);
    }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;
}),
"[project]/node_modules/axios/lib/cancel/isCancel.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};
}),
"[project]/node_modules/axios/lib/env/data.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "version": "0.24.0"
};
}),
"[project]/node_modules/axios/lib/helpers/spread.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};
}),
"[project]/node_modules/axios/lib/helpers/isAxiosError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === 'object' && payload.isAxiosError === true;
};
}),
"[project]/node_modules/axios/lib/helpers/bind.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++){
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
};
}),
"[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/bind.js [app-route] (ecmascript)");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') {
        return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
        return false;
    }
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(var i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        for(var key in obj){
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
        } else if (isArray(val)) {
            result[key] = val.slice();
        } else {
            result[key] = val;
        }
    }
    for(var i = 0, l = arguments.length; i < l; i++){
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};
}),
"[project]/node_modules/axios/lib/helpers/buildURL.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
                return;
            }
            if (utils.isArray(val)) {
                key = key + '[]';
            } else {
                val = [
                    val
                ];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                } else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};
}),
"[project]/node_modules/axios/lib/core/InterceptorManager.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};
module.exports = InterceptorManager;
}),
"[project]/node_modules/axios/lib/helpers/normalizeHeaderName.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};
}),
"[project]/node_modules/axios/lib/core/enhanceError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
        error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};
}),
"[project]/node_modules/axios/lib/core/createError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var enhanceError = __turbopack_context__.r("[project]/node_modules/axios/lib/core/enhanceError.js [app-route] (ecmascript)");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};
}),
"[project]/node_modules/axios/lib/core/settle.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var createError = __turbopack_context__.r("[project]/node_modules/axios/lib/core/createError.js [app-route] (ecmascript)");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
};
}),
"[project]/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
}),
"[project]/node_modules/axios/lib/helpers/combineURLs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};
}),
"[project]/node_modules/axios/lib/core/buildFullPath.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isAbsoluteURL = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-route] (ecmascript)");
var combineURLs = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/combineURLs.js [app-route] (ecmascript)");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
};
}),
"[project]/node_modules/axios/lib/adapters/http.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var settle = __turbopack_context__.r("[project]/node_modules/axios/lib/core/settle.js [app-route] (ecmascript)");
var buildFullPath = __turbopack_context__.r("[project]/node_modules/axios/lib/core/buildFullPath.js [app-route] (ecmascript)");
var buildURL = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/buildURL.js [app-route] (ecmascript)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var httpFollow = __turbopack_context__.r("[project]/node_modules/follow-redirects/index.js [app-route] (ecmascript)").http;
var httpsFollow = __turbopack_context__.r("[project]/node_modules/follow-redirects/index.js [app-route] (ecmascript)").https;
var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
var VERSION = __turbopack_context__.r("[project]/node_modules/axios/lib/env/data.js [app-route] (ecmascript)").version;
var createError = __turbopack_context__.r("[project]/node_modules/axios/lib/core/createError.js [app-route] (ecmascript)");
var enhanceError = __turbopack_context__.r("[project]/node_modules/axios/lib/core/enhanceError.js [app-route] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/node_modules/axios/lib/defaults.js [app-route] (ecmascript)");
var Cancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/Cancel.js [app-route] (ecmascript)");
var isHttps = /https:?/;
/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */ function setProxy(options, proxy, location) {
    options.hostname = proxy.host;
    options.host = proxy.host;
    options.port = proxy.port;
    options.path = location;
    // Basic proxy authorization
    if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }
    // If a proxy is used, any redirects must also pass through the proxy
    options.beforeRedirect = function beforeRedirect(redirection) {
        redirection.headers.host = redirection.host;
        setProxy(redirection, proxy, redirection.href);
    };
}
/*eslint consistent-return:0*/ module.exports = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var onCanceled;
        function done() {
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
                config.signal.removeEventListener('abort', onCanceled);
            }
        }
        var resolve = function resolve(value) {
            done();
            resolvePromise(value);
        };
        var reject = function reject(value) {
            done();
            rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;
        var headerNames = {};
        Object.keys(headers).forEach(function storeLowerName(name) {
            headerNames[name.toLowerCase()] = name;
        });
        // Set User-Agent (required by some servers)
        // See https://github.com/axios/axios/issues/69
        if ('user-agent' in headerNames) {
            // User-Agent is specified; handle case where no UA header is desired
            if (!headers[headerNames['user-agent']]) {
                delete headers[headerNames['user-agent']];
            }
        // Otherwise, use specified value
        } else {
            // Only set header if it hasn't been set in config
            headers['User-Agent'] = 'axios/' + VERSION;
        }
        if (data && !utils.isStream(data)) {
            if (Buffer.isBuffer(data)) {
            // Nothing to do...
            } else if (utils.isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data));
            } else if (utils.isString(data)) {
                data = Buffer.from(data, 'utf-8');
            } else {
                return reject(createError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
            }
            // Add Content-Length header if data exists
            if (!headerNames['content-length']) {
                headers['Content-Length'] = data.length;
            }
        }
        // HTTP basic authentication
        var auth = undefined;
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            auth = username + ':' + password;
        }
        // Parse url
        var fullPath = buildFullPath(config.baseURL, config.url);
        var parsed = url.parse(fullPath);
        var protocol = parsed.protocol || 'http:';
        if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(':');
            var urlUsername = urlAuth[0] || '';
            var urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword;
        }
        if (auth && headerNames.authorization) {
            delete headers[headerNames.authorization];
        }
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        var options = {
            path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            agents: {
                http: config.httpAgent,
                https: config.httpsAgent
            },
            auth: auth
        };
        if (config.socketPath) {
            options.socketPath = config.socketPath;
        } else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
        }
        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + '_proxy';
            var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            if (proxyUrl) {
                var parsedProxyUrl = url.parse(proxyUrl);
                var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
                var shouldProxy = true;
                if (noProxyEnv) {
                    var noProxy = noProxyEnv.split(',').map(function trim(s) {
                        return s.trim();
                    });
                    shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                        if (!proxyElement) {
                            return false;
                        }
                        if (proxyElement === '*') {
                            return true;
                        }
                        if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                            return true;
                        }
                        return parsed.hostname === proxyElement;
                    });
                }
                if (shouldProxy) {
                    proxy = {
                        host: parsedProxyUrl.hostname,
                        port: parsedProxyUrl.port,
                        protocol: parsedProxyUrl.protocol
                    };
                    if (parsedProxyUrl.auth) {
                        var proxyUrlAuth = parsedProxyUrl.auth.split(':');
                        proxy.auth = {
                            username: proxyUrlAuth[0],
                            password: proxyUrlAuth[1]
                        };
                    }
                }
            }
        }
        if (proxy) {
            options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
            setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
        }
        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport) {
            transport = config.transport;
        } else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https : http;
        } else {
            if (config.maxRedirects) {
                options.maxRedirects = config.maxRedirects;
            }
            transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config.maxBodyLength > -1) {
            options.maxBodyLength = config.maxBodyLength;
        }
        if (config.insecureHTTPParser) {
            options.insecureHTTPParser = config.insecureHTTPParser;
        }
        // Create the request
        var req = transport.request(options, function handleResponse(res) {
            if (req.aborted) return;
            // uncompress the response body transparently if required
            var stream = res;
            // return the last request in case of redirects
            var lastRequest = res.req || req;
            // if no content, is HEAD request or decompress disabled we should not decompress
            if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
                switch(res.headers['content-encoding']){
                    /*eslint default-case:0*/ case 'gzip':
                    case 'compress':
                    case 'deflate':
                        // add the unzipper to the body stream processing pipeline
                        stream = stream.pipe(zlib.createUnzip());
                        // remove the content-encoding in order to not confuse downstream operations
                        delete res.headers['content-encoding'];
                        break;
                }
            }
            var response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config: config,
                request: lastRequest
            };
            if (config.responseType === 'stream') {
                response.data = stream;
                settle(resolve, reject, response);
            } else {
                var responseBuffer = [];
                var totalResponseBytes = 0;
                stream.on('data', function handleStreamData(chunk) {
                    responseBuffer.push(chunk);
                    totalResponseBytes += chunk.length;
                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                        stream.destroy();
                        reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest));
                    }
                });
                stream.on('error', function handleStreamError(err) {
                    if (req.aborted) return;
                    reject(enhanceError(err, config, null, lastRequest));
                });
                stream.on('end', function handleStreamEnd() {
                    var responseData = Buffer.concat(responseBuffer);
                    if (config.responseType !== 'arraybuffer') {
                        responseData = responseData.toString(config.responseEncoding);
                        if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                            responseData = utils.stripBOM(responseData);
                        }
                    }
                    response.data = responseData;
                    settle(resolve, reject, response);
                });
            }
        });
        // Handle errors
        req.on('error', function handleRequestError(err) {
            if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
            reject(enhanceError(err, config, null, req));
        });
        // Handle request timeout
        if (config.timeout) {
            // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
            var timeout = parseInt(config.timeout, 10);
            if (isNaN(timeout)) {
                reject(createError('error trying to parse `config.timeout` to int', config, 'ERR_PARSE_TIMEOUT', req));
                return;
            }
            // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
            // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
            // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
            // And then these socket which be hang up will devoring CPU little by little.
            // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
            req.setTimeout(timeout, function handleRequestTimeout() {
                req.abort();
                var transitional = config.transitional || defaults.transitional;
                reject(createError('timeout of ' + timeout + 'ms exceeded', config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', req));
            });
        }
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (req.aborted) return;
                req.abort();
                reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
        }
        // Send the request
        if (utils.isStream(data)) {
            data.on('error', function handleStreamError(err) {
                reject(enhanceError(err, config, null, req));
            }).pipe(req);
        } else {
            req.end(data);
        }
    });
};
}),
"[project]/node_modules/axios/lib/helpers/cookies.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
                cookie.push('path=' + path);
            }
            if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
            }
            if (secure === true) {
                cookie.push('secure');
            }
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();
}),
"[project]/node_modules/axios/lib/helpers/parseHeaders.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
        return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                    val
                ]);
            } else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });
    return parsed;
};
}),
"[project]/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();
}),
"[project]/node_modules/axios/lib/adapters/xhr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var settle = __turbopack_context__.r("[project]/node_modules/axios/lib/core/settle.js [app-route] (ecmascript)");
var cookies = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/cookies.js [app-route] (ecmascript)");
var buildURL = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/buildURL.js [app-route] (ecmascript)");
var buildFullPath = __turbopack_context__.r("[project]/node_modules/axios/lib/core/buildFullPath.js [app-route] (ecmascript)");
var parseHeaders = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/parseHeaders.js [app-route] (ecmascript)");
var isURLSameOrigin = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-route] (ecmascript)");
var createError = __turbopack_context__.r("[project]/node_modules/axios/lib/core/createError.js [app-route] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/node_modules/axios/lib/defaults.js [app-route] (ecmascript)");
var Cancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/Cancel.js [app-route] (ecmascript)");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
                config.signal.removeEventListener('abort', onCanceled);
            }
        }
        if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
        }
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // Add headers to the request
        if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                } else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
            request.responseType = config.responseType;
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
        }
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) {
                    return;
                }
                reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
        }
        if (!requestData) {
            requestData = null;
        }
        // Send the request
        request.send(requestData);
    });
};
}),
"[project]/node_modules/axios/lib/defaults.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var normalizeHeaderName = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/normalizeHeaderName.js [app-route] (ecmascript)");
var enhanceError = __turbopack_context__.r("[project]/node_modules/axios/lib/core/enhanceError.js [app-route] (ecmascript)");
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = __turbopack_context__.r("[project]/node_modules/axios/lib/adapters/xhr.js [app-route] (ecmascript)");
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = __turbopack_context__.r("[project]/node_modules/axios/lib/adapters/http.js [app-route] (ecmascript)");
    }
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                return data;
            }
            if (utils.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw enhanceError(e, this, 'E_JSON_PARSE');
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
}),
"[project]/node_modules/axios/lib/core/transformData.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/node_modules/axios/lib/defaults.js [app-route] (ecmascript)");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};
}),
"[project]/node_modules/axios/lib/core/dispatchRequest.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var transformData = __turbopack_context__.r("[project]/node_modules/axios/lib/core/transformData.js [app-route] (ecmascript)");
var isCancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/isCancel.js [app-route] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/node_modules/axios/lib/defaults.js [app-route] (ecmascript)");
var Cancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/Cancel.js [app-route] (ecmascript)");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new Cancel('canceled');
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};
}),
"[project]/node_modules/axios/lib/core/mergeConfig.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
        } else if (utils.isArray(source)) {
            return source.slice();
        }
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};
}),
"[project]/node_modules/axios/lib/helpers/validator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var VERSION = __turbopack_context__.r("[project]/node_modules/axios/lib/env/data.js [app-route] (ecmascript)").version;
var validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) {
            throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
        throw new TypeError('options must be an object');
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new TypeError('option ' + opt + ' must be ' + result);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw Error('Unknown option ' + opt);
        }
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};
}),
"[project]/node_modules/axios/lib/core/Axios.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var buildURL = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/buildURL.js [app-route] (ecmascript)");
var InterceptorManager = __turbopack_context__.r("[project]/node_modules/axios/lib/core/InterceptorManager.js [app-route] (ecmascript)");
var dispatchRequest = __turbopack_context__.r("[project]/node_modules/axios/lib/core/dispatchRequest.js [app-route] (ecmascript)");
var mergeConfig = __turbopack_context__.r("[project]/node_modules/axios/lib/core/mergeConfig.js [app-route] (ecmascript)");
var validator = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/validator.js [app-route] (ecmascript)");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else {
        config = config || {};
    }
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) {
        config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
    } else {
        config.method = 'get';
    }
    var transitional = config.transitional;
    if (transitional !== undefined) {
        validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
    }
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length){
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length){
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;
}),
"[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/node_modules/axios/lib/utils.js [app-route] (ecmascript)");
var bind = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/bind.js [app-route] (ecmascript)");
var Axios = __turbopack_context__.r("[project]/node_modules/axios/lib/core/Axios.js [app-route] (ecmascript)");
var mergeConfig = __turbopack_context__.r("[project]/node_modules/axios/lib/core/mergeConfig.js [app-route] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/node_modules/axios/lib/defaults.js [app-route] (ecmascript)");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/Cancel.js [app-route] (ecmascript)");
axios.CancelToken = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/CancelToken.js [app-route] (ecmascript)");
axios.isCancel = __turbopack_context__.r("[project]/node_modules/axios/lib/cancel/isCancel.js [app-route] (ecmascript)");
axios.VERSION = __turbopack_context__.r("[project]/node_modules/axios/lib/env/data.js [app-route] (ecmascript)").version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/spread.js [app-route] (ecmascript)");
// Expose isAxiosError
axios.isAxiosError = __turbopack_context__.r("[project]/node_modules/axios/lib/helpers/isAxiosError.js [app-route] (ecmascript)");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;
}),
"[project]/node_modules/axios/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
}),
"[project]/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/debug/src/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-route] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/node_modules/debug/src/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/node_modules/supports-color/index.js [app-route] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/node_modules/debug/src/browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/node_modules/debug/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/browser.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/node.js [app-route] (ecmascript)");
}
}),
"[project]/node_modules/has-flag/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/node_modules/supports-color/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/node_modules/has-flag/index.js [app-route] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/node_modules/follow-redirects/debug.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/node_modules/debug/src/index.js [app-route] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/node_modules/follow-redirects/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/node_modules/follow-redirects/debug.js [app-route] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// HTTP headers to drop across HTTP/HTTPS and domain boundaries
var sensitiveHeaders = [
    "Authorization",
    "Proxy-Authorization",
    "Cookie"
];
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Create filter for sensitive HTTP headers
    this._headerFilter = new RegExp("^(?:" + sensitiveHeaders.concat(options.sensitiveHeaders).map(escapeRegex).join("|") + ")$", "i");
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    if (!isArray(options.sensitiveHeaders)) {
        options.sensitiveHeaders = [];
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(this._headerFilter, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isArray(value) {
    return value instanceof Array;
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
function escapeRegex(regex) {
    return regex.replace(/[\]\\/()*+?.$]/g, "\\$&");
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/node_modules/crypt/crypt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', crypt = {
        // Bit-wise rotation left
        rotl: function(n, b) {
            return n << b | n >>> 32 - b;
        },
        // Bit-wise rotation right
        rotr: function(n, b) {
            return n << 32 - b | n >>> b;
        },
        // Swap big-endian to little-endian and vice versa
        endian: function(n) {
            // If number given, swap endian
            if (n.constructor == Number) {
                return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
            }
            // Else, assume array and swap all items
            for(var i = 0; i < n.length; i++)n[i] = crypt.endian(n[i]);
            return n;
        },
        // Generate an array of any length of random bytes
        randomBytes: function(n) {
            for(var bytes = []; n > 0; n--)bytes.push(Math.floor(Math.random() * 256));
            return bytes;
        },
        // Convert a byte array to big-endian 32-bit words
        bytesToWords: function(bytes) {
            for(var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)words[b >>> 5] |= bytes[i] << 24 - b % 32;
            return words;
        },
        // Convert big-endian 32-bit words to a byte array
        wordsToBytes: function(words) {
            for(var bytes = [], b = 0; b < words.length * 32; b += 8)bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
            return bytes;
        },
        // Convert a byte array to a hex string
        bytesToHex: function(bytes) {
            for(var hex = [], i = 0; i < bytes.length; i++){
                hex.push((bytes[i] >>> 4).toString(16));
                hex.push((bytes[i] & 0xF).toString(16));
            }
            return hex.join('');
        },
        // Convert a hex string to a byte array
        hexToBytes: function(hex) {
            for(var bytes = [], c = 0; c < hex.length; c += 2)bytes.push(parseInt(hex.substr(c, 2), 16));
            return bytes;
        },
        // Convert a byte array to a base-64 string
        bytesToBase64: function(bytes) {
            for(var base64 = [], i = 0; i < bytes.length; i += 3){
                var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
                for(var j = 0; j < 4; j++)if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));
                else base64.push('=');
            }
            return base64.join('');
        },
        // Convert a base-64 string to a byte array
        base64ToBytes: function(base64) {
            // Remove non-base-64 characters
            base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
            for(var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4){
                if (imod4 == 0) continue;
                bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
            }
            return bytes;
        }
    };
    module.exports = crypt;
})();
}),
"[project]/node_modules/charenc/charenc.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var charenc = {
    // UTF-8 encoding
    utf8: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
            return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
        },
        // Convert a byte array to a string
        bytesToString: function(bytes) {
            return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
        }
    },
    // Binary encoding
    bin: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
            for(var bytes = [], i = 0; i < str.length; i++)bytes.push(str.charCodeAt(i) & 0xFF);
            return bytes;
        },
        // Convert a byte array to a string
        bytesToString: function(bytes) {
            for(var str = [], i = 0; i < bytes.length; i++)str.push(String.fromCharCode(bytes[i]));
            return str.join('');
        }
    }
};
module.exports = charenc;
}),
"[project]/node_modules/is-buffer/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ // The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}
// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}
}),
"[project]/node_modules/md5/md5.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var crypt = __turbopack_context__.r("[project]/node_modules/crypt/crypt.js [app-route] (ecmascript)"), utf8 = __turbopack_context__.r("[project]/node_modules/charenc/charenc.js [app-route] (ecmascript)").utf8, isBuffer = __turbopack_context__.r("[project]/node_modules/is-buffer/index.js [app-route] (ecmascript)"), bin = __turbopack_context__.r("[project]/node_modules/charenc/charenc.js [app-route] (ecmascript)").bin, // The core
    md5 = function(message, options) {
        // Convert to byte array
        if (message.constructor == String) if (options && options.encoding === 'binary') message = bin.stringToBytes(message);
        else message = utf8.stringToBytes(message);
        else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);
        else if (!Array.isArray(message) && message.constructor !== Uint8Array) message = message.toString();
        // else, assume byte array already
        var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        // Swap endian
        for(var i = 0; i < m.length; i++){
            m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF | (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
        }
        // Padding
        m[l >>> 5] |= 0x80 << l % 32;
        m[(l + 64 >>> 9 << 4) + 14] = l;
        // Method shortcuts
        var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
        for(var i = 0; i < m.length; i += 16){
            var aa = a, bb = b, cc = c, dd = d;
            a = FF(a, b, c, d, m[i + 0], 7, -680876936);
            d = FF(d, a, b, c, m[i + 1], 12, -389564586);
            c = FF(c, d, a, b, m[i + 2], 17, 606105819);
            b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
            a = FF(a, b, c, d, m[i + 4], 7, -176418897);
            d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
            c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
            b = FF(b, c, d, a, m[i + 7], 22, -45705983);
            a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
            d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
            c = FF(c, d, a, b, m[i + 10], 17, -42063);
            b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
            a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
            d = FF(d, a, b, c, m[i + 13], 12, -40341101);
            c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
            b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
            a = GG(a, b, c, d, m[i + 1], 5, -165796510);
            d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
            c = GG(c, d, a, b, m[i + 11], 14, 643717713);
            b = GG(b, c, d, a, m[i + 0], 20, -373897302);
            a = GG(a, b, c, d, m[i + 5], 5, -701558691);
            d = GG(d, a, b, c, m[i + 10], 9, 38016083);
            c = GG(c, d, a, b, m[i + 15], 14, -660478335);
            b = GG(b, c, d, a, m[i + 4], 20, -405537848);
            a = GG(a, b, c, d, m[i + 9], 5, 568446438);
            d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
            c = GG(c, d, a, b, m[i + 3], 14, -187363961);
            b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
            a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
            d = GG(d, a, b, c, m[i + 2], 9, -51403784);
            c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
            b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
            a = HH(a, b, c, d, m[i + 5], 4, -378558);
            d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
            c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
            b = HH(b, c, d, a, m[i + 14], 23, -35309556);
            a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
            d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
            c = HH(c, d, a, b, m[i + 7], 16, -155497632);
            b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
            a = HH(a, b, c, d, m[i + 13], 4, 681279174);
            d = HH(d, a, b, c, m[i + 0], 11, -358537222);
            c = HH(c, d, a, b, m[i + 3], 16, -722521979);
            b = HH(b, c, d, a, m[i + 6], 23, 76029189);
            a = HH(a, b, c, d, m[i + 9], 4, -640364487);
            d = HH(d, a, b, c, m[i + 12], 11, -421815835);
            c = HH(c, d, a, b, m[i + 15], 16, 530742520);
            b = HH(b, c, d, a, m[i + 2], 23, -995338651);
            a = II(a, b, c, d, m[i + 0], 6, -198630844);
            d = II(d, a, b, c, m[i + 7], 10, 1126891415);
            c = II(c, d, a, b, m[i + 14], 15, -1416354905);
            b = II(b, c, d, a, m[i + 5], 21, -57434055);
            a = II(a, b, c, d, m[i + 12], 6, 1700485571);
            d = II(d, a, b, c, m[i + 3], 10, -1894986606);
            c = II(c, d, a, b, m[i + 10], 15, -1051523);
            b = II(b, c, d, a, m[i + 1], 21, -2054922799);
            a = II(a, b, c, d, m[i + 8], 6, 1873313359);
            d = II(d, a, b, c, m[i + 15], 10, -30611744);
            c = II(c, d, a, b, m[i + 6], 15, -1560198380);
            b = II(b, c, d, a, m[i + 13], 21, 1309151649);
            a = II(a, b, c, d, m[i + 4], 6, -145523070);
            d = II(d, a, b, c, m[i + 11], 10, -1120210379);
            c = II(c, d, a, b, m[i + 2], 15, 718787259);
            b = II(b, c, d, a, m[i + 9], 21, -343485551);
            a = a + aa >>> 0;
            b = b + bb >>> 0;
            c = c + cc >>> 0;
            d = d + dd >>> 0;
        }
        return crypt.endian([
            a,
            b,
            c,
            d
        ]);
    };
    // Auxiliary functions
    md5._ff = function(a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    md5._gg = function(a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    md5._hh = function(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    md5._ii = function(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    // Package private blocksize
    md5._blocksize = 16;
    md5._digestsize = 16;
    module.exports = function(message, options) {
        if (message === undefined || message === null) throw new Error('Illegal argument ' + message);
        var digestbytes = crypt.wordsToBytes(md5(message, options));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
    };
})();
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__021~.~v._.js.map