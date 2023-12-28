import { Injectable } from '@angular/core';
import { HousingLocation } from './housing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  getHouseById(id: number): Observable<HousingLocation> {
    return this.http.get<HousingLocation>(`${this.url}/${id}`);
  }

  submitForm(firstName: string, secondName: string, email: string) {
    return console.log(firstName, secondName, email);
  }
}
