function printPage() {
    let data = localStorage.getItem("CardData")
    data = JSON.parse(data)
    document.getElementById("bigImage").src = data.img;
    document.getElementById("cardTitle").innerText = data.title;
    document.getElementById("cardSubTitle").innerText = data.subtitle;

    document.getElementById("watchNow").addEventListener('click',()=>{
        location.href = "./thirdpage.html"
    })

    console.log(data)
}
printPage()