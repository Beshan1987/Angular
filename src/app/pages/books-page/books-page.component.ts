import { Component } from '@angular/core';
import { BooksService } from '../../books.service';
import { Book, Books } from '../../books';
import { BooksComponent } from '../../books/books.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [BooksComponent, CommonModule],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.scss',
})
export class BooksPageComponent {
  books: Book[] = [];

  constructor(private http: BooksService) {
    this.http.getAllBooks().subscribe(
      (response) => {
        this.books = response.books;
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }
}
