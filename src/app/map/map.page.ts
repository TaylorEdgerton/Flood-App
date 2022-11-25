import { Component, OnInit, ViewChild } from '@angular/core';
declare let google:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map', {static:true}) mapElement:any;
  map:any;
  constructor() { }

  ngOnInit() {
    let latLng = new google.maps.LatLng(-27.552965, 153.051099);
    let mapOptions = {
      center: latLng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  
    this.map= new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.Drop,
      position: this.map.getCenter()
    });
      let infoWindow=new google.maps.InfoWindow({
        content: '<h4> Home </h4>'
      });
    google.maps.event.addListener(marker, 'click', ()=>{
      infoWindow.open(this.map, marker);
    })
  }

}
