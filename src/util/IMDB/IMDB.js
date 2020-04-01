const apikey = "4a3b711b";
const url = `http://www.omdbapi.com/?apikey=${apikey}&`;

const IMDB = {
    search(term) {
        return fetch(url + "s=" + term
        ).then(response => { return response.json() }
        ).then(jsonresponse => {
            if (jsonresponse.Search) {
                return jsonresponse.Search.map(movie => (
                    {
                        title: movie.Title,
                        year: Number(movie.Year),
                        posterUrl: movie.Poster === "N/A" ?  "noImage" : movie.Poster,
                        type: movie.Type
                    }))
            
            } else {return [];}
    })
}
};

export default IMDB;