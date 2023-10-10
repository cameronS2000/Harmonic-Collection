function applyGrayscale() {
    const mainImage = document.querySelector('.main-img img');
    mainImage.style.filter = 'grayscale(100%)';
}
function applyBlur() {
    const mainImage = document.querySelector('.main-img img');
    mainImage.style.filter = 'blur(5px)';
}
function applySepia() {
    const mainImage = document.querySelector('.main-img img');
    mainImage.style.filter = 'sepia(100%)';
}
function applyInverted() {
    const mainImage = document.querySelector('.main-img img');
    mainImage.style.filter = 'invert(100%)';
}
function applyHue() {
    const mainImage = document.querySelector('.main-img img');
    mainImage.style.filter = 'hue-rotate(90deg)';
}

document.querySelectorAll('.thumbnail')[0].addEventListener('click', applyGrayscale);
document.querySelectorAll('.thumbnail')[1].addEventListener('click', applyBlur);
document.querySelectorAll('.thumbnail')[2].addEventListener('click', applySepia);
document.querySelectorAll('.thumbnail')[3].addEventListener('click', applyInverted);
document.querySelectorAll('.thumbnail')[4].addEventListener('click', applyHue);