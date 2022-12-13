document.addEventListener("mousemove", parallax);

function parallax(e) {
   this.querySelectorAll(".img").forEach(img => {
      const speed = img.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      img.style.transform = 'translateX(${x}px) translatey(${y}px)';
   });
}

let tabs = document.querySelector(`.tarifs_tabs`),
   tabsTitle = document.querySelectorAll('.tarifs_tabs_title'),
   tarifPrice = document.querySelectorAll('.number'),
   tarifDuring = document.querySelectorAll('.during');

tabs.addEventListener('click', e => {
   if (!e.target.classList.contains('tarifs_tabs_title')) return


   tabsTitle.forEach(tab => tab.classList.remove('active'));
   e.target.classList.add('active');

   if (e.target.dataset.time === 'year') {
      tarifPrice.forEach(price => price.innerHTML *= 12)
      tarifDuring.forEach(during.innerHTML = "/year")
   }

   if (e.target.dataset.time === 'month')
      tarifPrice.forEach(price => price.innerHTML /= 12)
   tarifDuring.forEach(during.innerHTML = "/month")
});

/* -=- Scroll To -=- */
let btnUp = document.querySelector('.scrollTop');

btnUp.addEventListener('click', function(){
    scrollToY(0);
});

document.addEventListener('scroll', function(){
    let cl = btnUp.classList;
    let threshold = window.innerHeight / 2;
    window.scrollY > threshold ? cl.add('btnUp-open') : cl.remove('btnUp-open');
});

function scrollToY(top){
  window.scrollTo({
    top,
    behavior: "smooth"
  });
}
