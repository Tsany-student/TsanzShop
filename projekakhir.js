document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeSwitch = document.getElementById("toggle-theme");
    toggleThemeSwitch.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeSwitch.setAttribute("aria-label", "Mode Terang");
        } else {
            toggleThemeSwitch.setAttribute("aria-label", "Mode Gelap");
        }
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Produk telah ditambahkan ke keranjang!");
        });
    });
});
