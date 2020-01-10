const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const pages = document.querySelectorAll('.page');

var i = 0;
var l = pages.length;

next.addEventListener('click',function(e) {
    pages[i].classList.remove('fg');
    pages[i].classList.add('bg');
    i=++i%l;
    pages[i].classList.remove('bg');
    pages[i].classList.add('fg');
});
prev.addEventListener('click',function(e) {
    alert('Oops doesn\'t work');
});


