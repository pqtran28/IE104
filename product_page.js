// sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    //showmore
    const showmore = document.querySelectorAll(".show_more");
    showmore.forEach(function(button) {
        button.addEventListener("click", function() {
            const section = button.closest(".product_section");
            const moreProducts = section.querySelector(".more_prod");
            if (moreProducts) {
                moreProducts.style.display = "grid";
                button.style.display = "none"; 
            }
        });
    });

    //filter
    const filterBtn = document.getElementById("filter_btn");
    const filterMenu = document.querySelector(".filter_menu");
    const filterButton = document.querySelectorAll(".filter_button button");

    filterBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        filterMenu.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
            filterMenu.classList.remove("active");
        }
    });

    filterButton.forEach(function(btn) {
        btn.addEventListener("click", function(){
        filterMenu.classList.remove("active");
        });
    });
});
