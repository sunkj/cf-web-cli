import { Component, OnInit } from '@angular/core';
import { ${name}Service } from './${importFileName}.service';

@Component({
  providers: [
  	${name}Service
  ],
  templateUrl: './${importFileName}.component.html',
  styleUrls: './${importFileName}.component.css'
})

export class ${name}Component implements OnInit  { 

  constructor(private ${name}Service: ${name}Service) {}
  
 	ngOnInit() {
  	
  }
  
}
