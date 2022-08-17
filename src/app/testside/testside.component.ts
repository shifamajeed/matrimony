import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-testside',
  templateUrl: './testside.component.html',
  styleUrls: ['./testside.component.css']
})
export class TestsideComponent implements OnInit{

  constructor() { }
       public innerWidth: any;
  // scrHeight:any;
  //   scrWidth:any;
  
// isDisabled: boolean;
   // editinner:boolean=true
  
  // sidebar
  sidenav:boolean=true
  editinner:boolean=false
  visibleeditprofilediv:boolean=false
  hideprofilepart:boolean=false
  deleteprofilepart:boolean=false
  editpwdpart:boolean=false
  // end sidebar
  partner:boolean=false
  // edit profile
  personal:boolean=true
  visiblepersonal:boolean=false
  physical:boolean=true
  visiblephysical:boolean=false
  visiblelocation:boolean=false
  education:boolean=true
  visibleeducation:boolean=false
  family:boolean=true
  visiblefamily:boolean=false
  relegious:boolean=true
  visiblerelegious:boolean=false
  contact:boolean=true
  visiblecontact:boolean=false
  location:boolean=true
 
  mrgplan:boolean=true
  visiblemrgplan:boolean=false
  habits:boolean=true
  visiblehabits:boolean=false
  hobby:boolean=true
  visiblehobbies:boolean=false
  // end edit profile
  //search button section
  visisblesearch:boolean=false
  visibleexplore:boolean=false
  //home2
  visiblehome2:boolean=true
  // explore
  visiblereceive:boolean=true
  visiblesend:boolean=false
  visibleboth:boolean=false
  // help
  visiblehelp:boolean=false
  // notification
  visiblenotification:boolean=false
 sidenav2:boolean=false
smallhome:boolean=true

mangphoto:boolean=false
  ngOnInit(): void {
  }

  // @HostListener('window:resize', ['$event'])
  //   getScreenSize() {
  //         this.scrHeight = window.innerHeight;
  //         this.scrWidth = window.innerWidth;
  //         console.log(this.scrHeight, this.scrWidth);
  //   }
  

  
  // sidebar
  lefteditprofilebtn()
  { 
    // this.innerWidth = this.getScreenSize();
    // this.innerWidth = event.target.innerWidth;
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <600) {
    this.sidenav = false;
 
   } 
    this.visisblesearch=false
    this.partner=false
    this.deleteprofilepart=false
    this.hideprofilepart=false
    this.editpwdpart=false
    this.visiblehome2=false
    this.editinner=true
    this.visibleeditprofilediv=true
    this.visiblenotification=false
    this.smallhome=false
    this.sidenav2=false
  }

    
  
  editprofilebtn()
  {
    this.visisblesearch=false
    this.visiblehome2=false
    this.partner=false
    this.deleteprofilepart=false
    this.hideprofilepart=false
    this.editpwdpart=false
    this.visibleeditprofilediv=true
    this.visiblenotification=false
    this.smallhome=false
  }
  hideprofilebtn()
  {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <600) {
      this.sidenav=false

    }
    this.visiblehome2=false
    this.partner=false
    this.deleteprofilepart=false
    this.visibleeditprofilediv=false
    this.editpwdpart=false
    this.hideprofilepart=true
    this.visiblenotification=false
    this.smallhome=false
    this.sidenav2=false
  }
  deleteprofilebtn()
  {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <600) {
      this.sidenav=false
     
    }
    this.visisblesearch=false
    this.visiblehome2=false
    this.partner=false
    this.hideprofilepart=false
    this.visibleeditprofilediv=false
    this.deleteprofilepart=true
    this.editpwdpart=false
    this.visiblenotification=false
    this.smallhome=false
    this.sidenav2=false
  }
  editpwd()
  {
    this.visisblesearch=false
    this.visiblehome2=false
    this.partner=false
    this.hideprofilepart=false
    this.visibleeditprofilediv=false
    this.deleteprofilepart=false
    this.editpwdpart=true
    this.visiblenotification=false
    this.smallhome=false

  }

  // end side bar
  // home2
  home2()
  {
    this.editpwdpart=false
    this.hideprofilepart=false
    this.deleteprofilepart=false
    this.editinner=false
    this.visisblesearch=false
    this.visiblehome2=true
    this.visiblenotification=false
    this.visibleeditprofilediv=false
    this.smallhome=false
  }
  // edit profile
  personalinfo()
  {

    this.personal=!this.personal
    this.visiblephysical=false
    this.visibleeducation=false
    this.visiblefamily=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.smallhome=false
    this.visiblepersonal=!this.visiblepersonal
  }
  physicalinfo()
  {
    this.physical=!this.physical
    this.visibleeducation=false
    this.visiblefamily=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
    this.visiblephysical=!this.visiblephysical
  }
  educationinfo()
  {
    this.education=!this.education
    this.visiblephysical=false
    this.visiblefamily=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visibleeducation=!this.visibleeducation
  }
familyinfo(){
  this.family=!this.family
  this.visiblephysical=false
    this.visibleeducation=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblefamily=!this.visiblefamily
}
relegiousinfo()
{
  this.relegious=!this.relegious
  this.visiblephysical=false
    this.visiblefamily=false
    this.visiblefamily=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblerelegious=!this.visiblerelegious
}
contactinfo()
{
  this.contact=!this.contact
    this.visiblephysical=false
    this.visiblefamily=false
    this.visiblerelegious=false
    this.visiblerelegious=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblecontact=!this.visiblecontact
}
locationinfo()
{
  this.location=!this.location
    this.visiblephysical=false
    this.visiblefamily=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblecontact=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblelocation=!this.visiblelocation
}
mrgplaninfo()
{
  this.mrgplan=!this.mrgplan
    this.visiblephysical=false
    this.visiblefamily=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblelocation=false
    this.visiblehabits=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblemrgplan=!this.visiblemrgplan
}
habitsinfo()
{
  this.habits=!this.habits
    this.visiblefamily=false
    this.visiblephysical=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblemrgplan=false
    this.visiblehobbies=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblehabits=!this.visiblehabits
}
hobbiesinfo()
{
  this.hobby=!this.hobby
    this.visiblefamily=false
    this.visiblephysical=false
    this.visiblerelegious=false
    this.visiblecontact=false
    this.visiblelocation=false
    this.visiblemrgplan=false
    this.visiblehabits=false
    this.visiblehabits=false
    this.visiblepersonal=false
    this.smallhome=false
  this.visiblehobbies=!this.visiblehobbies
}
// end edit profile
// reset password

// function myFunction() {
//   var x = document.getElementById("*passwordbox-id*");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

// end reset password
//partnerpreference
partnerpreference()
{
  this.innerWidth = window.innerWidth
    if (this.innerWidth > 319 &&  this.innerWidth < 721) {
    this.sidenav = false
  
    }
    this.visiblehome2=false
    this.deleteprofilepart=false
    this.hideprofilepart=false
    this.editpwdpart=false
    this.visibleeditprofilediv=false
    this.visisblesearch=false
    this.visiblehelp=false
    this.smallhome=false
    this.sidenav2=false
    this.partner=true
}
// manage photos

managephotos()
{
  this.innerWidth = window.innerWidth
    if (this.innerWidth > 319 &&  this.innerWidth < 721) {
    this.sidenav = false
  
    }
    this.visiblehome2=false
    this.deleteprofilepart=false
    this.hideprofilepart=false
    this.editpwdpart=false
    this.visibleeditprofilediv=false
    this.visisblesearch=false
    this.visiblehelp=false
    this.smallhome=false
    this.sidenav2=false
    this.partner=false
    
  this.mangphoto=true
}
// search button action 
searchact()
{
  this.innerWidth = window.innerWidth
    if (this.innerWidth > 319 &&  this.innerWidth < 721) {
    this.sidenav = false
    }
  this.hideprofilepart=false
  this.deleteprofilepart=false
  this.editpwdpart=false
  this.visiblehome2=false
  // this.editinner=false

  this.visiblehelp=false
  this.visiblenotification=false

  this.smallhome=false

  this.visisblesearch=true

}
exploreact()
{
  this.visibleeditprofilediv=false
  this.hideprofilepart=false
  this.deleteprofilepart=false
  this.editpwdpart=false
  this.visiblehome2=false
  this.editinner=false
  this.visiblehome2=false
  this.visisblesearch=false
  this.visiblereceive=false
  this.visiblesend=false
  this.visibleboth=false
  this.visiblenotification=false
  this.visibleexplore=true
  this.smallhome=false
}
// explore
interestreceived()
{
  this.visibleboth=false
  this.visiblesend=false
this.visiblereceive=true

}
interestsend()
{
  this.visiblereceive=false
  this.visibleboth=false
this.visiblesend=true

}
bothinterest(){
  this.visiblereceive=false
  this.visiblesend=false
this.visibleboth=true

}
// end explore
// help
helpact()
{
  this.visibleeditprofilediv=false
  this.hideprofilepart=false
  this.deleteprofilepart=false
  this.editpwdpart=false
  this.visiblehome2=false
  this.editinner=false
  this.visiblehome2=false
  this.visisblesearch=false
  this.visiblesend=false
  this.visiblereceive=false
  this.visibleboth=false
  this.visiblehelp=true
  this.visiblenotification=false
  this.smallhome=false
}
// notification
notification()
{
  this.visibleexplore=false
  this.visibleeditprofilediv=false
  this.hideprofilepart=false
  this.deleteprofilepart=false
  this.editpwdpart=false
  this.visiblehome2=false
  this.editinner=false
  this.visiblesend=false
  this.visiblereceive=false
  this.visibleboth=false
  this.visisblesearch=false
  this.partner=false   
  this.visiblenotification=true
  this.smallhome=false
}


toggle = true;
status = "";

enableDisableRule() {
 
  this.toggle = !this.toggle;
  this.status = this.toggle ? "" : "";
  
}


 fnvisiblesidenav(){
   this.sidenav = false
  this.visisblesearch=false
     this.partner=false
     this.deleteprofilepart=false
      this.hideprofilepart=false
    this.editpwdpart=false
      this.visiblehome2=false
      this.editinner=false
    this.visibleeditprofilediv=false
      this.visiblenotification=false
      
      this.visibleexplore=false
      this.visiblesend=false
      this.visiblereceive=false
      this.visibleboth=false
      this.smallhome=false
      this.sidenav2=true
 }
 managephotos(){
  this.mangphoto=true
 }
}