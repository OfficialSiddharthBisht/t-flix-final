let container = document.getElementById("card-container");
let url = "https://marred-helpful-fruit.glitch.me/data";

let headings = ["Shows You Love" , "Newly Added Shows" , "Stream For Free Now" ,"Coming Soon On Discovery+", "Your Favourites , Aab Hindi Mein", "Discovery+ India Originals" ,"Kids Specials" , "Cartoons" , "Animation" , "Kids Love" , "Kids TV" ,"Fun Science And Engineering"];

function fetchData(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayCard(response);
        // displayTopCard(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}
// ! Not finished yet
// function displayTopCard(data){
//     let topCard = document.getElementById("top-card");
//     let cardRow = document.createElement("div");
//     for(let j = 25; j < 32; j++){
//      cardRow.setAttribute("class","card-row");
//      let cardT = document.createElement("div");
//      cardT.setAttribute("class","cardT")
//      let image= document.createElement("img");
//      image.src = data[j].img;
//      cardT.append(image);
//      cardRow.append(cardT);
//     }
//     topCard.append(cardRow) 
// }
function displayCard(data){
    let curr = 0;
   for(let i = 0; i < headings.length;i++){
       let headingH2 = document.createElement("h3");
       headingH2.innerText = headings[i];
       headingH2.style = "margin-left: 2%";
        container.append(headingH2);
    
        let cardRow = document.createElement("div");
       for(let j = curr; j < curr + 4; j++){
        cardRow.setAttribute("class","card-row");
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let title = document.createElement("p");
        title.setAttribute("class","card-title");
        title.innerText = data[j].title;
        let image= document.createElement("img");
        let subTitle = data[j].subtitle;
        image.src = data[j].img;
        card.append(title,image);
        card.addEventListener("click",()=>{
            console.log(data[j],JSON.stringify(data[j]))
            localStorage.setItem("CardData", JSON.stringify(data[j]))
            location.href = "../2ndPage.html"
        })
        cardRow.append(card);
       }
       container.append(cardRow) 
       curr = curr + 4;
   }
}
fetchData();