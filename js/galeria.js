let slider = document.querySelector('.slider-galeria-html .list-galeria-html');
let items = document.querySelectorAll('.slider-galeria-html .list-galeria-html .item-galeria-html');
let next = document.getElementById('next-galeria-html');
let prev = document.getElementById('prev-galeria-html');
let dots = document.querySelectorAll('.slider-galeria-html .dots-galeria-html li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => {
    next.click()
}, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider-galeria-html .dots-galeria-html li.active-galeria-html');
    last_active_dot.classList.remove('active-galeria-html');
    dots[active].classList.add('active-galeria-html');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click()
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
