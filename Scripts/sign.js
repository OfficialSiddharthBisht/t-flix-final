
function getData() {

        document.querySelector('#getOTP').addEventListener("click",()=>{
            var userData={
                "name":document.querySelector("#name").value,
                "mobile":document.querySelector("#mobileNumber").value
            }
            if(userData.name.length==0 && userData.mobile.length !== 10)
            {
                alert("Enter correct details")
            }
            else{
               if(otp()){
                document.querySelector("#signOTP").addEventListener("click",() => {
                    signup(userData)
                })
               }

            }
        })
    
}

getData();




async function signup(userData)
{
   try{

    let result= await fetch(`http://localhost:3000/userAllDetails`,{
        method : "POST",
        body:JSON.stringify(userData),
        headers : {"content-Type" : "application/json"}

    });
    let data=await result.json();
    console.log(data)  
    
    window.location.href="../index.html"
    
   }catch(error){
     console.log(error)
   }
}


function otp()
{
    let otp = Math.random()
    otp*=10000
    otp= Math.floor(otp)
    console.log(otp);
   alert("Your OTP is : "+otp)
   return otp
//    return 
}
 

  

