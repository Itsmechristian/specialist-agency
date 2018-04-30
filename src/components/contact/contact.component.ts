import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import {} from '@types/googlemaps';
declare const google: any;

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('googlemap') googlemap: any;
    map: google.maps.Map;
    marker: google.maps.Marker;

    constructor(
    ) { }

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
}