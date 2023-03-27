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




///////////////////////////////////////////////////////////////////////
// creates fade in effect for all sections when they are scrolled past
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  // Add a class to each section to set up the animation
  section.classList.add('fade-in');

  // Add an ID to each section to use with IntersectionObserver
  section.id = `section-${index + 1}`;

  // Create an IntersectionObserver for each section
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('show');
      }
    });
  });

  // Observe the section
  observer.observe(section);
});
///////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////
// for projects page carousel
const hoverDivs = document.querySelectorAll(".projectOverview");
const imageDiv = document.getElementById("displayProjectOverview");
const hideThis = document.getElementById("hideThis");

// Loop through each projectOverview and add event listeners
hoverDivs.forEach((hoverDiv) => {
  hoverDiv.addEventListener("mouseover", () => {
    // Get the path to the image from the data-image
    const imagePath = hoverDiv.getAttribute("data-image");
    // hides instruction message
    hideThis.style.display = ("none");
    // Set the background image of the image div
    imageDiv.style.backgroundImage = `url(${imagePath})`;
  });

  hoverDiv.addEventListener("mouseout", () => {
    // Clear the background image of the image div
    imageDiv.style.backgroundImage = "";
  });
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


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

