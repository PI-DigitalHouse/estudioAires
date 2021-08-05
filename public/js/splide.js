document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        type: 'loop',
        cover: true,
        height: '660px',
        fixedWidth: '100%',
        fixedHeight: '660px',
        autoplay: true,
        interval: 3000,
        pauseOnHover: false
    }).mount();
});

document.addEventListener('DOMContentLoaded', function() {
    new Splide('#splideDois', {
        type: 'loop',
        perPage: 3,
        perMove: 3,
        gap: 10,
        height: '350px',
        cover: true
    }).mount();
});