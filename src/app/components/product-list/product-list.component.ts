import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
// import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  title:string = 'Product List'
  quantity:number = 1
  products:Product[] = []
  comments:Product[] =[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    // console.log(this.products)
    
    this.productService.getProducts().subscribe(data => {
      // for (let i=0; i< 1; i++ ){
      //   console.log(data)
      //   this.products.push(data)
      // }
      // this.products.push(data) ;
      this.products= data ;
      // console.log(this.comments)
      console.log(this.products)
    });
  }

  // getCart(): void {
  //   this.cartService.getCartProducts();
  // }

  // // @ts-ignore
  // addCart(product): void {
  //   this.cartService.addCartProducts(product);
  //   alert("Product added to cart")
  // }

  // deleteCart(): void {
  //   this.cartService.clearCartProducts();
  //   alert("cart cleared")
  // }

}
