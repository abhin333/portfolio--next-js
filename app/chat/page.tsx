"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiPaperAirplane } from "react-icons/hi";
import { BsChatDotsFill } from "react-icons/bs";
import { RiRobotLine } from "react-icons/ri";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
};

const BOT_RESPONSES: Record<string, string> = {
  default: "Thanks for reaching out! I'm Abhin's portfolio assistant. You can ask me about his skills, projects, or how to get in touch.",
  skills: "Abhin is proficient in **Next.js, React, TypeScript, Node.js, MongoDB, Firebase**, and more. He's experienced with both frontend and backend development.",
  projects: "Abhin has built several projects including:\n• **Easy Food** — MERN stack food ordering app\n• **Netflix Clone** — with TMDB API integration\n• **OLX Clone** — Firebase-powered classifieds\n• **Movie App** — with advanced search & filters",
  contact: "You can reach Abhin at **abhinpradeepan123@gmail.com** or through the contact form on this page. He usually responds within 24 hours!",
  experience: "Abhin has 1+ year of professional experience, having worked at **Kiebot** (4 months) and currently at **Tiqr Events** (2024–Present) as a Full-Stack Developer.",
  hello: "Hey there! 👋 I'm Abhin's AI assistant. How can I help you today? Ask me about his skills, projects, or contact info!",
  hire: "Abhin is currently **available for freelance projects and full-time roles**! Check out his resume or send him a message through the contact section.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.match(/\b(hi|hello|hey|greetings|howdy)\b/)) return BOT_RESPONSES.hello;
  if (lower.match(/\b(skill|tech|stack|framework|language|know|use)\b/)) return BOT_RESPONSES.skills;
  if (lower.match(/\b(project|portfolio|work|built|made|app)\b/)) return BOT_RESPONSES.projects;
  if (lower.match(/\b(contact|email|reach|touch|message|talk)\b/)) return BOT_RESPONSES.contact;
  if (lower.match(/\b(experience|work|job|company|employer|intern)\b/)) return BOT_RESPONSES.experience;
  if (lower.match(/\b(hire|available|freelance|open|opportunity|position)\b/)) return BOT_RESPONSES.hire;
  return BOT_RESPONSES.default;
}

const QUICK_REPLIES = ["Skills & Tech Stack", "Projects", "Contact Info", "Available for hire?"];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      text: "Hey! 👋 I'm Abhin's AI assistant. Ask me anything about his work, skills, or projects!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI typing delay
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      text: getResponse(messageText),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: "fixed",
              bottom: "6rem",
              right: "1.5rem",
              width: "370px",
              maxWidth: "calc(100vw - 2rem)",
              height: "520px",
              background: "rgba(6, 13, 20, 0.97)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 998,
              boxShadow: "0 25px 80px rgba(0,0,0,0.7), 0 0 40px rgba(34,211,238,0.1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1rem 1.25rem",
                background: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(168,85,247,0.08))",
                borderBottom: "1px solid rgba(34,211,238,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <RiRobotLine size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: 700, color: "#f0f9ff", fontSize: "0.95rem" }}>
                  Portfolio Assistant
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  <span style={{ color: "#22c55e", fontSize: "0.72rem", fontWeight: 500 }}>Online — Ready to help</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#94a3b8",
                  padding: "0.25rem",
                  borderRadius: "6px",
                  display: "flex",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f0f9ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(34,211,238,0.2) transparent",
              }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.role === "assistant" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: "linear-gradient(135deg, #22d3ee, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <RiRobotLine size={12} color="#fff" />
                      </div>
                      <span style={{ fontSize: "0.7rem", color: "#475569" }}>Assistant • {formatTime(msg.timestamp)}</span>
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "0.7rem 1rem",
                      borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, #22d3ee, #06b6d4)"
                          : "rgba(30, 41, 59, 0.8)",
                      color: msg.role === "user" ? "#020408" : "#e2e8f0",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      border: msg.role === "assistant" ? "1px solid rgba(34,211,238,0.1)" : "none",
                      fontWeight: msg.role === "user" ? 600 : 400,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                  </div>
                  {msg.role === "user" && (
                    <span style={{ fontSize: "0.7rem", color: "#475569", marginTop: "0.2rem" }}>{formatTime(msg.timestamp)}</span>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: "linear-gradient(135deg, #22d3ee, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <RiRobotLine size={12} color="#fff" />
                  </div>
                  <div style={{ padding: "0.6rem 0.9rem", background: "rgba(30,41,59,0.8)", border: "1px solid rgba(34,211,238,0.1)", borderRadius: "16px 16px 16px 4px", display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                        style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22d3ee", display: "inline-block" }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div style={{ padding: "0 1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    style={{
                      padding: "0.35rem 0.8rem",
                      background: "rgba(34,211,238,0.06)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      borderRadius: "20px",
                      color: "#22d3ee",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 500,
                      transition: "all 0.2s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.06)";
                    }}
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              style={{
                padding: "0.75rem 1rem",
                borderTop: "1px solid rgba(34,211,238,0.1)",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  padding: "0.65rem 1rem",
                  background: "rgba(10, 22, 40, 0.8)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  borderRadius: "12px",
                  color: "#f0f9ff",
                  fontSize: "0.88rem",
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(34,211,238,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(34,211,238,0.2)")}
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: input.trim() ? "linear-gradient(135deg, #22d3ee, #06b6d4)" : "rgba(34,211,238,0.1)",
                  border: "none",
                  cursor: input.trim() ? "pointer" : "not-allowed",
                  color: input.trim() ? "#020408" : "#475569",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                <HiPaperAirplane size={18} style={{ transform: "rotate(90deg)" }} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: "58px",
          height: "58px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #22d3ee, #a855f7)",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
          boxShadow: "0 8px 30px rgba(34,211,238,0.4), 0 0 60px rgba(34,211,238,0.15)",
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiX size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <BsChatDotsFill size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "16px",
              background: "linear-gradient(135deg, #22d3ee, #a855f7)",
              zIndex: -1,
            }}
          />
        )}
      </motion.button>
    </>
  );
};

export default ChatWidget;