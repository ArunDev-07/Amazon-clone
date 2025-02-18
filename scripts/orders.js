import { renderOrdersummary } from "./orders/ordersummary.js";
import { renderpaymentsummary } from "./orders/paymentsummary.js";
import { cart } from "../data/cart.js";
import { loadproducts } from "../data/products.js";









loadproducts(()=>{
  renderOrdersummary();
  renderpaymentsummary();
});



let checkoutitems = 0 ;
       cart.forEach((cartitem)=>{
        checkoutitems += cartitem.Quantity;
        document.querySelector('.js-link-checkout').innerHTML = checkoutitems ;
      })
       