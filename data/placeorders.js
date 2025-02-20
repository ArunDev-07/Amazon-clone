export const orders  =  JSON.parse(localStorage.getItem('orders')) ||  [];
  

export function addorder(order){
    orders.unshift(order);
    savelocalstorage();
};


function savelocalstorage(){

    localStorage.setItem('orders' , JSON.stringify(orders));
};