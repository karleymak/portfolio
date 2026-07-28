(function(){
    'use strict';
    console.log('reading js');

    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".nav-overlay");
    const closeBtn = document.querySelector(".close");

    burger.addEventListener("click", () => {
        overlay.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("open");
    });







})();