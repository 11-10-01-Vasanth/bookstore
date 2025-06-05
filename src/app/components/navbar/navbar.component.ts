import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 navArray = [
    "Book",
    "New Arrivals",
    "Box Sets",
    "Bestsellers",
    "Fiction Books",
    "Award Winners",
    "Featured Authors",
    "Today's Deal",
    "Request a Book"
  ]
}
