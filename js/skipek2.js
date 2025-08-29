document.addEventListener("DOMContentLoaded", function() {
    var block4Image = document.querySelector(".block4 img");

    if (block4Image) {
        block4Image.addEventListener("click", function(event) {
            if (event.target === block4Image) {
                event.preventDefault();
                window.location.href = "bindy.html#kupowanie";
            }
        });
    }
});
