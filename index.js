const gallery = document.getElementById("gallery");

// window.onmousedown = e => {
//   gallery.dataset.mouseDownAt = e.clientX;
// }

// window.onmouseup = () => {
//   gallery.dataset.mouseDownAt = "0";
//   gallery.dataset.prevPercentage = gallery.dataset.percentage;
// }

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