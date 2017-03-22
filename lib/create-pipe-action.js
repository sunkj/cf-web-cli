
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var es6template = require('es6-template');
var createTemplate = require('../lib/create-template');
var util = require('../lib/util');

/**
 * @description 根据模板生成管道
 * @param name  管道的名称
 * @param selector  管道的选择器名称
 * @param output 输出路径
 */
exports.exec = function (name, selector, output) {  
  if(!util.isLegalName(name)){
    throw new Error('名称必须以字母开头！');
  }
  const fileName = util.firstLowerCase(path.join(output, name.toLowerCase() + '.pipe.ts'));
  const className = util.formatClassName(name);
  createTemplate('pipe.ts.tpl', {name: className, selector:  util.firstLowerCase(selector)}, fileName);
  logger.success('generate pipe done');
}
