document.addEventListener('DOMContentLoaded',() => {
    const productContainerHome = document.querySelector('.products-container-home');
    const loadingIndicator = document.querySelector('.loading-indicator');
    const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';

async function getProductHome() {
    try {
        const response = await fetch(apiUrl);
        const results = await response.json();

        console.log(results);

        productContainerHome.innerHTML = '';

        for (let i = 0; i < results.length; i++) {
            if (i === 5) {
                break;
            }

            productContainerHome.innerHTML += `<div class="product-card product-featured"</div> 
            <a href="detailsJacket.html?id=${results[i].id}">
            <img class="product__image" src="${results[i].image}" alt="${results[i].title}">
            </a>
            <h2>${results[i].title}</h2>
            <p class="product__price">${results[i].price}</p>
            </div>`;
        }

          loadingIndicator.style.display = 'none';

    } catch (error) {
        console.log("error");
        productContainerHome.innerHTML = displayErr("A error occurred");
    }
}

getProductHome();

});