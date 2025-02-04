import {formcurrency} from "../scripts/utils/money.js" ;

console.log('test suite : formcurrency')

console.log('Converts cents into dollors')

if(formcurrency(2095)==='20.95'){

    console.log("passed") ;
}
else{
    console.log("failed") ;
};
console.log('works with 0')

if(formcurrency(0) === '0.00'){
    console.log('passed')
}
else{
    console.log('failed')
};
console.log('rounds up to nearest cents')
if(formcurrency(2000.5) === '20.01'){
    console.log('passed');
}
else{
    console.log('failed');
}
