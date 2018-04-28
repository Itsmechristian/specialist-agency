import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => animate', [
        style({
          opacity: 0, 
        }),
        animate(500, style({opacity: 1}))
      ]),
      transition('animate => *', [
        style({
          opacity: 0, 
        }),
        animate(500, style({opacity: 1}))
      ])
  
  ])
]
})
export class HomeComponent implements AfterViewInit{
  fadeState: any = '';
  testimonyIndex: number = 0;

  testimonies: Array<{
     name: string,
     testimony: string
  }> = 
  [
   {
     name: "John Doe",
     testimony: "Morbi tempus facilisis mauris, nec mattis odio laoreet a. Vestibulum iaculis sagittis orci eget molestie. Donec feugiat turpis nec neque consequat consequat."
   },
   {
    name: "Nancy Mebly",
    testimony: "Morbi faucibus metus sit amet justo sagittis aliquam. Phasellus interdum auctor convallis. Aliquam convallis tortor eget auctor lacinia. Proin dictum scelerisque nisi sed congue."
  },
  {
    name: "Jack Marshal",
    testimony: "ultricies a sem at, interdum consequat nisi. Proin luctus massa porttitor nulla bibendum, eget malesuada ligula bibendum. Donec bibendum massa ac mauris rhoncus congue."
  },
  {
    name: "Sarah Winson",
    testimony: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin mollis, tellus in ornare commodo, mi sem semper ex, eu consectetur massa nibh placerat libero."
  },
  {
    name: "Becka Remas",
    testimony: "Sed aliquam mauris vitae molestie elementum. Cras iaculis, nunc in consequat ultricies, justo augue venenatis lectus, quis lobortis felis diam ut dui."
  },
  ] 

  @ViewChildren('dot') dot: any;

  constructor() {}

  ngAfterViewInit() {
    setInterval(() => {
      
      if(this.testimonyIndex < this.testimonies.length - 1) {
        (this.fadeState === '') ? this.fadeState = 'animate' : this.fadeState = '';
        this.testimonyIndex = this.testimonyIndex + 1;
      }
      else{
        (this.fadeState === '') ? this.fadeState = 'animate' : this.fadeState = '';
        this.testimonyIndex = 0;
      }
    }, 3000)
    
  }
}
