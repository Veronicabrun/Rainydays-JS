document.addEventListener('DOMContentLoaded',() => {
    const productContainer = document.querySelector('.products-container');
    //const loadingIndicator = document.getElementById('loading-indicator');
    const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';

async function getProduct() {
    try {
        const response = await fetch(apiUrl);
        const results = await response.json();

        console.log(results);

        productContainer.innerHTML = '';

        //loadingIndicator.style.display = 'none';

        for (let i = 0; i < results.length; i++) {
            if (i === 5) {
                break;
            }

            productContainer.innerHTML += `<div class="product-card product-featured">
            <a href="jacket.html?id=${results[i].id}">
            <img class="product__image" src="${results[i].image}" alt="${results[i].title}">
            </a>
            <h2>${results[i].title}</h2>
            <p class="product__price">${results[i].price}</p>
            </div>`;
        }
    } catch (error) {
        console.log(error);
        productContainer.innerHTML = message('error', error);
    }
}

getProduct();

});