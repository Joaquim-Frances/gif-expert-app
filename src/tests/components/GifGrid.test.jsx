import { shallow } from 'enzyme'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


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
        }]
        useFetchGifs.mockReturnValue({
            data: gif,
            loading: false,
        });
        const wrapper = shallow( <GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
