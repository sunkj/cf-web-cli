
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var util = require('../lib/util');
var createTemplate = require('../lib/create-template');

/**
 * @description 根据模板生成路由
 * @param name  路由的名称
 * @param output 输出路径
 */
exports.exec = function (name, output) {
  if(!util.isLegalName(name)){
    throw new Error('名称必须以字母开头！');
  }
  const fileName = util.firstLowerCase(path.join(output, name.toLowerCase() + '.route.ts'));
  createTemplate('route.ts.tpl', {name:  util.formatClassName(name)}, fileName);
  logger.success('generate route done');
}
