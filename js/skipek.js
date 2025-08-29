document.addEventListener("DOMContentLoaded", function() {
    var block3Image = document.querySelector(".block3 img");

    if (block3Image) {
        block3Image.addEventListener("click", function(event) {
            if (event.target === block3Image) {
                event.preventDefault();
                window.location.href = "bindy.html#rece";
            }
        });
    }
});
