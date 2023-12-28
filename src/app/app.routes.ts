import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooksComponent } from './books/books.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent, title: 'houses' },
  { path: 'books', component: BooksPageComponent, title: 'books' },
  { path: '**', component: PageNotFoundComponent, title: 'page not found' },
];
