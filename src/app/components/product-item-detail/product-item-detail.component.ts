import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ReceivedProduct } from '../../models/receivedProduct';
// import { CartService } from 'src/app/services/cart.service';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  @Input() product:Product

  receivedProduct:ReceivedProduct

  constructor(private productService:ProductService, private cartService:CartService) { 
    this.product={
      id: 1,
      name: '',
      price: 20,
      url: '',
      description: '',
    },
    this.receivedProduct ={
      id: 1,
      name: '',
      price: 20,
      url: '',
      description: '',
      quantity:1
    }
  }

  ngOnInit(): void {
    // const result = this.productService.newProduct;
    // console.log(result)
    // this.receivedProduct.description = result[0].description
    // this.receivedProduct.id = result[0].id
    // this.receivedProduct.name = result[0].name
    // this.receivedProduct.price = result[0].price
    // this.receivedProduct.url = result[0].url
    // this.receivedProduct = {...result[0]}

    // console.log(this.receivedProduct)
  }

  ngDoCheck(): void{
    const result = this.productService.newProduct;
    console.log(result)
    this.receivedProduct.description = result[0].description
    this.receivedProduct.id = result[0].id
    this.receivedProduct.name = result[0].name
    this.receivedProduct.price = result[0].price
    this.receivedProduct.url = result[0].url
  }
  
  onSubmit(): void {
    const product ={
      url:this.receivedProduct.url,
      name:this.receivedProduct.name,
      price:this.receivedProduct.price,
      quantity:this.receivedProduct.quantity
    }
    // this.addToCart.emit(product);
    this.addCart(product);
  }

  onClick():void{}

   // @ts-ignore
   addCart(product): void {
    this.cartService.addCartProducts(product);
    alert("Product added to cart")
  }

}
