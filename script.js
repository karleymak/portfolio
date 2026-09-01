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

    const navbars = document.querySelectorAll(".reg-nav");

    window.addEventListener("scroll", () => {
        navbars.forEach((navbar) => {
            if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            } else {
            navbar.classList.remove("scrolled");
            }
        });
    });


    // document.querySelector('#tuxedo').addEventListener('mouseover', function(){
    //     document.querySelector('#tuxedo').src = 'images/tuxedo2.PNG';
    // });

    // document.querySelector('#tuxedo').addEventListener('mouseout', function(){
    //     document.querySelector('#tuxedo').src = 'images/tuxedo1.PNG';
    // });

    // document.querySelector('#footer-img').addEventListener('click', function(){
    //     document.querySelector('#footer-img').src = 'images/footer-switch.png';
    // });

    const dividers = document.querySelectorAll(".divider");

    const colors = [
    "#e5a832",
    "#a83236",
    "#818aa3",
    "#c1b67a"
    ];

    const squareSize = 22;

    dividers.forEach((divider) => {

    const numberOfSquares = Math.ceil(window.innerWidth / squareSize);

    for (let i = 0; i < numberOfSquares; i++) {

        const square = document.createElement("div");

        square.classList.add("square");

        const color = colors[Math.floor(Math.random() * colors.length)];

        square.style.backgroundColor = color;

        divider.appendChild(square);
    }

    gsap.from(divider.querySelectorAll(".square"), {
        scaleY: 0,
        transformOrigin: "center bottom",
        duration: 0.7,
        ease: "power3.out",
        stagger: {
        each: 0.025,
        from: "center"
        }
    });

});


    const switchEl = document.querySelector("#switch");
    const icon = document.querySelector("#switch i");

    switchEl.addEventListener("click", () => {
        icon.classList.toggle("fa-toggle-on");
        icon.classList.toggle("fa-toggle-off");
    });

    




    

    

    
    
    







})();