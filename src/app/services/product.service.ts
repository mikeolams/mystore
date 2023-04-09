import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product'; 
import { ReceivedProduct } from '../models/receivedProduct';
// import dada from ''

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:Product[] =[]
  newProduct:Product[] =[]
 res:Product[] =[]

  // getProduct:Function;

  constructor(private http: HttpClient) {}

  getDataJson(): Observable<Product[]> {
    const url:string = 'assets/data.json';
    // const response:any = this.http.get(url)
    // return response;
    return this.http.get<Product[]>(url);
  }

  // getProductDetails(product:Product) {
  //   this.newProduct.pop()
  //   this.newProduct = this.getProducts().filter(p => p.id ===product.id);
  //   // console.log(result)
  //   // this.newProduct.id =result.id
  //   // console.log(product.id)
  //   // this.newProduct.push(result)
  //   console.log(this.newProduct)
  //   return this.newProduct
  // }

  getProductDetails(product:Product) {
    this.newProduct.pop();
    this.getProducts().subscribe(data =>{
      this.res = data
      // console.log(this.res)
      this.newProduct = this.res.filter(p => p.id ===product.id)
      // this.newProduct =this.res
      // this.newProduct.push(this.res[0]) 
      console.log(this.newProduct)
    })
  }

   getProducts() {
    const res = this.getDataJson()
    return res
    // return [
    //   {
    //     "id": 1,
    //     "name": "Book",
    //     "price": 9.99,
    //     "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     "description": "You can read it!"
    //   },
    //   {
    //     "id": 2,
    //     "name": "Headphones",
    //     "price": 249.99,
    //     "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     "description": "Listen to stuff!"
    //   },
    //   {
    //     "id": 3,
    //     "name": "Backpack",
    //     "price": 79.99,
    //     "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     "description": "Carry things around town!"
    //   },
    //   {
    //     "id": 4,
    //     "name": "Glasses",
    //     "price": 129.99,
    //     "url": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     "description": "Now you can see!"
    //   },
    //   {
    //     "id": 5,
    //     "name": "Cup",
    //     "price": 4.99,
    //     "url": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     "description": "Drink anything with it!"
    //   },
    //   {
    //     "id": 6,
    //     "name": "Shirt",
    //     "price": 29.99,
    //     "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    //     "description": "Wear it with style!"
    //   }
    // ]
  }
}
