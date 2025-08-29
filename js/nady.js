document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.table-of-contents a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Przesunięcie, aby nie zakrywać tytułu przez nagłówek
                    behavior: 'smooth'
                });
            }
        });
    });
});
