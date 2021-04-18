const productContainer = document.querySelector(".products");
const url = "https://anyadecourcy.no/wp-json/wc/store/products";



async function getProducts () {
    try{
        const response = await fetch(url);
        const details = await response.json();
        createHTML(details);
        console.log(details);
    }
    catch (error){
        console.log(error);
    }
}


getProducts ();


function createHTML(products){
    console.log(products);
    

    products.forEach(function(product){
    const sku = product.sku;
    console.log(sku);

    


    productContainer.innerHTML += 
    
    
    
    
    `<div class = "product">
            <a href="/product page/men-product_page.html?id=${product.id}">
                <img src = "${product.images[0].src}" alt="${product.name}">
                <h3>${product.name}</h3>
            </a>
            <p>${product.price_html}</p>
            <button>${product.add_to_cart.text}</button>
    </div>` ;
    })
}


