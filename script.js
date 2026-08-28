(function(){
    'use strict';
    console.log('reading js');

    VanillaTilt.init(document.querySelectorAll(".thumbnail"), {
        max: 8,
        speed: 400,
        scale: 1.02,
        glare: true,
        "max-glare": 0.15
    });
    

    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".nav-overlay");
    const closeBtn = document.querySelector(".close");

    burger.addEventListener("click", () => {
        overlay.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("open");
    });

    document.querySelector('#tuxedo').addEventListener('mouseover', function(){
        document.querySelector('#tuxedo').src = 'images/tuxedo2.PNG';
    });

    document.querySelector('#tuxedo').addEventListener('mouseout', function(){
        document.querySelector('#tuxedo').src = 'images/tuxedo1.PNG';
    });

    // document.querySelector('#footer-img').addEventListener('click', function(){
    //     document.querySelector('#footer-img').src = 'images/footer-switch.png';
    // });

    

    
    
    







})();