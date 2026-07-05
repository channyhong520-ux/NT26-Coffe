declare module "bakong-khqr" {
  export interface KHQROptionalData {
    currency?: number;
    amount?: number;
    billNumber?: string;
    mobileNumber?: string;
    storeLabel?: string;
    terminalLabel?: string;
    purposeOfTransaction?: string;
    languagePreference?: string;
    merchantNameAlternateLanguage?: string;
    merchantCityAlternateLanguage?: string;
    upiMerchantAccount?: string;
    expirationTimestamp?: number;
    merchantCategoryCode?: string;
  }

  export class IndividualInfo {
    constructor(
      bakongAccountID: string,
      merchantName: string,
      merchantCity: string,
      optionalData?: KHQROptionalData
    );
  }

  export class MerchantInfo {
    constructor(
      bakongAccountID: string,
      merchantName: string,
      merchantCity: string,
      merchantID: string,
      acquiringBank: string,
      optionalData?: KHQROptionalData
    );
  }

  export class SourceInfo {
    constructor(appIconUrl: string, appName: string, appDeepLinkCallback: string);
  }

  export interface KHQRResponse {
    status: {
      code: number;
      errorCode: number | null;
      message: string | null;
    };
    data: {
      qr: string;
      md5: string;
    } | null;
  }

  export class BakongKHQR {
    constructor(token?: string);
    generateIndividual(info: IndividualInfo): KHQRResponse;
    generateMerchant(info: MerchantInfo): KHQRResponse;
    static verify(qr: string): { isValid: boolean };
    static decode(qr: string): unknown;
  }

  export const khqrData: {
    currency: {
      usd: number;
      khr: number;
    };
  };
}
