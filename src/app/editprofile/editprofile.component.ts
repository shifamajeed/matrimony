import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor() { }
  // sidebar
  visibleeditprofilediv:boolean=false
  hideprofilepart:boolean=false
  deleteprofilepart:boolean=false

  // end sidebar
  // edit profile
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
  contact:boolean=true
  visiblecontact:boolean=false
  location:boolean=true
  visiblelocation:boolean=false
  mrgplan:boolean=true
  visiblemrgplan:boolean=false
  habits:boolean=true
  visiblehabits:boolean=false
  hobby:boolean=true
  visiblehobbies:boolean=false
  // end edit profile
  ngOnInit(): void {
  }
  // sidebar
  editprofilebtn()
  {
    this.visibleeditprofilediv=true
  }
  hideprofilebtn()
  {
    this.visibleeditprofilediv=false
    this.hideprofilepart=true
  }
  deleteprofilebtn()
  {
    this.deleteprofilepart=true
  }
  // end side bar
  // edit profile
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
contactinfo()
{
  this.contact=!this.contact
  this.visiblecontact=!this.visiblecontact
}
locationinfo()
{
  this.location=!this.location
  this.visiblelocation=!this.visiblelocation
}
mrgplaninfo()
{
  this.mrgplan=!this.mrgplan
  this.visiblemrgplan=!this.visiblemrgplan
}
habitsinfo()
{
  this.habits=!this.habits
  this.visiblehabits=!this.visiblehabits
}
hobbiesinfo()
{
  this.hobby=!this.hobby
  this.visiblehobbies=!this.visiblehobbies
}
// end edit profile

}
