const product = [
    {
        id: 1,
        image: "./assets/shoelow.jpg",
        image2: "./assets/shoelow2.jpg",
        image3: "./assets/shoelow3.jpg",
        price: "$77.99",
        cart: "Add to cart",
        des: "UA Spawn Low",
        content :"Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi i",
        category :"Jackets"
    },
    {
        id: 2,
        image: "./assets/fanorak.jpg",
        image2: "./assets/fanorak2.jpg",
        image3: "./assets/fanorak3.jpg",
        price: "$76.99",
        cart: "Add to cart",
        des: "The North Face Fanorack 2.0",
        content :"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
        category :"Jackets"
    },
    {
        id: 3,
        image: "./assets/sleepingbag.jpg",
        image2 :"./assets/sleeping-bag-1.jpg",
        image3: "./assets/sleepingbag.jpg",
        price: "$299.99",
        cart: "Add to cart",
        des: "Small Sleeping Bag",
        content :"Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi i",
        category: "Accessories",
    },
    {
        id: 4,
        image: "./assets/jacket.jpg",
        image2: "./assets/jacket2.jpg",
        image3: "./assets/jacket3.jpg",
        price: "$76.99",
        cart: "Add to cart",
        des: "WaterTight jacket",
        content :"Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi i",
        category: "Jackets"
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
        <img  class ="main-image"src=${prodctData.image} />
        <div class ="image-2">
        <img src ="${prodctData.image3}" alt ="image3">
        <img src ="${prodctData.image2}" alt ="image2">
        <img src="${prodctData.image}" alt="image1">
        </div>
    </div>

    <div class="des-side">
        <div class="p-title">
        <p>${prodctData.des}</p>
        </div>
        
        <div class="p-price">
        <p >${prodctData.price}</p>
        </div>

        <div class="p-content">
        <p>${prodctData.content}</p>
        </div>

        <div class="btn-wishlist">
            <div class="button-cover">
            <button class="banner-button"><span class="btn-logo"><img src="./assets/addtocart.png"/</span>Add To Cart</button>
            </div>

            <div class="button-cover">
            <button class="banner-button"><span class="btn-logo"><img src="./assets/favourite.png"/</span>Add To Cart</button>
            </div>
        </div>

        <div id="hrLine">
        </div>

        <div class="des-footer">
            <div>
            <a href="#">Category : ${prodctData.category}</a>
            </div> 
        </div>


    </div>

    
</div>
`




// const singleProduct = (obj)=> {
//     const productParams = new URLSearchParams(window.Location.search).get(id)
// }