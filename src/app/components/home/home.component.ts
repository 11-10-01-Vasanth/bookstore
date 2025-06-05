import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../services/bookservice.service';
import { Router } from '@angular/router';
import { CardlayoutComponent } from "../cardlayout/cardlayout.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardlayoutComponent, CarouselComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private service: BookserviceService,private router:Router) { }
  nowTrending: any
  ngOnInit(): void {
    this.nowTrending = this.service.getBooks();
  }

  nowTrendingImages = [
    "https://www.bookswagon.com/images/promotionimages/web/nonfictionbooks1.jpg?v=6.2",
    "https://www.bookswagon.com/images/promotionimages/web/nonfictionbooks2.jpg?v=6.2",
    "https://www.bookswagon.com/images/promotionimages/web/nonfictionbooks3.jpg?v=6.2"
  ]

  newArrivalsImages = [
    "https://www.bookswagon.com/images/promotionimages/web/fictionbooks1.jpg?v=6.2",
    "https://www.bookswagon.com/images/promotionimages/web/fictionbooks2.jpg?v=6.2",
    "https://www.bookswagon.com/images/promotionimages/web/fictionbooks3.jpg?v=6.2"
  ]

  awardWinnersImages = [
    "https://www.bookswagon.com/images/promotionimages/web/childrenbooks1.jpg?v=6.2",
    "https://www.bookswagon.com/images/promotionimages/web/childrenbooks2.jpg?v=6.2",
    "https://www.bookswagon.com/images/promotionimages/web/childrenbooks3.jpg?v=6.2"
  ]

  public seeall(content:any){
    this.service.seeAllContent = content;
    this.router.navigate(['category/'+content])
  }

}
