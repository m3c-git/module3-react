const apiURL = "https://jsonplaceholder.typicode.com/posts/";
main()

async function main()
{
    const wrapper = document.querySelectorAll("article");
    const loader = document.createElement("p");
    const post1 = document.querySelector("#post-1");
    const post2 = document.querySelector("#post-2");
    const post3 = document.querySelector("#post-3");
    const post4 = document.querySelector("#post-4");


    loader.classList.add("loader")
    loader.innerText = "Loading...";
/*     wrapper.append(loader);
 */    try {

        const r = await  fetch(apiURL,{
            headers: {
                Accept: 'application/json'
            }

        })            

                if (r.ok) {
                    const post = await r.json();
                    loader.remove();
                    console.log(post)
                    for(let i = 0; i > 4; i++)
                    {
                        console.log(post[i].title)
                        let title = document.querySelector(`#post-${i + 1} .post-title`);
                        let body = document.querySelector(`#post-${i + 1} .post-body`);

                        title.innerText = post[i].title;
                        body.innerText = post[i].body;

                    }

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