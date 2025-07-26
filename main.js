

// Add Header to other pages

document.addEventListener("DOMContentLoaded",function(){

    

    fetch('header.html')
            .then(response => response.text())
            .then(data=>{

                document.getElementById('header-placeholder').innerHTML = data;
            })

            .catch(error=> console.error("Error Loading Header:",error));


})


//Add Footer to other pages

document.addEventListener("DOMContentLoaded",function(){

    fetch ('footer.html')
            .then(response => response.text())
            .then(data => {
                this.getElementById('footer-placeholder').innerHTML = data
            })

            .catch(error => console.error("Error loading Footer:",error))
})
