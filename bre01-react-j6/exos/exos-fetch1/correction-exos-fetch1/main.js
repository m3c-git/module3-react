window.addEventListener("DOMContentLoaded", function(){
    const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            let title = document.getElementById("post-title");
            let body = document.getElementById("post-body");

            title.innerText = data.title;
            body.innerText = data.body;
        })
});