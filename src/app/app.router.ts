import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component'; 
import { NotFoundComponent } from '../components/notfound/notfound.component';
import { SubmitComponent } from '../components/submit/submit.component';
import { SubmitGuard } from './submit';

const APP_ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'submitted',
    canActivate: [SubmitGuard],
    component: SubmitComponent,
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },

]

export const routing = RouterModule.forRoot(APP_ROUTES)