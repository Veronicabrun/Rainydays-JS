document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const apiUrl = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

    async function getProductDetails() {
        try {
            const response = await fetch(apiUrl);
            const result = await response.json();

            const loadingIndicator = document.querySelector(".loading-indicator");
            const productDetails = document.querySelector(".product-card product-featured");


            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                   loadingIndicator.style.display = "none";

                    const productImage = document.getElementById("product-image");
                    const productTitle = document.getElementById("product-title");
                    const productGender = document.getElementById ("product-gender");
                    const productPrice = document.getElementById("product-price");
                    const productDescription = document.getElementById("product-description");

                    productImage.src = result.image;
                    productImage.alt = result.title;
                    productTitle.textContent = result.title;
                    productGender.textContent = result.gender;
                    productPrice.textContent = result.price;
                    productDescription.textContent = result.description;

                }, 1000 * i);

            }

        } catch (error) {
           console.log(error);
        }
    }

    getProductDetails();
     
});





  