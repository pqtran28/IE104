// sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
//showmore
document.addEventListener("DOMContentLoaded", () => {
    const showmore = document.querySelectorAll(".show_more");

    showmore.forEach(button => {
        button.addEventListener("click", () => {
            const section = button.closest(".product_section");
            const moreProducts = section.querySelector(".more_prod");
            if (moreProducts) {
                moreProducts.style.display = "grid";
                button.style.display = "none"; 
            }
        });
    });
});
//filter
document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("filter_btn");
    const filterMenu = document.querySelector(".filter_menu");
    const filterButton = document.querySelectorAll(".filter_button button");

    filterBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
            filterMenu.classList.remove("active");
        }
    });

    filterButton.forEach(btn => {
        btn.addEventListener("click", () =>
        filterMenu.classList.remove("active"))
    });
});
