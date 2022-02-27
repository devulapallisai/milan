let nav = document.getElementById("navbar");
let scrollup = document.getElementById("clicktoup");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 360) {
    if (window.scrollY > window.innerHeight / 20) {
      if (!nav.classList.contains("fixed-top")) {
        nav.classList.add("fixed-top");
      }
    } else {
      if (nav.classList.contains("fixed-top")) {
        nav.classList.remove("fixed-top");
      }
    }
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 20) {
    scrollup.style.display = "flex";
  } else {
    scrollup.style.display = "none";
  }
});
// Scroll on fixedtop or not
scrollup.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
function handleclickchange(){
  let d=document.getElementById('toggler');
  let target=document.getElementsByClassName('targetit')[0];
  d.classList.toggle("active");
  console.log('Pressed');
  if (d.classList.contains('active')) {
    target.style.display = "flex";
  } else {
    target.style.display = "none";
  }
}