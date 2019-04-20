var appSandboxPolicies = {
    id: 'aabbcc',
    name: '默认沙箱策略',
    updateTime: 1553500728000,
    policies: [{
        pkgName: 'foo.bar.har',
        signatureMD5: 'xxyyzz',
        deviceACL: {
            camera: true,
            location: false,
            microphone: true
        },
        dlp: {
            clipboard: true,
            selfScreenshot: true,
            sysScreenshot: true,
            bluetooth: true,
            share: true,
            encFile: true,
            writeExternal: true,
            printer: true,
            watermark: true,
            traceless: true,
        },
        sysDataACL: {
            message: 'CURD',
            conacts: 'CR',
            calllog: 'R',
            multimedia: 'R'
        },
        envCtl: {
            disableOnRoot: true,
            disableOnWiFi: true,
            disableOnMobileData: true,
            callSysApp: true,
            callThirdApp: true,
            callSandboxApp: true,
            wifiWhiteList: ['可用wifi-1', '可用wifi-2'],
            mobileDataWhiteList: ['可用数据网络-1', '可用数据网络-2']
        }
    }]
}

console.log(JSON.stringify(appSandboxPolicies));


var appSandboxPolicies1 = {
    id: 'aabbcc',
    name: '默认沙箱策略',
    updateTime: 1553500728000,
    policies: []
}

// console.log(JSON.stringify(appSandboxPolicies1));