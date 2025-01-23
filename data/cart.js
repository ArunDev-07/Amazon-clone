export const cart = [{
  productId : "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  Quantity : 2
},
{
  productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  Quantity : 1

}
];


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