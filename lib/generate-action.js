
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');

/**
 * @description 根据模板生成项目
 * 替换模板目录名
 * 修改package.json的name属性为当前项目名
 * @param projectName 项目名称
 * @param tplPath 模板文件的路径
 * @return true/false
 */
exports.exec = function (projectName, tplPath, target) {
  var packackFile = path.join(tplPath, 'package.json');
  if(!fs.existsSync(packackFile)){
  	throw new Error('没有找到package.json文件，请确认下载是否成功或者下载模板是否正确！');
  }
  logger.log('开始生成项目...');
  // 修改package.json的name属性
  var jsonPackage = JSON.parse(fs.readFileSync(packackFile));
  jsonPackage.name = projectName;
  // 写入新的package.json文件内容
  fs.writeFileSync(packackFile, JSON.stringify(jsonPackage));
  //重命名目录名
  fs.renameSync(tplPath, target);
  logger.success('生成项目成功！');
}
