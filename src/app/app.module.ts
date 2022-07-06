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
// import { ModalModule } from './modal/modal.component';


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
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    
  
  ],
  
  providers: [
   
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
