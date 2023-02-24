import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { CategoryComponent } from '../category/category.component';
import {Input} from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {



  constructor(private cartService:CartService) { }

  @Input() meals:any;
  ngOnInit(): void {

  }

  getMeals(){
  }

  showAddToCart(meal){
    this.cartService.showForm(meal);
  }

  

}
