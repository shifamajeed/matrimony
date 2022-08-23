import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { LeftsidenavComponent } from './leftsidenav/leftsidenav.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import {EntrydetailsComponent} from './entrydetails/entrydetails.component';
import { NotificationComponent } from './notification/notification.component';
import {TestsideComponent} from './testside/testside.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent 
  },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'test', component: TestComponent },
  {path:'head',component:HeaderComponent},
  {path:'left',component:LeftsidenavComponent},
  { path:'edit',component:EditprofileComponent},
  { path: 'profile', component: ProfilesComponent},
  { path:'entry',component:EntrydetailsComponent},
  { path: 'noti', component: NotificationComponent},
  { path: 'testside',component: TestsideComponent},
  { path: 'hom', component: Home2Component},

];

  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
