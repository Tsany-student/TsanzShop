document.addEventListener("DOMContentLoaded", function () {
    // Mode Gelap/Terang
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeButton.textContent = "Mode Terang";
        } else {
            toggleThemeButton.textContent = "Mode Gelap";
        }
    });

    // Accordion
    const accordionButtons = document.querySelectorAll(".accordion-btn");
    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
