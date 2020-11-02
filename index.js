const allStars =  document.querySelectorAll('.fa-star');
const rating = document.querySelector('.rating');
const css = "checked";

init();

function init() {
    allStars.forEach((star) => {
        star.addEventListener('click', saveRating)
        star.addEventListener('mouseover', addClassHover)
        star.addEventListener('mouseleave', removeClass)
    });
}

function saveRating(e) {
    removeEventListenerToAllStars();
    rating.innerText = e.target.dataset.star;
}

function removeEventListenerToAllStars(){
  allStars.forEach( star => {
        star.removeEventListener('click', saveRating)
        star.removeEventListener('mouseover', addClassHover)
        star.removeEventListener('mouseleave', removeClass)
  })
}

function addClassHover(e) {
    const overedStar = e.target;
    overedStar.classList.add(css);
    const previousSiblings = getPreviousSiblings(overedStar)
    previousSiblings.forEach( elem => elem.classList.add(css));
}

function removeClass(e) {
  const overedStar = e.target;
  overedStar.classList.remove(css);
  const previousSiblings = getPreviousSiblings(overedStar)
  previousSiblings.forEach( elem => elem.classList.remove(css));
}

function getPreviousSiblings(elem) {
  let siblings = [];
  const spanNodeType = 1;
  while((elem = elem.previousSibling)) {
    if(elem.nodeType === spanNodeType) {
      siblings = [elem, ...siblings];
    }
  }
  return siblings;
}