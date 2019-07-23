const seeMoreIcon = document.getElementById('seeMore');
let scrolled = false;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.pageYOffset > (window.innerHeight )) {
    navbar.classList.add('transition')

  } else {
    navbar.classList.remove('transition')
  }
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if (window.pageYOffset < 40 && !scrolled) {
      window.scrollTo(0, window.innerHeight + 20)
      scrolled = true;
    }
   } else {
    if (window.pageYOffset < 18 && !scrolled) {
      window.scrollTo(0, window.innerHeight)
      scrolled = true;
    }
   }

})

seeMoreIcon.addEventListener('click', () => {
  window.scrollTo(0, window.innerHeight)
})
