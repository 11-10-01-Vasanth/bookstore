import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';

@Component({
  selector: 'app-placeorder',
  standalone: false,
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent implements OnInit {
  userdata: any
  bookdata: any
  orderType: any

  constructor(private service: BookserviceService) { }

  ngOnInit(): void {
    this.userdata = this.service.userdata
    this.bookdata = this.service.bookDetail
  }

  public saveOrder(order: any) {
    this.service.buyBook(order).subscribe((res) => {
      console.log(res);
    },
      (err) => {
        console.log("Error at PlaceOrder" + err);
      })
  }

}