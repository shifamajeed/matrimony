import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openwithmobile',
  templateUrl: './openwithmobile.component.html',
  styleUrls: ['./openwithmobile.component.css']
})
export class OpenwithmobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
fnotp(){
  location.href="verify"
}
}
