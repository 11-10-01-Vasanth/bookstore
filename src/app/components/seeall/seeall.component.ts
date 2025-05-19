import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeall',
  standalone: false,
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
    this.service.getBook(id).then((res) => {
      console.log(res+"yugyg");
      this.service.bookDetail = res;
    }).catch((err) => {
      console.log("Error at SeeAll" + err);
    })
    setTimeout(() => {
      this.router.navigate(['bookdetail/' + id])
    }, 600);
  }

  public createArray(n: number): any[] {
    return Array.from({ length: n })
  }

  public onPriceRange(price: any) {
    console.log(price);
  }
}