import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  carouselImages = [
    "https://www.bookswagon.com/bannerimages/35_inr.jpg?v=4.4",
    "https://www.bookswagon.com/bannerimages/2_inr.jpg?v=4.4",
    "https://www.bookswagon.com/bannerimages/1_inr.jpg?v=4.4",
    "https://www.bookswagon.com/bannerimages/81_inr.jpg?v=4.4",
    "https://www.bookswagon.com/bannerimages/85_inr.jpg?v=4.4",
    "https://www.bookswagon.com/bannerimages/70_inr.jpg?v=4.4",
    "https://www.bookswagon.com/bannerimages/79_inr.jpg?v=4.4"
  ]

  badges = [
    { icon: "bi bi-award", name:"Best Seller" },
    { icon: "bi bi-trophy", name:"Award Winners" },
    { icon: "bi bi-box2", name:"Box Sets" },
    { icon: "bi bi-globe", name:"International Best Seller" },
    { icon: "bi bi-book", name:"New Arrivals" },
    { icon: "bi bi-journal-bookmark", name:"Fictions Books" },
    { icon: "bi bi-journal-richtext", name:"Children Books" },
    { icon: "bi bi-file-earmark-post-fill", name:"Comic Books" },
    { icon: "bi bi-stars", name:"Tarot Cards" }
  ]
}
