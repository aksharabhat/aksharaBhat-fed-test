import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import Cardvalues from '../Card/CardValues'
let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})
it("renders without error",()=>{

});
it('Check for card value component', () => {
    expect(wrapped.find(Cardvalues).length).toBe(1);
})