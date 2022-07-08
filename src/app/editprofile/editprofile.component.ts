import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor() { }
  personal:boolean=true
  visiblepersonal:boolean=false
  physical:boolean=true
  visiblephysical:boolean=false
  education:boolean=true
  visibleeducation:boolean=false
  family:boolean=true
  visiblefamily:boolean=false
  relegious:boolean=true
  visiblerelegious:boolean=false
  ngOnInit(): void {
  }

  

  personalinfo()
  {
    this.personal=!this.personal
    this.visiblepersonal=!this.visiblepersonal
  }
  physicalinfo()
  {
    this.physical=!this.physical
    this.visiblephysical=!this.visiblephysical
  }
  educationinfo()
  {
    this.education=!this.education
  this.visibleeducation=!this.visibleeducation
}
familyinfo(){
  this.family=!this.family
  this.visiblefamily=!this.visiblefamily
}
relegiousinfo()
{
  this.relegious=!this.relegious
  this.visiblerelegious=!this.visiblerelegious
}

  
}
