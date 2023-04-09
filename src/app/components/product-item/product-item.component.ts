import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
   @Input() product:Product; 
  //  @Output() addToCart : Cart;
   @Output() quantity:number;

  //  s : EventEmitter<any> = new EventEmitter() 
  // addToCart: EventEmitter<any> = new EventEmitter()

  constructor(private cartService:CartService, private productService:ProductService) { 
    this.product={
      id: 1,
      name: '',
      price: 20,
      url: '',
      description: '',
    }
    this.quantity=1

  }

  ngOnInit(): void {
    console.log(this.product)
  }

  onClick(): void {
    //  console.log(this.product.id)
     this.productService.getProductDetails(this.product);
  }

  onSubmit(): void {
    const product ={
      id:this.product.id,
      url:this.product.url,
      name:this.product.name,
      price:this.product.price,
      quantity:this.quantity
    }
    // this.addToCart.emit(product);
    this.addCart(product);
  }

  // @ts-ignore
  addCart(product): void {
    this.cartService.addCartProducts(product);
    alert("Product added to cart")
  }

}