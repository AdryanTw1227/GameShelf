function scrollCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = carousel.clientWidth / 5; // Adjust this value to control the scroll amount
    const behavior = window.innerWidth <= 480 ? 'smooth' : 'auto'; // Slow scroll on mobile
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: behavior
    });
}