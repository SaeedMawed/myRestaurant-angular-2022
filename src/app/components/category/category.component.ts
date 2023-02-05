import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,SwiperOptions} from 'swiper';
import { MealComponent } from '../meal/meal.component';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class CategoryComponent implements OnInit {

  category_name:string = "All";
  categoryList:any=[
    {
      "id":1,
      "name":"All",
      "image":"all.webp"
    },
    {
      "id":2,
      "name":"Offers",
      "image":"offers.png"
    },
    {
      "id":3,
      "name":"Sandwish",
      "image":"sandwish.jpeg"
    },
    {

      "id":4,
      "name":"Spaghetti",
      "image":"spaghetti.jpg"
    },
    {

      "id":5,
      "name":"Middle east food",
      "image":"middle-east-meal.jpg"
    },
    {

      "id":6,
      "name":"Western food",
      "image":"western-food.jpg"
    },
    {

      "id":7,
      "name":"Salad",
      "image":"Salad.jpg"
    },
    {
      "id":8,
      "name":"Juices",
      "image":"juices.jpg"
    },
    {
      "id":9,
      "name":"Soup",
      "image":"Soup.jpg"
    }


  ];

  mealList:any=[
    {
      "name":"Orange Juice",
      "price":5,
      "category_name":"juices",
      "description":"200 ml of fresh African orange juice, free of sugar and flavorings, 100% natural",
      "image":"Orange-Juice.jpg",
      "likes":35
    },
    {
      "name":"Apple Juice",
      "price":7,
      "category_name":"juices",
      "description":"200 ml of fresh Apple juice, free of sugar and flavorings, 100% natural",
      "image":"Apple-juice.jpg",
      "likes":105
    },
    {
      "name":"Pomegranate Juice",
      "price":12,
      "category_name":"juices",
      "description":"200 ml of fresh Pomegranate juice, free of sugar and flavorings, 100% natural",
      "image":"pomegranate-juice.jpg",
      "likes":20
    },
    {
      "name":"Strawberry  Juice",
      "price":5,
      "category_name":"juices",
      "description":"200 ml of fresh Strawberry juice, free of sugar and flavorings, 100% natural",
      "image":"Strawberry juice.webp",
      "likes":350
    },
    {
      "name":"Banana cocktail",
      "price":8,
      "category_name":"juices",
      "description":"200 ml of fresh Banana cocktail with Milk (free fat), free of sugar and flavorings, 100% natural",
      "image":"banana-juice.jpg",
      "likes":73
    }
    ,
    {
      "name":"chease Burger",
      "price":10,
      "category_name":"Sandwish",
      "description":"150 grams of lamb meat, cheddar cheese, lettuce, onions, tomatoes",
      "image":"cheeseburgers.webp",
      "likes":552,
      "offer":20
    },
    {
      "name":"ChickenBurger",
      "price":9,
      "category_name":"Sandwish",
      "description":"200 grams of chicken meat, cheddar cheese, lettuce, onions, tomatoes",
      "image":"Chicken-Burger.jpg",
      "likes":268
    },
    {
      "name":"Super Crispy",
      "price":15,
      "category_name":"Western food",
      "description":"200 grams of chicken meat, rice ",
      "image":"Super-Crispy-Fried-Chicken-Rice-Bowl.jpg",
      "likes":202,
      "offer":20
    }
    ,
    {
      "name":"Crispy Fried Chicken",
      "price":12,
      "category_name":"Western food",
      "description":"200 grams of chicken meat ",
      "image":"crispy-fried-chicken-.jpg",
      "likes":57,
      "offer":15
    }
    ,
    {
      "name":"Spaghetti Bolognese",
      "price":15,
      "category_name":"Spaghetti",
      "description":"Spaghetti bolognese with garlic and parmesan",
      "image":"Spaghetti-bolognese-with-garlic-and-parmesan.jpg",
      "likes":570
    },
    {
      "name":"Falafel Plate",
      "price":5,
      "category_name":"Middle east food",
      "description":"Five pieces of falafel, cucumber, tomato, tahini sauce",
      "image":"Falafel.jpg",
      "likes":710
    },
    {
      "name":"Homus Plate",
      "price":5,
      "category_name":"Middle east food",
      "description":"200 Gram Homus, cucumber, tomato, olive oil",
      "image":"homus.jpg",
      "likes":625
    },
    {
      "name":"Foul Plate",
      "price":5,
      "category_name":"Middle east food",
      "description":"200 Gram Foul, olive oil, Lemon",
      "image":"foul.jpg",
      "likes":212
    },
    {

      "name":"Caesar Salad",
      "price":5,
      "category_name":"Salad",
      "description":"chopped romaine lettuce and garlicky croutons, tossed in a creamy dressing made with eggs, olive oil, lemon, Parmesan, Worcestershire sauce, and anchovies",
      "image":"caesar-salad.jpg",
      "likes":185
    },
    {

      "name":"Spaghetti Squash Soup",
      "price":10,
      "category_name":"Soup",
      "description":" large spaghetti squash halved lengthwise, Onion & Garlic,Jalapeño, Curry Paste, Olive Oil ",
      "image":"spaghetti-squash-soup.jpg",
      "likes":12,
      "offer":10
    }
  ]

  meals=this.mealList;



  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  setCategoryName(name:string){
    window.scrollTo(0,225);
    if (name.toLowerCase() == "all"){
      this.meals=this.mealList;
    }
    else if(name.toLowerCase() == "offers") {
      const list:any=[];
      for (let i = 0 ; i<this.mealList.length;i++){
        if(this.mealList[i].offer != null){
          console.log(this.mealList[i]);
          list.push(this.mealList[i]);
        }
      }
      this.meals = list;
    }
    else {
      const list:any=[];
      for(let i=0;i<this.mealList.length;i++){
        if (this.mealList[i].category_name.toLowerCase() == name.toLowerCase()){
          list.push(this.mealList[i]);
        }
      }
      this.meals = list;
    }
    this.category_name=name;


  }



  config:SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    //spaceBetween: 20,
    loop: false,
    watchOverflow: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        20: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        250: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        650: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        850: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        1050: {
            slidesPerView: 6,
            spaceBetween: 15
        }
        ,
        1200: {
            slidesPerView: 7,
            spaceBetween: 15
        }

    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  }


}
