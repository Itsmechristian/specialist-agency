import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('animatenavbar', [
      state('hide', style({
        display: 'none',
        maxHeight: '0px'
      })),
      state('show', style({
        display: 'block',
        maxHeight: '300px'
      })),
      transition('hide => show', animate(200, style({
        display: 'block',
        maxHeight: '300px'
      }))),
      transition('show => hide', animate(200, style({
        display: 'none',
        maxHeight: '0px'        
      })))
    ])
  ]
})
export class NavbarComponent {
  constructor() { }

  navbarState: String = 'hide';
  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if(window.innerWidth > 768) {
      this.navbarState = 'hide';
    }
  }

  animateNavbar() {
    (this.navbarState === 'hide') ? this.navbarState = 'show' : this.navbarState = 'hide';
  }
}