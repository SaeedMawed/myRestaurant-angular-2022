import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.scss']
})
export class AddTocartComponent implements OnInit {

  meal:any;
  display=false;
  isSaved=false;

  count=1;
  msg="";
  constructor( private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.meal.subscribe(data=>{
      this.meal = data;
      this.display = data.display;
    })
  }

  increase(){
    this.count++;
  }

  decrease(){
    if(this.count > 1){
      this.count = this.count - 1;
    }
  }

  submit(){
    this.meal = Object.assign(this.meal, {count: this.count},{note:this.msg});
    this.isSaved=true;
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.cartService.save(this.meal);
  }, 1500);


  
  }

  close(){
    this.cartService.initForm();    
  }

}
