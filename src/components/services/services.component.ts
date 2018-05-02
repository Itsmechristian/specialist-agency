import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

    constructor(
        private sanitize: DomSanitizer
    ) { }

    sanitizeSrc(imgurl) {
        return this.sanitize.bypassSecurityTrustUrl(imgurl)
    }
}