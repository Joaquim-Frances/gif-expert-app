import { shallow } from 'enzyme'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';


describe('Testing GifGrid component functions', () => {

    const category = 'Son Goku';

    test('should do a Match with the snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should show items when images are loaded with our useFetch', () => {

        const gif = [{
            id: 2,
            title: 'Shakyamuni',
            url: 'https://silencetimer.com'
        },{
            id: 3,
            title: 'Amitaba',
            url: 'https://silencetimer.com'
        }]
        useFetchGifs.mockReturnValue({
            data: gif,
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length).toBe(gif.length);
    })
    
})
