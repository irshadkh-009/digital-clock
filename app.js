let allMonths =['January','Febuary','March','April','May','June','July','August','September','october','November','December']
let allDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Fridy','Saturday']
function value(){
let dateNow = new Date();
let year = dateNow.getFullYear();
let month = dateNow.getMonth();
for(let i = 0; i<12;i++){
    if(i==month){
        month=allMonths[i];
    }
}
let day = dateNow.getDay();
for(let j = 0; j<7;j++){
    if(j==day){
        day=allDays[j];
    }
}
let hour = dateNow.getHours();
let minute = dateNow.getMinutes();
let second = dateNow.getSeconds();

document.querySelector(".year").innerHTML = year;
document.querySelector(".month").innerHTML = month;
document.querySelector(".day").innerHTML = day;
document.querySelector(".hour").innerHTML = hour;
document.querySelector(".minute").innerHTML = minute;
document.querySelector(".second").innerHTML = second;


document.querySelector(".fotter").innerHTML = `${String.fromCharCode(169)} copyright ${year} All right reserved`
}
setInterval(value,1000);
