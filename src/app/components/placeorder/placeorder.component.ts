import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placeorder',
  imports: [FormsModule,CommonModule],
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
