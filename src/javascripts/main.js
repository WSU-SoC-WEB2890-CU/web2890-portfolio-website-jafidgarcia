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




let xPos = 0;

gsap.timeline()
    .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/600/400/)',
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden'
    })    
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    .add(()=>{
      $('.img').on('mouseenter', (e)=>{
        let current = e.currentTarget;
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
      })
      $('.img').on('mouseleave', (e)=>{
        gsap.to('.img', {opacity:1, ease:'power2.inOut'})
      })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring', {cursor:'grab'});
}


function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}