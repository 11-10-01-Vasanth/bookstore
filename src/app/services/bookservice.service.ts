import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

 private url = "http://localhost:8080/book/";

  constructor(private httpClient: HttpClient) {}

  // Store all books
  bookDetails: any;

  // Get all books
  public getBooks(): void {
    this.httpClient.get(this.url + "getbooks").subscribe({
      next: (res) => {
        this.bookDetails = res;
      },
      error: (err) => {
        console.error("Error fetching books:", err);
      }
    });
  }

  // Store selected book
  bookDetail: any;
  seeAllContent: any

  // Get book by ID
  public getBook(id: any): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.url}getbook/${id}`));
  }

  // Buy book
  userdata: any; // Ideally this should have a proper interface like `User`
  public buyBook(ordertype: any): Observable<any> {
    const customer = this.userdata;
    return this.httpClient.post(`${this.url}buybook/${this.bookDetail.id}/${ordertype.orderType}`, customer);
  }
}
