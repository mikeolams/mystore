import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  carts : Cart[] =[]
  ccard:number
  fname:string
  address:string

  constructor(private cartService:CartService) { 
    this.ccard =12098378566
    this.fname =''
    this.address =''
  }

  ngOnInit(): void {
    this.carts = this.cartService.getCartProducts();
    // this.carts = {...this.carts}
    // this.carts.forEach(e=>{
    //   console.log(e)
    // })
    console.log(this.carts)
  }

  ngDoCheck(): void{
    this.carts = this.cartService.getCartProducts();
  }
  

    getCart(): void {
    this.cartService.getCartProducts();
  }

  // @ts-ignore
  addCart(product): void {
    this.cartService.addCartProducts(product);
    alert("Product added to cart")
  }

  deleteOneCart(name:any): void {
    this.cartService.removeOneCart(name);
    alert(`${name} product cleared`)
  

    // console.log(this.carts)
    // const newCart =[]
    // // const cartToRemove = this.carts.filter(cart=>cart.name ===name);
    // this.carts.forEach(cart=>{
    //   console.log(cart)
    //   if (cart.name !== name){
    //     newCart.push(cart)
    //   }
    // })
    // this.carts = newCart
    
    // this.carts.pop()
  }

  deleteCart(): void {
    this.cartService.clearCartProducts
    // alert("cart cleared")
  }
 
  
  onClick(): void {
     console.log('you click me OnClick')
    //  this.productService.getProductDetails(this.product);
  }

  onSubmit(name:string): void {
    console.log('you click me OnSubmit')
    this.deleteCart()
    alert(`${name}, your cart is now submitted`)
    alert("")
    // const product ={
    //   url:this.product.url,
    //   name:this.product.name,
    //   price:this.product.price,
    //   quantity:this.quantity
    // }
    // // this.addToCart.emit(product);
    // this.addCart(product);
  }

}
