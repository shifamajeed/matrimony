import { Component, OnInit } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { DataService }  from '../data.service';
 




@Component({
  selector: 'app-home',
 templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
  
  }

}

