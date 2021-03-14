import { getGif } from "../../helpers/getGifs"

describe('Testing usages of getGifs helper', () => {
    
    test('should return 10 items', async() => {
        
        const category = 'batman';
        const gifs = await getGif( category );
        expect(gifs.length).toBe(10);

    })

    test('should return 10 items', async() => {
        
       
        const gifs = await getGif('');
        expect( gifs.length ).toBe( 0 );

    })
    
    
})
