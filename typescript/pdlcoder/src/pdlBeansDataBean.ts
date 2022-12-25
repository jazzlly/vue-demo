
export interface Detail {
    dataFluxTx: number;
    dataFluxRx: number;
    wlanFluxTx: number;
    wlanFluxRx: number;
    appRxBytes: number;
    appTxBytes: number;
    power?: number;
    packageName: string;
    exceptionSum?: number;
    exceptionTime: string;
    exceptionLog: string;
    runningTime?: number;
}

export interface ToChangedTfCard {
    vendor: string;
    accountName: string;
    cardId: string;
    accountIdentityId: string;
    accountPhoneNumber: string;
    isBind: boolean;
}

export interface ChangedToSim {
    iccid: string;
    imsi: string;
    numeric: string;
    telephonyNumber: string;
    isBind: boolean;
    slotIndex: number;
    isActiveData: boolean;
    states: number;
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

export interface SwInfo {
    packageName: string;
    appName: string;
    thumbprint: string;
    sh1: string;
    signCert: string;
    versionName: string;
    versionCode: number;
    developer: string;
    firstInstallTime: any;
    lastUpdateTime: any;
}

export interface HardwareInfo {
    ram: number;
    networkType: string;
    wlanAdapterChip: string;
    btAdapterChip: string;
    nfcChip: string;
    locatorChip: string;
}

export interface OsInfo {
    isHarmonyOS: boolean;
    version: string;
    apiLevel: string;
    basebandVersion: string;
    buildNumber: string;
}

export interface CellInfoBean {
    asuLevel: number;
    dbm: number;
}

export interface NetworkInfo {
    ICCID: string;
    homeCountry: string;
    dataNetwork: boolean;
    cellInfoBean: CellInfoBean;
    bluetoothPhysicalAddress: string;
}

export interface DeviceRunningStatusInfo {
}

export interface HwInfo {
    deviceSecurityStatus: string;
    hardwareInfo: HardwareInfo;
    osInfo: OsInfo;
    networkInfo: NetworkInfo;
    deviceRunningStatusInfo: DeviceRunningStatusInfo;
    isDeviceOrProfileOwner: boolean;
}

export interface Config {
    apn: string;
    mcc: string;
    mnc: string;
}

export interface Detail2 {
    packageName: string;
    appName: string;
    thumbprint: string;
    sh1: string;
    signCert: string;
    versionName: string;
    versionCode: number;
    developer: string;
    firstInstallTime: any;
    lastUpdateTime: any;
}

export interface IllgalDetail {
    which: number;
    mode: number;
    details: Detail2[];
}

export interface Feedback {
    total: string;
    deviceBootTime: number;
    details: Detail[];
    startTime: any;
    endTime: any;
    ruleType: number;
    isTfCardChanged?: boolean;
    isOoc?: boolean;
    toChangedTfCard: ToChangedTfCard;
    time?: number;
    action: any;
    isChanged?: boolean;
    changedToSim: ChangedToSim;
    locationInfoBean: LocationInfoBean;
    connectivity?: boolean;
    connectionType?: number;
    rootStatus?: boolean;
    swInfo: SwInfo[];
    hwInfo: HwInfo;
    integrityStatus?: boolean;
    report: string;
    config: Config;
    commandId: string;
    networkOperator: string;
    simCardOperator: string;
    errorCode?: number;
    description: string;
    result?: boolean;
    triggerCmdId: string;
    policyId: string;
    tag: string;
    actionTime?: number;
    policyStatus: string;
    doorTag: string;
    userAccount: string;
    isSimCardRetried?: boolean;
    isLostConnect?: boolean;
    lostDuration: string;
    isTfCardRetired?: boolean;
    isLoginFailed?: boolean;
    errorDesc: string;
    swLegalStatus?: boolean;
    illegalMode?: number;
    illgalDetails: IllgalDetail[];
    hwLegalStatus?: boolean;
    illegalHWList: string[];
}


