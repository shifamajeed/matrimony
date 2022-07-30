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
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { HideprofileComponent } from './hideprofile/hideprofile.component';
import { LeftsidenavComponent } from './leftsidenav/leftsidenav.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotificationComponent } from './notification/notification.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EntrydetailsComponent } from './entrydetails/entrydetails.component'
import { TestsideComponent } from './testside/testside.component';

import { Home2Component } from './home2/home2.component';
import { FormsModule } from '@angular/forms';





// import { ModalModule } from './modal/modal.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SubmitnsaveComponent } from './submitnsave/submitnsave.component';
// import { Footer2Component } from './footer2/footer2.component';
// import { OpenwithmobileComponent } from './openwithmobile/openwithmobile.component';
// import { VerifyComponent } from './verify/verify.component';
// import { SuccessComponent } from './success/success.component';
// import { ProfilesComponent } from './profiles/profiles.component';












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
    DeleteprofileComponent,
    HideprofileComponent,
    LeftsidenavComponent,
    SearchProfileComponent,
    EditprofileComponent,

    EntrydetailsComponent,
   
    NotificationComponent,
        TestsideComponent,
        Home2Component,

    
    
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
    

    
    
  ],
  
  providers: [ ],
  bootstrap: [AppComponent],



  
 

})
export class AppModule { }

