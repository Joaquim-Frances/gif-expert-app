import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks";

describe('Testing useFetchGifs hook', () => {

    test('should return the initial state', async() => {

        const category = 'Light';
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs() );

        const { data, loading } = result.current;

        await waitForNextUpdate() ;

        expect( data ).toEqual( [] );
        expect( loading ).toEqual( true );
        
    })
    
    test('should return an images array and loading set in false', async() => {

        const category = 'Light';
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs(category) );
        await waitForNextUpdate() ;

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toEqual( false );
        
    })
    
    
})
