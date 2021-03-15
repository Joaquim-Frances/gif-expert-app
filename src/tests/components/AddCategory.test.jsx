import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Testing all "AddCategory" functions', () => {

    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    test('should mantain the structure', () => {
        expect(wrapper).toMatchSnapshot();
    })
        
    test('should change after a user enters data in the input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Quim';
        input.simulate('change', {target:{ value }});

        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('should not enter data if input value is not correct o empty', () => {

        wrapper.find('form').simulate('submit', {})
        
    })
    
    
        

    
    
})
