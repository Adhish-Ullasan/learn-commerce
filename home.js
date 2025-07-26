
// Home Blogs

const blogPost = [
    {
        image:"./assets/blog-1.jpg",
        date: "June 2024",
        comments: "0",
        title: "Sed adipisicing ornare",
        readmore: "READ MORE"
    },
    {
        image:"./assets/blog-2.jpg",
        date: "June 2024",
        comments: "1",
        title: "Aenean dignissim pellentessque",
        readmore: "READ MORE"
    },
    {
        image:"./assets/blog-3.jpg",
        date: "June 2024",
        comments: "0",
        title: "Quisque volupat mattis",
        readmore: "READ MORE"
    }
]

    /**
     * 
     * @param {Array} blogs - array of blog objects
     * @param {String} containerId - id value of the container for cards
     */
    const createBlogList = (blogs, containerId )=> {

    const blogContainer = document.getElementById(containerId);

    let cardsList = ''

    blogs.forEach((blog)=>{
        
        cardsList += `<div class="card-1">
                            <div class="card-img-wrap">
                                <img src="${blog.image}"  alt="blog-1">
                            </div>
                            <div class="card-des">
                                <div class="date">
                                    <span>
                                        <a href="#">${blog.date}</a>
                                        <a href="#">${blog.comments} Comments</a>
                                    </span>    
                                </div>
                                <div class="blog-title">
                                    <a href="#">${blog.title}</a>
                                </div>
                                <div class="read-more">
                                    <a href="#">${blog.readmore}</a>
                                </div>
                            </div>
                        </div>`
        
    })

    // console.log(cardsList)
    blogContainer.innerHTML = cardsList
    }

    createBlogList(blogPost, 'blog-container')

    

// Home InstaPost    


const instaPost = [
    {
        image:"./assets/insta-1.jpg"
    },

    {
        image:"./assets/insta-2.jpg"
    },

    {
        image:"./assets/insta-3.jpg"
    },

    {
        image:"./assets/insta-4.jpg"
    },

    {
        image:"./assets/insta-5.jpg"
    },

]

const createInstaPost = (insta, instaContainer)=>{
    const instagram = document.getElementById(instaContainer);
    let postList = ''

    insta.forEach((instaPic)=>{
    postList += ` <div class="insta-wrap">
                            <img src=${instaPic.image} alt="insta1">
                        </div>`
    })
    // console.log(postList);
    instagram.innerHTML = postList;
    instagram.classList.add("contianer");
}

createInstaPost(instaPost, 'instagram');



// Home Banner


const bannerSection = [
    {
      image: "./assets/banner1.jpg",
      deal: "ONLINE MEGA DEAL",
      h4 : "CAMPING GEAR & ACCESSORIES",
      button :"SHOP NOW"

    },

    {
      image: "./assets/bannrer2.jpg",
      deal: "LIGHTNING DEALS",
      h4 : "SPORTS & OUTDOORS",
      button :"SHOP NOW"

    }
    
]

const createBanner = (banner1 , bannerContainer) => {
    const banner = document.getElementById(bannerContainer);
    let bannerList = '';

    banner1.forEach((homeBanner)=>{
        bannerList += `<div class ="banner-wrap">
                            <img src=${homeBanner.image} alt="banner1">
                            <div  class="des-box">
                                <div class="banner-p">
                                    <P>${homeBanner.deal}<P>
                                </div>
                                <div class="banner-h4">
                                <h4>${homeBanner.h4}<h4>
                                </div>
                                <div class="button-cover">
                                    <button class="banner-button">${homeBanner.button}</button>
                                </div>
                            </div>


                        </div>`
    });


    bannerList += `<div class ="banner-wrap">
                            <img src="./assets/banner3.jpg" alt="banner3">
                            <div class="banner-3">
                                <div  class="des-box">
                                    <div class="banner-p">
                                        <P>SUMMER</P>
                                    </div>
                                    <div class="banner-h4">
                                        <h4>CLEARENCE</h4>
                                    </div>
                                    <div class="sale-banner">
                                        <img src="./assets/50percent.png" alt="sale50">
                                    </div>
                                    <div class="banner-p2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in corrupti veniam beatae perspiciatis aperiam nobis, nemo quam blanditiis minus.</p>
                                    </div>
                                    <div class="button-cover">
                                        <button class="banner-button">DISCOVER NOW</button>
                                    </div>
                                </div>

                            </div>

                        </div>`

    banner.innerHTML = bannerList;

    // console.log(banner)

}

createBanner(bannerSection, 'banner-container');


// video


const btn = document.getElementById("playbutton");

btn.addEventListener("submit" , function(){
    const vid = document.getElementById("video-file");
    vid.classList.remove('hidden');
    vid.classList.add('show');
})


// bset selling products


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
const bestSeller = (pCard, pContainer) => {
    const productContainer = document.getElementById(pContainer);
    let productList ='';
    pCard.forEach((products)=>{
        productList += `<div id="${products.id}" class='product-card'>
                    <img src="${products.image}" alt="">
                    <div>
                        <a href="#">${products.des}</a><br>
                        <bdi><span>$</span>${products.price}</bdi>
                    </div>
                     <div class="button-cover">
                       <div>
                        <button class="banner-button">${products.cart}</button>
                        </div>
                    </div>
                </div>`
    })
    productContainer.innerHTML = productList;
}

bestSeller(product, 'product-container');


// select an element 

const productCards = document.querySelectorAll('.product-card')



productCards.forEach(el=> {
    el.addEventListener('click', (event)=> {
        event.preventDefault();
        const productId = event.currentTarget.id

        var url = new URL("http://127.0.0.1:5501/singleproduct.html");

        url.searchParams.append('id', productId);
        

        window.location.href = url

        

        // console.log(window.location)
        // const urlParams = new URLSearchParams(window.location.search);

        // urlParams.set('id', productId);
        // window.location.search = urlParams;

    })

})

// select an element 

//  // featured products


const fProduct = [
    {
        id: 5,   
        image: "./assets/yamamoto.jpg",
        price: "$239.99-$250.00",
        cart: "Add to cart",
        des: "Y-3 by Yohji Yamamoto"
    },
    {
        id: 6,
        image: "./assets/product-bagpack2.jpg",
        price: "67.50",
        cart: "Add to cart",
        des: "Osprey Tailia"
    },
    {
        id: 7,
        image: "./assets/product-shoe2.jpg",
        price: "127.99",
        cart: "Add to cart",
        des: "On Cloudflyer"
    },
    {
        id: 8,
        image: "./assets/product-bra.jpg",
        price: "34.99",
        cart: "Add to cart",
        des: "Alphaskin Sports Bra"
    },
    {
        id: 9,
        image: "./assets/product-shoe.jpg",
        price: "52.66",
        cart: "Add to cart",
        des: "Ignite Limitless Leather"
    }

]
const featProduct = (fCard, fContainer) => {
    const fproductContainer = document.getElementById(fContainer);
    let fproductList ='';
    fCard.forEach((fproducts)=>{
        fproductList += `<div ${fproducts.id}>
                    <img src="${fproducts.image}" alt="">
                    <div>
                        <a href="#">${fproducts.des}</a><br>
                        <bdi><span>$</span>${fproducts.price}</bdi>
                    </div>
                     <div class="button-cover">
                       <div>
                        <button class="banner-button">${fproducts.cart}</button>
                        </div>
                    </div>
                </div>`
    })
    fproductContainer.innerHTML = fproductList;
    // console.log(fproductList);
}

bestSeller(fProduct, 'f-container');



