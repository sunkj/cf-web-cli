import { Component, OnInit } from '@angular/core';
import { ${name}Service } from './${filename}.service';

@Component({
  providers: [
  	WelcomeService
  ],
  templateUrl: './${filename}.component.html',
  styleUrls: './${filename}.component.css'
})

export class ${name}Component implements OnInit  { 

  constructor(private ${name}Service: ${name}Service) {}
  
 	ngOnInit() {
  	
  }
  
}
