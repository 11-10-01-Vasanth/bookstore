import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  standalone: false,
  templateUrl: './bookdetail.component.html',
  styleUrl: './bookdetail.component.css'
})
export class BookdetailComponent implements OnInit {
  nowTrending: any
  showBookDetail = false

  constructor(private service: BookserviceService, private router: Router) { }

  book: any

  ngOnInit(): void {
    const id = localStorage.getItem("bookid")
    console.log(id);
    this.service.getBook(id).then((res) => {
      this.book = res
      this.showBookDetail = true
      this.service.bookDetail = res
      console.log(this.service.bookDetail, "bookdetail");
    }).catch((err) => {
      alert(err);
    })
    this.nowTrending = this.service.getBooks();

  }

  public getRating(n: any) {
    return Array(n)
  }

  public getAbout(para: any) {
    return para.split(' ').slice(0, 50).join(' ') + '...'
  }

  public scrollToPara(paraId: any) {
    const e = document.getElementById(paraId);
    if (e) {
      e.scrollIntoView({ behavior: 'smooth' })
    }
  }

  public toCheckout() {
    this.router.navigate(['checkout'])
  }

}