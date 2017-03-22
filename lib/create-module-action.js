
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var util = require('../lib/util');
var createTemplate = require('../lib/create-template');
var createRouteAction = require('../lib/create-route-action');
var createComponentAction = require('../lib/create-component-action');

/**
 * @description 根据模板生成模块
 * @param name  模块的名称
 * @param output 输出路径
 */
exports.exec = function (name, output) {
  if(!util.isLegalName(name)){
    throw new Error('名称必须以字母开头！');
  }
  if(!fs.existsSync(output)){
  	fs.mkdirSync(output);
  }  
  createComponent(name, output);
  createRoute(name, output);
  createModule(name, output);
  createIndex(name, output);
  logger.success('generate module done');
}

/**
 * @description 新建component文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createComponent(name, output){
	createComponentAction.exec(name, output);
}

/**
 * @description 新建路由文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createRoute(name, output){
	createRouteAction.exec(name, output);
}

/**
 * @description 新建模块文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createModule(name, output){
	const tplName = 'module.ts.tpl';
	const className = util.formatClassName(name);
	const fileName = combineFileName(name, output, '.module.ts');
	createTemplate(tplName, { name: className }, fileName);
}

/**
 * @description 创建index文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createIndex(name, output){
	const fileName = combineFileName('index', output, '.ts');
	const modulePath = name.toLowerCase() + '.module';
	const routePath = name.toLowerCase() + '.route';
	let content = `export * from \'./${modulePath}\'\;
	export * from \'./${routePath}\'\;`;
	fs.writeFileSync(fileName, content, 'utf-8');
}

/**
 * @description 获取输出文件名
 */
function combineFileName(name, output, ext){
	return util.firstLowerCase(path.join(output, name.toLowerCase() + ext));
}