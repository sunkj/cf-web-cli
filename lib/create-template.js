

var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var es6template = require('es6-template');
var util = require('../lib/util');

/**
 * @description 根据模板生成
 * @param name  管道的名称
 * @param data  模板内容需要的数据
 * @param fileName 输出文件
 */
module.exports = function createTemplate (tplName, data, fileName) {
  // 读取模板内容
  const tplPath = '../tpl/' + tplName;
  let tpl = fs.readFileSync(path.join(__dirname, tplPath), 'utf-8');  
  // 处理模板
  let result = es6template(tpl, data);  
  // 输出文件
  fs.writeFileSync(fileName, result, 'utf-8');
}
