


function cat(){
    var link = 'https://api.thecatapi.com/v1/images/search';
        
        fetch(link)
        .then((response) => {
            return response.json();
    
        })
        .then((data) => {
            console.log(data);
            var url=data[0].url;
            var img="<img src ='"+url+"'/>";
            document.getElementById("cat-image").innerHTML = img;
        
        });  
    }   
    