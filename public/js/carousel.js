document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        classes: {
            arrows: 'splide__arrows newArrows',
            arrow: 'splide__arrow newArrow',
            prev: 'splide__arrow--prev newArrows-prev',
            next: 'splide__arrow--next newArrows-next',
        }
    });
    splide.mount();
});