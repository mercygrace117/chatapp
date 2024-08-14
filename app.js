const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const msg = e.target.elements.msg.value;
    
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">You <span>9:12pm</span></p>
    <p class="text">
        ${msg}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
    
    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});