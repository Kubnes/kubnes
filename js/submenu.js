document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li");
    
    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const submenu = this.querySelector(".submenu");
            const rect = this.getBoundingClientRect();
            const parentRect = this.parentNode.getBoundingClientRect();
            submenu.style.left = (rect.left - parentRect.left + rect.width / 2 - submenu.offsetWidth / 2) + "px";
            submenu.style.top = (rect.bottom - parentRect.top) + "px";
        });
    });
});
