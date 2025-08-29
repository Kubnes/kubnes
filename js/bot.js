document.addEventListener('DOMContentLoaded', () => {
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatbotWindow = document.getElementById('chatbot');
    const closeChatbot = document.querySelector('.close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const optionButtons = document.querySelectorAll('.option-btn');
    let isWaiting = false; // Flag to track if bot is processing

    // Toggle chatbot window visibility
    chatbotBtn.addEventListener('click', () => {
        chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
    });

    // Close chatbot window
    closeChatbot.addEventListener('click', () => {
        chatbotWindow.style.display = 'none';
    });

    // Handle option button clicks
    optionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (isWaiting) {
                // Show notification if user tries to click while waiting

                return;
            }
            isWaiting = true; // Set flag to true

            const responseText = e.target.dataset.response;

            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `<p>You:</p><p>${responseText}</p>`;
            chatbotMessages.appendChild(userMessage);

            // Add loading dots animation
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.innerHTML = '<p>Chatbot:</p><div class="loading-dots"><span></span><span></span><span></span></div>';
            chatbotMessages.appendChild(botMessage);

            // Scroll to bottom of messages
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

            // Simulate bot thinking
            setTimeout(() => {
                // Remove loading dots
                botMessage.querySelector('.loading-dots').remove();

                // Set bot response
                let botResponse = '';
                switch (responseText) {
                    case 'Co to jest autoexec i jak go używać?':
                         botResponse = 'Autoexec to plik, który automatycznie ładuje twoje ustawienia po starcie gry. Możesz go edytować, by mieć zawsze swoje ulubione ustawienia.';
                        break;
                    case 'Co to jest config?':
                        botResponse = 'Config to plik z ustawieniami gry, który pozwala Ci dostosować sterowanie, wygląd i inne opcje.';
                        break;
                    case 'Jak mogę pobrać config do CS2?':
                        botResponse = 'Przejdź do zakładki "qbnez" i wybierz config, który chcesz pobrać.';
                        break;
                    case 'Pogubiłem się! Nie wiem gdzie co znaleźć':
                        botResponse = 'Wszystkie funkcje naszej strony są dostępne w menu głównym, które znajdziesz na górze strony. Przejrzyj kategorie i podkategorie, aby znaleźć to, czego potrzebujesz.';
                        break;
                    case 'Gdzie mogę znaleźć więcej informacji?':
                        botResponse = 'Więcej informacji znajdziesz na naszej stronie internetowej w sekcji FAQ.';
                        break;
                    default:
                        botResponse = 'Przepraszam, nie rozumiem tego pytania.';
                        break;
                }

                botMessage.innerHTML = `<p>Chatbot:</p><p>${botResponse}</p>`;
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                isWaiting = false; // Reset flag after response
            }, 3000); // Simulate delay for bot response
        });
    });

    // Function to show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove notification after 2 seconds
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // Function to hide the chatbot window
    function hideChatbot() {
        chatbotWindow.style.display = 'none';
    }

    // Function to check if click is outside the chatbot window
    function clickOutsideHandler(event) {
        if (!chatbotWindow.contains(event.target) && !chatbotBtn.contains(event.target)) {
            hideChatbot();
        }
    }

    // Add event listener to document for clicks
    document.addEventListener('click', clickOutsideHandler);
});