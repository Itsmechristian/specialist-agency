import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  image4:string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/image4.jpg';
  teamhands: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/teamhands.jpg';
  teampicture: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/teampicture.jpg';

  constructor(
    private sanitize: DomSanitizer
  )
   { }

  sanitizeSrc(imgurl) {
    return this.sanitize.bypassSecurityTrustUrl(imgurl)
  } 
}