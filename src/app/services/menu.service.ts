import { Injectable } from '@angular/core';
import { CategoryComponent } from '../components/category/category.component';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu = new BehaviorSubject<any>([]);

  constructor(private category:CategoryComponent) { }

  getMenU(){

  }

}
