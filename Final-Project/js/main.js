let nav = document.querySelector("#nav")
window.addEventListener("scroll", () => {
    if(this.window.scrollY > 500){
        nav.classList.add("fixed-top")
    }else{
        nav.classList.remove("fixed-top")
    }
})


const smallThumbs = document.querySelectorAll(".small-thumb");
const bigImage = document.getElementById("bigImage");

smallThumbs[0].classList.add("active");

smallThumbs.forEach((img) => {
  img.addEventListener("click", function () {
    if (this.classList.contains("active")) return;
    smallThumbs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    bigImage.classList.add("fade-in");
    setTimeout(() => {
      bigImage.src = this.src;
      bigImage.classList.remove("fade-in");
    }, 400);
  });
});


const second = document.getElementById("sec")
const minite = document.getElementById("min")
const hour = document.getElementById("hour")
let sec = 60, min = 10 , h = 1
setInterval(() => {
    second.innerHTML = sec
    minite.innerHTML = min
    hour.innerHTML = h
    if(sec > 0){
        sec--
    }
    else{
      min--,
      sec = 60;
      if(min == 0){
      h--,
      min = 60
    }
  }
}, 1000);


