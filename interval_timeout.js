const start = document.getElementById("btn1");
const stop = document.getElementById("btn2");
const h1 = document.getElementById("h1");
let interval;
start.addEventListener("click",function(){
    interval = setInterval(() => {
        const now = new Date();
        h1.textContent = `${now.getHours()}h : ${now.getMinutes()}m : ${now.getSeconds()}s`;
    }, 1000);
});

stop.addEventListener("click",function(){
    clearInterval(interval);
});
