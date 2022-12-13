export namespace PdlBeans {
    export interface FenceDefinition {
        ruleType: number;
        isExternalAction: boolean;
    }

    export interface Fence {
        fenceIndex: number;
        fenceDefinition: FenceDefinition[];
    }

    export interface ParamList {
        repeatable: boolean;
        checkTime: number;
        checkDuration: number;
        timeFrequency: number;
        action: string;
        isLockLimitApp: boolean;
    }

    export interface PermissionInfoList {
        permission: string;
        mode: string;
    }

    export interface AppPermissionConfigMap {
        permissionInfoList: PermissionInfoList[];
        name: string;
        thumbprint: string;
    }

    export interface PhoneNumberGroupInfoBeanList {
        resourceId: string;
        groupName: string;
    }

    export interface InstallerWhiteList {
        packageName: string;
        appName: string;
        thumbprint: string;
        versionCode: number;
        firstInstallTime: number;
        lastUpdateTime: number;
    }

    export interface BluetoothInfoBeanList {
        isEnable: boolean;
        mac: string;
        name: string;
    }

    export interface Value {
        editable: boolean;
        option: number;
        ruleType: number;
        isUploadPositionAfterOoc?: boolean;
        isLostSimCardOoc?: boolean;
        bindSimCardMode: string;
        param: any;
        attachedConditions: any[];
        appKeyList: string[];
        maxFailedAttempts?: number;
        plmns1: string[];
        plmns2: string[];
        paramList: ParamList[];
        appPermissionConfigMap: AppPermissionConfigMap[];
        allowShortNumber?: boolean;
        phoneNumberWhiteList: any[];
        phoneNumberGroupInfoBeanList: PhoneNumberGroupInfoBeanList[];
        allowFamilyNumber?: boolean;
        passwordMinimumLength?: number;
        isForceCompliance?: boolean;
        watermarkContentTypes: string[];
        watermarkSize?: number;
        watermarkColorStr: string;
        installerWhiteList: InstallerWhiteList[];
        bluetoothInfoBeanList: BluetoothInfoBeanList[];
    }

    export interface RuleDefinition {
        fenRef: number;
        value: Value;
    }

    export interface Rule {
        ruleType: number;
        ruleDefinition: RuleDefinition[];
    }

    export interface PolicyInfoBean {
        policyId: string;
        policyName: string;
        policyVersion: number;
        commandNumber: string;
        policyTag: string;
    }

    export interface PolicyBean {
        flowNumber: string;
        signature: string;
        algorithm: string;
        definitionVer: string;
        versionCode: number;
        timeStamp: number;
        type: string;
        fences: Fence[];
        rules: Rule[];
        policyInfoBean: PolicyInfoBean;
    }
}
