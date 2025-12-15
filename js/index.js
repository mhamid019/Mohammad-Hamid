


// document.body.style.background = "blue"

const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navBar.classList.toggle("active");
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header nav a");

window.onscroll = function () {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offSet = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        // console.log("top", top);
        // console.log("offSet",offSet);
        // console.log("height", height);
        // console.log("id", id);


        if (top >= offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(`header nav a[href *= ${id} ]`).classList.add("active");
            });
        };
    });

    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("fa-xmark");
    navBar.classList.remove("active");
};



ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services, .portflio-box, .contact form", { delay: 500 });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "bottom" });


const typed = new Typed(".multipletext", {
    strings: ["Frontend Developer", "Web Developer", "React JS Developer", "Graphic Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


const contactForm = document.querySelector(".contact form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const fname = e.target.querySelector("#fname");

    alert(`Hello ${fname.value}, Contact at the given email address above!`);

    e.target.reset();
    fname.focus();
  });
}




$(document).ready(function () {

    $(".btns .p-btn").click(function () {
        $(".btns .p-btn").removeClass("active")
        $(this).addClass("active");

        if ($(this).text() === "API") {
            $(".portfolio-container .all").fadeOut();
            $(".portfolio-container .api").fadeIn();
        }

        if ($(this).text() === "All Projects") {
            $(".portfolio-container .all").fadeIn();
        }

        if ($(this).text() === "SASS") {
            $(".portfolio-container .all").fadeOut();
            $(".portfolio-container .sass").fadeIn();
        }

        if ($(this).text() === "HTML") {
            $(".portfolio-container .all").fadeOut();
            $(".portfolio-container .html").fadeIn();
        }

        if ($(this).text() === "JavaScript") {
            $(".portfolio-container .all").fadeOut();
            $(".portfolio-container .js").fadeIn();
        }

        if ($(this).text() === "React") {
            $(".portfolio-container .all").fadeOut();
            $(".portfolio-container .react").fadeIn();
        }
    })

    $(window).scroll(function(e) {
        if($(window).scrollTop() > 300) {
            $("footer #top").css({
                "opacity" : "1", 
                "pointer-events" : "auto",
                "bottom" : "1.5rem"
            });
        } else {
            $("footer #top").css({
                "opacity" : "0",
                "pointer-events" : "none",
                "bottom" : "10rem"
            });
        }
    })

});

