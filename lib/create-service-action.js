
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var util = require('../lib/util');
var createTemplate = require('../lib/create-template');

/**
 * @description 根据模板生成服务
 * @param name  服务的名称
 * @param output 输出路径
 */
exports.exec = function (name, output) {
  if(!util.isLegalName(name)){
    throw new Error('名称必须以字母开头！');
  }
  const tplName = 'service.ts.tpl';
  const className = util.formatClassName(name);
  const fileName = util.firstLowerCase(path.join(output, name.toLowerCase() + '.service.ts'));
  createTemplate(tplName, {name:  className}, fileName);
  logger.success('generate service done');
}
