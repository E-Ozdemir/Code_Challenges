// //=>>>>her saniye saati güncelleme
function showTime(){
    
    const timeLabel = document.querySelector("p");
    const time = new Date;
    // timeLabel.innerHTML = time.getHours();
    timeLabel.innerHTML = time.toLocaleTimeString();
}
setInterval(showTime,1000);