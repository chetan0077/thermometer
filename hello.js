//<span id="temp" class="fa"></span>

const tempLoad =() =>{
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb';
    
    setTimeout(() => {
        temp.innerHTML = '&#xf2ca';
        temp.style.color ="#4dff4d";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c9';
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c8';
        temp.style.color ="#ffd11a";
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c7';
        temp.style.color ="#ff0000";
    }, 4000);
}

tempLoad ();

setInterval (tempLoad, 5000)