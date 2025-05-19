import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardlayout',
  standalone: false,
  templateUrl: './cardlayout.component.html',
  styleUrl: './cardlayout.component.css'
})
export class CardlayoutComponent implements OnInit {

  constructor(private service: BookserviceService, private router: Router) { }

  @Input() nowTrendingData: any
  nowTrending: any
  ngOnInit(): void {
    this.nowTrending = this.service.bookDetails
  }

  public createArray(n: number): any[] {
    return Array.from({ length: n })
  }

  public getBookDetail(id: any) {
    localStorage.setItem("bookid",id);
    setTimeout(() => {
      this.router.navigate(['bookdetail/' + id])
    }, 1000);
  }

}
