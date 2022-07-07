import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor() { }
  personal:boolean=true
  visible:boolean=false
  ngOnInit(): void {
  }

  

  personalinfo()
  {
    this.personal=!this.personal
    this.visible=!this.visible
  }
  
}
