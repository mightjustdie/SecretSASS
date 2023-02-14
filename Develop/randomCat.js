var url = ""


function cat(){
    var link = 'https://api.thecatapi.com/v1/images/search';
        
        fetch(link)
        .then((response) => {
            return response.json();
    
        })
        .then((data) => {
            console.log(data);
            url=data[0].url;
            var img = "<img src='" + url + "' style='width: 100px; height: 100px;'/>";
            document.getElementById("catImage").innerHTML = img;
            localStorage.setItem("catImage", url);
        });  
    }   
    
