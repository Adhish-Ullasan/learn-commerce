const product = [
    {
        id: 1,
        image: "./assets/shoelow.jpg",
        price: "77.99",
        cart: "Add to cart",
        des: "UA Spawn Low"
    },
    {
        id: 2,
        image: "./assets/fanorak.jpg",
        price: "76.99",
        cart: "Add to cart",
        des: "The North Face Fanorack 2.0"
    },
    {
        id: 3,
        image: "./assets/sleepingbag.jpg",
        price: "299.99",
        cart: "Add to cart",
        des: "Small Sleeping Bag"
    },
    {
        id: 4,
        image: "./assets/jacket.jpg",
        price: "76.99",
        cart: "Add to cart",
        des: "WaterTight jacket"
    },
]

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get('id')


const getSelectedItem = (selectedId) => {

    return product.find((item)=> item.id.toString() === selectedId)
}

// getSelectedItem(productId)

const prodctData = getSelectedItem(productId)



const productContainer = document.getElementById('prodct-info')

productContainer.innerHTML = `
<div class="product-page">
<div class="product-side">
    <img src=${prodctData.image} />
</div>
<div class="des-side">
    <p>${prodctData.des}</p>
</div>
</div>

<div class="product-info">
<p >${prodctData.price}</p>
</div>

<div class="related-products">
<P>related products here</P>  
</div>`




// const singleProduct = (obj)=> {
//     const productParams = new URLSearchParams(window.Location.search).get(id)
// }