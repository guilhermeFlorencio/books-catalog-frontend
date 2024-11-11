import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookFormComponent } from './books/book-form/book-form.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'add-book', component: BookFormComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];
