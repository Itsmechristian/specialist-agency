import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, query,transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0}),
        animate(1000, style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  routeState = '';

  constructor(
    private router: Router
  ) {
    router.events.subscribe(res => {
      (this.routeState === '') ? this.routeState = '*' : this.routeState ='';
    })
  }

  ngOnInit() {
    this.router.events.subscribe((e: NavigationEnd) => {
      if(e instanceof NavigationEnd) {
        window.scrollTo(0, 0)
      }
    })
  }

 
}

