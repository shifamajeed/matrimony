import { NgModule } from '@angular/core';
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
  {path:'edit',component:EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
