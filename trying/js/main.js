let nav = document.querySelector("#nav")
window.addEventListener("scroll", () => {
    if(this.window.scrollY > 500){
        nav.classList.add("fixed-top")
    }else{
        nav.classList.remove("fixed-top")
    }
})


// const smallThumbs = document.querySelectorAll(".small-thumb");
// const bigImage = document.getElementById("bigImage");

// smallThumbs[0].classList.add("active");

// smallThumbs.forEach((img) => {
//   img.addEventListener("click", function () {
//     if (this.classList.contains("active")) return;
//     smallThumbs.forEach((t) => t.classList.remove("active"));
//     this.classList.add("active");

//     bigImage.classList.add("fade-in");
//     setTimeout(() => {
//       bigImage.src = this.src;
//       bigImage.classList.remove("fade-in");
//     }, 400);
//   });
// });

//   const search = document.getElementById("#search");
//   const innerSearch = document.getElementById("#inner-search");
//   search.addEventListener("click", () => {
//       innerSearch.classList.remove("d-none");
//   })

// const search = document.querySelector("#search");
// const h = document.querySelector("#h");
// search.addEventListener("click", (e) => {
//   h.classList.remove("d-none");
// });

// const tabLinks = document.querySelectorAll(".nav-link");
// const tabPanes = document.querySelectorAll(".tab-pane");

// tabLinks.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();

//     tabLinks.forEach((l) => l.classList.remove("active"));
//     tabPanes.forEach((p) => p.classList.remove("show", "active"));

//     link.classList.add("active");

//     const targetId = link.getAttribute("href");
//     const targetPane = document.querySelector(targetId);

//     targetPane.classList.add("show", "active");
//   });
// });




