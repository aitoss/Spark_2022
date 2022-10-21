console.clear();
function active(x){
    const boxes = document.querySelectorAll('.nav-link');
        boxes.forEach(box => {
        box.style.color = '#7F7F7F';
        box.style.fontWeight="100";
        });
    x.style.cssText = "color: #FF5733 !important; font-weight: 600 !important";

};
active(document.querySelector('#s1'));

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#nav .container ul li");
console.log(sections);
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
// console.log((pageYOffset <= sectionTop-60));
    if (pageYOffset >= sectionTop-60) {
      current = section.getAttribute("id"); }
    //   console.log(current);
  });

// console.log(current)
let vall= document.querySelector(`.${current}`);
// console.log(vall);
if (vall !== null) {
    // console.log(vall)
    active(vall)
  }

};