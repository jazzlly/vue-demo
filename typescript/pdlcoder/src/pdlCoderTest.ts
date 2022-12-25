
import * as PdlCoder from "./pdlCoder";
import { ByteBuffer } from "./ByteBuffer"
import { assertEncodeThenDecode} from './PdlCoderUnitTest'
import * as _ from 'lodash';

const jsonPolicyBean: string = `
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
    `

// base64 policy bean string encoded by java
const base64PolicyBeanEncodedByJava: string = 
    `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AAAABlJFTUlORH//AAgAKH//AAAAK3//AAgACADBAAAADVdSSVRFX0NBTExMT0d//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACx//wAIAAgAwQAAAA5ERUxFVEVfQ0FMTExPR3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJn//AAgACADBAAAACFNFTkRfU01Tf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAmf/8ACAAIAMEAAAAIUkVBRF9NU0d//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACZ//wAIAAgAwQAAAAhTRU5EX01NU3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJn//AAgACADBAAAACFJFQURfTU1Tf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAArf/8ACAAIAMEAAAANUkVBRF9DT05UQUNUU3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAALH//AAgACADBAAAADldSSVRFX0NPTlRBQ1RTf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAwf/8ACAAIAMEAAAAST1BFTl9NT0JJTEVORVRXT1JLf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAArf/8ACAAIAMEAAAANTU9CSUxFTkVUV09SS3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJ3//AAgACADBAAAACU9QRU5fV0xBTn//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAIn//AAgACADBAAAABFdMQU5//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACx//wAIAAgAwQAAAA5PUEVOX0JMVUVUT09USH//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJn//AAgACADBAAAACE9QRU5fTkZDf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAmf/8ACAAIAMEAAAAITE9DQVRJT05//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACp//wAIAAgAwQAAAAxSRUNPUkRfQVVESU9//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACt//wAIAAgAwQAAAA1SRUNPUkRfU0NSRUVOf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAjf/8ACAAIAMEAAAAFUEhPVE9//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACN//wAIAAgAwQAAAAVWSURFT3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAALH//AAgACADBAAAADk1PVElPTl9TRU5TT1JTf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAwf/8ACAAIAMEAAAASUkVBRF9JTlNUQUxMRURfQVBQf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAIAVEAAAAOY29tLmFwcC5hdXRoLjF//wAIAAgAJQAAAAYxMjM0NTZ//wAIAAACmAAAAAEBf/8ACAAHApkAAAAIP/AAAAAAAAB//wAIAAcCqAAAAAhAp3oAAAAAABUhAAgAKH//AAABQ3//AAgABwKoAAAACECfRAAAAAAAf/8ACAAeAdAAAAEjf/8ACAAof/8AAAEXf/8ACAAHAqYAAAAIAAAAAAAAAAB//wAIACgCpwAAAPd//wAIAAACmgAAAAEBf/8ACAAfApsAAAAAf/8ACAAeApwAAACQf/8ACAAof/8AAAA8f/8ACAAIAMMAAAAgZmY4MDgwODE4MjE0NzdlOTAxODIxNWEyMTE2OTAxZmJ//wAIAAgAxAAAAAQxMjMzf/8ACAAof/8AAAA8f/8ACAAIAMMAAAAgZmY4MDgwODE4MjEzYmUyYTAxODIxNDQ3ZDA1MjAwNzZ//wAIAAgAxAAAAAQxMjM0f/8ACAAAAp0AAAABAX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAi/8AAAAAAAAH//AAgABwKoAAAACECfRAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9IAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfSAAAAAAAFSIACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9IAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAi/8AAAAAAAAH//AAgABwKoAAAACECfSAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9MAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfTAAAAAAAFSMACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9MAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACECfTAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9QAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfUAAAAAAAFSQACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9QAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACECfUAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9UAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfVAAAAAAAFSUACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9UAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAg/8AAAAAAAAH//AAgABwKoAAAACECfVAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgA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`

const base64PolicyBeanPdlFrameByJava: string = 
      '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QURfQ0FMTExPR3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAK3//AAgACADBAAAADVdSSVRFX0NBTExMT0d//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACx//wAIAAgAwQAAAA5ERUxFVEVfQ0FMTExPR3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJn//AAgACADBAAAACFNFTkRfU01Tf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAmf/8ACAAIAMEAAAAIUkVBRF9NU0d//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACZ//wAIAAgAwQAAAAhTRU5EX01NU3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJn//AAgACADBAAAACFJFQURfTU1Tf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAArf/8ACAAIAMEAAAANUkVBRF9DT05UQUNUU3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAALH//AAgACADBAAAADldSSVRFX0NPTlRBQ1RTf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAwf/8ACAAIAMEAAAAST1BFTl9NT0JJTEVORVRXT1JLf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAArf/8ACAAIAMEAAAANTU9CSUxFTkVUV09SS3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJ3//AAgACADBAAAACU9QRU5fV0xBTn//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAIn//AAgACADBAAAABFdMQU5//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACx//wAIAAgAwQAAAA5PUEVOX0JMVUVUT09USH//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAAJn//AAgACADBAAAACE9QRU5fTkZDf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAmf/8ACAAIAMEAAAAITE9DQVRJT05//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACp//wAIAAgAwQAAAAxSRUNPUkRfQVVESU9//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACt//wAIAAgAwQAAAA1SRUNPUkRfU0NSRUVOf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAjf/8ACAAIAMEAAAAFUEhPVE9//wAIAAgCaAAAAAZSRU1JTkR//wAIACh//wAAACN//wAIAAgAwQAAAAVWSURFT3//AAgACAJoAAAABlJFTUlORH//AAgAKH//AAAALH//AAgACADBAAAADk1PVElPTl9TRU5TT1JTf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAof/8AAAAwf/8ACAAIAMEAAAASUkVBRF9JTlNUQUxMRURfQVBQf/8ACAAIAmgAAAAGUkVNSU5Ef/8ACAAIAVEAAAAOY29tLmFwcC5hdXRoLjF//wAIAAgAJQAAAAYxMjM0NTZ//wAIAAACmAAAAAEBf/8ACAAHApkAAAAIP/AAAAAAAAB//wAIAAcCqAAAAAhAp3oAAAAAABUhAAgAKH//AAABQ3//AAgABwKoAAAACECfRAAAAAAAf/8ACAAeAdAAAAEjf/8ACAAof/8AAAEXf/8ACAAHAqYAAAAIAAAAAAAAAAB//wAIACgCpwAAAPd//wAIAAACmgAAAAEBf/8ACAAfApsAAAAAf/8ACAAeApwAAACQf/8ACAAof/8AAAA8f/8ACAAIAMMAAAAgZmY4MDgwODE4MjE0NzdlOTAxODIxNWEyMTE2OTAxZmJ//wAIAAgAxAAAAAQxMjMzf/8ACAAof/8AAAA8f/8ACAAIAMMAAAAgZmY4MDgwODE4MjEzYmUyYTAxODIxNDQ3ZDA1MjAwNzZ//wAIAAgAxAAAAAQxMjM0f/8ACAAAAp0AAAABAX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAi/8AAAAAAAAH//AAgABwKoAAAACECfRAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9IAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfSAAAAAAAFSIACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9IAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAi/8AAAAAAAAH//AAgABwKoAAAACECfSAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9MAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfTAAAAAAAFSMACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9MAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACECfTAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9QAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfUAAAAAAAFSQACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9QAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACECfUAAAAAAAf/8ACAAof/8AAACBf/8ACAAHAqgAAAAIwJ9UAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAgAAAAAAAAAAH//AAgABwKoAAAACMCfVAAAAAAAFSUACAAof/8AAACBf/8ACAAHAqgAAAAIQJ9UAAAAAAB//wAIAB4B0AAAAGF//wAIACh//wAAAFV//wAIAAcCpgAAAAgAAAAAAAAAAH//AAgAKAKnAAAANX//AAgAAAKYAAAAAQF//wAIAAcCmQAAAAg/8AAAAAAAAH//AAgABwKoAAAACECfVAAAAAAAf/8A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'

export const objPolicyBean = JSON.parse(jsonPolicyBean)

const jsonFeedbackBean: string = `{
  "flowNumber": "setFlowNumber",
  "hash": "setHash",
  "algorithm": "setAlgorithm",
  "definitionVer": "setDefinitionVer",
  "timeStamp": 1671672646785,
  "versionCode": 0,
  "terminalID": [
    "imei",
    "meid"
  ],
  "type": "FeedbackPackage",
  "feedback": [
    {
      "echo": {
        "result": true,
        "desc": "这是[注销设备]策略管控项执行结果反馈信息，对应的Class是[RetiredDeviceParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[端锁定/解锁]策略管控项执行结果反馈信息，对应的Class是[LockDeviceParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[部分擦除数据]策略管控项执行结果反馈信息，对应的Class是[SelectErasureDataParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[据擦除(恢复出厂设置)]策略管控项执行结果反馈信息，对应的Class是[WipeDataParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[端重启]策略管控项执行结果反馈信息，对应的Class是[RebootParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7003
    },
    {
      "deviceDetailInfoBean": {
        "deviceSecurityStatus": "normal",
        "isDeviceOrProfileOwner": false
      },
      "echo": {
        "result": true,
        "desc": "这是[上报设备详情]策略管控项执行结果反馈信息，对应的Class是[DeviceHardwareComplianceCollectFeedback]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[端关机]策略管控项执行结果反馈信息，对应的Class是[ShutdownDeviceParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[发送警报音]策略管控项执行结果反馈信息，对应的Class是[BuzzDeviceParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7005
    },
    {
      "deviceRuntimeCollectDataPackageBean": {
        "deviceRunningStatusInfo": {
          "cpuUsage": "cpu usage",
          "dataUsage": "data usage"
        },
        "ruleType": 7005
      },
      "echo": {
        "result": true,
        "desc": "这是[行状态上报]策略管控项执行结果反馈信息，对应的Class是[DeviceRuntimeCollectFeedback]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[锁定/清楚Mdm客户端密码]策略管控项执行结果反馈信息，对应的Class是[LockMdmAgentClientParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7006
    },
    {
      "locationInfoBean": {
        "longitude": 321.44433322222,
        "latitude": 333.11116666666,
        "height": 1000.0,
        "locationEngine": 2,
        "coordinate": 3,
        "radius": 0.0,
        "requestTime": 0,
        "responseTime": 0
      },
      "echo": {
        "result": true,
        "desc": "这是[位信息上报]策略管控项执行结果反馈信息，对应的Class是[DeviceRuntimeCollectFeedback]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7006
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[设备灭屏，锁屏命令]策略管控项执行结果反馈信息，对应的Class是[LockDeviceScreenParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[LAN配置推送]策略管控项执行结果反馈信息，对应的Class是[ConfigWifiParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[强制退出]策略管控项执行结果反馈信息，对应的Class是[UniauthLogoutParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[PN配置推送]策略管控项执行结果反馈信息，对应的Class是[ConfigVpnParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[修改用户信息]策略管控项执行结果反馈信息，对应的Class是[ModifyUserInfoParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[PN配置推送]策略管控项执行结果反馈信息，对应的Class是[ConfigApnParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[应用安装]策略管控项执行结果反馈信息，对应的Class是[InstallAppParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[SO配置推送]策略管控项执行结果反馈信息，对应的Class是[ConfigSsoParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 7010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[应用卸载]策略管控项执行结果反馈信息，对应的Class是[UninstallAppParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7011
    },
    {
      "param": [
        {
          "certificateInfoBean": {
            "type": "plugin_ca_cert"
          },
          "isVerified": false,
          "description": "asdfasfasdfasdf",
          "time": 1671672646785,
          "isReplace": false
        }
      ],
      "ruleType": 7011
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[推送文档]策略管控项执行结果反馈信息，对应的Class是[InstallDocParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7012
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[删除文档]策略管控项执行结果反馈信息，对应的Class是[UninstallDocParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7013
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[控制设备]策略管控项执行结果反馈信息，对应的Class是[DeviceActionParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7014
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[sim卡解除绑定]策略管控项执行结果反馈信息，对应的Class是[OneTimeUnbindSimCardParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7015
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[tf卡解除绑定]策略管控项执行结果反馈信息，对应的Class是[OneTimeUnbindTfCardParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7016
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[清除应用数据]策略管控项执行结果反馈信息，对应的Class是[ClearAppDataParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7017
    },
    {
      "mHappyOrWorkDayInfoBean": {
        "state": 0,
        "startTime": 0,
        "stopTime": 0
      },
      "echo": {
        "result": true,
        "option": 0,
        "level": 1
      },
      "ruleType": -7018
    },
    {
      "mHappyOrWorkDayInfoBean": {
        "state": 0,
        "startTime": 0,
        "stopTime": 0
      },
      "echo": {
        "result": true,
        "option": 0,
        "level": 1
      },
      "ruleType": -7019
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[RemoteAccessibilityParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7020
    },
    {
      "logUrl": "ftp://device/log/today.log",
      "time": 1671672646785,
      "echo": {
        "result": true,
        "option": 0,
        "level": 1
      },
      "ruleType": -7021
    },
    {
      "errorCode": 1,
      "description": "",
      "result": true,
      "ruleType": -7023
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[LockSandboxParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7024
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[NfcFenceDefinitionData]",
        "option": 0,
        "level": 0
      },
      "ruleType": -6001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[UpdateBluetoothWhiteListParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7025
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[ElectronicsFenceDefinitionData]",
        "option": 0,
        "level": 0
      },
      "ruleType": -6002
    },
    {
      "fid": "7,0edfef3edd8a",
      "fileName": "test.png",
      "size": 15196,
      "format": "JPEG",
      "quality": 0,
      "echo": {
        "result": true,
        "option": 0,
        "level": 1
      },
      "ruleType": -7026
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[间围栏]策略管控项执行结果反馈信息，对应的Class是[TimeFenceDefinitionData]",
        "option": 0,
        "level": 0
      },
      "ruleType": 6002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[UpdatePhoneNumberWhiteListParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7027
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[理围栏]策略管控项执行结果反馈信息，对应的Class是[CircleFenceDefinitionData]",
        "option": 0,
        "level": 0
      },
      "ruleType": 6003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[UpdateDoorInfoParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7028
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[LAN围栏]策略管控项执行结果反馈信息，对应的Class是[WifiFenceDefinitionData]",
        "option": 0,
        "level": 0
      },
      "ruleType": 6004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[UpdateNfcCardInfoBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -7029
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[KioskModeRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -5001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[统使用模式切换控制]策略管控项执行结果反馈信息，对应的Class是[ContainerSwitchRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 5001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[ClientModeRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -5002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[统使用模式切换]策略管控项执行结果反馈信息，对应的Class是[ContainerSwitchParamBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 5002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[LockModeRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -5003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[FreeLoginRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -5004
    },
    {
      "simCardInfoBean": {
        "iccid": "934k4r55234kdf9123465244",
        "imsi": "111223334544556adfadsf",
        "numeric": "46003",
        "telephonyNumber": "13100000001",
        "isBind": false,
        "slotIndex": 0,
        "isActiveData": false,
        "states": 0
      },
      "echo": {
        "result": true,
        "desc": "这是[替换SIM事件监控]策略管控项执行结果反馈信息，对应的Class是[DeviceRuntimeCollectFeedback]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4001
    },
    {
      "tfCardInfoBean": {
        "vendor": "tf卡生产提供单位公安部",
        "accountName": "用户名",
        "cardId": "唯一标识，id，tf卡内证书sn号等",
        "accountIdentityId": "110230498839030018",
        "accountPhoneNumber": "01012345678",
        "isBind": false
      },
      "echo": {
        "result": true,
        "desc": "这是[替换TF卡事件监控]策略管控项执行结果反馈信息，对应的Class是[DeviceRuntimeCollectFeedback]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用流量上报控制]策略管控项执行结果反馈信息，对应的Class是[AppTrafficCollectRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[移除TF卡事件监控]策略管控项执行结果反馈信息，对应的Class是[DeviceTfCardRetiredCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用耗电量上报控制]策略管控项执行结果反馈信息，对应的Class是[AppPowerConsumptionCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用运行时长上报控制]策略管控项执行结果反馈信息，对应的Class是[AppRuntimeCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[FaceAcquisitionProRuleParam]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用运行异常上报控制]策略管控项执行结果反馈信息，对应的Class是[AppRunExceptionCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[RealTimeLocationCollectValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[设备硬件详情采集控制]策略管控项执行结果反馈信息，对应的Class是[DeviceHardwareCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[CallLogCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4006
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[件安装信息上报控制]策略管控项执行结果反馈信息，对应的Class是[AppInstalledInfoCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4006
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[SmsMmsCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[NetworkAccessCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[OOT状态上报控制]策略管控项执行结果反馈信息，对应的Class是[DeviceRootCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[DeviceSimCardRetiredCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[统完整性监测控制]策略管控项执行结果反馈信息，对应的Class是[RomIntegrityCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[件合规监测控制]策略管控项执行结果反馈信息，对应的Class是[DeviceHardwareComplianceCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[ChatAppMessageCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[AppUsageCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4011
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用合规监测控制]策略管控项执行结果反馈信息，对应的Class是[AppComplianceCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[DeviceNetstatsCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4012
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[录失败监测控制]策略管控项执行结果反馈信息，对应的Class是[LoginFailedCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4011
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[联网联通监测控制]策略管控项执行结果反馈信息，对应的Class是[TelecommunicationCollectionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4012
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[PlmnsOfSimRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -4013
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[端失联监测控制]策略管控项执行结果反馈信息，对应的Class是[LostConnectRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4013
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[GetTpmReportRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 4014
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用安装限制管控项]策略管控项执行结果反馈信息，对应的Class是[AppInstallRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 3001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用运行限制管控项]策略管控项执行结果反馈信息，对应的Class是[AppRunningRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 3002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用更新限制管控项]策略管控项执行结果反馈信息，对应的Class是[AppUpdateRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 3003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用卸载限制管控项]策略管控项执行结果反馈信息，对应的Class是[AppUninstallRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 3004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[用权限管控项]策略管控项执行结果反馈信息，对应的Class是[AppPermissionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 3005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[应用安装渠道控制]策略管控项执行结果反馈信息，对应的Class是[AppInstallerUnknownSourceRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[打/电话管控项]策略管控项执行结果反馈信息，对应的Class是[VoiceRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[AirPlanRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[/发短信管控项]策略管控项执行结果反馈信息，对应的Class是[SmsRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[ClipboardRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[统截屏管控项]策略管控项执行结果反馈信息，对应的Class是[ScreenShotRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[SecondSlotMobileDataRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[络共享管控项]策略管控项执行结果反馈信息，对应的Class是[NetworkTetheringRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[InputMethodKeywordControlRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[改系统接入点管控项]策略管控项执行结果反馈信息，对应的Class是[ApnRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[ImAppsKeywordControlRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2006
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[络防火墙管控项]策略管控项执行结果反馈信息，对应的Class是[IpTablesRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2006
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[NotificationSyncWhiteListValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[备密码管控项]策略管控项执行结果反馈信息，对应的Class是[PasswordRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[WatermarkRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[动网络时间管控项]策略管控项执行结果反馈信息，对应的Class是[NetworkTimeRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[PowerSavingRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[复出厂设置管控项]策略管控项执行结果反馈信息，对应的Class是[RecoveryFactoryRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[未知控制项]策略管控项执行结果反馈信息，对应的Class是[MultiUserControllerRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": -2010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[DB调试桥管控项]策略管控项执行结果反馈信息，对应的Class是[AdbRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[统升级管控项]策略管控项执行结果反馈信息，对应的Class是[SystemUpgradeRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2011
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[互式应用安装管控项]策略管控项执行结果反馈信息，对应的Class是[GraphicInstallerRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2012
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[默安装管控项]策略管控项执行结果反馈信息，对应的Class是[SilentInstallerRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2013
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[ADB安装管控项]策略管控项执行结果反馈信息，对应的Class是[AdbInstallerRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 2014
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[WIFI管控项]策略管控项执行结果反馈信息，对应的Class是[WifiRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1001
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[动数据网络管控项]策略管控项执行结果反馈信息，对应的Class是[MobileDataRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1002
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[牙管控项]策略管控项执行结果反馈信息，对应的Class是[BluetoothRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1003
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[FC近场通信管控项]策略管控项执行结果反馈信息，对应的Class是[NfcRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1004
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[外管控项]策略管控项执行结果反馈信息，对应的Class是[InfraredRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1005
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[物模块管控项]策略管控项执行结果反馈信息，对应的Class是[BiologicalRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1006
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[位管控项]策略管控项执行结果反馈信息，对应的Class是[PositionRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1007
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[SB传输方式管控项]策略管控项执行结果反馈信息，对应的Class是[UsbProtocolRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1008
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[展存储管控项]策略管控项执行结果反馈信息，对应的Class是[ExternalStoreRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1009
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[克风管控项]策略管控项执行结果反馈信息，对应的Class是[MicrophoneRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1010
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[声器管控项]策略管控项执行结果反馈信息，对应的Class是[SpeakerRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1011
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[像头管控项]策略管控项执行结果反馈信息，对应的Class是[CameraRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1012
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[光灯管控项]策略管控项执行结果反馈信息，对应的Class是[PhotoFlashValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1013
    },
    {
      "echo": {
        "result": true,
        "desc": "这是[展设备（背夹）管控项]策略管控项执行结果反馈信息，对应的Class是[ExtendedDeviceRuleValueBean]",
        "option": 0,
        "level": 0
      },
      "ruleType": 1014
    }
  ],
  "isPolicyFeedback": false,
  "isFirstApply": false
}
`
export const objFeedbackBean = JSON.parse(jsonFeedbackBean)

const jsonDataBean: string = `{
  "flowNumber": "setFlowNumber",
  "hash": "setHash",
  "algorithm": "setAlgorithm",
  "definitionVer": "setDefinitionVer",
  "timeStamp": 1671672830278,
  "versionCode": 0,
  "terminalID": [
    "imei",
    "meid"
  ],
  "type": "DataPackage",
  "feedback": [
    {
      "details": [
        {
          "exceptionSum": 0,
          "exceptionTime": "应用运行异常时间：1671672830327",
          "exceptionLog": "应用运行异常日志1",
          "packageName": "应用包名1"
        },
        {
          "exceptionSum": 0,
          "exceptionTime": "应用运行异常时间：1671672830327",
          "exceptionLog": "应用运行异常日志2",
          "packageName": "应用包名2"
        }
      ],
      "startTime": 1671672830327,
      "endTime": 1671672830327,
      "ruleType": 4004
    },
    {
      "isSimCardRetried": true,
      "isOoc": true,
      "time": 1671672830327,
      "action": "lock",
      "ruleType": -4009
    },
    {
      "connectivity": true,
      "isOoc": false,
      "connectionType": 6,
      "time": 1671672830327,
      "action": "lock",
      "ruleType": 4012
    },
    {
      "rootStatus": true,
      "isOoc": false,
      "time": 1671672830327,
      "action": "warn",
      "ruleType": 4007
    },
    {
      "integrityStatus": false,
      "isOoc": false,
      "time": 1671672830327,
      "action": "shutdown",
      "ruleType": 4008
    },
    {
      "hwLegalStatus": false,
      "isOoc": false,
      "illegalHWList": [
        "背夹",
        "还没想好"
      ],
      "time": 1671672830327,
      "action": "shutdown",
      "ruleType": 4009
    },
    {
      "swLegalStatus": false,
      "isOoc": true,
      "illegalMode": 0,
      "illgalDetails": [
        {
          "which": 2,
          "mode": 2,
          "details": [
            {
              "packageName": "com.test.apk8",
              "appName": "testApk8",
              "thumbprint": "应用指纹信息8",
              "sh1": "SH1:8",
              "signCert": "签名信息",
              "versionName": "版本号：8",
              "versionCode": 8,
              "developer": "开发者信息8",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            },
            {
              "packageName": "com.test.apk7",
              "appName": "testApk7",
              "thumbprint": "应用指纹信息7",
              "sh1": "SH1:7",
              "signCert": "签名信息",
              "versionName": "版本号：7",
              "versionCode": 7,
              "developer": "开发者信息7",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            }
          ]
        },
        {
          "which": 0,
          "mode": 1,
          "details": [
            {
              "packageName": "com.test.apk1",
              "appName": "testApk1",
              "thumbprint": "应用指纹信息1",
              "sh1": "SH1:1",
              "signCert": "签名信息",
              "versionName": "版本号：1",
              "versionCode": 1,
              "developer": "开发者信息1",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            },
            {
              "packageName": "com.test.apk3",
              "appName": "testApk3",
              "thumbprint": "应用指纹信息3",
              "sh1": "SH1:3",
              "signCert": "签名信息",
              "versionName": "版本号：3",
              "versionCode": 3,
              "developer": "开发者信息3",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            },
            {
              "packageName": "com.test.apk2",
              "appName": "testApk2",
              "thumbprint": "应用指纹信息2",
              "sh1": "SH1:2",
              "signCert": "签名信息",
              "versionName": "版本号：2",
              "versionCode": 2,
              "developer": "开发者信息2",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            }
          ]
        },
        {
          "which": 0,
          "mode": 2,
          "details": [
            {
              "packageName": "com.test.apk4",
              "appName": "testApk4",
              "thumbprint": "应用指纹信息4",
              "sh1": "SH1:4",
              "signCert": "签名信息",
              "versionName": "版本号：4",
              "versionCode": 4,
              "developer": "开发者信息4",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            },
            {
              "packageName": "com.test.apk5",
              "appName": "testApk5",
              "thumbprint": "应用指纹信息5",
              "sh1": "SH1:5",
              "signCert": "签名信息",
              "versionName": "版本号：5",
              "versionCode": 5,
              "developer": "开发者信息5",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            },
            {
              "packageName": "com.test.apk6",
              "appName": "testApk6",
              "thumbprint": "应用指纹信息6",
              "sh1": "SH1:6",
              "signCert": "签名信息",
              "versionName": "版本号：6",
              "versionCode": 6,
              "developer": "开发者信息6",
              "firstInstallTime": 1671672830328,
              "lastUpdateTime": 1671672830328
            }
          ]
        }
      ],
      "time": 0,
      "ruleType": 4010
    },
    {
      "config": {
        "apn": "test.apn",
        "mcc": "460",
        "mnc": "01"
      },
      "commandId": "09ea809b-eca3-484a-8031-08458556db18",
      "networkOperator": "46001",
      "simCardOperator": "46001",
      "ruleType": 7009
    },
    {
      "locationInfoBean": {
        "longitude": 33.9999999991,
        "latitude": 104.1111111119,
        "height": 0.0,
        "locationEngine": 0,
        "coordinate": 1,
        "radius": 0.0,
        "requestTime": 0,
        "responseTime": 0
      },
      "startTime": 1671672832038,
      "endTime": 1671672832038,
      "ruleType": -4005
    },
    {
      "errorCode": 1,
      "description": "电子围栏切换成功",
      "result": true,
      "triggerCmdId": "triggerCmdId",
      "policyId": "policyId",
      "tag": "inFenceTag",
      "action": 1,
      "actionTime": 1671672832038,
      "policyStatus": "unknown",
      "ruleType": -6002
    },
    {
      "doorTag": "IN_DOOR1_TAG",
      "userAccount": "userAccount",
      "time": 1671672832038,
      "action": 0,
      "policyStatus": "unknown",
      "ruleType": -6001
    },
    {
      "total": "总流量：1024M",
      "deviceBootTime": 0,
      "details": [
        {
          "dataFluxTx": 256,
          "dataFluxRx": 1024,
          "wlanFluxTx": 256,
          "wlanFluxRx": 512,
          "appRxBytes": 0,
          "appTxBytes": 0
        },
        {
          "dataFluxTx": 256,
          "dataFluxRx": 256,
          "wlanFluxTx": 256,
          "wlanFluxRx": 256,
          "appRxBytes": 0,
          "appTxBytes": 0
        }
      ],
      "startTime": 1671672832038,
      "endTime": 1671672832038,
      "ruleType": 4001
    },
    {
      "isTfCardRetired": true,
      "isOoc": false,
      "time": 1671672832038,
      "action": "lock",
      "ruleType": -4003
    },
    {
      "isLostConnect": false,
      "isOoc": false,
      "lostDuration": "失联时长30d",
      "time": 1671672832038,
      "action": "warn",
      "ruleType": 4013
    },
    {
      "time": 1671672832038,
      "swInfo": [
        {
          "packageName": "com.test.apk1",
          "appName": "testApk1",
          "thumbprint": "应用指纹信息1",
          "sh1": "SH1:1",
          "signCert": "签名信息",
          "versionName": "版本号：1",
          "versionCode": 1,
          "developer": "开发者信息1",
          "firstInstallTime": 1671672832038,
          "lastUpdateTime": 1671672832038
        },
        {
          "packageName": "com.test.apk2",
          "appName": "testApk2",
          "thumbprint": "应用指纹信息2",
          "sh1": "SH1:2",
          "signCert": "签名信息",
          "versionName": "版本号：2",
          "versionCode": 2,
          "developer": "开发者信息2",
          "firstInstallTime": 1671672832038,
          "lastUpdateTime": 1671672832038
        },
        {
          "packageName": "com.test.apk3",
          "appName": "testApk3",
          "thumbprint": "应用指纹信息3",
          "sh1": "SH1:3",
          "signCert": "签名信息",
          "versionName": "版本号：3",
          "versionCode": 3,
          "developer": "开发者信息3",
          "firstInstallTime": 1671672832038,
          "lastUpdateTime": 1671672832038
        }
      ],
      "ruleType": 4006
    },
    {
      "isChanged": true,
      "isOoc": false,
      "changedToSim": {
        "iccid": "934k4r55234kdf9123465244",
        "imsi": "111223334544556adfadsf",
        "numeric": "46003",
        "telephonyNumber": "13100000001",
        "isBind": false,
        "slotIndex": 0,
        "isActiveData": false,
        "states": 0
      },
      "locationInfoBean": {
        "longitude": 1111.11111,
        "latitude": 22222.222222,
        "height": 0.0,
        "locationEngine": 2,
        "coordinate": 3,
        "radius": 0.0,
        "requestTime": 0,
        "responseTime": 0
      },
      "time": 1671672832039,
      "action": "tip",
      "ruleType": -4001
    },
    {
      "details": [
        {
          "runningTime": 86400000,
          "packageName": "应用包名"
        },
        {
          "runningTime": 43200000,
          "packageName": "应用包名1"
        }
      ],
      "startTime": 1671672832039,
      "endTime": 1671672832039,
      "ruleType": 4003
    },
    {
      "details": [
        {
          "power": 15,
          "packageName": "应用包名1"
        },
        {
          "power": 75,
          "packageName": "应用包名2"
        }
      ],
      "startTime": 1671672832039,
      "endTime": 1671672832039,
      "ruleType": 4002
    },
    {
      "isLoginFailed": false,
      "isOoc": false,
      "errorDesc": "登录失败异常提示",
      "time": 1671672832039,
      "action": "tip",
      "ruleType": 4011
    },
    {
      "isTfCardChanged": true,
      "isOoc": false,
      "toChangedTfCard": {
        "vendor": "tf卡生产提供单位公安部",
        "accountName": "用户名",
        "cardId": "唯一标识，id，tf卡内证书sn号等",
        "accountIdentityId": "110230498839030018",
        "accountPhoneNumber": "01012345678",
        "isBind": false
      },
      "time": 1671672832040,
      "action": "shutdown",
      "ruleType": -4002
    },
    {
      "report": "some device report str by Ga jar.",
      "isOoc": false,
      "ruleType": 4014
    },
    {
      "time": 1671672832043,
      "hwInfo": {
        "deviceSecurityStatus": "normal",
        "hardwareInfo": {
          "ram": 6144,
          "networkType": "移动网络制式",
          "wlanAdapterChip": "无线网卡芯片型号",
          "btAdapterChip": "蓝牙芯片型号",
          "nfcChip": "NFC芯片型号",
          "locatorChip": "定位芯片型号"
        },
        "osInfo": {
          "isHarmonyOS": false,
          "version": "版本",
          "apiLevel": "信号等级",
          "basebandVersion": "系带版本信息",
          "buildNumber": "编译版本"
        },
        "networkInfo": {
          "ICCID": "IMSI",
          "homeCountry": "cn",
          "dataNetwork": true,
          "cellInfoBean": {
            "asuLevel": 1,
            "dbm": 133
          },
          "bluetoothPhysicalAddress": "aa-bb-cc-dd-ee"
        },
        "deviceRunningStatusInfo": {},
        "isDeviceOrProfileOwner": false
      },
      "ruleType": 4005
    }
  ],
  "isPolicyFeedback": false,
  "isFirstApply": false
}
`
export const objDataBean = JSON.parse(jsonDataBean)

function testEncode() {
    let buffer : ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(objPolicyBean, '', buffer)
    // console.info(buffer.base64String());
}

function testEncodePdlFrame() {
  const base64 = PdlCoder.encPdlFrameBase64(1234, 0x1504, 1234, objPolicyBean)
  // console.info("testEncodePdlFrame");
  // console.info(base64);
}

function testEncodeThenDecodePolicyBean() {
    let buffer : ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(objPolicyBean, '', buffer)

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], objPolicyBean, buffer)

    console.info('decode pass!');
}

function testEncodeThenDecodePolicyBeanPdlFrame() {
  const base64PdlFrame: string = PdlCoder.encPdlFrameBase64(
    1234, 0x1504, 1234, objPolicyBean)
  const results: any[] = PdlCoder.decPdlFrameBase64(base64PdlFrame)

  if (!_.isEqual(results[0], objPolicyBean)) {
    throw 'obj not equal!'
  }

  console.info('pdl frame encode then decode pass!');
}

function testDecodeFromJava() {
    let buffer : ByteBuffer = new ByteBuffer()
    buffer.resetFromBase64String(base64PolicyBeanEncodedByJava)

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], objPolicyBean, buffer)
    console.info('decode from java pass!');
}

function testDecodeFromJavaPdlFrame() {
  const objects = PdlCoder.decPdlFrameBase64(base64PolicyBeanPdlFrameByJava)

  if (!_.isEqual(objects[0], objPolicyBean)) {
    throw 'not equals'
  }
  
  console.info('decode pdl frame from java pass!');
}

function testEncodeThenDecodeFeedbackBean() {
  let buffer : ByteBuffer = new ByteBuffer()
  PdlCoder.encPdlDataFrames(objFeedbackBean, '', buffer)

  let results = PdlCoder.decPdlDataOrgJson(buffer)
  assertEncodeThenDecode(results[0], objFeedbackBean, buffer)

  console.info('decode feedback bean pass!');
}

function testEncodeThenDecodeFeedbackBeanPdlFrame() {

  const base64PdlFrame: string = PdlCoder.encPdlFrameBase64(
    123, 0x1504, 1234, objFeedbackBean)
  
  const objects: any[] = PdlCoder.decPdlFrameBase64(base64PdlFrame)
  if (!_.isEqual(objFeedbackBean, objects[0])) {
    throw 'not equal'
  }

  console.info('decode feedback bean pdl frame pass!');
}

function testEncodeThenDecodeDataBean() {
  let buffer : ByteBuffer = new ByteBuffer()
  PdlCoder.encPdlDataFrames(objDataBean, '', buffer)
  // console.info(buffer.base64String());

  let results = PdlCoder.decPdlDataOrgJson(buffer)
  assertEncodeThenDecode(results[0], objDataBean, buffer)

  console.info('decode data bean bean pass!');
}

function testEncodeThenDecodeDataBeanPdlFrame() {
  const base64PdlFrame: string = PdlCoder.encPdlFrameBase64(
    123, 0x1504, 1234, objDataBean)

  const objects: any[] = PdlCoder.decPdlFrameBase64(base64PdlFrame)
  if (!_.isEqual(objDataBean, objects[0])) {
    throw 'not equal'
  }

  console.info('decode data bean bean pdl frame pass!');
}

testEncode()
testEncodePdlFrame()

testEncodeThenDecodePolicyBean()
testEncodeThenDecodePolicyBeanPdlFrame()

testDecodeFromJava()
testDecodeFromJavaPdlFrame()

testEncodeThenDecodeFeedbackBean()
testEncodeThenDecodeFeedbackBeanPdlFrame()

testEncodeThenDecodeDataBean()
testEncodeThenDecodeDataBeanPdlFrame()