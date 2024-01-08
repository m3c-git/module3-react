const apiURL = "https://jsonplaceholder.typicode.com/posts/1";
main()

async function main()
{
    const wrapper = document.querySelector("article");
    const loader = document.createElement("p");
    const title = document.querySelector("#post-title");
    const body = document.querySelector("#post-body");

    loader.classList.add("loader")
    loader.innerText = "Loading...";
    wrapper.append(loader);
    try {

        const r = await  fetch(apiURL,{
            headers: {
                Accept: 'application/json'
            }

        })            

                if (r.ok) {
                    const post = await r.json();
                    loader.remove();
                    console.log(post)
                    title.innerText = post.title;
                    body.innerText = post.title;
                } else {
                    throw new Error('Erreur serveur', {cause: r});
                }
            } catch (e) {
                loader.innerText = 'Impossible de charger les articles...';
                loader.style.color = 'red';
                return;
            }
        } 