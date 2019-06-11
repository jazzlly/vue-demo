const Sequelize = require('sequelize');
const util = require('util')
let XLSX = require('xlsx');

var workbook = XLSX.utils.book_new();
// var dbname = 'uni_auth'
var dbname = 'mdm_reactor'

const sequelize = new Sequelize(dbname, 'root', 'pekall1234', {
  host: '192.168.11.30',
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
    
    const tables = await sequelize.query("show tables", { type: sequelize.QueryTypes.SHOWTABLES})
    for (const table of tables) {
      console.log(`================== table: ${table}====================`);
      
      let data = []
      data.push([table])
      data.push([])

      let titles = ['字段名', '字段描述', '数据类型', '是否可空', '默认值', '是否主键', '备注']
      data.push(titles)
      
      const descs = await sequelize.query(`desc ${table}`, { type: sequelize.QueryTypes.DESCRIBE})
      // console.log(descs);
      for (const column in descs) {
        let row = []
        row.push(column)  // 字段名
        row.push(getColumnDescription(column))      // 字段描述
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
  switch(word) {
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
    case 'file_name':
    return '文件名'
    case 'file_size':
    return '文件大小'
    case 'file_type':
    return '文件类型'
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
    case '':
    return ''

    default:
    break;
  }
  return ''
}

