// Pobieranie elementów DOM
const popup = document.getElementById('popup');
const showPopupBtn = document.getElementById('show-popup-btn');
const closeBtn = document.querySelector('.close-btn');

// Funkcja otwierająca popup
function showPopup() {
    popup.style.display = 'flex'; // Wyświetl popup
}

// Funkcja zamykająca popup
function closePopup() {
    popup.style.display = 'none'; // Ukryj popup
}

// Nasłuchiwanie kliknięcia przycisku
showPopupBtn.addEventListener('click', showPopup);

// Nasłuchiwanie kliknięcia przycisku zamknięcia
closeBtn.addEventListener('click', closePopup);

// Nasłuchiwanie kliknięcia poza popupem (aby zamknąć)
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});
