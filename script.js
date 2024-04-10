const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

// Function to generate chat bubbles
function generateChatBubble(text, isUser) {
  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat-bubble");
  chatBubble.classList.add(isUser ? "user" : "bot");
  chatBubble.innerText = text;
  chatLog.appendChild(chatBubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to process user input with a delay
function processUserInputWithDelay() {
  const answer = userInput.value;
  generateChatBubble(`User: ${answer}`, true);

    userInput.value = "";
  }, 2000); // 3 seconds delay
}

// Event listener for send button
sendButton.addEventListener("click", processUserInputWithDelay);

// Event listener for user pressing Enter key
userInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    processUserInputWithDelay();
  }
});

// Initialize conversation
generateChatBubble("Bot: Tell me about your day?", false);
