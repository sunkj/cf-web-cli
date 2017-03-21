
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var util = require('../lib/util');
var newTemplate = require('../lib/new-template');

/**
 * @description 根据模板生成路由
 * @param name  路由的名称
 * @param output 输出路径
 */
exports.exec = function (name, output) {
  if(!name || /^[a-zA-Z][a-zA-Z0-9]*$/.test(name) === false){
    throw new Error('名称必须以字母开头！');
  }
  const fileName = util.firstLowerCase(path.join(output, name.toLowerCase() + '.route.ts'));
  newTemplate('route.ts.tpl', {name:  util.firstUpperCase(name)}, fileName);
  logger.log('generate route done');
}
