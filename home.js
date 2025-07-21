
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
const featuredBlogs = [
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
                                <img src="${blog.image}" alt="blog-1">
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

    console.log(cardsList)
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
    console.log(postList);
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
                                <div class="button-wrap">
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
                                    <div class="button-wrap">
                                        <button class="banner-button">DISCOVER NOW</button>
                                    </div>
                                </div>

                            </div>

                        </div>`

    banner.innerHTML = bannerList;

    console.log(banner)

}

createBanner(bannerSection, 'banner-container');


// fetching API


    let dataArr;

 fetch('https://687a124fabb83744b7eb4962.mockapi.io/api/learn/commerce-prodscts').then(res=> res.json()).then(data=> {
    dataArr = data
})

console.log(dataArr)