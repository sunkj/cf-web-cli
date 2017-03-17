
var download = require('download-git-repo')
var path = require('path');
var fs = require('fs');
var ora = require('ora');
var logger = require('../lib/logger');

/** 模板配置 */
var tplMap = {
	ng2: 'sunkj/ng2-template',
	react: '',
	vue: '',
	ng1: ''
};

/**
 * @description 下载模板
 * @param tpl 模板类型，ng1, ng2, react, vue
 * @param target 下载存放目标路径
 * @return promise
 */
exports.exec = function(tpl, target){
	return new Promise((resolve, reject) => {
		var template = tplMap[tpl];
		if(!template){
			throw new Error(`没有找到对应的模板: ${tpl}, 现在只支持 ng1, ng2, react, vue`);
		}
		var downloadPath = target;
		if(!path.isAbsolute(target)){
			downloadPath = path.join(process.cwd(), target);
		}		
		logger.log(`开始下载模板`)
		var spinner = ora(logger.log(`${tpl} 模板正在下载中...`));
		spinner.start()
		download(template, downloadPath, function(err) {
			spinner.stop()
		  if (err) {
		  	throw new Error(`下载失败，错误信息：` + err);
		  }
		  logger.success('下载成功！');
		  resolve(downloadPath);
		});
	});
};