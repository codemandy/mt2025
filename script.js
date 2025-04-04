// Simple script for any interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Project filtering functionality
function filterProjectsByYear(year) {
  // Get all projects
  const projects = document.querySelectorAll('.project');
  let foundProjects = false;
  
  // Loop through each project
  projects.forEach(project => {
    // Get the year from the project info
    const projectYear = project.querySelector('.project-info p:first-of-type').textContent.trim();
    
    // Show or hide based on the selected year
    if (year === 'all' || projectYear === year) {
      project.style.display = 'flex';
      foundProjects = true;
    } else {
      project.style.display = 'none';
    }
  });
  
  // Show message if no projects found
  const noProjectsMessage = document.getElementById('no-projects-message');
  if (!foundProjects && noProjectsMessage) {
    noProjectsMessage.style.display = 'block';
  } else if (noProjectsMessage) {
    noProjectsMessage.style.display = 'none';
  }
  
  // Update active year in the menu
  updateActiveYear(year);
}

// Update the active year in the menu
function updateActiveYear(year) {
  // Remove active class from all year links
  document.querySelectorAll('.year-filter').forEach(link => {
    link.classList.remove('active-year');
  });
  
  // Add active class to the selected year link
  if (year !== 'all') {
    document.querySelector(`.year-filter[data-year="${year}"]`)?.classList.add('active-year');
  }
}

// Show all projects and menus
function showProjects() {
  document.getElementById('head-menu2').classList.toggle('hidden');
  document.getElementById('head-menu3').classList.toggle('hidden');
}
