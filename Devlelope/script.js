

//OTT 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4149f3023dmshe099576ee1eea06p1b8d93jsn5e1e09145b0b',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));