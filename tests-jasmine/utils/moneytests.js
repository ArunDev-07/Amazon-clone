import {formcurrency} from "../../scripts/utils/money.js" ;

describe('test suite : formcurrency', ()=>{
    it('converts cents into dollors', ()=>{
        expect(formcurrency(2095)).toEqual('20.95');
    });

    it('works with 0', ()=>{
        expect(formcurrency(0)).toEqual('0.00');
    });

    it('rounds up to nearest cents', ()=>{
        expect(formcurrency(2000.5)).toEqual('20.01');
    });
    it('rounds down to the nearest cent', () => {
        expect(formcurrency(2000.4)).toEqual('20.00');
      });
    
});
