
// Home Blogs

const blogPost = [
    {
        image:"./assets/blog-1.jpg",
        date: "June 2024",
        comments: "0",
        title: "Sed adipisicing ornare",
        readmore: "Read More"
    },
    {
        image:"./assets/blog-2.jpg",
        date: "June 2024",
        comments: "1",
        title: "Aenean dignissim pellentessque",
        readmore: "Read More"
    },
    {
        image:"./assets/blog-3.jpg",
        date: "June 2024",
        comments: "0",
        title: "Quisque volupat mattis",
        readmore: "Read More"
    }
]
    const blogContainer = document.getElementById("blog-container");
    let cardsList = ''

    blogPost.forEach((blog)=>{
        
        cardsList += `<div class="card-1">
                            <div class="card-img-wrap">
                                <img src="${blog.image}" alt="blog-1">
                            </div>
                            <div class="card-des">
                                <div class="date">
                                    <span>
                                        <a href="#">${blog.date}</a>,
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

const instagram = document.getElementById("instagram");
let postList = ''

instaPost.forEach((insta)=>{
postList += ` <div class="insta-wrap">
                        <img src=${insta.image} alt="insta1">
                    </div>`
})


console.log(postList);
instagram.innerHTML = postList;
instagram.classList.add("contianer");


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

const banner = document.getElementById("banner-container");
let bannerList = '';

bannerSection.forEach((homeBanner)=>{
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

banner.innerHTML = bannerList;

console.log(banner)
