// Smooth reveal animation

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .project-card, .skill-card, " +
    ".experience-card, .education-card, .contact-content"
);


if (!prefersReducedMotion && "IntersectionObserver" in window) {

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


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const element = entry.target;

                    element.classList.add("visible");

                    // After the animation ends, remove the reveal classes
                    // so the normal hover effects work again
                    setTimeout(() => {
                        element.classList.remove("reveal", "visible");
                    }, 800);

                    observer.unobserve(element);

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

}
