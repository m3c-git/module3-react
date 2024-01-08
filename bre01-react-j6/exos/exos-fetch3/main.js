const apiURL = "https://jsonplaceholder.typicode.com/posts/";
main()

async function main()
{
    const wrapper = document.querySelectorAll("article");
    const loader = document.createElement("p");
    const title = document.querySelector("#post-title");
    const postbody = document.querySelector("#post-body");


    const body = JSON.stringify({
        title : "Ceci est le titre de mon nouveau post",
        body : "Ceci est le contenu de mon nouveau post",
        userId: 2
    });

    const options = {
        method: 'POST',
        body: body,
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    };


    loader.classList.add("loader")
    loader.innerText = "Loading...";
/*     wrapper.append(loader);
 */    try {

        const r = await  fetch(apiURL, options)            

                if (r.ok) {
                    const post = await r.json();
                    loader.remove();
                    title.innerText = post.title;
                    postbody.innerText = post.body;

                    

                } else {
                    throw new Error('Erreur serveur', {cause: r});
                }
            } catch (e) {
                loader.innerText = 'Impossible de charger les articles...';
                loader.style.color = 'red';
                return;
            }
        } 


/*         window.addEventListener("DOMContentLoaded", function(){
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
        }); */