// Snowfall Animation
document.addEventListener("DOMContentLoaded", () => {
    const snowflakeCount = 100; // Number of snowflakes
    const body = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * 100+ "vw";
        snowflake.style.animationDuration = Math.random() * 3 + 7+ "s"; // Random fall speed
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random size
        snowflake.textContent = "❄";
        body.appendChild(snowflake);

        // Remove snowflakes after animation ends
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }

    // Keep adding snowflakes continuously
    setInterval(() => {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.textContent = "❄";
        body.appendChild(snowflake);

        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }, 300);
});

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 3; // Adjust visibility threshold
        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
});

