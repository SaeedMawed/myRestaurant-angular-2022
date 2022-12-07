import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { CategoryComponent } from '../category/category.component';
import {Input} from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {



  constructor() { }

  @Input() meals:any;
  ngOnInit(): void {

  }

  getMeals(){
  }

}
