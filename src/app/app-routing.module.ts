import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { SeeallComponent } from './components/seeall/seeall.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bookdetail/:id',
    component: BookdetailComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'placeorder',
    component: PlaceorderComponent
  },
  {
    path: 'category/:content',
    component: SeeallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
