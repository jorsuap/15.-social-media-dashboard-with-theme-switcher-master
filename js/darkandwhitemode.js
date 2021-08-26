
let baner = document.getElementsByClassName("fondo")[0];
let title = document.getElementsByClassName("title")[0];
let body = document.getElementsByTagName("body")[0];
let cardsocial = document.querySelectorAll(".socialcard");
let cardoverview = document.querySelectorAll(".overiewcards");
var checkbox = document.getElementsByClassName("toggle")[0];
let followers = document.querySelectorAll(".socialcard__followers");
let itemnumber = document.querySelectorAll(".item__number");

checkbox.addEventListener('change', function () {
    if(this.checked){
     
        body.style.background = "hsl(0, 0%, 100%)";
        title.style.color = "hsl(230, 17%, 14%)";
        baner.style.background = "hsl(225, 100%, 98%)";
        
        cardsocial.forEach(elemento =>{
            elemento.style.background = "hsl(227, 47%, 96%)";
        });
        followers.forEach(followers =>{
            followers.style.color = "hsl(230, 17%, 14%)";
        });
        cardoverview.forEach(overview =>{
            overview.style.background = "hsl(227, 47%, 96%)";
        });
        itemnumber.forEach(item =>{
            item.style.color = "hsl(230, 17%, 14%)";
        });
        
    }
    else{
        title.style.color = "hsl(0, 0%, 100%)";
        body.style.background = "hsl(230, 17%, 14%)";
        baner.style.background = "hsl(232, 19%, 15%)";
        cardsocial.forEach(elemento =>{
            elemento.style.background = "hsl(228, 28%, 20%)";
        });
        followers.forEach(followers =>{
            followers.style.color = "hsl(0, 0%, 100%)";
        });
        cardoverview.forEach(overview =>{
            overview.style.background = "hsl(228, 28%, 20%)";
        });
        itemnumber.forEach(item =>{
            item.style.color = "hsl(0, 0%, 100%)";
        });
    }
});

