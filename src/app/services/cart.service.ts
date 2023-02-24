import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  setting={
    "display":false,
    "name":"",
    "description":"",
    "price":"",
    "offer":"",
    "image":""
  }
  private behaviorMeal = new BehaviorSubject<any>(this.setting);
  meal = this.behaviorMeal.asObservable();

  private behaviorCart = new BehaviorSubject<any>(null);
  cart = this.behaviorCart.asObservable();

  itemList:any=[];

  constructor() { }

  showForm(item){
    this.behaviorMeal.next({
      "display":true,
      "name":item.name,
      "description":item.description,
      "price":item.price,
      "offer":item.offer,
      "image":item.image
    })
  }

  initForm(){
    this.behaviorMeal.next(this.setting);
  }

  save(item){
    this.itemList.push(item);
    this.behaviorCart.next(this.itemList);
    this.initForm();
    console.log(this.itemList);
  }
}
