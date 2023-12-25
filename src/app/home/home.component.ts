import { Component, Inject, inject } from '@angular/core';
import { HousingLocation } from '../housing';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  // @InputEvent()

  constructor() {
    this.housingService
      .getAll()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
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
