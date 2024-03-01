const skillsLink = document.querySelector('nav a[href="#skills"]');

// Get the "Skills" section
const skillsSection = document.getElementById('skills');

// Add a click event listener to the "Skills" link
skillsLink.addEventListener('click', function(event) {
  // Prevent default behavior (linking to the section)
  event.preventDefault();

  // Toggle the visibility of the "Skills" section
  skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
});