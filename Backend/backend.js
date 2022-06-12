let container = document.getElementById("backend-container");

let url = "https://marred-helpful-fruit.glitch.me/data";
function fetchData(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayData(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}

async function createNewElement(){
        let id = document.getElementById("id").value;
        let title = document.getElementById("title").value;
        let subtitle = document.getElementById("subtitle").value;
        let image = document.getElementById("img").value; 
        let category = document.getElementById("category").value;
        
        let body = {
            id,
            title,
            subtitle,
            image,
            category
        };
        let response = await fetch(url,{
            method : "POST",
            body : JSON.stringify(body),
            headers :{
                "Content-Type" : "application/json"
            }
        })
}

function displayData(data){
    console.log(data);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let idHead = document.createElement("th");
    idHead.innerText = "ID";
    let titleHead = document.createElement("th");
    titleHead.innerText = "TITLE";
    let subTitleHead = document.createElement("th");
    subTitleHead.innerText = "SUBTITLE";
    // let imageLinkHead = document.createElement("th");
    // imageLinkHead.innerText = "Image Link";
    let categoryHead = document.createElement("th");
    categoryHead.innerText = "CATEGORY";
    let deleteHead = document.createElement("th");
    deleteHead.innerText = "DELETE";
    thead.append(idHead,titleHead,subTitleHead,categoryHead,deleteHead);
    data.forEach(element => {
        let tableRow = document.createElement("tr");
        let id = document.createElement("td");
        id.innerText = element.id;
        let title = document.createElement("td");
        title.innerText = element.title;
        let subtitles = document.createElement("td");
        subtitles.innerText = element.subtitle;
        let img = document.createElement("td");
        img.innerText = element.image;
        let category = document.createElement("td");
        category.innerText = element.category;
        let del = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.innerText = "DELETE";
        delBtn.addEventListener("click",(event)=>{
            event.preventDefault();
            deleteElement(element.id);
        });
        del.append(delBtn);
        tableRow.append(id , title,subtitles,category,del);
        tbody.append(tableRow);
    });
    table.append(thead,tbody);
    container.append(table);    
}

async function deleteElement(id){
    let response = await fetch(url + "/" + id,{
        method : "DELETE"
    });
    if(response.status === 200){
        fetchData();
    }
}

fetchData();
