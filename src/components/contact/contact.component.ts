import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import {} from '@types/googlemaps';
import { SubmitService } from '../../app/submit.service';
import { FormGroup, FormControlName, Validators, FormBuilder, NgForm } from '@angular/forms';

declare const google: any;

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    image6: string = 'https://arbiterb-cdn.sirv.com/Specialist-agency/image6.jpg';

    @ViewChild('googlemap') googlemap: any;
    map: google.maps.Map;
    marker: google.maps.Marker;

    // Form
    contactForm: FormGroup
    
    constructor(
        private fb: FormBuilder,

    ) { 
        this.contactForm = fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
            phone: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
            message: ['', [Validators.required, Validators.minLength(50)]]
            
        })
    }

    ngOnInit() {
        setTimeout(() => {
            let lat = 52.6368778
            let lng =  -1.1397591999999577
    
            this.map = new google.maps.Map(this.googlemap.nativeElement, {
                center: new google.maps.LatLng(lat, lng),
                zoom: 12,
                gestureHandling: 'none',
                zoomControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
    
            this.marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map: this.map
            })
        }, 100)
    }

    onSubmit(f) {
        
    }
}