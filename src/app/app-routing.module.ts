import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { HideprofileComponent } from './hideprofile/hideprofile.component';
import { LeftsidenavComponent } from './leftsidenav/leftsidenav.component';
import {SearchProfileComponent} from './search-profile/search-profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

import { SubmitnsaveComponent } from './submitnsave/submitnsave.component'; 
import { OpenwithmobileComponent } from './openwithmobile/openwithmobile.component';
import { VerifyComponent } from './verify/verify.component';
import { SuccessComponent } from './success/success.component';
import { ProfilesComponent } from './profiles/profiles.component';
import {EntrydetailsComponent} from './entrydetails/entrydetails.component';
import { NotificationComponent } from './notification/notification.component';
import { Test2Component } from './test2/test2.component';

import {TestsideComponent} from './testside/testside.component';


import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent 
  },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'delete', component: DeleteprofileComponent },
  { path:'hide',component:HideprofileComponent },
  {path:'head',component:HeaderComponent},
  {path:'left',component:LeftsidenavComponent},
  {path:'search',component:SearchProfileComponent},
  { path:'edit',component:EditprofileComponent},
  { path: 'save', component: SubmitnsaveComponent },
  { path: 'open', component: OpenwithmobileComponent},
  { path: 'verify', component: VerifyComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'profile', component: ProfilesComponent},
  { path:'entry',component:EntrydetailsComponent},
  { path: 'noti', component: NotificationComponent},
  { path:'test2', component: Test2Component},

  { path: 'testside',component: TestsideComponent},


  { path: 'hom', component: Home2Component},

];

  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
