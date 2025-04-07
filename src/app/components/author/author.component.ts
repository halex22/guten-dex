import { Component, Input, input } from '@angular/core';
import { type Author } from '../../models/book';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {
  author = input.required<Author>()

  get lifeSpan(){

    if (this.author().death_year && this.author().birth_year) {
      return this.author().death_year - this.author().birth_year
    }
    return undefined

  }
}
