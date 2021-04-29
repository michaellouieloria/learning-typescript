import { User } from './User';
import { Company } from './Company';

export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  googeMap: google.maps.Map;

  constructor(divId: string) {
    this.googeMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googeMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googeMap, marker);
    })
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googeMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {
    const marker = new google.maps.Marker({
      map: this.googeMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
}
