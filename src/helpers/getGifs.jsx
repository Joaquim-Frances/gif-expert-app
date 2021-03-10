export const getGif = async( category ) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=INLRsTY1hLJx4oc4O7mjMKEzAaLEg1fb`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return (gifs);
   

}
