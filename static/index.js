function b1(){
    document.getElementById("tagline").innerText='Rent cycle of your choice';
    document.getElementById("booka").innerText='Book Now';
}
function b2(){
   

    document.getElementById("tagline").innerText='More than over 100 cycles';
    document.getElementById("booka").innerText='Choose Now';
}
function b3(){
    document.getElementById("tagline").innerText='Delivered all over Mumbai';
    document.getElementById("booka").innerText='Ride Now';
}

function scrolltotop(){
    document.getElementById("scrolltotop").window=scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
}
