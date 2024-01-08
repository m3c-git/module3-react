const apiURL = "https://jsonplaceholder.typicode.com/posts/";
main()


async function main()
{
    const wrapper = document.querySelectorAll("article");
    const loader = document.createElement("p");
    const posttitle = document.querySelector("#post-title");
    const postbody = document.querySelector("#post-body");

    let form = document.getElementById("contact-form");
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
     
        let title = document.querySelector("#title");
        let content = document.querySelector("#content");
        
        console.log(title.value + " "+ content.value)
     
    
   
    


        const body = JSON.stringify({
            title : title.value,
            body : content.value,
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
                        console.log(post)
                        posttitle.innerText = post.title;
                        postbody.innerText = post.body;
    
                        
    
                    } else {
                        throw new Error('Erreur serveur', {cause: r});
                    }
                } catch (e) {
                    loader.innerText = 'Impossible de charger les articles...';
                    loader.style.color = 'red';
                    return;
                }
    });
} 

        