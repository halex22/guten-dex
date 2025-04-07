import { Component, Signal } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-page-controller',
  standalone: true,
  imports: [],
  templateUrl: './page-controller.component.html',
  styleUrl: './page-controller.component.scss'
})
export class PageControllerComponent {

  currentPage: Signal<number>

  constructor(private bookService: BookService) {
    this.currentPage = this.bookService.page.asReadonly()
  }

  onPrevClick() {
    if (this.currentPage() > 0) {
      this.bookService.getPrevPage()
    }
  }


  onNextClick() {
    this.bookService.getNextPage()
  }

}
