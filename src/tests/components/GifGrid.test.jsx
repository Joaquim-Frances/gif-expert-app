import { shallow } from 'enzyme'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'


describe('Testing GifGrid component functions', () => {

    const category = 'Son Goku';

    test('should do a Match with the snapshot', () => {

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should show items when images are loaded', () => {

        
        
    })
    
    
    
})
