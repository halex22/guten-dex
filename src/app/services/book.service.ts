import { Injectable, signal } from '@angular/core';
import { type Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = signal<Book[]>([])
  page = signal<number>(1)

  readonly baseUrl = 'https://gutendex.com/books/'

  constructor() {
    this.fetchData()
  }

  fetchData(): void {
    console.log('fetching')
    fetch(this.baseUrl + `?page=${this.page()}`)
    .then(res => res.json())
    .then(data => this.books.set(data.results))
  }

  getPrevPage(): void {
    this.page.update(prev => prev - 1)
    this.fetchData()
  }

  getNextPage(): void {
    this.page.update(prev => prev + 1)
    this.fetchData()
  }
}
