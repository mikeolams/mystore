import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // @ts-ignore
  cartProduct: Cart<[]> =[];
  

  constructor() { }

  getCartProducts() {
    return this.cartProduct
  }

  addCartProducts(product:Cart) {
   let cartHolder: Cart[] =[];

    if (this.cartProduct[0] === undefined){
      console.log("array is empty")
      // console.log(this.cartProduct[0])
      this.cartProduct.push(product)
    }else{
      console.log("array is not empty")
      //  cartHolder = this.cartProduct
      // @ts-ignore
      // @ts-ignore
    this.cartProduct.forEach((existingProduct) =>{
      // @ts-ignore
      cartHolder = this.cartProduct.filter(p=>p.id ===product.id);
      console.log(cartHolder)
      // console.log(existingProduct)
      if (existingProduct.name === product.name){
        console.log("product exist")
        existingProduct.quantity += product.quantity
        // cartHolder.push(product)
        // cartHolder.push(existingProduct)
        // if(existingProduct.id != product.id)
      }

      if ( cartHolder.length ===0) {
        console.log("product do not exist")
        console.log(existingProduct.name === product.name)
        this.cartProduct.push(product)
        // console.log(this.cartProduct)
      }

      // this.cartProduct = this.cartProduct
    })
    // if (!this.cartProduct.include(product) ){
    //   console.log("product do not exist")
    //   this.cartProduct.push(product)
    // }

    // this.cartProduct = [];
    // this.cartProduct = cartHolder
    }  
   
    return this.cartProduct
  }

  clearCartProducts() {
    this.cartProduct =[];
    return this.cartProduct
  }

  removeOneCart(cname:string){
     const newCart: Cart[]  =[];
      // @ts-ignore
      this.cartProduct.forEach(cart=>{
        // console.log(cart)
        if (cart.name !== cname){
          newCart.push(cart)
        }
      })
      this.cartProduct = newCart

      return this.cartProduct
  }

}
