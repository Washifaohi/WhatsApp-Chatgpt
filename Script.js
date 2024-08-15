document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message sent';
        newMessage.textContent = messageText;
        chatMessages.appendChild(newMessage);
        input.value = ''; // Clear input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
});

// Allow sending message with Enter key
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});