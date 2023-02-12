const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '827ba035aamsh69d98788e1edfefp1f3ad7jsn62b5287e41fc',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));