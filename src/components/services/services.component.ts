import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    planning: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/planning.jpg';
    image5: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/image5.jpg';
    gavel: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/gavel.jpg';
    taxes: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/taxes.jpg';

    constructor(
        private sanitize: DomSanitizer
    ) { }

    sanitizeSrc(imgurl) {
        return this.sanitize.bypassSecurityTrustUrl(imgurl)
    }
}