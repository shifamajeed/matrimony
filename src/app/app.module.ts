import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { TestComponent } from './test/test.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalComponent } from './personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhysicalComponent } from './physical/physical.component';
import { EducationComponent } from './education/education.component';
import { ReligionComponent } from './religion/religion.component';
import { FamilyComponent } from './family/family.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { LocationComponent } from './location/location.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ModalComponent,
    TestComponent,
    WelcomeComponent,
    PersonalComponent,
    PhysicalComponent,
    EducationComponent,
    ReligionComponent,
    FamilyComponent,
    ContactinfoComponent,
    LocationComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    
  
  ],
  
  providers: [
   
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
