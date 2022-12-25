export interface Echo {
    result: boolean;
    desc: string;
    option: number;
    level: number;
}

export interface DeviceDetailInfoBean {
    deviceSecurityStatus: string;
    isDeviceOrProfileOwner: boolean;
}

export interface DeviceRunningStatusInfo {
    cpuUsage: string;
    dataUsage: string;
}

export interface DeviceRuntimeCollectDataPackageBean {
    deviceRunningStatusInfo: DeviceRunningStatusInfo;
    ruleType: number;
}

export interface LocationInfoBean {
    longitude: number;
    latitude: number;
    height: number;
    locationEngine: number;
    coordinate: number;
    radius: number;
    requestTime: number;
    responseTime: number;
}

export interface CertificateInfoBean {
    type: string;
}

export interface Param {
    certificateInfoBean: CertificateInfoBean;
    isVerified: boolean;
    description: string;
    time: number;
    isReplace: boolean;
}

export interface MHappyOrWorkDayInfoBean {
    state: number;
    startTime: number;
    stopTime: number;
}

export interface SimCardInfoBean {
    iccid: string;
    imsi: string;
    numeric: string;
    telephonyNumber: string;
    isBind: boolean;
    slotIndex: number;
    isActiveData: boolean;
    states: number;
}

export interface TfCardInfoBean {
    vendor: string;
    accountName: string;
    cardId: string;
    accountIdentityId: string;
    accountPhoneNumber: string;
    isBind: boolean;
}

export interface Feedback {
    echo: Echo;
    ruleType: number;
    deviceDetailInfoBean: DeviceDetailInfoBean;
    deviceRuntimeCollectDataPackageBean: DeviceRuntimeCollectDataPackageBean;
    locationInfoBean: LocationInfoBean;
    param: Param[];
    mHappyOrWorkDayInfoBean: MHappyOrWorkDayInfoBean;
    logUrl: string;
    time?: number;
    errorCode?: number;
    description: string;
    result?: boolean;
    fid: string;
    fileName: string;
    size?: number;
    format: string;
    quality?: number;
    simCardInfoBean: SimCardInfoBean;
    tfCardInfoBean: TfCardInfoBean;
}

export interface ReportBean {
    flowNumber: string;
    hash: string;
    algorithm: string;
    definitionVer: string;
    timeStamp: number;
    versionCode: number;
    terminalID: string[];
    type: string;
    feedback: Feedback[];
    isPolicyFeedback: boolean;
    isFirstApply: boolean;
}