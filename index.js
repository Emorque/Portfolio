// Handling the gallery container 
const gallery = document.getElementById("gallery");
const leftSide = document.getElementById("left-container");

const handleOnDown = e => gallery.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  gallery.dataset.mouseDownAt = "0";  
  gallery.dataset.prevPercentage = gallery.dataset.percentage;
}

const handleOnMove = e => {
  if(gallery.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(gallery.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentagePre = parseFloat(gallery.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentagePre, 5), -((gallery.scrollWidth - window.innerWidth + 50) / window.innerWidth) * 100);
  

  gallery.dataset.percentage = nextPercentage;
  
  gallery.animate({
    transform: `translate(${nextPercentage}%, 0%)`
  }, { duration: 1200, fill: "forwards"});

}

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      if (!entry.target.classList.contains('onetime')){
        entry.target.classList.remove('show');
      }
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => observer.observe(e));

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.left-text').classList.add('loaded');
  }, 500); // 100ms delay
});


// Handling experience bar animation 
const experienceBar = document.getElementById("exp-bar");
const qmark = document.getElementById("question-mark");

const findBar = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      move();
      findBar.unobserve(experienceBar);
    }
  });
});

findBar.observe(experienceBar);

function move() {
  let width = 1;
  let interval = setInterval(() => {
    if (width >= 50) {
      qmark.style.opacity = 1;
      clearInterval(interval);
    }
    width++;
    experienceBar.style.width = width + "%";
  },50);
}