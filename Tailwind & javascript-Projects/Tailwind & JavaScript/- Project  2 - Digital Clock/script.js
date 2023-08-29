function displayTime(){
    var dateTime = new Date();
    const myHours = dateTime.getHours();
    const myMinutes = dateTime.getMinutes();
    const mySeconds = dateTime.getSeconds();
    document.getElementById("hours").innerHTML = myHours;
    document.getElementById("minutes").innerHTML = myMinutes;
    document.getElementById("seconds").innerHTML = mySeconds ;
    var session = document.getElementById("session");
    if(myHours >= 12){
        session.innerHTML = "PM";
    } else{
        session.innerHTML = "AM";
    }
}
setInterval(displayTime, 10)