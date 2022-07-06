import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { SubmitnsaveComponent } from './submitnsave/submitnsave.component'; 
import { OpenwithmobileComponent } from './openwithmobile/openwithmobile.component';
import { VerifyComponent } from './verify/verify.component';
import { SuccessComponent } from './success/success.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent 
  },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'save', component: SubmitnsaveComponent },
   { path: 'open', component: OpenwithmobileComponent},
  { path: 'verify', component: VerifyComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'profile', component: ProfilesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
