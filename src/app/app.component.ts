import { Component } from '@angular/core';
import { BookListComponent } from './components/book-list/book-list.component';
import { HeadComponent } from './components/layout/head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
