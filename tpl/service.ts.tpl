import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from '../shared/config';
import { AjaxService } from '../shared/util';

@Injectable()
export class ${name}Service {
  
  /**
  * @description 构造函数
  * @param {AjaxService} ajax - 封装的ajax请求类
  */
  constructor(private router: Router, 
  	private ajax: AjaxService) { }

}