var dateInput=document.querySelector("input")
var cal=document.querySelector("button")
 var msg=document.querySelector(".msg")


cal.addEventListener("click",function(){
    const currDate=new Date()
    const day = currDate.getDate()
    const month = currDate.getMonth()  
    const year = currDate.getFullYear()
    
    var dob=dateInput.value
    var birthDate=new Date(dob)
    var birthYear= birthDate.getFullYear()
    var birthMonth=birthDate.getMonth()
    var birthDay=birthDate.getDate()

    var age = year - birthYear
    if(birthMonth>month){
        age--

    }else if(birthMonth==month && birthDay>day){
        age--

    }
    msg.innerHTML = `🎉 You are <strong>${age}</strong> years old!`;

   


})