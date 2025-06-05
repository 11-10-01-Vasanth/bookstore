import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  bookData: any
  constructor(private service: BookserviceService, private route: Router) { }
  ngOnInit(): void {
    this.bookData = this.service.bookDetail
  }

  customerEmail: any
  customerName: any
  customerPassword: any
  customerPhone: any
  customerAddress: any

  public saveUser(userdata: any) {
    if(this.customerAddress && this.customerEmail && this.customerName && this.customerPassword && this.customerPhone){
      this.service.userdata = userdata
      console.log(userdata);
      this.route.navigate(['placeorder'])
    }
    else{
      alert("Please fill all the fields...")
    }
  }

}
