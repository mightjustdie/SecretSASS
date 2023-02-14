const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4149f3023dmshe099576ee1eea06p1b8d93jsn5e1e09145b0b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?exact=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));