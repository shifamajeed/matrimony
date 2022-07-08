import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }
  hello:Boolean=true
  hello2:Boolean=false
  hello3:boolean=false
  hello4:boolean=false
  hello5:boolean=false
  hello6:boolean=false
  hello7:boolean=false
  ngOnInit(): void {
  }

  fnnext(){
  this.hello=false
  this.hello2=true
  }
  fnnext1(){
    this.hello=false
    this.hello2=false
    this.hello3=true

  }
  fnnext2(){
    this.hello=false
    this.hello2=false
    this.hello3=false
    this.hello4=true
  }
  fnnext3(){
    this.hello=false
    this.hello2=false
    this.hello3=false
    this.hello4=false
    this.hello5=true
  }
  fnnext4(){
    this.hello=false
    this.hello2=false
    this.hello3=false
    this.hello4=false
    this.hello5=false
    this.hello6=true

  }
  fnnext5(){
    this.hello=false
    this.hello2=false
    this.hello3=false
    this.hello4=false
    this.hello5=false
    this.hello6=false
    this.hello7=true

  }
}
