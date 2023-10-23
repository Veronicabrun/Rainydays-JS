//document.addEventListener('DOMContentLoaded', () => {
    const productListContainer = document.getElementById('jackets-details');
    const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';

    async function fetchProducts() {
        try {
            const response = await fetch(apiUrl);
            const products = await response.json();
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return null;
        }
    }

    async function displayProducts() {
        const products = await fetchProducts();

        if (products) {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <button class="viewDetails" data-id="${product.id}">View Details</button>
                `;
                productListContainer.appendChild(productElement);
            });

            const viewDetailsButtons = document.querySelectorAll('.viewDetails');
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', viewProductDetails);
            });
        } else {
            productListContainer.innerHTML = 'Error fetching products. Please try again later.';
        }
    }

    async function viewProductDetails(event) {
        const productId = event.target.dataset.id;

        try {
            const response = await fetch(`${apiUrl}/${productId}`);
            const productDetails = await response.json();

            console.log('Product Details:', productDetails);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    displayProducts();
//});









//const productContainer = document.querySelector(".all-jackets");

//const url = "https://api.noroff.dev/api/v1/rainy-days";


//async function getProduct() {
    
   // try {
        //const response = await fetch(url);
        //const results = await response.json();

    
        //productContainer.innerHTML = "";

        //const jackets = json.results;

        //jackets.forEach(function(jacket) {
           // productContainer.innerHTML += `<a href=details.html?id=${jackets.id} class="card">
                                // <div class="image"style=background-image: url(${jackets.background_image})"></div>
                                // <div class="details">
                                    // <h4 class="name"> ${jackets.name}</h4>
                                 //</div>`;


        //});
        
            
    //}    
   // catch(error) {
        //console.log(error)
        //productContainer.innerHTML = message("error", error);
    //}

//}

//getProduct();
//let keyword because the value of html will change inside the loop
//let html = "";

//for (let i = 0; i < jacket.length; i++) {
     //html = html + "<h1>" + jackets[i].type + "</h1>";

    // html = html + `<h1>${jackets[i].type}</h1>`;

    //div class jackets, er div'en du kan style i css
     //html += `<div class="jackets">
                //<h1>${jackets[i].type}</h1>
                //<p>info: ${jakets[i].info}</p>

              //</div>
              //`;

    //console.log(html);


//CSSContainerRule.innerHTML = html;


const url = "https://api.noroff.dev/api/v1/rainy-days";

const productContainer = document.querySelector(".show-jackets");

async function getProduct() {
    
     
         const response = await fetch(url);

         const results = await response.json();
  
         console.log(results);


        productContainer.innerHTML = "";

         for (let i = 0; i < product.length; i++) {
            console.log(product[i].text);

             if (i === 10) {
               break;
             }

             productContainer.innerHTML += `<div class="showjackets">${product[i].text}</div>`;
         }

}   

 catch (error) {
    console.log(error);
    productContainer.innerHTML = alert("error", error);
}

getProduct();
