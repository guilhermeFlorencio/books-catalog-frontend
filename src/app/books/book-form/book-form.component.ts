import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BookService, Book } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,      
  imports: [FormsModule], 
  selector: 'app-book-form',
  template: './book-form.component.html',
})
export class BookFormComponent implements OnInit {
  book: Book = { title: '', author: '', description: '' };

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(+id).subscribe(book => (this.book = book));
    }
  }

  onSubmit() {
    if (this.book.id) {
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => this.router.navigate(['/books']));
    } else {
      this.bookService.addBook(this.book).subscribe(() => this.router.navigate(['/books']));
    }
  }
}
