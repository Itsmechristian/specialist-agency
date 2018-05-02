import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotFoundComponent } from '../components/notfound/notfound.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SubmitComponent } from '../components/submit/submit.component';

import { SubmitGuard } from './submit';
import { SubmitService } from './submit.service';

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
    FooterComponent,
    SubmitComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    SubmitGuard,
    SubmitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
