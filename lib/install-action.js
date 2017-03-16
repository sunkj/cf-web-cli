
var path = require('path');
var ora = require('ora');
var logger = require('../lib/logger');
var child_process = require('child_process');

/**
 * @description 运行 npm install 命令按照npm依赖
 * @param target 项目所在目录
 */
exports.exec = function (target) {
	return new Promise((resolve, reject)=>{
		var cwd = target;
	  if(!path.isAbsolute(cwd)){
	    cwd = path.join(process.cwd(), target);
	  }
	  var spinner = ora(logger.log('开始运行 npm install ...'));
	  spinner.start();
	  //执行npm install命令行
	  child_process.exec('npm install', {"cwd": cwd}, function(err){
	  	spinner.stop();
	  	if(err){
	  		console.log(err);
	  		logger.error('执行 npm install 错误!');
	  		reject(err);
	  	}	  	
	  	logger.success('安装成功 npm install');
	  	resolve(true);
	  });
	});
}
