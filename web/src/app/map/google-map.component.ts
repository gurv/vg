import {Component, OnInit} from '@angular/core';
declare var google: any;

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.component.html',
  styleUrls: ['google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  ngOnInit(): void {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
  }

}
