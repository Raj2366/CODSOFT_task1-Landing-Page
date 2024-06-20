var main = document.querySelector("#left");
var side = document.querySelector("#right");
var bottom = document.querySelector("#bottom");
var word = document.querySelectorAll(".word");
var photo = document.querySelector(".photo");
var t1 = document.querySelector(".t1");
var t2 = document.querySelector(".t2");
var t3 = document.querySelector(".t3");



t1.addEventListener("mouseover", function () {
    main.style.transition = "all 1.5s"; 
    main.style.width = "100%";
    main.style.height = "650px";
    main.style.opacity = 1;
    // t1.style.backgroundColor = "red";
    for (i = 0; i < word.length; i++){
        word[i].style.opacity = 0;
    }
})

t1.addEventListener("mouseout", function () {
    main.style.transition = "all 2s";
    main.style.width = "10px"
    main.style.height = "10px"
    main.style.opacity = "0"
    // t1.style.backgroundColor = "none";
    for (i = 0; i < word.length; i++){
        word[i].style.opacity = 1;
    }
    
})

t2.addEventListener("mouseover", function () {
    side.style.transition = "all 1.5s"; 
    side.style.width= "100%";
    side.style.height = "650px";
    side.style.opacity = 1;
    // t2.style.backgroundColor = "red";
    for (i = 0; i < word.length; i++){
        word[i].style.opacity = 0;
    }
})

t2.addEventListener("mouseout", function () {
    side.style.transition = "all 2s";
    side.style.width = "10px"
    side.style.height = "10px"
    side.style.opacity = "0"
    // t2.style.backgroundColor = "none";
    for (i = 0; i < word.length; i++){
        word[i].style.opacity = 1;
    }
    
})

t3.addEventListener("mouseover", function () {
    bottom.style.transform = "scale(150, 65)"; 
    bottom.style.transition="all 2s"
    // bottom.style.width= "100%";
    // bottom.style.height = "-650px";
    bottom.style.opacity = 1;
    // t3.style.backgroundColor = "red";

    for (i = 0; i < word.length; i++){
        word[i].style.opacity = 0;
    }
})

t3.addEventListener("mouseout", function () {
    bottom.style.transition = "all 2s";
    bottom.style.transform = "scale(1,1)"
    bottom.style.opacity = "0";
    // t3.style.backgroundColor = "none";
    for (i = 0; i < word.length; i++){
        word[i].style.opacity = 1;
    }
    
})


