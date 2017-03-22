
var fs = require('fs');
var path = require('path');
var logger = require('../lib/logger');
var util = require('../lib/util');
var createTemplate = require('../lib/create-template');
var createServiceAction = require('../lib/create-service-action');

/**
 * @description 根据模板生成组件
 * @param name  组件的名称
 * @param output 输出路径
 */
exports.exec = function (name, output) {
  if(!util.isLegalName(name)){
    throw new Error('名称必须以字母开头！');
  }
  if(!fs.existsSync(output)){
  	fs.mkdirSync(output);
  }   
  createCss(name, output);
  createHtml(name, output);
  createSpec(name, output);
  createService(name, output);
  createComponent(name, output);
  createIndex(name, output);
  logger.success('generate component done');
}

/**
 * @description 新建css文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createCss(name, output){
	const tplName = 'component.css.tpl';
	const fileName = combineFileName(name, output, '.component.css');
	createTemplate(tplName, { }, fileName);
}

/**
 * @description 新建HTML文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createHtml(name, output){
	const tplName = 'component.html.tpl';
	const fileName = combineFileName(name, output, '.component.html');
	createTemplate(tplName, { }, fileName);
}

/**
 * @description 新建测试文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createSpec(name, output){
	const tplName = 'component.spec.ts.tpl';
	const className = util.firstUpperCase(name);
	const fileName = combineFileName(name, output, '.component.spec.ts');
	createTemplate(tplName, { name: className }, fileName);
}

/**
 * @description 新建component文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createComponent(name, output){
	const tplName = 'component.ts.tpl';
	const className = util.formatClassName(name);
	const fileName = combineFileName(name, output, '.component.ts');
	createTemplate(tplName, { name: className, importFileName: name.toLowerCase() }, fileName);
}

/**
 * @description 新建服务文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createService(name, output){
	createServiceAction.exec(name, output);
}

/**
 * @description 创建index文件
 * @param name  文件名称
 * @param output  输出路径
 */
function createIndex(name, output){
	const fileName = combineFileName('index', output, '.ts');
	const componentPath = name.toLowerCase() + '.component';
	let content = `export * from \'./${componentPath}\'\;`;
	fs.writeFileSync(fileName, content, 'utf-8');
}

/**
 * @description 获取输出文件名
 */
function combineFileName(name, output, ext){
	return util.firstLowerCase(path.join(output, name.toLowerCase() + ext));
}