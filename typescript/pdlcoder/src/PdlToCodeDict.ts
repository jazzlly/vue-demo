import * as json from './JsonObject';

const pdlCodeToRuleTypeMap : json.JSONObject = {}
const ruleTypeToPdlCode : json.JSONObject = {}

function add(pdlCode: number, ruleType: number) {
    pdlCodeToRuleTypeMap[pdlCode] = ruleType
    ruleTypeToPdlCode[ruleType] =  pdlCode
}

export function getPdlCode(ruleType: number) : number{
    return ruleTypeToPdlCode[ruleType] as number
}

// 硬件模块 0x1510
add(0x1511, 1001);
add(0x1512, 1002);
add(0x1513, 1003);
add(0x1514, 1004);
add(0x1515, 1005);
add(0x1516, 1006);
add(0x1517, 1007);
add(0x1518, 1008);
add(0x1519, 1009);
add(0x151a, 1010);
add(0x151b, 1011);
add(0x151c, 1012);
add(0x151d, 1014);

// 基本功能 0x1520
add(0x1521, 2001);
add(0x1522, 2002);
add(0x1523, 2003);
add(0x1524, 2004);
add(0x1525, 2005);
add(0x1526, 2006);
add(0x1527, 2007);
add(0x1528, 2008);
add(0x1529, 2009);
add(0x152a, 2010);
add(0x152b, 2011);
add(0x152c, 2012);
add(0x152d, 2013);
add(0x152e, 2014);

// 应用管控 0x1530
add(0x1531, 3001);
add(0x1532, 3002);
add(0x1533, 3003);
add(0x1534, 3004);
add(0x1535, 3005);

// 系统模式 0x1550
add(0x1551, 5001);
add(0x1552, 5002);

// 管控策略围栏
add(0x1561, 6001);
add(0x1562, 6002);
add(0x1563, 6003);
add(0x1564, 6004);

// 远程控制和配置 0x1570
add(0x1571, 7001);
add(0x1572, 7002);
add(0x1573, 7003);
add(0x1574, 7004);
add(0x1575, 7005);
add(0x1576, 7006);
add(0x1577, 7007);
add(0x1578, 7008);
add(0x1579, 7009);
add(0x157a, 7010);
add(0x157b, 7011);