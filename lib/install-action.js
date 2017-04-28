
var path = require('path');
var ora = require('ora');
var logger = require('../lib/logger');
const spawn = require('child_process').spawn;

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
	  const ls = spawn((process.platform === "win32" ||  process.platform === "win64") ? "npm.cmd" : "npm", ['install'], {"cwd": cwd});
	  ls.stdout.on('data', (data) => {
		  console.log(`${data}`);
      });
	  ls.stderr.on('data', (data) => {
		   console.log(`${data}`);
      });
	  ls.on('error', (err) => {
		  spinner.stop();
	      console.log('启动子进程失败,', err);
		  throw new Error(`执行 npm install 错误，请手动尝试运行 npm install`);
      });
	  ls.on('close', (code) => {
		  spinner.stop();
	      resolve(true);
      });
	});
}
