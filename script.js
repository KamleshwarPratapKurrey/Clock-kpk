let second = 0;
let minute = 0;
let hour = 0;
let date = new Date();

setInterval(()=>{
    date= new Date();
    second = date.getSeconds() * 6;
    minute = date.getMinutes() * 6;
    hour = date.getHours() * 30 + Math.round(minute / 12);
    document.getElementById('second_hand').style.transform= `rotate(${second}deg)`
    document.getElementById('minute_hand').style.transform= `rotate(${minute}deg)`
    document.getElementById('hour_hand').style.transform= `rotate(${hour}deg)`
}, 1000);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthOfYear= months[date.getMonth()].slice(0, 3);
const dayOfWeak = days[date.getDay()].slice(0, 3);
// console.log(date.getMonth()) // 9
// console.log(date.getUTCFullYear());
const year = date.getFullYear();
const day = date.getDate();
document.getElementById("day_date").innerHTML=`${dayOfWeak} ${day} ${monthOfYear} ${year}`