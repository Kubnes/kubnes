document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            const src = this.getAttribute("src");
            const alt = this.getAttribute("alt");
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            const img = document.createElement("img");
            img.src = src;
            img.alt = alt;
            lightbox.appendChild(img);
            document.body.appendChild(lightbox);
            lightbox.addEventListener("click", function() {
                lightbox.remove();
            });
        });
    });
});
