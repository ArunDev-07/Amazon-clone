import { renderOrdersummary } from "./orders/ordersummary.js";
import { renderpaymentsummary } from "./orders/paymentsummary.js";
import { cart } from "../data/cart.js";
import  '../data/cart-class.js';
renderOrdersummary();
renderpaymentsummary();

let checkoutitems = 0 ;
       cart.forEach((cartitem)=>{
        checkoutitems += cartitem.Quantity;
        document.querySelector('.js-link-checkout').innerHTML = checkoutitems ;
      })
      
       