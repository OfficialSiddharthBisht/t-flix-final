function gotoPremium() {
    document.getElementById("goPremium").addEventListener('click',()=>{
        console.log("first")
        location.href = "./Pages/premium.html"
    })
}
gotoPremium()