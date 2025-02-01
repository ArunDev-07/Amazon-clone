import { cart } from "../../data/cart.js";
import { getdeliveryoptionId } from "../../data/deliveryoption.js";
import { getproduct } from "../../data/products.js";
import formcurrency from "../utils/money.js";

 
export function renderpaymentsummary(){
   let items = 0;
   let shipping  = 0;
   let totalbeforetax = 0;
   let Estimatedtax = 0 ;
   let ordertotal = 0 ;
   let paymenthtml = "";


   cart.forEach((cartitem)=>{
const product =  getproduct(cartitem.productId);
    items +=  product.priceCents * cartitem.Quantity ;

    const handling = getdeliveryoptionId(cartitem.deliveryoptionId);
    shipping += handling.priceCents ;

    

   });
   const tax = items + shipping ; 
   totalbeforetax += tax ;
   const estimatedtax = totalbeforetax * 0.1 ;
   Estimatedtax += estimatedtax ; 
   const ordertax = totalbeforetax + Estimatedtax ;
   ordertotal += ordertax ;

   

   const paymentsummaryHTML = 
         `
         <div class="payment-summary">
               <div class="payment-summary-title">
                  Order Summary
               </div>

               <div class="payment-summary-row">
                  <div>Items (3):</div>
                  <div class="payment-summary-money">$${formcurrency(items)}</div>
               </div>

               <div class="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div class="payment-summary-money">$${formcurrency(shipping)}</div>
               </div>

               <div class="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div class="payment-summary-money">$${formcurrency(totalbeforetax)}</div>
               </div>

               <div class="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div class="payment-summary-money">$${formcurrency(Estimatedtax)}</div>
               </div>

               <div class="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div class="payment-summary-money">$${formcurrency(ordertotal)}</div>
               </div>

               <button class="place-order-button button-primary">
                  Place your order
               </button>
            </div>
         
         
         
         
         
         `;

         paymenthtml += paymentsummaryHTML;
         document.querySelector(".js-payment").innerHTML = paymenthtml ;
         
  
};




   