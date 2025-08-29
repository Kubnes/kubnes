
    document.addEventListener('DOMContentLoaded', function () {
        var accButtons = document.querySelectorAll('.accordion-button');

        accButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Toggle 'active' class on the clicked button
                button.classList.toggle('active');

                // Toggle display of the associated content
                var content = button.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });
    });
