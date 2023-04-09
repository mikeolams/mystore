import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-data',
  templateUrl:  './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  data : Object[]
  title = 'JSON DAT FROM ANGULAR';
  products: any = [];

  constructor(private productService:ProductService) { 

    this.data = [
      {
        "id": 1,
        "name": "Book",
        "price": 9.99,
        "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
        "description": "You can read it!"
      },
      {
        "id": 2,
        "name": "Headphones",
        "price": 249.99,
        "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
        "description": "Listen to stuff!"
      },
      {
        "id": 3,
        "name": "Backpack",
        "price": 79.99,
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
        "description": "Carry things around town!"
      },
      {
        "id": 4,
        "name": "Glasses",
        "price": 129.99,
        "url": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
        "description": "Now you can see!"
      },
      {
        "id": 5,
        "name": "Cup",
        "price": 4.99,
        "url": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
        "description": "Drink anything with it!"
      },
      {
        "id": 6,
        "name": "Shirt",
        "price": 29.99,
        "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
        "description": "Wear it with style!"
      }
    ]
  
  
  }

  // ngOnInit(): void { }

  // constructor(private httpClient: HttpClient){}
  ngOnInit(){
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // })
    //  this.productService.getComments().subscribe(data => {
    //      console.log(data);
    //   this.products = data;
    // });
  }
  
}
