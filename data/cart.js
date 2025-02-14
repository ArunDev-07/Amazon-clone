export let cart;

loadfromstorage();

export function loadfromstorage(){
  
  cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart  =  [{
  productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  Quantity: 2,
  deliveryoptionId: '1'
},{
  productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  Quantity : 1,
  deliveryoptionId: '2'
},

  ]};
}



function savestorage() {
   localStorage.setItem('cart' , JSON.stringify(cart));
};

 export function addtocart(productId){
      let matchingitem;
  
    cart.forEach((cartitem)=>{
    if( productId === cartitem.productId){
     matchingitem = cartitem;
    };

  
    });
  
    if(matchingitem){
   matchingitem.Quantity +=1;
     }
     else{
       cart.push({
         productId : productId,
         Quantity : 1,
         deliveryoptionId : '1'
       });
  
     }

     savestorage();

     
     
    };
    export  function removecart(productId){
      const newcart = [];
 
 
      cart.forEach((cartitem)=>{
       if (cartitem.productId !== productId){
         newcart.push(cartitem);
       }
 
 
      });
 
 
      cart = newcart;
 
      savestorage();
 
      
 
      
     };
    export function updatedeliveryoption (productId, deliveryOptionId) {
      let matchingitem;
    
      cart.forEach((cartitem)=>{
      if( productId === cartitem.productId){
       matchingitem = cartitem;
      }
      
    
      });
      matchingitem.deliveryoptionId = deliveryOptionId ;
  
      
      savestorage();
  
  
  
    };
    