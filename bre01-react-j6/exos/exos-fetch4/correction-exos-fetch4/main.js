window.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("form");
    let title = document.getElementById("title");
    let content = document.getElementById("content");
 
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const apiURL = "https://jsonplaceholder.typicode.com/posts";
 
        const post = JSON.stringify({
            title : title.value,
            body : content.value,
            userId: 1
        });
 
        const options = {
            method: 'POST',
            body: post,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
 
        fetch(apiURL, options) // j'appelle l'URL avec mes options
            .then((response) => response.json()) // Elle me renvoie la réponse et j'extrait son JSON
            .then((data) => {
                let title = document.getElementById("post-title");
                let body = document.getElementById("post-body");
 
                title.innerText = data.title;
                body.innerText = data.body;
            });
    });
 });