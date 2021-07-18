function carregar(){
switch(new Date().getDay()){

    case 0:
        day =`Sunday$`;
        break;
    case 1:
        day=`Monday`;
        break;
    case 2:
        day=`Tuesday`;
        break;
    case 3: 
        day=`Wednesday`;
        break;
    case 4:
        day=`Thursday`;
        break;
    case 5:
        day=`Friday`;
        break;
    case 6:
        day=`Saturday`;
}  

var time = new Date();
var d = time.getDate();
var m = time.getMonth();
var y = time.getFullYear();
var h = time.getHours();  // <-- change here to see changes
var min = time.getMinutes();


var info = document.querySelector('div#time');
info.innerHTML = `Today is ${day}: ${d} / ${m} / ${y}`

var hour = document.querySelector('div#hour')
hour.innerHTML = `It's <strong>${h}:${min}</strong>`

var pic = document.querySelector('div#img')
var good = document.querySelector('div#good')

if(h >= 3  && h < 12){
    good.innerHTML = `<strong>Good Morning</strong>`
    pic.innerHTML = `  <img src="./img src/morning.jpeg" alt="morning" width="430px" class="mage">`
}
else if(h >= 12 && h < 18){
    good.innerHTML = `<strong>Good Afternoon</strong>`
    pic.innerHTML = `<img src="./img src/afternoon.jpg" alt="afternoon" width="430px" class="mage">`
    document.body.style.background = '#aab07b'
}
else{
    good.innerHTML = `<strong>Good Evening</strong>`
    pic.innerHTML = `<img src="./img src/night.jpg" alt="night" width="450px" class="mage">`
    document.body.style.background = 'black'
}

}
