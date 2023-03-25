//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import * as fontawesome from "@fortawesome/fontawesome-free/js/all"


const hrElements = document.querySelectorAll('.moves');

hrElements.forEach((hrElements,index)=>{
hrElements.classList.add('slide-in');

hrElements.id = `id-${index + 1}`;

  // Create an IntersectionObserver for each section
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("show");
      }
    });
  });

  // Observe the section
  observer.observe(hrElements);
});




//  cant get to work correct
// const hrElements = document.querySelectorAll('.moves');

// function animateHrElements() {
//   hrElements.forEach(hrElement => {
//     const hrOffset = hrElement.getBoundingClientRect().top;
//     const hasAnimated = hrElement.classList.contains('slide-in');

//     if (!hasAnimated && window.scrollY >= hrOffset) {
//       hrElement.classList.add('slide-in');
//     }
//   });
// }

// window.addEventListener('scroll', animateHrElements);


// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add('show');
//     }
//   });
// });