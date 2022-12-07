import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BranchesComponent } from './components/branches/branches.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LocationComponent } from './components/location/location.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatIconModule} from '@angular/material/icon';
import { CategoryComponent } from './components/category/category.component';

import { SwiperModule } from 'swiper/angular';
import { MealComponent } from './components/meal/meal.component';
import { CardComponent } from './pages/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MenuComponent,
    TopSectionComponent,
    HeaderComponent,
    AboutComponent,
    BranchesComponent,
    GalleryComponent,
    LocationComponent,
    FooterComponent,
    CategoryComponent,
    MealComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
