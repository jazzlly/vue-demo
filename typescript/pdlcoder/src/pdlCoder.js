"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(o, key, value) {
    o[key] = value;
    return o;
}
/*
对于ruleType需要写入Integer
*/
const jsonPolicyBean = `
    {
        "flowNumber": "044abcc4b0684c72a5fbe2325a429b18",
        "signature": "a9YGWCcTgtvuQ/L9LihZ7S0miKU2TlGw1GtPkbTkcwBaHwTRNeqVzW6Z8Fi5plpDdG5lKtjwwsMCMV8XF70lQ8Sq1FD6eKoKH5X/zElPuZrTn5+yokr97+Ib52S0yjAtMTBtA2AY0ZyLKVFl2Db6wKM9uNWmtNMsyi/IAE4KkQI=",
        "algorithm": "RSA/ECB/PKCS1Padding",
        "definitionVer": "1.0",
        "versionCode": 3,
        "timeStamp": 1668654151861,
        "type": "PolicyPackage",
        "fences": [
          {
            "fenceIndex": 0,
            "fenceDefinition": [
              {
                "ruleType": 6001,
                "isExternalAction": false
              }
            ]
          }
        ],
        "rules": [
          {
            "ruleType": 5001,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 5001
                }
              }
            ]
          },
          {
            "ruleType": -4001,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "isUploadPositionAfterOoc": true,
                  "isLostSimCardOoc": true,
                  "bindSimCardMode": "mode_bind_default_active_data_sim_card",
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4001
                }
              }
            ]
          },
          {
            "ruleType": -4002,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4002
                }
              }
            ]
          },
          {
            "ruleType": -4003,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4003
                }
              }
            ]
          },
          {
            "ruleType": -4005,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "attachedConditions": [],
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ],
                    "prescribedList": [
                      0
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4005
                }
              }
            ]
          },
          {
            "ruleType": -4006,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ],
                    "prescribedList": [
                      0
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4006
                }
              }
            ]
          },
          {
            "ruleType": 4006,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 4006
                }
              }
            ]
          },
          {
            "ruleType": -4007,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ],
                    "prescribedList": [
                      0
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4007
                }
              }
            ]
          },
          {
            "ruleType": -4008,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ],
                    "prescribedList": [
                      0
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4008
                }
              }
            ]
          },
          {
            "ruleType": 4007,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "timeFrequency": 0,
                    "action": "warn",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 4007
                }
              }
            ]
          },
          {
            "ruleType": 4008,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 4008
                }
              }
            ]
          },
          {
            "ruleType": -4010,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "appKeyList": [
                    "app_key_wechat",
                    "app_key_qq"
                  ],
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ],
                    "prescribedList": [
                      0
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4010
                }
              }
            ]
          },
          {
            "ruleType": -4011,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ]
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4011
                }
              }
            ]
          },
          {
            "ruleType": 4010,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 4010
                }
              }
            ]
          },
          {
            "ruleType": -4012,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      86400000
                    ]
                  },
                  "editable": false,
                  "option": 1,
                  "ruleType": -4012
                }
              }
            ]
          },
          {
            "ruleType": 4011,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "maxFailedAttempts": 3,
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 4011
                }
              }
            ]
          },
          {
            "ruleType": -4013,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "plmns1": [
                    "aa",
                    "bb",
                    "cc",
                    "dd"
                  ],
                  "plmns2": [
                    "aa",
                    "bb",
                    "cc",
                    "dd"
                  ],
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": -4013
                }
              }
            ]
          },
          {
            "ruleType": 4012,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "timeFrequency": 0,
                    "action": "tip",
                    "isLockLimitApp": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 4012
                }
              }
            ]
          },
          {
            "ruleType": 4013,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "paramList": [
                    {
                      "repeatable": false,
                      "checkTime": 0,
                      "checkDuration": 0,
                      "timeFrequency": 604800000,
                      "action": "tip",
                      "isLockLimitApp": false
                    }
                  ],
                  "editable": true,
                  "option": 1,
                  "ruleType": 4013
                }
              }
            ]
          },
          {
            "ruleType": 4014,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "isAllPackage": true,
                    "timeFrequencyList": [
                      3600000
                    ],
                    "prescribedList": [
                      0
                    ]
                  },
                  "editable": true,
                  "option": 3,
                  "ruleType": 4014
                }
              }
            ]
          },
          {
            "ruleType": 3001,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "appWhiteList": [
                      {
                        "packageName": "com.app.white.1",
                        "appName": "app-white-1",
                        "thumbprint": "1",
                        "versionCode": 0,
                        "firstInstallTime": 0,
                        "lastUpdateTime": 0
                      }
                    ],
                    "isOnlyFromMyMarket": false
                  },
                  "editable": true,
                  "option": 2,
                  "ruleType": 3001
                }
              }
            ]
          },
          {
            "ruleType": 3002,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "appBlackList": [
                      {
                        "packageName": "com.app.black.1",
                        "appName": "app black 1",
                        "thumbprint": "123456",
                        "versionCode": 0,
                        "firstInstallTime": 0,
                        "lastUpdateTime": 0
                      }
                    ],
                    "isOnlyFromMyMarket": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 3002
                }
              }
            ]
          },
          {
            "ruleType": 3004,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": {
                    "appBlackList": [
                      {
                        "packageName": "com.app.not.delete.1",
                        "appName": "app not delete1",
                        "thumbprint": "123456",
                        "versionCode": 0,
                        "firstInstallTime": 0,
                        "lastUpdateTime": 0
                      }
                    ],
                    "isOnlyFromMyMarket": false
                  },
                  "editable": true,
                  "option": 1,
                  "ruleType": 3004
                }
              }
            ]
          },
          {
            "ruleType": 3005,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "appPermissionConfigMap": [
                    {
                      "permissionInfoList": [
                        {
                          "permission": "READ_IMEI",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "START_ON_BOOT",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "RUN_BACKGROUND",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "CALL_PHONE",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "READ_CALLLOG",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "WRITE_CALLLOG",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "DELETE_CALLLOG",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "SEND_SMS",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "READ_MSG",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "SEND_MMS",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "READ_MMS",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "READ_CONTACTS",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "WRITE_CONTACTS",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "OPEN_MOBILENETWORK",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "MOBILENETWORK",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "OPEN_WLAN",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "WLAN",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "OPEN_BLUETOOTH",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "OPEN_NFC",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "LOCATION",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "RECORD_AUDIO",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "RECORD_SCREEN",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "PHOTO",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "VIDEO",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "MOTION_SENSORS",
                          "mode": "REMIND"
                        },
                        {
                          "permission": "READ_INSTALLED_APP",
                          "mode": "REMIND"
                        }
                      ],
                      "name": "com.app.auth.1",
                      "thumbprint": "123456"
                    }
                  ],
                  "editable": true,
                  "option": 1,
                  "ruleType": 3005
                }
              }
            ]
          },
          {
            "ruleType": 2001,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "allowShortNumber": true,
                  "phoneNumberWhiteList": [],
                  "phoneNumberGroupInfoBeanList": [
                    {
                      "resourceId": "ff808081821477e9018215a2116901fb",
                      "groupName": "1233"
                    },
                    {
                      "resourceId": "ff8080818213be2a01821447d0520076",
                      "groupName": "1234"
                    }
                  ],
                  "allowFamilyNumber": true,
                  "editable": true,
                  "option": -1,
                  "ruleType": 2001
                }
              }
            ]
          },
          {
            "ruleType": -2002,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": -2002
                }
              }
            ]
          },
          {
            "ruleType": 2002,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": -1,
                  "ruleType": 2002
                }
              }
            ]
          },
          {
            "ruleType": -2003,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": -2003
                }
              }
            ]
          },
          {
            "ruleType": 2003,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 2003
                }
              }
            ]
          },
          {
            "ruleType": -2004,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": -2004
                }
              }
            ]
          },
          {
            "ruleType": 2004,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 2004
                }
              }
            ]
          },
          {
            "ruleType": -2005,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": -2005
                }
              }
            ]
          },
          {
            "ruleType": 2005,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 1,
                  "ruleType": 2005
                }
              }
            ]
          },
          {
            "ruleType": -2006,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": -2006
                }
              }
            ]
          },
          {
            "ruleType": 2006,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 2,
                  "ruleType": 2006
                }
              }
            ]
          },
          {
            "ruleType": 2007,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "passwordMinimumLength": 0,
                  "isForceCompliance": false,
                  "editable": true,
                  "option": 2,
                  "ruleType": 2007
                }
              }
            ]
          },
          {
            "ruleType": -2008,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "watermarkContentTypes": [
                    "account"
                  ],
                  "watermarkSize": 14,
                  "watermarkColorStr": "3C888888",
                  "editable": true,
                  "option": 0,
                  "ruleType": -2008
                }
              }
            ]
          },
          {
            "ruleType": 2008,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 2008
                }
              }
            ]
          },
          {
            "ruleType": -2009,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 1,
                  "ruleType": -2009
                }
              }
            ]
          },
          {
            "ruleType": 2009,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 2009
                }
              }
            ]
          },
          {
            "ruleType": -2010,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": -2010
                }
              }
            ]
          },
          {
            "ruleType": 2010,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 1,
                  "ruleType": 2010
                }
              }
            ]
          },
          {
            "ruleType": 2011,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 2011
                }
              }
            ]
          },
          {
            "ruleType": 2012,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "installerWhiteList": [
                    {
                      "packageName": "com.app1",
                      "appName": "app1",
                      "thumbprint": "12345",
                      "versionCode": 0,
                      "firstInstallTime": 0,
                      "lastUpdateTime": 0
                    }
                  ],
                  "editable": true,
                  "option": 1,
                  "ruleType": 2012
                }
              }
            ]
          },
          {
            "ruleType": 2013,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 2,
                  "ruleType": 2013
                }
              }
            ]
          },
          {
            "ruleType": 2014,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 1,
                  "ruleType": 2014
                }
              }
            ]
          },
          {
            "ruleType": 1001,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "param": [
                    {
                      "enable": false,
                      "ssid": "wlan-white-list-item1",
                      "mac": "aa:aa:aa:aa:aa:aa"
                    },
                    {
                      "enable": false,
                      "ssid": "wlan-white-list-item2",
                      "mac": "aa:aa:aa:aa:aa:ab"
                    }
                  ],
                  "editable": true,
                  "option": 2,
                  "ruleType": 1001
                }
              }
            ]
          },
          {
            "ruleType": 1002,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1002
                }
              }
            ]
          },
          {
            "ruleType": 1003,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "bluetoothInfoBeanList": [
                    {
                      "isEnable": false,
                      "mac": "aa:aa:aa:aa:aa:aa",
                      "name": "bluetooth-white-list-item1"
                    },
                    {
                      "isEnable": false,
                      "mac": "aa:aa:aa:aa:aa:ab",
                      "name": "bluetooth-white-list-item2"
                    }
                  ],
                  "editable": true,
                  "option": 1,
                  "ruleType": 1003
                }
              }
            ]
          },
          {
            "ruleType": 1004,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 1,
                  "ruleType": 1004
                }
              }
            ]
          },
          {
            "ruleType": 1005,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1005
                }
              }
            ]
          },
          {
            "ruleType": 1006,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1006
                }
              }
            ]
          },
          {
            "ruleType": 1007,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 2,
                  "ruleType": 1007
                }
              }
            ]
          },
          {
            "ruleType": 1008,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1008
                }
              }
            ]
          },
          {
            "ruleType": 1009,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1009
                }
              }
            ]
          },
          {
            "ruleType": 1010,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1010
                }
              }
            ]
          },
          {
            "ruleType": 1011,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1011
                }
              }
            ]
          },
          {
            "ruleType": 1012,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1012
                }
              }
            ]
          },
          {
            "ruleType": 1013,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1013
                }
              }
            ]
          },
          {
            "ruleType": 1014,
            "ruleDefinition": [
              {
                "fenRef": 0,
                "value": {
                  "editable": true,
                  "option": 0,
                  "ruleType": 1014
                }
              }
            ]
          }
        ],
        "policyInfoBean": {
          "policyId": "ff8080818482df2801848352ec7a0000",
          "policyName": "sonicom-pdl",
          "policyVersion": 4,
          "commandNumber": "Cloud12#$",
          "policyTag": "tag_general_policy"
        }
      }
    `;
const objPolicyBean = JSON.parse(jsonPolicyBean);
// console.info(objPolicyBean)
iterPolicyBean(objPolicyBean, 0);
function iterPolicyBean(o, indent) {
    if (isUndefinedOrNull(o)) {
        return;
    }
    if (isBoolean(o) || isString(o) || isNumber(o)) {
        console.info(' '.repeat(indent).concat(o.toString()));
        return;
    }
    if (isArray(o)) {
        for (const e of o) {
            console.info(' '.repeat(indent).concat('['));
            iterPolicyBean(e, indent + 2);
            console.info(' '.repeat(indent).concat(']'));
        }
        return;
    }
    console.info(' '.repeat(indent).concat('{'));
    console.info(' '.repeat(indent).concat(protCall(o)));
    for (let key in o) {
        if (o.hasOwnProperty(key) && typeof (o[key] !== 'function')) {
            console.info(' '.repeat(indent).concat(key).concat(':'));
            iterPolicyBean(o[key], indent + 2);
        }
    }
    console.info(' '.repeat(indent).concat('}'));
}
function isUndefinedOrNull(o) {
    return o === undefined || o === null;
}
function isBoolean(o) {
    if (typeof (o) === 'boolean' || o instanceof Boolean) {
        return true;
    }
    return false;
}
// 8 bytes double
function isNumber(o) {
    if (typeof (o) === 'number' || o instanceof Number) {
        return true;
    }
    return false;
}
function isString(o) {
    if (typeof (o) === 'string' || o instanceof String) {
        return true;
    }
    return false;
}
function isArray(o) {
    if (o instanceof Array) {
        return true;
    }
    return false;
}
function protCall(o) {
    return Object.prototype.toString.call(o);
}
