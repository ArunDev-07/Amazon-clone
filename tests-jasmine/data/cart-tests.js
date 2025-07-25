import {addtocart,cart, loadfromstorage,removecart} from '../../data/cart.js';


describe('test suite : addtocart', ()=>{
    it('add the existing product to the cart', ()=>{
        spyOn(localStorage, 'setItem');
        

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                Quantity : 2,
                deliveryoptionId : '1'

            }]);
        })
        
        loadfromstorage();


        addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].Quantity).toEqual(3);


    })
    it('add the new product to the cart', ()=>{
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        })
        
        loadfromstorage();
      
        addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].Quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);


       
    });
    

});
describe('test suite: removeFromCart', () => {
    beforeEach(() => {
      spyOn(localStorage, 'setItem');
    });
  
    it('removes a product from the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });
      loadfromstorage();
  
      removecart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(0);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
    });
  
    it('does nothing if product is not in the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });
     loadfromstorage();
  
      removecart('does-not-exist');
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]));
    });
  });



