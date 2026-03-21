const allSliders = document.querySelectorAll('.slider-container');

allSliders.forEach((container) => {
    const slides = container.querySelectorAll('.slide');
    const nextBtn = container.querySelector('.next');
    const prevBtn = container.querySelector('.prev');
    
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides[currentIndex].classList.add('active');
    }

    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
});