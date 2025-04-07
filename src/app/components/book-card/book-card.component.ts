import { Component, computed, input } from '@angular/core';
import { type Book } from '../../models/book';
import { AuthorComponent } from '../author/author.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [AuthorComponent, NgFor, RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  book = input.required<Book>()
  cover = computed(() => this.book().formats['image/jpeg'])

}
