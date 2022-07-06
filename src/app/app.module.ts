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
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitnsaveComponent } from './submitnsave/submitnsave.component';
import { Footer2Component } from './footer2/footer2.component';
import { OpenwithmobileComponent } from './openwithmobile/openwithmobile.component';
import { VerifyComponent } from './verify/verify.component';
import { SuccessComponent } from './success/success.component';
import { ProfilesComponent } from './profiles/profiles.component';










// import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    
    TestComponent,
    SubmitnsaveComponent,
    Footer2Component,
  
    OpenwithmobileComponent,
    VerifyComponent,
    SuccessComponent,
    ProfilesComponent,
    
  
    
    
   
    
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
  entryComponents: [ ]
})
export class AppModule { }
