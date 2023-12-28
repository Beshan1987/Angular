import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url = 'https://api.itbook.store/1.0/';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Books> {
    return this.http.get<Books>(this.url + 'search/mongodb');
  }
}
