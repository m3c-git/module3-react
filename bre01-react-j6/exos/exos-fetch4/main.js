const apiURL = "https://jsonplaceholder.typicode.com/posts/";
main()

async function main()
{
    const wrapper = document.querySelectorAll("article");
    const loader = document.createElement("p");
    const title = document.querySelector("#post-title");
    const postbody = document.querySelector("#post-body");


    document.getElementById("contact-form").addEventListener("submit", async function(e) {
            e.preventDefault();
         
            let data = new FormData(this);
            console.log(data)
         
            let xhr = new XMLHttpRequest();



            const body = JSON.stringify({
                title : "Ceci est le titre de mon nouveau post",
                body : "Ceci est le contenu de mon nouveau post",
                userId: 1
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
                            console.log(data)
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
        
            return false;
        });

    
} 

        