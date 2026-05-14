document.querySelector(".homepage").style.display = "block";
document.querySelector(".elementspage").style.display = "none";
document.querySelector(".colorpage").style.display = "none";

function addBounce(button) {
    button.classList.add("bounce");
    setTimeout(() => button.classList.remove("bounce"), 600);
}

function showPage(pageClass, button) {
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".elementspage").style.display = "none";
    document.querySelector(".colorpage").style.display = "none";
    
    const page = document.querySelector("." + pageClass);
    page.style.display = "block";
    page.classList.add("slide-in");
    setTimeout(() => page.classList.remove("slide-in"), 500);
    
    addBounce(button);
}

document.getElementById("home").addEventListener("click", function() {
    showPage("homepage", this);
});

document.getElementById("elements").addEventListener("click", function() {
    showPage("elementspage", this);
});

document.getElementById("color").addEventListener("click", function() {
    showPage("colorpage", this);
});

// Create the animated color wheel
const wheel = document.getElementById('wheel');
if (wheel && wheel.children.length === 0) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '200');
    svg.setAttribute('height', '200');
    const colors = ['#FF0000', '#FF4500', '#FF8C00', '#FFA500', '#FFFF00', '#ADFF2F', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#800080', '#DC143C'];
    for (let i = 0; i < 12; i++) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const angle = (i * 30 - 90) * Math.PI / 180;
        const nextAngle = ((i + 1) * 30 - 90) * Math.PI / 180;
        const x1 = 100 + 100 * Math.cos(angle);
        const y1 = 100 + 100 * Math.sin(angle);
        const x2 = 100 + 100 * Math.cos(nextAngle);
        const y2 = 100 + 100 * Math.sin(nextAngle);
        const largeArc = 0;
        const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`;
        path.setAttribute('d', pathData);
        path.setAttribute('fill', colors[i]);
        svg.appendChild(path);
    }
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('cx', '100');
    center.setAttribute('cy', '100');
    center.setAttribute('r', '20');
    center.setAttribute('fill', 'rgb(148, 126, 182)');
    svg.appendChild(center);
    wheel.appendChild(svg);
}


