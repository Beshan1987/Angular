import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  houseLocation: HousingLocation | undefined;
  housingService = inject(HousingService);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
      .getHouseById(this.housingLocationId)
      .then(
        (houseLocation: HousingLocation) => (this.houseLocation = houseLocation)
      );
  }

  submitForm() {
    this.housingService.submitForm(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.secondName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
