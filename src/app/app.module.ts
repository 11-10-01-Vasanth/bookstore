import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardlayoutComponent } from './components/cardlayout/cardlayout.component';
import { provideHttpClient } from '@angular/common/http';
import { BookserviceService } from './services/bookservice.service';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeeallComponent } from './components/seeall/seeall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    CardlayoutComponent,
    BookdetailComponent,
    CheckoutComponent,
    PlaceorderComponent,
    FooterComponent,
    SeeallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    BookserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
