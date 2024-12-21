function changeBackgroundColor(element) {
    const colors = ['#ffdddd', '#ddffdd', '#ddddff', '#ffffdd', '#ddffff', '#ffd5e5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    element.style.backgroundColor = randomColor;
    element.style.borderColor = randomColor;
    element.style.borderWidth = '5px';
    element.style.borderStyle = 'solid'; 
    element.style.transition = 'background-color 0.5s, border-color 0.5s';

    const audio = new Audio('audio2.mp3'); 
    audio.play();

    alert('Anda mengklik: ' + element.querySelector('strong').innerText);
}

document.querySelectorAll('.place, .food-item, .topic').forEach(item => {
    item.addEventListener('click', () => changeBackgroundColor(item));
}
function changeBackgroundColor() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f0e68c', '#ff33a1', '#33fff5', '#8e44ad', '#e74c3c', '#f1c40f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}
function changeBackgroundColor(event) {
    event.stopPropagation();

    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f0e68c', '#ff33a1', '#33fff5', '#8e44ad', '#e74c3c', '#f1c40f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}

document.body.onclick = function() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f0e68c', '#ff33a1', '#33fff5', '#8e44ad', '#e74c3c', '#f1c40f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const body = document.body;

    // Change background color dynamically
    let colors = ["#2b5876", "#4e4376", "#ff6b6b", "#ffd700", "#6a5acd"];
    let currentColor = 0;

    setInterval(() => {
        body.style.background = `linear-gradient(120deg, ${colors[currentColor]}, ${colors[(currentColor + 1) % colors.length]})`;
        currentColor = (currentColor + 1) % colors.length;
    }, 4000);

    // Add hover effect to container border
    container.addEventListener("mouseover", () => {
        container.style.border = `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
    });

    container.addEventListener("mouseleave", () => {
        container.style.border = "none";
    });
});
// Apply interactive effects for hovering text
const headersAndParagraphs = document.querySelectorAll('h1, h2, p, li');

headersAndParagraphs.forEach(element => {
    element.style.transition = 'all 0.3s ease';
    
    element.addEventListener('mouseover', () => {
        element.style.color = '#ff5722';
        element.style.textShadow = '2px 2px 8px rgba(255, 87, 34, 0.8)';
    });

    element.addEventListener('mouseout', () => {
        element.style.color = '';
        element.style.textShadow = '';
    });
});

// Scroll to sections smoothly when clicking on navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
