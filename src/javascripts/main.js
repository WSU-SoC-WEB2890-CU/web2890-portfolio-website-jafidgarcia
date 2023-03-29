//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import * as fontawesome from "@fortawesome/fontawesome-free/js/all"



///////////////////////////////////////////////////////////////////////////////
// for projects page carousel 
// Attempt 3. I created 6 images that are hidden by default in the html that are only displayed when
// the trigger is hovered over. This images are indeed deployed in the assets folder.
function showImage(idName) {
  // hide all images
  document.querySelectorAll('#image-1, #image-2, #image-3, #image-4, #image-5, #image-6').forEach(function(img) {
    img.style.display = 'none';
  });
  // show the corresponding image
  var imageName = idName.replace('trigger-', 'image-');
  var image = document.querySelector('#' + imageName);
  image.style.display = 'block';
}

document.querySelectorAll('#trigger-1, #trigger-2, #trigger-3, #trigger-4, #trigger-5, #trigger-6 ').forEach(function(trigger) {
  trigger.addEventListener('mouseover', function() {
    showImage(trigger.id);
  });
});
/////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////// 




/////////////////////////////////////////////////////////////////////////////// 
// FOR SLIDE IN EFFECT
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
///////////////////////////////////////////////////////////////////////




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
//  attempt #1
// Original attempt that worked perfectly with my array in the localhost live view but
// failed once deployed. imageURLs paths were not being included in the assets folder as images. 
// keeping this code partial just so that the hideThis functionality still works but the changing image
// functionality as the top of this file now under attempt #3

// const imageUrls = [
//   "../images/project1/Project1MainImg.png",
//   "../images/project2/Project2MainImg.png",
//   "../images/project3/Project3MainImg.png",
//   "../images/project4/Project4MainImg.png",
//   "../images/project5/Project5MainImg.png",
//   "../images/project6/Project6MainImg.png"
// ];


const hoverDivs = document.querySelectorAll(".projectOverview");
// const imageDiv = document.getElementById("displayProjectOverview");
const hideThis = document.getElementById("hideThis");

// Loop through each projectOverview and add event listeners
hoverDivs.forEach((hoverDiv) => {
  hoverDiv.addEventListener("mouseover", () => {
    // Get the path to the image from the data-image
    // const imageUrl = imageUrls[index];

    // hides instruction message
    hideThis.style.display = ("none");

        // Set the src attribute of the image element
        // imageDiv.setAttribute("src", imageUrl);
  });

  // hoverDiv.addEventListener("mouseout", () => {
  //   // Clear the background image of the image div

  //   // imageDiv.style.backgroundImage = "";
  //     imageDiv.setAttribute("src", "");
  // });
});



/////////////////////////////////////////////////////////////////////////////// 
// attempt #2

// Tried using createElement to create the images in the DOM but still that not work
// when I deployed. The 6 images were still not being included in the assets folder of the dist folder

 // Get the div elements to listen for hover events
//  const imageContainers = document.querySelectorAll('[id^="projectMainImg"]');

//  // Create a new image element
//  const newImage = document.createElement('img');
 
//  // Add an event listener to each div element
//  imageContainers.forEach(container => {
//    container.addEventListener('mouseover', () => {
//      // Set the src attribute of the image based on the div's id
//      const imageSrc = `../images/${container.id}.png`;
//      newImage.src = imageSrc;
 
//      // Add the image to the display container
//      const displayImage = document.getElementById('displayImage');
//      displayImage.innerHTML = '';
//      displayImage.appendChild(newImage);
//    });
//  });
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////