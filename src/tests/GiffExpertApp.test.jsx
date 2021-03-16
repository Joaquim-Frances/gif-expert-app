const { shallow } = require("enzyme");
import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';



describe('Testing GiffExpertApp main app', () => {

    test('should match the snapshot correctly', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should show a list of categories', () => {

        const categories = ['Son Goku', 'Dr. Slump'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper).toMatchSnapshot;
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
    
})
