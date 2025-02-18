import { renderOrdersummary } from "../../scripts/orders/ordersummary.js";
import { loadfromstorage , cart} from "../../data/cart.js";
import { loadproducts } from "../../data/products.js";


describe('test suite : renderordersummary',()=>{
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

beforeAll((done)=>{
  loadproducts(()=>{
    done();
  });
});

  
  beforeEach(()=>{
    
    
    spyOn(localStorage,'setItem')
    document.getElementById('carttest').innerHTML = 
    `
    <div class='js-summary'></div>
    <div class='js-payment'></div>
    `;
    
    spyOn(localStorage, 'getItem').and.callFake(()=>{
        return JSON.stringify( [{
            productId : productId1,
            Quantity: 2,
            deliveryoptionId: '1'
          },{
            productId : productId2,
            Quantity : 1,
            deliveryoptionId: '2'
          },
            ]);
    })
    
    loadfromstorage();
    renderOrdersummary();
    

  })

    it('displays the cart', ()=>{
       
       expect(document.querySelectorAll('.js-test-item-container').length).toEqual(2);
       expect(document.querySelector(`.js-test-quantity-${productId1}`).innerText).toContain('Quantity: 2');
       expect(document.querySelector(`.js-test-quantity-${productId2}`).innerText).toContain('Quantity: 1');

       document.getElementById('carttest').innerHTML = "";
        
    });
    it('removes a product ', ()=>{
      
        document.querySelector(`.js-delete-link-${productId1}`).click();
        expect(document.querySelectorAll('.js-test-item-container').length).toEqual(1);
       expect(document.querySelector(`.js-container-${productId1}`)).toEqual(null);
       expect(document.querySelector(`.js-container-${productId2}`)).not.toEqual(null);
       expect(cart.length).toEqual(1);
       expect(cart[0].productId).toEqual(productId2);
       

       document.getElementById('carttest').innerHTML = "";
       
       
        
    });
    
    
});
