document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });
});
