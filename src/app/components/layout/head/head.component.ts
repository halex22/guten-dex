import { Component, inject } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { PageControllerComponent } from '../../page-controller/page-controller.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [PageControllerComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

  currentPage = inject(BookService).page.asReadonly()



}
