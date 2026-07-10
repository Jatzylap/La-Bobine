let slideIndex = 0;

function updateSlides(slides)
{
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
}

function plusSlides(n)
{
    const slides = document.getElementsByClassName("slides");

    slideIndex += n;

    if (slideIndex < 1) slideIndex = slides.length;
    if (slideIndex > slides.length) slideIndex = 1;

    updateSlides(slides);
}