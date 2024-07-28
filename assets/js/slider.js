'use strict';
let currentSlide = 0;

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalSlides = document.getElementById('modalSlides');
    const modalIndicators = document.getElementById('modalIndicators');
    modalSlides.innerHTML = '';
    modalIndicators.innerHTML = '';

    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
        const slide = document.createElement('img');
        slide.src = img.src;
        modalSlides.appendChild(slide);

        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        indicator.onclick = () => showSlide(index);
        modalIndicators.appendChild(indicator);
    });

    showSlide(0);
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function showSlide(index) {
    currentSlide = index;
    const offset = -index * 100;
    document.getElementById('modalSlides').style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
};