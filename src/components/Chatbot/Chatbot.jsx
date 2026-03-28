import  { useState } from "react";
import "./Chatbot.css";
import { skills, projects, cv } from "../../Data";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm your portfolio assistant. Ask me about skills, experience, projects, or contact details.",
    },
  ]);
  const [input, setInput] = useState("");

  const addMessage = (from, text) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const calculateResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("skill")) {
      const list = skills.map((s) => s.name).join(", ");
      addMessage("bot", `My skills include: ${list}`);
    } else if (lower.includes("experience")) {
      const exps = cv
        .filter((v) => v.category === "experience")
        .map(
          (v) => `${v.title} at ${v.subtitle} (${v.date})`,
        )
        .join("; ");
      addMessage("bot", exps || "No experience listed.");
    } else if (lower.includes("contact")) {
      addMessage(
        "bot",
        "You can email me at manojamir2911@gmail.com or phone +91-9597388699. Location: Chennai, Tamil nadu, India.",
      );
    } else if (lower.includes("project") || lower.includes("work")) {
      // user asking generally about projects
      const list = projects.map((p) => p.title).join(", ");
      addMessage("bot", `Here are my projects: ${list}`);
    } else {
      // check if user mentioned a specific project title
      const found = projects.find((p) =>
        lower.includes(p.title.toLowerCase()),
      );
      if (found) {
        addMessage("bot", `${found.title}: ${found.description}`);
      } else {
        addMessage(
          "bot",
          "Sorry, I didn't understand. Try asking about skills, experience, projects, or contact details.",
        );
      }
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    addMessage("user", userMsg);
    calculateResponse(userMsg);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Ask me something..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
