import {cart,removecart,updatedeliveryoption} from '../data/cart.js';
import { products } from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import  formcurrency  from './utils/money.js';
import { deliveryoptions } from '../data/deliveryoption.js';



function renderordersummary (){






        let cartsummaryhtml = "";
        cart.forEach((cartitem=>{

          const productId = cartitem.productId ;


          let matchingproduct;
        products.forEach((product)=>{
          if(product.id === productId){
        matchingproduct = product ;
          }  
        });
        const deliveryoptionId = cartitem.deliveryoptionId ;


        let deliveryoption ; 
        
        deliveryoptions.forEach((option)=>{

          if(option.id === deliveryoptionId){
          deliveryoption = option ;
          };
        });


          const today = dayjs();
              const deliverydate  = today.add(
                deliveryoption.deliverydays,
                'days'
              );
              const datestring  = deliverydate.format(
                'dddd, MMMM D'
              );
          



              


        let cartsummary = 


        ` <div class="cart-item-container
        js-container-${matchingproduct.id}">
          <div class="delivery-date">
            Delivery date: ${datestring}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingproduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingproduct.name}
              </div>
              <div class="product-price">
                $${formcurrency(matchingproduct.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartitem.Quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary
                js-link"   data-product-id="${matchingproduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              ${deliveryitems(matchingproduct , cartitem)}
              
              
            </div>
          </div>
        </div>
        `;

        cartsummaryhtml += cartsummary ;
        }));


        function deliveryitems(matchingproduct ,cartitem){

          let html = "";

          deliveryoptions.forEach((deliveryoption )=>{

            
            const today = dayjs();
            const deliverydate  = today.add(
              deliveryoption.deliverydays,
              'days'
            );
            const datestring  = deliverydate.format(
              'dddd, MMMM D'
            );
            const pricestring = deliveryoption.priceCents === 0
            ? 'FREE'
            : `$${formcurrency(deliveryoption.priceCents)} -`;

            const ischecked = cartitem.deliveryoptionId === deliveryoption.id ; 
        const findchecked  = ischecked ? 'checked'  : '';




        html +=
              `
              <div class="delivery-option js-option"  
              data-product-id="${matchingproduct.id}"
              data-delivery-option-id="${deliveryoption.id}">
                  <input type="radio"
                ${findchecked}
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id} ">
                  <div>
                    <div class="delivery-option-date">
                    ${datestring}
                    </div>
                    <div class="delivery-option-price">
                      ${pricestring} Shipping
                    </div>
                  </div>
                </div>
              
              
              
              `

          });
          return html ;

        }









        document.querySelector(".js-summary").innerHTML = cartsummaryhtml ;

        document.querySelectorAll(".js-link")
        .forEach((link)=>{
          link.addEventListener("click",()=>{
        const productId = link.dataset.productId ; 

        removecart(productId);
        const container = document.querySelector(`.js-container-${productId}`);
        
        container.remove();
        



          })

        });
        document.querySelectorAll(".js-option")
        .forEach((element)=>{
          element.addEventListener("click", ()=>{


        const productId = element.dataset.productId ;
        const deliveryOptionId = element.dataset.deliveryOptionId ;
        updatedeliveryoption(productId ,deliveryOptionId);
        renderordersummary();

          
          });

        });
        }

        renderordersummary();









