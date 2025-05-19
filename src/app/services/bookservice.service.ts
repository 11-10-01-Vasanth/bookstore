import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookserviceService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/book/";

  bookDetails: any

  public getBooks() {
    this.httpClient.get(this.url + "getbooks").subscribe((res) => {
      this.bookDetails = res
    }, (err) => {
      return err;
    })
  }

  bookDetail: any

  public getBook(id: any): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.url}getbook/${id}`))
  }

  userdata: any
  customer: any

  public buyBook(ordertype: any) {
    this.customer = this.userdata
    const response = this.httpClient.post(this.url + "buybook/" + this.bookDetail.id + "/" + ordertype.orderType, this.customer)
    return response;
  }

  seeAllContent: any

}
