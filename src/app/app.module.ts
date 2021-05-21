import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { GoodsPageComponent } from './goods-page/goods-page.component';
import { HitsComponent } from './components/hits/hits.component';
import { SaleComponent } from './components/sale/sale.component';
import { NewStockComponent } from './components/new-stock/new-stock.component';
import { ShopCardComponent } from './components/shop-card/shop-card.component';
import { CordionComponent } from './shop/cordion/cordion.component';



const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'item', component: GoodsPageComponent},
  {path: 'card', component: ShopCardComponent},



];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    GoodsPageComponent,
    HitsComponent,
    SaleComponent,
    NewStockComponent,
    ShopCardComponent,
    CordionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
