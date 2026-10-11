let slideIndex = 1;
let id = window.setTimeout(autoSlide, 8000);
let id2;

function plusSlides(n)
{
    const slides = document.getElementsByClassName("slide");

    slideIndex += n;
    if (slideIndex < 1) slideIndex = slides.length;
    if (slideIndex > slides.length) slideIndex = 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    window.clearTimeout(id);
    window.clearTimeout(id2);
    id2 = window.setTimeout(autoSlide, 16000);
}

function autoSlide()
{
    plusSlides(1);
    window.clearTimeout(id2);
    id = window.setTimeout(autoSlide, 8000);
}

window.plusSlides = plusSlides;