import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BranchesComponent } from './components/branches/branches.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LocationComponent } from './components/location/location.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'


import { CategoryComponent } from './components/category/category.component';

import { SwiperModule } from 'swiper/angular';
import { MealComponent } from './components/meal/meal.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './components/cart/cart.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddTocartComponent } from './components/add-tocart/add-tocart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopSectionComponent,
    HeaderComponent,
    AboutComponent,
    BranchesComponent,
    GalleryComponent,
    LocationComponent,
    FooterComponent,
    CategoryComponent,
    MealComponent,
    AboutUsComponent,
    CartComponent,
    LoginComponent,
    AddTocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    SwiperModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
