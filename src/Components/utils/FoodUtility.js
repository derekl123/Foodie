const apiKey = '4mlPHcNcjZKHwX5HQiLqAJ-xB-n4DAaRhaeV6na9EIlJOJDPsw5otWVSy9UZ_veP-f8FkVOmGYr_TMgwf03FIfrb4oJ3BVB5XL2TvJN1sSSIlwk5WmmUYjQCnoPBX3Yx';



const Yelp = {
    search(term, location){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
        return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if(!jsonResponse.businesses){
                return [];
            }
            return jsonResponse.businesses.map(business => ({
                id: business.id, 
                name: business.name,
                location: business.location.display_address,
                image: business.image_url,          
            }))
        })
    }
}
  
 export default Yelp;