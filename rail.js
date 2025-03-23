document.addEventListener("DOMContentLoaded", function () {
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");

window.addEventListener("scroll", function(){
let value = window.scrollY;
i1.style.top = value * -0.35 + "px";
i2.style.top = value * -0.35 + "px";
})

const slides = document.querySelectorAll(".crsl .i1");
    let index = 0;
    const totalSlides = slides.length;

    function showSlide(newIndex) {
        slides[index].classList.remove("active");
        slides[index].classList.add("rotate-out");

        setTimeout(() => {
            slides[index].classList.remove("rotate-out");

            index = (newIndex + totalSlides) % totalSlides;

            slides[index].classList.add("rotate-in");

            setTimeout(() => {
                slides[index].classList.remove("rotate-in");
                slides[index].classList.add("active");
            }, 500);
        }, 500);
    }

    document.getElementById("next").addEventListener("click", () => {
        showSlide(index + 1);
    });

    document.getElementById("prev").addEventListener("click", () => {
        showSlide(index - 1);
    });

    slides[index].classList.add("active");

    const video1= document.getElementById("v1");
    const video2= document.getElementById("v2");
    const video3= document.getElementById("v3");
    

    function addHover(video) {
        video.addEventListener("mouseenter", () => {
            video.play(); 
        });

        video.addEventListener("mouseleave", () => {
            video.pause(); 
        });
    }
    addHover(video1);
    addHover(video2);
    addHover(video3);

        const v1 = document.querySelector(".v1");
        const v2 = document.querySelector(".v2");
        const v3 = document.querySelector(".v3");
        window.addEventListener("scroll", function(){
            let value = window.scrollY;
            v1.style.top = value * -0.2 + "px";
            v2.style.top = value * -0.1 + "px";
            v3.style.top = value * -0.1 + "px";
            });
  const email = document.getElementById("email");
  email.addEventListener("input", function () {
    const emailError = document.getElementById("emailError");

    if (this.validity.valid) {
        emailError.textContent = "";
        this.style.border = "2px solid green"; 
    } else {
        emailError.textContent = "Invalid email format";
        this.style.border = "2px solid red";
    }
});
const ham = document.getElementById("ham");
const hamcnt = document.getElementById("hamcnt");
const cross = document.getElementById("cross");

ham.addEventListener("click", function() 
{
 hamcnt.style.left = "0";   
});
cross.addEventListener("click", function() {
    hamcnt.style.left = "-100%"
}) 
});

