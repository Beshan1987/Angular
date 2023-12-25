import { Injectable } from '@angular/core';
import { HousingLocation } from './housing';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {}
  async getAll(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHouseById(id: number): Promise<HousingLocation> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
    // (
    //   this.housingLocationList.find((house) => house.id === id) ?? undefined
    // );
  }

  submitForm(firstName: string, secondName: string, email: string) {
    return console.log(firstName, secondName, email);
  }
}
