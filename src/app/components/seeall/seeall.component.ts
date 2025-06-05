import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seeall',
  imports: [FormsModule,CommonModule],
  templateUrl: './seeall.component.html',
  styleUrl: './seeall.component.css'
})
export class SeeallComponent implements OnInit {
  constructor(private service: BookserviceService, private router: Router) { }
  content: any
  bookData: any
  length: any
  pricerange: any
  ngOnInit(): void {
    this.content = this.service.seeAllContent
    this.bookData = this.service.bookDetails
    this.length = this.service.bookDetails.length
  }

  public getBookDetails(id: any) {
    localStorage.setItem("bookid",id);
    setTimeout(() => {
      this.router.navigate(['bookdetail/' + id])
    }, 1000);
  }

  public createArray(n: number): any[] {
    return Array.from({ length: n })
  }

  public onPriceRange(price: any) {
    console.log(price);
  }
}
