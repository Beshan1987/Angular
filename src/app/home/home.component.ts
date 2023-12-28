import { Component, Inject, inject } from '@angular/core';
import { HousingLocation } from '../housing';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  // @InputEvent()

  constructor(private http: HousingService) {
    this.http.getAll().subscribe(
      (response) => {
        this.housingLocationList = response;
        this.filteredLocationList = response;
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }

  seacrh(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (houseLocation: HousingLocation) =>
        houseLocation.city.toLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
