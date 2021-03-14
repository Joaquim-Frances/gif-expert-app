import React from 'react';
import  {GifGridItem}  from '../components/GifGridItem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Testing GifItem Component', () => {

    const img = {
        id: 1,
        title: 'titulo aleatorio',
        url: 'https://silencetimer.com'
    };
    
    const wrapper = shallow(<GifGridItem  key={ img.id } { ...img } />);

    test('Compononet is rendering properly', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('should use title prop in the correct place', () => {
        
        const p = wrapper.find('p');
        expect(p.text()).toBe(img.title);
        
    })

    test('should have the url image equal to the props url', () => {

        const imagen = wrapper.find('img');
        expect(imagen.prop("src")).toBe(img.url);
        expect(imagen.prop("alt")).toBe(img.title);
        
    })

    test('should have animate_fadeIn as className', () => {
        
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
        
        
        
        
    })
    
    
    
    
    
})
