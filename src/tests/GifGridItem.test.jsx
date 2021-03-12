import React from 'react';
import  {GifGridItem}  from '../components/GifGridItem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Testing GifItem Component', () => {

    test('Compononet is rendering properly', () => {
        
        const img = {
            id: '1',
            title: 'titulo aleatorio',
            url: 'https://silencetimer.com'
        };

        const wrapper = shallow(<GifGridItem  key={ img.id } { ...img } />);
        expect(wrapper).toMatchSnapshot();

    })
    
    
})
