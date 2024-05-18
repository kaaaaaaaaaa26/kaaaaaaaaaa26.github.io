// script.js
// Add animation to the photos
const photos = document.querySelectorAll('.photo-gallery li');

photos.forEach((photo) => {
    photo.addEventListener('mouseover', () => {
        photo.classList.add('animate');
    });

    photo.addEventListener('mouseout', () => {
        photo.classList.remove('animate');
    });
    onload = () =>{
        document.body.classList.remove("container");
    };
});