import { Component, effect, inject } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
books: Book[] = []
  bookService = inject(BookService)

  constructor() {
    effect(() => {
      console.log('first effect')
      this.books = this.bookService.books()
    })
  }
}
