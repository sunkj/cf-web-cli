
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var util = require('../lib/util');
var createTemplate = require('../lib/create-template');

/**
 * @description 根据模板生成指令
 * @param name  指令的名称
 * @param output 输出路径
 */
exports.exec = function (name, selector, output) {
  if(!util.isLegalName(name)){
    throw new Error('名称必须以字母开头！');
  }
  const tplName = 'direactive.ts.tpl';
  const className = util.formatClassName(name);
  const selectorName =  util.firstLowerCase(selector);
  const fileName = util.firstLowerCase(path.join(output, name.toLowerCase() + '.direactive.ts'));
  createTemplate(tplName, {name:  className, selector: selectorName}, fileName);
  logger.success('generate direactive done');
}
