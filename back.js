const TELEGRAM_TOKEN = "8936022211:AAFOQR4J-q9AMQsYglu7mje8c87iXLInP6o";
const TELEGRAM_CHATID = "8614416084";

async function sendTelegram(message) {
  if (!message) return;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHATID,
          text: message.replace(/<br\s*\/?>/gi, "\n"),
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Example usage
sendTelegram("Hello<br>World");
