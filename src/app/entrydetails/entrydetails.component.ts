import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrydetails',
  templateUrl: './entrydetails.component.html',
  styleUrls: ['./entrydetails.component.css'],
  template: `
       <ul>
           <li [class]="items[selectedIndex] == item ? 'active': ''" 
                  *ngFor="let item of items">{{ item }}</li>
       </ul>
    `
 
})
export class EntrydetailsComponent implements OnInit {

  constructor() {
    this.selectedIndex = 0;
    this.items = ["#","hello", "hello1","hello2","hello3","hello4","hello5","hello6","hello7"];
   }
   items: string[]
   selectedIndex: number

  hello:Boolean=true
  hello2:Boolean=false
  hello3:boolean=false
  hello4:boolean=false
  hello5:boolean=false
  hello6:boolean=false
  hello7:boolean=false
  hello8:boolean=false
  hello9:boolean=false
  ngOnInit(): void {
  }
  next() {
    ++this.selectedIndex;
 }
 previous() {
     --this.selectedIndex;
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
  fnnext6(){
    this.hello=false
    this.hello2=false
    this.hello3=false
    this.hello4=false
    this.hello5=false
    this.hello6=false
    this.hello7=false
    this.hello8=true
  }
  fnnext7(){
    this.hello=false
    this.hello2=false
    this.hello3=false
    this.hello4=false
    this.hello5=false
    this.hello6=false
    this.hello7=false
    this.hello8=false
    this.hello9=true
  }
  gotit(){
    location.href="testside"
  }

}

// nav bar 2

