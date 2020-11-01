import React from 'react';
import {  shallow } from 'enzyme';
import CardValues from '../Card/CardValues'
require('@testing-library/react');

let wrapped;

beforeEach(() => {
    wrapped = shallow(<CardValues />);
})

it('has a button', () => {
    expect(wrapped.find("button").length).toEqual(1);
});
describe('the button click', () => {

    it('button is clicked', () => {
        wrapped.find('button').simulate('click');
        // wrapped.update();
    })

});


