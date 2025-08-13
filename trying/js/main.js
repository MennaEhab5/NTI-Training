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

//   const search = document.getElementById("#search");
//   const innerSearch = document.getElementById("#inner-search");
//   search.addEventListener("click", () => {
//       innerSearch.classList.remove("d-none");
//   })

const search = document.querySelector("#search");
const h = document.querySelector("#h");
search.addEventListener("click", (e) => {
  h.classList.remove("d-none");
});
