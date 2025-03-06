const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Produk telah ditambahkan ke keranjang!");
    });
});
