import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

hello:Boolean=true
visible:Boolean=false
visible2:Boolean=false
visible3:Boolean=false


visible4:Boolean=false


  ngOnInit(): void {}

  fnpage(){

    this.visible=false
    this.hello=false
    this.visible2=false
    this.visible3=false
    this.visible4=true
  }
  
  fnotp(){
    this.visible=false
    this.hello=false
    this.visible2=true
    this.visible3=false
    this.visible4=false
  }

  fnveri(){
    this.visible=false
    this.hello=false
    this.visible2=false
    this.visible3=true
    this.visible4=false

  }

  fnlogin(){
    this.visible4=true
    this.visible=false
    this.hello=false
    this.visible2=false
    this.visible3=false

  }

  fnmob(){
    this.visible4=false
    this.visible=false
    this.hello=true
    this.visible2=false
    this.visible3=false
  }
  fnop(){
    this.visible2=true
    this.visible4=false
    this.visible=false
    this.hello=false
    this.visible3=false
  }

  frreg(){
    
  location.href="entry"
  }
}
