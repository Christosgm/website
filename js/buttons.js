const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const pages = document.querySelectorAll('.page');

var i = 0;
var l = pages.length;

next.addEventListener('click', nextPage);
prev.addEventListener('click',prevPage);

function nextPage() {
    pages[i].classList.add('bg');
    i=++i%l;
    pages[i].classList.remove('bg');
}
function prevPage() {
    pages[i].classList.add('bg');
    i=(i+l-1)%l;
    pages[i].classList.remove('bg');
}
