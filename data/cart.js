export const cart = [];


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
         Quantity : 1
       });
  
     };
    }