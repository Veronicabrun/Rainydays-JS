//document.addEventListener('DOMContentLoaded', () => {
  //  const urlParams = new URLSearchParams(window.location.search);
    //const productId = urlParams.get('id');

    //const apiUrl = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

    //async function getProductDetails() {
        //try {
            //const response = await fetch(apiUrl);
            //const result = await response.json();

            //const loadingIndicator = document.querySelector('.loading-indicator');
            //const productDetails = document.querySelector('.product-card product-featured');

            //for (let i = 0; i < 5; i++) {
                //setTimeout(() => {
                    //loadingIndicator.style.display = 'none';
                    //productDetails.style.display = 'block';

                    //const productImage = document.getElementById('product-image');
                    //const productTitle = document.getElementById('product-title');
                    //const productPrice = document.getElementById('product-price');

                    //productImage.src = result.image;
                    //productImage.alt = result.title;
                    //productTitle.textContent = result.title;
                    //productPrice.textContent = result.price;
                //}, 1000 * i);
            //}
        //} catch (error) {
          //  console.log(error);
        //}
    //}

    //getProductDetails();
//});


document.addEventListener('DOMContentLoaded', async function() {
    // This function waits for the DOM content to fully load before executing any JavaScript code.

    const productListContainer = document.getElementById('product-image image-specification');
    const loadingIndicator = document.getElementById('loading-indicator');

    // `productListContainer` is a reference to an HTML element with the ID 'product-list'. This is where we will display the list of products.
    // `loadingIndicator` is a reference to an HTML element with the ID 'loading-indicator'. This element will be used to show a loading message while we fetch data from the API.

    // Function to fetch products from API
    async function fetchProducts() {
        // This is an asynchronous function that will fetch the products from the API.

        try {
            const response = await fetch('https://api.noroff.dev/api/v1+id');
            // Here, we use the `fetch` function to make a GET request to the API's endpoint that provides a list of products.
            // `await` is used to wait for the response to come back before proceeding.

            const data = await response.json();
            // Once we get the response, we use `await` again to parse it as JSON. This gives us an array of product objects.

            loadingIndicator.style.display = 'none';
            // After we receive the data, we hide the loading indicator.

            for (let i = 0; i < data.length; i++) {
                // We use a `for` loop to iterate over each product in the `data` array.
                // `let i = 0` initializes a loop variable `i` to 0.
                // `i < data.length` defines the condition for the loop to continue.
                // `i++` increments `i` after each iteration.

                const product = data[i];
                // `product` now holds the current product object in the loop.

                const productItem = document.createElement('div');
                // We create a new HTML `div` element to represent each product in the list.

                productItem.innerHTML = `<a href="jacket.html?id=${product.id}">${product.name}</a>`;
                // We set the inner HTML of the `div` element. It contains an anchor (`<a>`) element that links to the product details page.
                // The `href` attribute includes a query string parameter `id` with the value of the product's ID.

                productListContainer.appendChild(productItem);
                // We append the newly created `div` element (representing the product) to the `productListContainer`.
            }
        } catch (error) {
            loadingIndicator.innerHTML = 'Error fetching data';
            // If an error occurs during the fetching process, we catch it and display an error message in the loading indicator element.
        }
    }

    await fetchProducts();
    // Finally, we call the `fetchProducts` function. We use `await` to wait for the function to complete before moving on.
});
