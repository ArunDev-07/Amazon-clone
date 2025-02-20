import { cart } from "../../data/cart.js";
import { getdeliveryoptionId } from "../../data/deliveryoption.js";
import { getproduct } from "../../data/products.js";
import formcurrency from "../utils/money.js";
import { addorder } from "../../data/placeorders.js";

 
export function renderpaymentsummary(){
   let items = 0;
   let shipping  = 0;
   let totalbeforetax = 0;
   let Estimatedtax = 0 ;
   let ordertotal = 0 ;
   let paymenthtml = "";
   let itemscount = 0;


   cart.forEach((cartitem)=>{
const product =  getproduct(cartitem.productId);
itemscount +=  cartitem.Quantity;
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
                  <div class="items-count">Items (${itemscount}):</div>
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

               <button class="place-order-button button-primary
               js-place-order">
                  Place your order
               </button>
            </div>
         
         
         
         
         
         `;

         paymenthtml += paymentsummaryHTML;
         document.querySelector(".js-payment").innerHTML = paymenthtml ;

        document.querySelector('.js-place-order')
        .addEventListener('click', async()=>{

         try{
       const response = await fetch('https://supersimplebackend.dev/orders',
         {
            method : 'POST',
            headers :{
               'Content-type' : 'application/json'

            },
            body :  JSON.stringify({
               cart : cart
            })

         });
         const order =  await response.json();
         addorder(order);

      } catch (error){
         console.log('unexpected error.please try again later');
      };

      window.location.href = 'orders.html';

        })
      


  
};




   