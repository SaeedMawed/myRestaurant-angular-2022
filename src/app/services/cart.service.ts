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

  //itemList=JSON.parse(localStorage.getItem('myCart'));
  
  itemList:any=[];
  private behaviorCart = new BehaviorSubject<any>(this.itemList);
  cart = this.behaviorCart.asObservable();


  private behaviorShowCart = new BehaviorSubject<boolean>(false);
  showCart = this.behaviorShowCart.asObservable();

  

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
    //this.itemList=JSON.parse(localStorage.getItem('myCart'));
    this.itemList.push(item);
    this.behaviorCart.next(this.itemList);
    this.initForm();
    //localStorage.setItem('myCart', JSON.stringify(this.itemList));
  }

  deleteItem(index){
    //this.itemList=JSON.parse(localStorage.getItem('myCart'));
    this.itemList.splice(index,1)
    this.behaviorCart.next(this.itemList);
    //localStorage.setItem('myCart', JSON.stringify(this.itemList));
  }
/*
  getMyCart(){
    const myList = localStorage.getItem('myCart');
    return myList;
  }
*/

  toggleCart(){
    let isDisplayed;
    this.behaviorShowCart.subscribe(data =>{
      isDisplayed = data
    })
    this.behaviorShowCart.next(!isDisplayed);
  }
}
