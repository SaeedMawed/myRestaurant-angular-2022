import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items:any;
  total:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
    this.cartService.cart.subscribe(data=>{
      this.items=data;
      console.log(this.items.length)
    })
    
    this.getTotal();
    //this.items = JSON.stringify(this.cartService.getMyCart());
    //this.items = JSON.parse(this.cartService.getMyCart());
    //console.log(this.items);
  }
  getTotal(){
    var total=0;
    for(let i=0;i<this.items.length;i++){
      var price = 0;
      if(this.items[i].offer != null){
        price = this.items[i].price - this.items[i].offer / 100 * this.items[i].price;
      }
      else {
        price = this.items[i].price;
      }
      total = total + this.items[i].count *  price;
    }
    this.total = total;
  }

  toggleCart(){
    this.cartService.toggleCart();
  }

  deleteItem(item){
    this.cartService.deleteItem(item);
  }
}
