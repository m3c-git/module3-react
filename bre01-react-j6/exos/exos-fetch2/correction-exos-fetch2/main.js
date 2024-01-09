window.addEventListener("DOMContentLoaded", function(){
    const apiURL = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            for(let i = 0; i < 4; i++)
            {
                let title = document.querySelector(`#post-${i + 1} .post-title`);
                let body = document.querySelector(`#post-${i + 1} .post-body`);

                title.innerText = data[i].title;
                body.innerText = data[i].body;
            }
        });
});
