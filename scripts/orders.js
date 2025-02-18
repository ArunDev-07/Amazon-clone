import { renderOrdersummary } from "./orders/ordersummary.js";
import { renderpaymentsummary } from "./orders/paymentsummary.js";
import {  cart ,  loadCart} from "../data/cart.js";
import { loadfetch } from "../data/products.js";



Promise.all([
  loadfetch()
  ,
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('Full stack developer');
    });
  })
])
.then((value)=>{
  console.log(value);
  renderOrdersummary()
  renderpaymentsummary();
})


/*

loadproducts(()=>{

  loadCart(()=>{
  renderOrdersummary();
renderpaymentsummary();
})
})
*/


let checkoutitems = 0 ;
       cart.forEach((cartitem)=>{
        checkoutitems += cartitem.Quantity;
        document.querySelector('.js-link-checkout').innerHTML = checkoutitems ;
      })

      
       