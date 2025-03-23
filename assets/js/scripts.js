//Toggle_Navigation_Menu_on_Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let hasAnimatedSkills = false;

window.addEventListener('scroll', function() {

  const skillsSection = document.querySelector('.skills-section');
  
  if (!skillsSection) return;

  const sectionPos = skillsSection.getBoundingClientRect().top;

  const screenHeight = window.innerHeight;

  if (sectionPos < screenHeight - 100) {

    if (!hasAnimatedSkills) {
      const skillBars = document.querySelectorAll('.skill-progress');

      skillBars.forEach(bar => {

        const finalWidthMatch = bar.style.width.match(/(\d+)%/);
        if (!finalWidthMatch) return;
        const finalWidth = finalWidthMatch[1];


        bar.style.width = '0%';

    
        void bar.offsetWidth;


        bar.style.width = finalWidth + '%';
      });


      hasAnimatedSkills = true;
    }
  }
});
