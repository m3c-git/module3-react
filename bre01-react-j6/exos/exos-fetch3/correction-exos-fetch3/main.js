window.addEventListener("DOMContentLoaded", function(){
    const apiURL = "https://jsonplaceholder.typicode.com/posts";
    const post = JSON.stringify({
         title : "Ceci est le titre de mon nouveau post",
         body : "Ceci est le contenu de mon nouveau post",
         userId: 2
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