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

  // Delayed response
  setTimeout(() => {
    if (answer.toLowerCase().includes("great")) {
      generateChatBubble("Bot: Who all did you talk to?", false);
    } else if (answer.toLowerCase().includes("friends and family")) {
      generateChatBubble("Bot: Any good experience?", false);
    } else if (answer.toLowerCase().includes("horrible")) {
      generateChatBubble("Bot: I'm very sorry. Your mother was just afraid about you. I'm sure you had worked hard. Now cheer up, it was just an exam. Well, there is always something good in a bad day. Tell me, did you help anyone today?", false);
    } else if (answer.toLowerCase().includes("yes")) {
      generateChatBubble("Bot: That is such a sweet gesture, you are a great human being! These interpersonal skills will take you a long way in life!", false);
    } else {
      generateChatBubble("Bot: Tell me about your day?", false);
    }

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
