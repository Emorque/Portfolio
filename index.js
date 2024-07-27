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
  
  // gallery.dataset.percentage = nextPercentage;
  gallery.animate({
    transform: `translate(${nextPercentage}%, 0%)`
  }, { duration: 1200, fill: "forwards"});

  // gallery.style.transform = `translate(${nextPercentage}%, 0%)`;
}


window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// const handleMove = e => {
//   leftSide.style.width = `${e.clientX / window.innerWidth * 100}%`;
// }

// document.onmousemove = e => handleMove(e);

// document.ontouchmove = e => handleMove(e.touches[0]);

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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = null;

window.onload = () => {
  const headerText = document.querySelectorAll(".left-text");
  headerText.forEach((target) => {
    let iterations = 0;
  
    let interval = setInterval(() => {
      target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations){
          return target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
  
      
      if (iterations >= target.dataset.value.length) clearInterval(interval);
  
    iterations +=1/4;
    },50);
  });
}