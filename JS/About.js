const websitesDesigned = document.querySelector(".websites-designed");
const appsdeveloped = document.querySelector(".apps-developed");
 
setTimeout(() => {
  websitesDesigned.innerHTML = "40";
  appsdeveloped.innerHTML = "50";
}, 400);
 

 
document.addEventListener("DOMContentLoaded", function () {
  const line = document.querySelector('.line');
  const sections = document.querySelectorAll('.sec');
 
  let animatedSections = []; // Array to keep track of animated sections
 
  // Function to check if an element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
  }
 
  // Function to animate line appearance
  function animateLine() {
      line.style.display = 'block';
  }
 
  // Function to animate contents
  function animateContents() {
      sections.forEach((section, index) => {
          if (!animatedSections.includes(section) && isInViewport(section)) {
              section.classList.add('show-me');
              animatedSections.push(section);
             
              // Insert year element
              const year = document.createElement('div');
              year.classList.add('year');
              year.textContent = 2018 + index; // Increment year based on section index
              year.style.fontSize = '24px';
              section.appendChild(year);
          }
      });
  }
 
  // Event listener for scrolling
  window.addEventListener('scroll', function () {
      animateContents();
  });
 
  // Initial calls to animate line appearance and contents
  animateLine();
  animateContents();
});
 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
   
    let active = 0;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }