 // Smooth reveal animation

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .experience-card, .education-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// Add reveal styles dynamically

const style = document.createElement("style");

style.innerHTML = `

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(style);