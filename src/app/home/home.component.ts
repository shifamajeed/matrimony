import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';
import { ComponentFixture } from '@angular/core/testing';
 

@Component({
  selector: 'app-home',
 templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(public dataService : DataService) { }

  form1:Boolean=true
  form2:Boolean=false
  form3:Boolean=false

  ngOnInit(): void {
   
  }
  fnreg(){
    
  }
  fnotp(){
    this.form1=false
    this.form2=true
    this.form3=false
  }
  fnotps(){
    this.form1=false
    this.form2=false
    this.form3=true
  }
  fninput(){
    this.form1=false
    this.form2=false
    this.form3=false
    location.href="entry"
  }
  }

  
  



