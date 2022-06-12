let container = document.getElementById("container");
let url = "https://marred-helpful-fruit.glitch.me/data";

let headings = ["Shows You Love" , "Newly Added Shows" , "Stream For Free Now" ,"Coming Soon On Discovery+", "Your Favourites , Aab Hindi Mein"];

function fetchData(){
    fetch(url)
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
function displayCard(data){
    let i = 0;
    data.forEach(element => {
        let cardRow = document.createElement("div");
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let title = document.createElement("p");
        title.innerText = element.title;
        let image= document.createElement("img");
        image.src = element.img;
        card.append(title,image);
        cardRow.append(card);
        container.append(cardRow)        
    });
}
fetchData();