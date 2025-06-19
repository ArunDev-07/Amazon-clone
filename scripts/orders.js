import { renderOrdersummary } from "./orders/ordersummary.js";
import { renderpaymentsummary } from "./orders/paymentsummary.js";
import {  cart ,  loadCart} from "../data/cart.js";
import { loadfetch } from "../data/products.js";

async function loadpage(){


try{
 
  await loadfetch();

const value =  await new Promise ((resolve,reject)=>{

  loadCart(()=>{
    resolve('value 3');
  })
})

  
}  catch(error){
console.log('unexpected error.please try again');
  }
    renderOrdersummary();
    renderpaymentsummary();
 

  }


loadpage();


 /* we add only loadfetch because loadfetch is already a promise so dont want change into promise just use it as a function */
 /* then function is used to after load the first funtion. then it will load */

/*
Promise.all([

  loadfetch(),                            
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('Hi i am a full stack developer');
    
    })

  })
  
]).then(()=>{                             
  renderOrdersummary();
  renderpaymentsummary();
})

*/




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
        document.querySelector('.js-link-checkout').innerHTML = checkoutitems + " " +  'items' ;
        
      })
    

      
       