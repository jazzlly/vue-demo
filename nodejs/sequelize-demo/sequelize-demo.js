const Sequelize = require('sequelize');
const util = require('util')
let XLSX = require('xlsx');

var workbook = XLSX.utils.book_new();
// var dbname = 'uni_auth'
// var dbname = 'mdm_reactor'
var dbname = 'cmc'

const sequelize = new Sequelize(dbname, 'root', 'pekall1234', {
  host: '192.168.10.197',
  dialect: 'mysql'
});

/**
 * 将数据添加到excel sheet
 * @param {sheet名称} sheetName 
 * @param {二维数组} data 
 */
function appendDataToSheet(sheetName, data) {
  console.log(`sheetName: ${sheetName}`);
  if (sheetName.length > 31) {
    sheetName = sheetName.substring(0, 31)
  }

  var ws = XLSX.utils.aoa_to_sheet(data);
  /* add worksheet to workbook */
  XLSX.utils.book_append_sheet(workbook, ws, sheetName);
}

async function run() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    const tables = await sequelize.query("show tables", {
      type: sequelize.QueryTypes.SHOWTABLES
    })
    for (const table of tables) {
      console.log(`================== table: ${table}====================`);

      let data = []
      data.push([table])
      data.push([])

      let titles = ['字段名', '字段描述', '数据类型', '是否可空', '默认值', '是否主键', '备注']
      data.push(titles)

      const descs = await sequelize.query(`desc ${table}`, {
        type: sequelize.QueryTypes.DESCRIBE
      })
      // console.log(descs);
      for (const column in descs) {
        let row = []
        row.push(column) // 字段名
        row.push(getColumnDescription(column)) // 字段描述
        // todo: jiangrui, 只有能翻译的，再加入到excel中
        console.log(`========= column: ${column} ========`);
        // console.log(descs[key]);
        for (const key1 in descs[column]) {
          console.log(key1);
          console.log(descs[column][key1]);
          if (key1 === 'autoIncrement') {
            continue
          }
          row.push(translateToChinese(descs[column][key1]))
        }
        data.push(row)
      }
      appendDataToSheet(table, data)
    }

  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  await sequelize.close()

  XLSX.writeFile(workbook, `${dbname}.xlsx`);
}

run()

/**
 * 将单词翻译成中文
 * @param {String} word 待翻译的单词
 */
function translateToChinese(word) {
  switch (word) {
    case true:
    case 'TRUE':
      return '是'
    case false:
    case 'FALSE':
      return '否'
    default:
      return word
  }
}

/**
 * 通过字段名得到字段描述
 * @param {String} column 列名称
 */
function getColumnDescription(column) {
  switch (column) {
    case 'id':
      return '主键ID'
    case 'user_id':
      return '用户ID'
    case 'api_id':
      return '接口ID'
    case 'sync_id':
      return '同步ID'
    case 'code':
      return '代码'
    case 'name':
      return '名称'
    case 'create_time':
      return '创建时间'
    case 'update_time':
      return '更新时间'
    case 'app_category':
      return '应用分类'
    case 'area_code':
      return '区域代码'
    case 'vendor':
      return '提供者'
    case 'display_name':
      return '显示名称'
    case 'description':
      return '描述'
    case 'policy_type':
      return '策略类型'
    case 'policy_type_value':
      return '策略类型值'
    case 'authentication_policy_id':
      return '认证策略ID'
    case 'methods_id':
      return '方法ID'
    case 'object_class_name':
      return '对象类名称'
    case 'attr_name':
      return '属性名称'
    case 'operator':
      return '操作者'
    case 'attr_value':
      return '属性值'
    case 'where_expr':
      return '查询条件表达式'
    case 'evaluate_expr':
      return '运算表达式'
    case 'org_code':
      return '机构代码'
    case 'org_name':
      return '机构名称'
    case 'group_name':
      return '分组名称'
    case 'group_id':
      return '分组ID'
    case 'index_in_group':
      return '组内索引'
    case 'group_display_name':
      return '分组显示名称'
    case 'group_relation':
      return '分组关联信息'
    case 'user':
      return '用户'
    case 'password':
      return '密码(加密保存)'
    case 'base_dn':
      return '基础DN'
    case 'host':
      return '主机名称'
    case 'port':
      return '端口号'
    case 'use_ssl':
      return '是否使用SSL'
    case 'sync_interval_min':
      return '同步间隔时间'
    case 'sync_time':
      return '同步时间'
    case 'sync_status':
      return '同步状态'
    case 'added_user_num':
      return '添加用户数'
    case 'added_org_num':
      return '添加机构数'
    case 'updated_user_num':
      return '更新用户数'
    case 'updated_org_num':
      return '更新机构数'
    case 'deleted_user_num':
      return '删除用户数'
    case 'deleted_org_num':
      return '删除机构数'
    case 'datasource_id':
      return '数据源ID'
    case 'failed_reason':
      return '失败原因'
    case 'ldap_password':
      return 'LDAP密码(加密保存)'
    case 'dn':
      return 'LDAP唯一表示名'
    case 'account':
      return '账号'
    case 'com_id':
      return '租户ID'
    case 'manage_org_id':
      return '管辖机构ID'
    case 'app_service_name':
      return '应用服务名称'
    case 'abbreviation':
      return '简称'
    case 'org_code_real':
      return '机构代码'
    case 'linkman_name':
      return '联系人姓名'
    case 'linkman_phone':
      return '联系人电话'
    case 'level':
      return '职级'
    case 'external_org_id':
      return '外部机构ID'
    case 'parent_org_code_real':
      return '父机构代码'
    case 'source_type':
      return '来源类型'
    case 'source_id':
      return '来源ID'
    case 'delete_tag':
      return '删除标志'
    case 'def_code_real':
      return '机构层级代码'
    case 'ancestor_code':
    case 'ancestor_code_real':
      return '祖先机构代码'
    case 'descendant_code':
    case 'descendant_code_real':
      return '子孙机构代码'
    case 'create_user_id':
      return '创建用户ID'
    case 'mobile_phone':
      return '手机号'
    case 'role_id':
      return '角色ID'
    case 'source':
      return '来源'
    case 'status':
      return '状态'
    case 'telephone':
      return '电话号码'
    case 'update_user_id':
      return '更新者ID'
    case 'remark':
      return '备注'
    case 'qr_code':
      return '二维码'
    case 'sex':
      return '性别'
    case 'police_num':
      return '警号'
    case 'id_num':
      return '身份证号'
    case 'police_kind':
      return '警种'
    case 'position':
      return '职位'
    case 'office_phone':
      return '办公室电话'
    case 'division':
      return '行政区域'
    case 'secret_password':
      return '密码(加密保存)'
    case 'auth_status':
      return '认证状态'
    case 'type':
      return '类型'
    case 'app_name':
      return '应用名称'
    case 'app_package':
      return '应用包名'
    case 'app_version':
      return '应用版本'
    case 'apply_scope':
      return '发布范围'
    case 'policy_kind':
      return '发布策略'
    case 'app_id':
      return '应用ID'
    case 'app_type':
      return '应用类型'
    case 'app_category':
      return '应用分类'
    case 'policy_types':
      return '策略类型'
    case 'app_class':
      return '应用种类'
    case 'app_version_code':
      return '应用版本号'
    case 'validate_time':
      return '有效时间'
    case 'visible':
      return '可见性'
    case 'org_codes':
      return '机构代码'
    case 'scope':
      return '范围'
    case 'file_uuid':
      return '文件UUID'
    case 'resource_type':
      return '资源类型'
    case 'business_type':
      return '业务类型'
    case 'deploy_range':
      return '部署范围'
    case 'service_range':
      return '服务范围'
    case 'creater':
      return '创建者'
    case 'service_id':
      return '服务ID'
    case 'object_id':
      return '对象ID'
    case 'object_type':
      return '对象类型'
    case 'object_name':
      return '对象名称'
    case 'authorize_user_name':
      return '授权用户名'
    case 'authorize_user_org_name':
      return '授权用户机构名称'
    case 'authorize_user_org_code':
      return '授权用户机构代码'
    case 'authorize_time':
      return '授权时间'
    case 'action_type':
      return '动作类型'
    case 'operation_time':
      return '操作时间'
    case 'manage_org_name':
      return '管辖机构名称'
    case 'protocol':
      return '协议'
    case 'realm':
      return '域名'
    case 'url_prefix':
      return 'URL前缀'
    case 'key_tab_file_name':
      return '秘钥表文件名'
    case 'app_file_uuid':
      return '应用文件UUID'
    case 'app_icon_uuid':
      return '应用ICON文件UUID'
    case 'app_size':
      return '应用文件大小'
    case 'app_version_name':
      return '应用版本名称'
    case 'os':
      return '操作系统'
    case 'package_name':
      return '应用包名'
    case 'detail_info':
      return '详细信息'
    case 'upload_time':
      return '上传时间'
    case 'client_app_id':
      return '客户端应用ID'
    case 'device_id':
      return '设备主键ID'
    case 'device_name':
      return '设备名称'
    case 'user_name':
      return '用户名称'
    case 'device_client_version':
      return '客户端版本'
    case 'client_app_version_code':
      return '客户端版本号'
    case 'target_id':
      return '目标ID'
    case 'target_type':
      return '目标类型'
    case 'target_name':
      return '目标名称'
    case 'harderware_info':
      return '硬件信息'
    case 'network_info':
      return '网络信息'
    case 'os_info':
      return '操作系统信息'
    case 'security_info':
      return '安全信息'
    case 'brand':
      return '品牌'
    case 'device_uuid':
      return '设备全局唯一标识'
    case 'imei':
      return 'IMEI号'
    case 'is_root':
      return '是否Root'
    case 'last_checkin':
      return '最后上报时间'
    case 'model':
      return '型号'
    case 'policy_id':
      return '策略ID'
    case 'policy_name':
      return '策略名称'
    case 'violation_status':
      return '违规状态'
    case 'client_version':
      return '客户端版本'
    case 'os_version':
      return '操作系统版本'
    case 'roaming_status':
      return '漫游状态'
    case 'imsi':
      return 'IMSI码'
    case 'device_type':
      return '设备类型'
    case 'doc_name':
      return '文档名称'
    case 'doc_tag':
      return '文档标签'
    case 'download_policies':
      return '下载策略'
    case 'security_settings':
      return '安全设置'
    case 'upload_account':
      return '上传者账号'
    case 'upload_name':
      return '上传者姓名'
    case 'config_type':
      return '配置类型'
    case 'content':
      return '内容'
    case 'control_group_id':
      return '管控组ID'
    case 'policy_template_id':
      return '策略模板ID'
    case 'fen_ref':
      return '围栏引用'
    case 'is_default':
      return '是否为默认'
    case 'version':
      return '版本'
    case 'updated_by':
      return '更新者'
    case 'operator_id':
      return '操作者ID'
    case 'operator_name':
      return '操作者名称'
    case 'message':
      return '消息'
    case 'value':
      return '值'
    case 'home_carrier':
      return '营运商'
    case 'police_type':
      return '警种'
    case 'police_id':
      return '警号'
    case 'id_number':
      return '身份证号'
    case 'total_count':
      return '总计'
    case 'native_place':
      return '籍贯'
    case 'join_time':
      return '入伍时间'
    case 'work_card_no':
      return '工号'
    case 'post_level':
      return '职级'
    case 'is_used':
      return '是否使用'

    default:
      return regexCheck(column)
  }
}
// test xxx xxx_xxx or xxx_xxx_xxx, 然后exec
function regexCheck(column) {
  const regexOneWord = /^([^_]+)$/
  const regexTwoWord = /^([^_]+)_([^_]+)$/
  const regexThreeWord = /^([^_]+)_([^_]+)_([^_]+)$/

  let array = null
  if (regexOneWord.test(column)) {
    array = regexOneWord.exec(column)
  } else if (regexTwoWord.test(column)) {
    array = regexTwoWord.exec(column)
  } else if (regexThreeWord.test(column)) {
    array = regexThreeWord.exec(column)
  } else {
    return ''
  }

  let fullName = ''
  for (const e of array) {
    fullName = fullName.concat(translateSimpleWord(e))
  }
  return fullName
}

function translateSimpleWord(word) {
  switch (word) {
    case 'id':
      return '唯一标识'
    case 'code':
    case 'codes':
      return '代码'
    case 'desc':
    case 'description':
      return '描述'
    case 'action':
    case 'actions':
      return '动作'
    case 'event':
      return '事件'
    case 'time':
      return '时间'
    case 'object':
      return '对象'
    case 'name':
      return '名称'
    case 'type':
    case 'types':
      return '类型'
    case 'occur':
      return '发生'
    case 'source':
      return '来源'
    case 'rule':
      return '规则'
    case 'equipment':
      return '物理设备'
    case 'policy':
      return '策略'
    case 'terminal':
      return '终端设备'
    case 'stat':
    case 'state':
    case 'status':
      return '状态'
    case 'log':
      return '日志'
    case 'message':
      return '消息'
    case 'confirmation':
      return '确认'
    case 'user':
      return '用户'
    case 'data':
      return '数据'
    case 'template':
      return '模板'
    case 'group':
      return '组'
    case 'ip':
      return 'IP地址'
    case 'port':
      return '端口'
    case 'target':
      return '目标'
    case 'protocol':
      return '协议'
    case 'device':
      return '终端设备'
    case 'org':
      return '机构'
    case 'message':
      return '消息'
    case 'export':
      return '导出'
    case 'path':
      return '路径'
    case 'area':
      return '区域'
    case 'cmc':
      return '集中管控中心'
    case 'collect':
      return '采集'
    case 'report':
      return '上报'
    case 'topic':
      return '主题'
    case 'mapping':
      return '映射'
    case 'platform':
      return '平台'
    case 'host':
      return '主机'
    case 'manufactory':
      return '制造商'
    case 'phone':
      return '电话'
    case 'sys':
    case 'system':
      return '系统'
    case 'loc':
    case 'location':
      return '位置'
    case 'service':
    case 'services':
      return '服务'
    case 'vendor':
      return '提供商'
    case 'key':
    case 'keyword':
      return '关键字'
    case 'count':
      return '数量'
    case 'item':
      return '对象'
    case 'value':
      return '值'
    case 'mac':
      return 'MAC地址'
    case 'date':
      return '日期'
    case 'category':
      return '分类'
    case 'method':
      return '方法'
    case 'account':
      return '账号'
    case 'belong':
      return '归属'
    case 'version':
      return '版本'
    case 'whether':
      return '是否'
    case 'install':
      return '安装'
    case 'app':
      return '应用'
    case 'url':
      return '访问地址'
    case 'file':
      return '文件'
    case 'size':
      return '大小'
    case 'appraise':
      return '评论'
    case 'rank':
      return '排名'
    case 'create':
      return '创建'
    case 'dev':
      return '终端设备'
    case 'UUID':
      return '全局唯一标识'
    case 'download':
      return '下载'
    case 'icon':
      return '图标'
    case 'min':
      return '最小'
    case 'sdk':
      return 'SDK'
    case 'permission':
      return '权限'
    case 'pkg':
      return '程序包'
    case 'recommend':
      return '推荐'
    case 'score':
      return '评分'
    case 'search':
      return '搜索'
    case 'tag':
      return '标签'
    case 'auth':
    case 'authorize':
      return '授权'
    case 'publish':
      return '发布'
    case 'model':
      return '型号'
    case 'manufacturer':
      return '制造商'
    case 'number':
      return '号码'
    case 'imsi':
      return 'IMSI'
    case 'developer':
      return '开发者'
    case 'batter':
    case 'battery':
      return '电池'
    case 'level':
      return '水平'
    case 'bluetooth':
      return '蓝牙'
    case 'physical':
      return '物理'
    case 'address':
      return '地址'
    case 'cert':
      return '证书'
    case 'sn':
      return '序列号'
    case 'cpu':
      return 'CPU'
    case 'current':
      return '当前'
    case 'carrier':
      return '营运商'
    case 'network':
      return '网络'
    case 'roaming':
      return '漫游'
    case 'chip':
      return '芯片'
    case 'kernel':
      return '内核'
    case 'nfc':
      return 'NFC'
    case 'os':
      return '操作系统'
    case 'processor':
      return '处理器'
    case 'ram':
      return '系统内存'
    case 'screen':
      return '屏幕'
    case 'resolution':
      return '解析率'
    case 'wifi':
      return 'WIFI'
    case 'wlan':
      return 'WLAN'
    case 'content':
      return '内容'
    case 'punish':
      return '出发'
    case 'contact':
      return '联系人'
    case 'operation':
      return '操作'
    case 'project':
      return '项目'
    case 'res':
    case 'resource':
      return '资源'
    case 'manage':
      return '管理'
    case 'role':
      return '角色'
    case 'parent':
      return '父级'
    case 'depth':
      return '深度'
    case 'begin':
      return '开始'
    case 'end':
      return '结束'
    case 'comment':
      return '评论'
    case 'brigade':
      return '专职队伍'
    case 'picture':
      return '图片'
    case 'build':
      return '建设'
    case 'standard':
      return '标准'
    case 'industry':
      return '行业'
    case 'captain':
      return '队长'
    case 'tel':
      return '电话'
    case 'leader':
      return '领导'
    case 'alarm':
      return '报警'
    case 'call':
      return '电话'
    case 'audit':
      return '审计'
    case 'member':
      return '成员'
    case 'longitude':
      return '经度'
    case 'latitude':
      return '纬度'
    case 'company':
      return '公司'
    case 'year':
      return '年份'
    case 'gov':
      return '政府'
    case 'city':
      return '城市'
    case 'num':
      return '数量'
    case 'complete':
      return '完成'
    case 'plan':
      return '计划'
    case 'operate':
      return '操作'
    case 'nationality':
      return '国籍'
    case 'identity':
      return '身份'
    case 'birthday':
      return '生日'
    case 'height':
      return '身高'
    case 'political':
      return '政治面貌'
    case 'education':
      return '教育'
    case 'level':
      return '程度'
    case 'specialty':
      return '专业'
    case 'team':
      return '队伍'
    case 'major':
      return '主修'
    case 'working':
      return '工作'
    case 'vocational':
      return '职业'
    case 'cert':
      return '证书'
    case 'unit':
      return '单位'
    case 'conductor':
      return '指挥员'
    case 'extinguishers':
      return '灭火器'
    case 'manufacturer':
      return '制造商'

    default:
      return ''
  }
}