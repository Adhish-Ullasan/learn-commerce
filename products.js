const productDetails = [

        {
                image : "./assets/product-bra.jpg",
                itemName : "Alphaskin Sports Bra",
                price : {

                        currency:"$",
                        amount: 34.99
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/product-shoe.jpg",
                itemName : "Ignite Limitless Leather",
                price : {

                        currency:"$",
                        amount: 52.66-62.55
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/product-bagpack.jpg",
                itemName : "Marmot Empire Daypack",
                price : {

                        currency:"$",
                        amount: 59.99
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/product-shoe2.jpg",
                itemName : "On Cloudflyer",
                price : {

                        currency:"$",
                        amount: 127.99
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/product-bagpack2.jpg",
                itemName : "Osprey Tailia",
                price : {

                        currency:"$",
                        amount: 67.50,
                        previousAmount: "was 150"
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/sleepingbag.jpg",
                itemName : "Small Sleeping Bag",
                price : {

                        currency:"$",
                        amount: 299.99,
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/fanorak.jpg",
                itemName : "The North Face Fanorack 2.0",
                price : {

                        currency:"$",
                        amount: 76.99,
                        previousAmount: "was 109.99"
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/helmet.jpg",
                itemName : "Troy Lee Designs A1 MIPS Bike Helmet",
                price : {

                        currency:"$",
                        amount:150.00,
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/shoelow.jpg",
                itemName : "UA Spawn Low",
                price : {

                        currency:"$",
                        amount: 77.99,
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/jacket.jpg",
                itemName : "WaterTight jacket",
                price : {

                        currency:"$",
                        amount: 76.99,
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },

        {
                image : "./assets/yamamoto.jpg",
                itemName : "Y-3 by Yohji Yamamoto",
                price : {

                        currency:"$",
                        amount: 239.99 - 250.00,
                },
                button:"ADD TO CART",
                checkbox:"Add to wishlist"
        },
]

const productList = (items , containerid) => {

        const productContainer = document.getElementById(containerid)

        let itemDetails = ''

        items.forEach((item) => {

                itemDetails += `<div class = "firstItem">
                                        <img src="${item.image}"alt="">
                                        <div>
                                                <a href="#">${item.itemName}</a><br>
                                                <bdi><span>$</span>${item.price.amount}</bdi>
                                        </div>
                                        <div class="primaryButton">
                                                <div>
                                                        <button>Add to cart</button>
                                                </div>
                                        </div>
                                </div>`
                
        });

        productContainer.innerHTML = itemDetails

}

productList(productDetails,'productItems')