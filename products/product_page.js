// sidebar
function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function(){
    //showmore
    const showmore = document.querySelectorAll(".show-more");
    showmore.forEach(function(button){
        button.addEventListener("click", function(){
            const section = button.closest(".product-section");
            const moreProducts = section.querySelector(".more-prod");
            if (moreProducts){
                moreProducts.style.display = "grid";
                button.style.display = "none"; 
            }
        });
    });

    //filter
    const filterBtn = document.getElementById("filter-btn");
    const filterMenu = document.querySelector(".filter-menu");
    const filterButton = document.querySelectorAll(".filter-button button");
    filterBtn.addEventListener("click", function(e){
        e.stopPropagation();
        filterMenu.classList.toggle("active");
    });

    document.addEventListener("click", function(e){
        if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)){
            filterMenu.classList.remove("active");
        }
    });

    filterButton.forEach(function(btn){
        btn.addEventListener("click", function(){
        filterMenu.classList.remove("active");
        });
    });
});

//love_prod
function toggleFav(element){
    const img = element.querySelector(".love-icon");
    const isactive = element.classList.toggle("active");
    if (isactive){
        img.src = "/image_prod/heart_full.svg";
    }
    else{
        img.src = "/image_prod/heart.svg";
    }
}

// update_price_for_product_page
function updateprice(size){
    const product = event.target.closest(".product");
    const small = product.querySelector(".small");
    const big = product.querySelector(".big");
    small.classList.remove("active");
    big.classList.remove("active");
    choosevolume(size)
    //change_price
    function choosevolume(element){
        const price = product.querySelector(".price");
        if (element == "small"){
            price.textContent = "200.000 VND";
            small.classList.add("active");
        }
        else{
            price.textContent = "350.000 VND";
            big.classList.add("active");
        }
    }
}

// update_price_for_deal_page
function updateprice_deal(size){
    const product = event.target.closest(".deal-product");
    const small = product.querySelector(".small");
    const big = product.querySelector(".big");
    const old_price = product.querySelector(".old-price");
    const new_price1 = product.querySelector(".sale-price1");
    const new_price2 = product.querySelector(".sale-price2");
    small.classList.remove("active");
    big.classList.remove("active");
    choosevolume(size)
    function choosevolume(element){
        if (element == "small"){
            if(new_price1){
                new_price1.textContent = "180.000 VND";
            }
            else{
                new_price2.textContent = "160.000 VND";
            }
            old_price.textContent = "200.000 VND";
            small.classList.add("active");
        }
        else{
            if(new_price1){
                new_price1.textContent = "315.000 VND";
            }
            else{
                new_price2.textContent = "280.000 VND";
            }
            old_price.textContent = "350.000 VND";
            big.classList.add("active");
        }
    }
}
