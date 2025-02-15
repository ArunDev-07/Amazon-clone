class Cart {
    cartItems  ;
    #localStoragekey ;

constructor(localStoragekey) {
  this.#localStoragekey = localStoragekey ; 
  this.#loadfromstorage();


};
    

    #loadfromstorage(){
      
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStoragekey));
     if(!this.cartItems){
       this.cartItems  =  [{
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
     savestorage() {
        localStorage.setItem(this.#localStoragekey, JSON.stringify(this.cartItems));
     }

     addtocart(productId){
        let matchingitem;
      
      this.cartItems.forEach((cartitem)=>{
      if( productId === cartitem.productId){
       matchingitem = cartitem;
      };
      
      
      });
      
      if(matchingitem){
      matchingitem.Quantity +=1;
       }
       else{
         this.cartItems.push({
           productId : productId,
           Quantity : 1,
           deliveryoptionId : '1'
         });
      
       }
      
      
       this.savestorage();
      }
      removecart(productId){
        const newcart = [];
      
      
        this.cartItems.forEach((cartitem)=>{
         if (cartitem.productId !== productId){
           newcart.push(cartitem);
         }
      
      
        });
      
      
        this.cartItems = newcart;
      
        this.savestorage();
      
        
      
        
       }
       updatedeliveryoption (productId, deliveryOptionId) {
        let matchingitem;
      
        this.cartItems.forEach((cartitem)=>{
        if( productId === cartitem.productId){
         matchingitem = cartitem;
        }
        
      
        });
        matchingitem.deliveryoptionId = deliveryOptionId ;
      
        
        this.savestorage();
      
      
      
      }

};
    
    
    
    
    const cart = new Cart('cart-oop');
    const business = new Cart('cart-business');

    

    
    console.log(cart);
    console.log(business); 

  

   console.log( business instanceof Cart);
   console.log(cart instanceof Cart);








    
    
    
    
    
    
     
        
       
        