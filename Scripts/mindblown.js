let container = document.getElementById("mindblown-card-container");

let midblownUrl = "https://marred-helpful-fruit.glitch.me/mindblown";

function fetchData(){
    fetch(midblownUrl)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayCard(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}
/*
 {
      "title": "That's Elephantastic!",
      "subtitle": "Explore the world of these mighty mammals",
      "img": "https://ap2-prod-images.disco-api.com/2020/2/28/82f106f9-2e54-4eb4-b338-7fc71d15835c.jpg?f=jpg&p=true&q=85&w=1024"
    },
*/
function displayCard(data){
    data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let title = document.createElement("p");
        title.innerText = element.title;
        let image= document.createElement("img");
        image.src = element.img;
        card.append(title,image);
        container.append(card);        
    });
}
fetchData();
