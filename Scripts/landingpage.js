let object=
    {
        "slideshow":[
        {
                "title":"Ganganyaan: Bharat Ki Antariksh Udaan",
                "subtitle":"India's brightest minds are set to chart new paths in space and history.",
                "img":"https://ap2-prod-images.disco-api.com/2022/05/09/b2e4c5fd-aafe-44c2-8bb5-04e3532b357d.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
                "category":"Science Space",
                "twoDiv":[ "Don't Miss","All New Episodes"]
                 
              
        },
        {
          "title":"Bablu Dablu",
          "subtitle": "Vicky, Carly, Briar and Bramble have new adventures on Pine Tree Mountain.",
          "img":"https://ap2-prod-images.disco-api.com/2022/05/20/0761d7a2-323f-4108-9365-a35b2f3e2104.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
          "category":"Animated Kids",
          "twoDiv":[ "Don't Miss","All New Episodes"]
          
        },
        {
          "title":"Michael Jackson:A Faking It Special",
          "subtitle": "Criminals portray themselves as victims to hide their guilt.",
          "img":"https://ap2-prod-images.disco-api.com/2022/05/11/043cd52f-50cc-49b7-837e-74ee8715a1da.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
          "category":"Investigation Crime",
          "twoDiv":[ "Don't Miss","All New Episodes"]
          
        },
        {
          "title": "Legends of The Ramayana With Amish",
          "subtitle": "Amish Tripathi traverses 5,000 kilometers in the footsteps of Rama.",
          "img":"https://ap2-prod-images.disco-api.com/2022/04/12/47db0637-c688-4991-a42e-88123117293a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
          "category":"Civilizations People & Culture History",
          "twoDiv":[ "Don't Miss","All New Episodes"]
        }

      ]
        
    }
    
     let index=0;
     displayClosure(object.slideshow,index)
     setInterval(() => {
       displayClosure(object.slideshow,index)
       index++;
       if(index==object.slideshow.length)
       {
         index=0;
       }
    }, 4000);
    
        // displayClosure(object)
      function displayClosure(objectData,index){
        let element=objectData[index]
      // object.slideshow.forEach(element => {
      document.querySelector("#main-closure").innerHTML=""
      let mainClosureDiv=document.createElement("div");
      mainClosureDiv.setAttribute("class","mainClosureCard")
      
      let divData=document.createElement("div")
      divData.setAttribute("class","mainClosureCarddivData");
      let title=document.createElement("h3");
      title.innerText=element.title;
      title.setAttribute("class","title");

      let subTitle=document.createElement("p");
      subTitle.innerText=element.subtitle;
      subTitle.setAttribute("class","subTitle");
      
      // let category=document.createElement("p");
      // category.src=element.category;
     let twoDiv=document.createElement("div");
     twoDiv.setAttribute("class", "twoDiv")

     let miss=document.createElement("button");
     miss.innerText=element.twoDiv[0];
     let episode=document.createElement("button");
     episode.innerText=element.twoDiv[1];

      twoDiv.append(miss,episode)

      let divButton=document.createElement("div");
       divButton.setAttribute("class","divButton")
       
       let buttonImg=document.createElement("img");
       buttonImg.src="Styles/videoIcon.jpg";
  
       let buttonPlay=document.createElement("p");
       buttonPlay.innerText="Play";

       divButton.append(buttonImg,buttonPlay)

       divData.append(title,subTitle,twoDiv,divButton)

       let divImg=document.createElement("div")
       divImg.setAttribute("class","divImg");

      let sideImg=document.createElement("img");
      sideImg.src=element.img;

      divImg.append(sideImg)

      mainClosureDiv.append(divData,divImg)

      document.querySelector("#main-closure").append(mainClosureDiv)

    // });
  }