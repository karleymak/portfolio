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

    
    window.addEventListener("load", (event) => {
        new cursoreffects.fairyDustCursor({
            colors: ["#a7c957", "#2a9d8f", "#ef476f"],
            fairySymbol: "★",
          });
    })
    







})();