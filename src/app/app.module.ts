import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NotFoundComponent } from '../components/notfound/notfound.component';
import { routing } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
