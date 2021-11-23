const animated = 'animated';
const displayHover = document.querySelectorAll('.display__hover');
const elsSpan = [];


displayHover.forEach((el, i) => {
  let addAnimation = false;

  if (el.classList[1] == 'flash') {
    el.addEventListener('animationend', (e) => {
      el.classList.remove(animated);
    });
    addAnimation = true;
  }

  if (!elsSpan[i])
    elsSpan[i] = el.querySelector('span');

  el.addEventListener('mouseover', (e) => {
    elsSpan[i].style.left = e.pageX - el.offsetLeft + 'px';
    elsSpan[i].style.top = e.pageY - el.offsetTop + 'px';

    if (addAnimation) el.classList.add(animated);
  });

  el.addEventListener('mouseout', (e) => {
    elsSpan[i].style.left = e.pageX - el.offsetLeft + 'px';
    elsSpan[i].style.top = e.pageY - el.offsetTop + 'px';
  });
});