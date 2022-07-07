import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalComponent } from './personal/personal.component';
import { PhysicalComponent } from './physical/physical.component';
import { EducationComponent } from './education/education.component';
import { ReligionComponent } from './religion/religion.component';
import { FamilyComponent } from './family/family.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { LocationComponent } from './location/location.component';
const routes: Routes = [
  {
    path:"",component: HomeComponent 
  },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path:  'welcome',component:WelcomeComponent},
  { path:  'personal',component:PersonalComponent},
  { path:  'physical',component:PhysicalComponent},
  { path:  'education',component:EducationComponent},
  { path:  'religion',component:ReligionComponent},
  { path:   'family',component:FamilyComponent},
  { path:  'contactinfo',component:ContactinfoComponent},
  { path:  'location',component:LocationComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
