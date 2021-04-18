const detailContainer = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");


console.log(id);


const url = "https://anyadecourcy.no/wp-json/wc/store/products/" + id;
console.log(url);

async function getProductDetails() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);
        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

getProductDetails();

function createHtml(product) {
    detailContainer.innerHTML = `

            <h1>${product.name}</h1>

            <div class = "startDes">
                <img src = "${product.images[0].src}" alt="${product.name}">
                <div class = "descriptionProduct">${product.description}
                    <h3 >${product.price_html}</h3>
                    <button class="show-more" data-product="${product.id}">Add to cart</button>
                </div>
            </div>
            <div class = "endingDes">
            </div>
    `;
}


