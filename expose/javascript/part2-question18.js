function myTime (){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
let intervalID = setInterval(myTime, 1000);