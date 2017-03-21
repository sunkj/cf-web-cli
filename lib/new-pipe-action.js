
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var es6template = require('es6-template');
var newTemplate = require('../lib/new-template');
var util = require('../lib/util');

/**
 * @description 根据模板生成管道
 * @param name  管道的名称
 * @param selector  管道的选择器名称
 * @param output 输出路径
 */
exports.exec = function (name, selector, output) {  
  if(!name || /^[a-zA-Z][a-zA-Z0-9]*$/.test(name) === false){
    throw new Error('名称必须以字母开头！');
  }
  const fileName = util.firstLowerCase(path.join(output, name.toLowerCase() + '.pipe.ts'));
  newTemplate('pipe.ts.tpl', {name: util.firstUpperCase(name), selector:  util.firstLowerCase(selector)}, fileName);
  logger.log('generate pipe done');
}
