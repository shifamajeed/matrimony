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
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


// import { ModalModule } from './modal/modal.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SubmitnsaveComponent } from './submitnsave/submitnsave.component';
// import { Footer2Component } from './footer2/footer2.component';
// import { OpenwithmobileComponent } from './openwithmobile/openwithmobile.component';
// import { VerifyComponent } from './verify/verify.component';
// import { SuccessComponent } from './success/success.component';
// import { ProfilesComponent } from './profiles/profiles.component';










// import { MatButtonModule } from '@angular/material';

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
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatButtonModule,

    MatIconModule,
    BrowserAnimationsModule,
    


    
  
  ],
  
  providers: [
   
  ],
  bootstrap: [AppComponent],

  entryComponents: [ ModalComponent ]

})
export class AppModule { }

