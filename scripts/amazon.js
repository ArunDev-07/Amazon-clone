import {cart,addtocart} from "../data/cart.js";
import { products ,loadproducts } from "../data/products.js";
import  formcurrency  from "./utils/money.js";






loadproducts(renderproducts);

 function renderproducts(){


let producthtml="";
products.forEach((product)=>{
  const html=`
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="${product.getstars()}">
      <div class="product-rating-count link-primary">
        ${product.getrating()}
      </div>
    </div>

    <div class="product-price">
      ${product.getprice()}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    ${product.extraInfohtml()}
    
    

    <div class="product-spacer"></div>

    <div class="added-to-cart"
    data-product-id= "${product.id}">
      <img class='add-image'  src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary
    js-add-to-cart" 
    data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`
  producthtml +=html;
});

document.querySelector(".js-grid").innerHTML = producthtml;



  




document.querySelectorAll(".js-add-to-cart")
.forEach((button)=>{
  button.addEventListener("click",()=>{
   const  productId = button.dataset.productId;

   
   
     addtocart(productId);
     let cartquantity = 0 ;

  cart.forEach((cartitem)=>{
     cartquantity += cartitem.Quantity ;

  })
  document.querySelector(".cart-quantity").innerHTML = cartquantity

   
  });
  
});

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // Find the correct '.product' container
   
    
    // Find the '.added-to-cart' inside that container
   
    const productContainer = button.closest(".product-container");
    
    // Find the '.added-to-cart' inside that container
    const addedCart = productContainer.querySelector('.added-to-cart');
    
    // Add opacity effect to the addedCart element
    addedCart.style.opacity = '1';
    setTimeout(() => {
      addedCart.style.opacity = '0';
    }, 1000);
  

   
  })
});





}
