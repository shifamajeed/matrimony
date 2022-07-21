import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testside',
  templateUrl: './testside.component.html',
  styleUrls: ['./testside.component.css']
})
export class TestsideComponent implements OnInit {

  constructor() { }
  visibleeditprofilediv:boolean=false


  ngOnInit(): void {
  }
  lefteditprofilebtn()
  { 
    this.visibleeditprofilediv=true
  }

}
