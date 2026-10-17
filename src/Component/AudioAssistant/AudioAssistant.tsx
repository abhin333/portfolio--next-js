"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiVolumeUp,
  HiVolumeOff,
  HiX,
  HiMicrophone,
  HiPaperAirplane,
  HiRefresh,
  HiSparkles,
} from "react-icons/hi";
import {
  BsSoundwave,
  BsStopCircleFill,
  BsPlayCircleFill,
} from "react-icons/bs";
import { RiRobotLine } from "react-icons/ri";
import { MdGraphicEq, MdMicNone } from "react-icons/md";

// Web Speech API types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface AudioMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

// Complete knowledge base about Abhin
const KNOWLEDGE_BASE = {
  intro:
    "Hello! Welcome to Abhin's portfolio. I'm his AI Audio Assistant. Abhin is a Full-Stack Web Developer currently working at Tiqr Events, specializing in React, Next.js, TypeScript, and Node.js. With over a year of professional experience, he builds fast, high-performance, and scalable web applications. Feel free to ask me anything about his projects, skills, experience, or how to collaborate with him!",

  about:
    "Abhin is a passionate Full-Stack Web Developer based in India with over 1 year of professional experience. He is dedicated to crafting seamless digital user experiences with modern front-end frameworks and robust backend architectures. He is currently working at Tiqr Events building event management platforms.",

  experience:
    "Abhin has over 1 year of industry experience. He is currently working as a Full-Stack Developer at Tiqr Events since 2024, building next-generation event management platforms. Prior to that, he worked as a Frontend Developer at Kiebot for 4 months, where he focused on responsive and interactive user interfaces.",

  skills:
    "Abhin's technical expertise includes:\nOn the frontend: Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, and Bootstrap.\nOn the backend: Node.js, Express, MongoDB, Firebase, and RESTful APIs.\nFor tools and DevOps: Git, GitHub, Docker, and Figma for UI/UX design.",

  projects:
    "Abhin has built several impressive full-stack projects! Highlights include:\n1. Easy Food — a full-stack MERN food ordering platform with real-time cart and order tracking.\n2. Netflix Clone — a responsive video streaming UI integrated with TMDB API.\n3. OLX Clone — a classified ads web application with Firebase authentication.\n4. Real-time Chat App — a live messaging app using Node.js and WebSockets.\n5. Movie Discovery App — powered by the TMDB API.",

  tiqr: "At Tiqr Events, Abhin works as a Full-Stack Developer developing scalable web platforms for event management, focusing on real-time data flow, high performance, and responsive UI design.",

  kiebot:
    "At Kiebot, Abhin served as a Frontend Developer for 4 months, developing pixel-perfect, accessible, and fast web user interfaces using modern React.",

  contact:
    "You can reach Abhin directly via email at abhinpradeepan@gmail.com, or connect on WhatsApp at +91 7902314666. You can also view his code on GitHub at github.com/abhin333 and connect on LinkedIn.",

  hire: "Yes, Abhin is actively open for full-time software engineering roles as well as freelance web development projects! He is ready to bring high energy, clean code, and rapid delivery to your team.",

  resume:
    "You can download Abhin's resume directly from the Resume button in the navigation bar, or click the CV download link on the site.",

  fallback:
    "That's a great question! Abhin is a Full-Stack Developer skilled in Next.js, React, TypeScript, and Node.js, currently building scalable apps at Tiqr Events. You can ask me about his projects, skills, work history, or how to get in touch with him directly!",
};

// Natural intent matching
function queryKnowledge(query: string): string {
  const q = query.toLowerCase().trim();

  if (
    q.includes("intro") ||
    q.includes("who is abhin") ||
    q.includes("tell me about abhin") ||
    q.includes("introduce") ||
    q.includes("who are you") ||
    q.includes("start")
  ) {
    return KNOWLEDGE_BASE.intro;
  }

  if (
    q.includes("tiqr") ||
    q.includes("current job") ||
    q.includes("current company")
  ) {
    return KNOWLEDGE_BASE.tiqr;
  }

  if (q.includes("kiebot")) {
    return KNOWLEDGE_BASE.kiebot;
  }

  if (
    q.includes("experience") ||
    q.includes("company") ||
    q.includes("work") ||
    q.includes("career") ||
    q.includes("background")
  ) {
    return KNOWLEDGE_BASE.experience;
  }

  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("framework") ||
    q.includes("language") ||
    q.includes("react") ||
    q.includes("next") ||
    q.includes("node") ||
    q.includes("frontend") ||
    q.includes("backend")
  ) {
    return KNOWLEDGE_BASE.skills;
  }

  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("built") ||
    q.includes("easy food") ||
    q.includes("netflix") ||
    q.includes("chat") ||
    q.includes("apps")
  ) {
    return KNOWLEDGE_BASE.projects;
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("whatsapp") ||
    q.includes("reach") ||
    q.includes("touch") ||
    q.includes("call")
  ) {
    return KNOWLEDGE_BASE.contact;
  }

  if (
    q.includes("hire") ||
    q.includes("available") ||
    q.includes("freelance") ||
    q.includes("job") ||
    q.includes("opportunity") ||
    q.includes("salary") ||
    q.includes("contract")
  ) {
    return KNOWLEDGE_BASE.hire;
  }

  if (
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("download resume")
  ) {
    return KNOWLEDGE_BASE.resume;
  }

  if (q.includes("about") || q.includes("bio") || q.includes("details")) {
    return KNOWLEDGE_BASE.about;
  }

  if (
    q.startsWith("hi") ||
    q.startsWith("hello") ||
    q.startsWith("hey") ||
    q === "hi" ||
    q === "hello"
  ) {
    return "Hello there! It's a pleasure to speak with you. I'm Abhin's AI assistant. Ask me anything about his full-stack work, technical stack, or projects!";
  }

  if (
    q.includes("thank") ||
    q.includes("awesome") ||
    q.includes("good") ||
    q.includes("cool")
  ) {
    return "You're very welcome! If there's anything else you'd like to explore about Abhin's experience or projects, just say the word or tap the microphone.";
  }

  return KNOWLEDGE_BASE.fallback;
}

const QUICK_PROMPTS = [
  "Introduce Abhin",
  "What is his Tech Stack?",
  "Tell me about Tiqr Events",
  "Show Featured Projects",
  "Is he available for hire?",
  "How can I contact him?",
];

export default function AudioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<AudioMessage[]>([
    {
      id: "init",
      sender: "ai",
      text: "Click 'Introduce Abhin' or tap the microphone to ask me anything via voice!",
      timestamp: "Just now",
    },
  ]);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [recognitionSupported, setRecognitionSupported] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize Speech Synthesis and Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("speechSynthesis" in window) {
        synthRef.current = window.speechSynthesis;

        const updateVoices = () => {
          const available = window.speechSynthesis.getVoices();
          if (available.length > 0) {
            setVoices(available);
            // Default to a clear English voice
            const englishIdx = available.findIndex(
              (v) =>
                v.lang.startsWith("en") &&
                (v.name.includes("Google") ||
                  v.name.includes("Natural") ||
                  v.name.includes("Samantha") ||
                  v.name.includes("Daniel") ||
                  v.name.includes("Alex") ||
                  v.name.includes("Microsoft")),
            );
            setSelectedVoiceIndex(englishIdx !== -1 ? englishIdx : 0);
          }
        };

        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;
      } else {
        setSpeechSupported(false);
      }

      // Check Speech Recognition support
      const SpeechRec =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRec) {
        const recognition = new SpeechRec();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsListening(true);
          setTranscript("");
        };

        recognition.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setTranscript(currentTranscript);
        };

        recognition.onerror = (event: any) => {
          console.warn("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      } else {
        setRecognitionSupported(false);
      }

      // Global event listener to allow triggering AI Audio Intro from Hero or Nav
      const handleGlobalAudioTrigger = (e: any) => {
        setIsOpen(true);
        setTimeout(() => {
          const query = e.detail?.prompt || "introduce";
          handleAskQuestion(query);
        }, 300);
      };

      window.addEventListener("trigger-ai-audio", handleGlobalAudioTrigger);
      return () => {
        window.removeEventListener(
          "trigger-ai-audio",
          handleGlobalAudioTrigger,
        );
        if (synthRef.current) {
          synthRef.current.cancel();
        }
        if (recognitionRef.current) {
          try {
            recognitionRef.current.abort();
          } catch (e) {}
        }
      };
    }
  }, []);

  // When speech recognition ends and there is a transcript, automatically ask
  useEffect(() => {
    if (!isListening && transcript.trim().length > 1) {
      handleAskQuestion(transcript);
      setTranscript("");
    }
  }, [isListening]);

  // Scroll to bottom of message log
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSpeaking, isListening]);

  // Soundwave Canvas visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let phase = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw background cyber glow
      const grad = ctx.createRadialGradient(
        width / 2,
        centerY,
        10,
        width / 2,
        centerY,
        width / 2,
      );
      grad.addColorStop(
        0,
        isSpeaking
          ? "rgba(34, 211, 238, 0.25)"
          : isListening
            ? "rgba(236, 72, 153, 0.3)"
            : "rgba(168, 85, 247, 0.1)",
      );
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Number of sine waves
      const waveCount = isSpeaking ? 5 : isListening ? 4 : 2;
      const baseAmp = isSpeaking ? 22 : isListening ? 28 : 5;
      const speed = isSpeaking ? 0.08 : isListening ? 0.12 : 0.02;

      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.lineWidth = w === 0 ? 3 : 1.5;
        const color =
          w % 2 === 0
            ? `rgba(34, 211, 238, ${0.9 - w * 0.15})`
            : `rgba(168, 85, 247, ${0.9 - w * 0.15})`;
        ctx.strokeStyle = color;

        for (let x = 0; x < width; x++) {
          const distFromCenter = Math.abs(x - width / 2) / (width / 2);
          const envelope = Math.max(0, 1 - Math.pow(distFromCenter, 2));
          const freq = 0.02 + w * 0.008;
          const y =
            centerY + Math.sin(x * freq + phase * (w + 1)) * baseAmp * envelope;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      phase += speed;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isSpeaking, isListening]);

  // Text-To-Speech execution
  const speakText = (text: string) => {
    if (!synthRef.current || isMuted) return;

    // Cancel current speech
    synthRef.current.cancel();

    // Clean text for natural speech (remove markdown symbols)
    const cleanSpeech = text
      .replace(/[*_#•]/g, "")
      .replace(/\n+/g, " ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utteranceRef.current = utterance;

    if (voices.length > 0 && voices[selectedVoiceIndex]) {
      utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis utterance error:", e);
      setIsSpeaking(false);
    };

    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
  };

  // User asking question
  const handleAskQuestion = (question: string) => {
    const q = question.trim();
    if (!q) return;

    // Stop existing voice if playing
    stopSpeaking();

    // Add user message to log
    const userMsg: AudioMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      text: q,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Look up answer from knowledge base
    const answer = queryKnowledge(q);

    setTimeout(() => {
      const aiMsg: AudioMessage = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: answer,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      speakText(answer);
    }, 250);
  };

  // Toggle voice recording
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert(
        "Speech recognition is not supported in this browser. Please type your question below!",
      );
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
      setIsListening(false);
    } else {
      // Stop ongoing speech when user starts talking
      stopSpeaking();
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.warn("Could not start speech recognition:", err);
      }
    }
  };

  const triggerIntro = () => {
    handleAskQuestion("introduce");
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          FLOATING AI AUDIO ASSISTANT BUTTON (Bottom-Left)
          ═══════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <motion.button
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
              if (messages.length <= 1) {
                // Auto introduce if first time opening
                setTimeout(() => triggerIntro(), 400);
              }
            } else {
              setIsOpen(false);
              stopSpeaking();
            }
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          style={{
            position: "relative",
            width: "58px",
            height: "58px",
            borderRadius: "16px",
            background: isSpeaking
              ? "linear-gradient(135deg, #06b6d4, #3b82f6)"
              : isListening
                ? "linear-gradient(135deg, #ec4899, #f43f5e)"
                : "linear-gradient(135deg, #22d3ee, #a855f7)",
            border: "none",
            cursor: "pointer",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isSpeaking
              ? "0 0 35px rgba(34,211,238,0.7), 0 8px 30px rgba(0,0,0,0.5)"
              : "0 0 25px rgba(168,85,247,0.4), 0 8px 30px rgba(0,0,0,0.5)",
          }}
          aria-label="Open AI Voice Assistant"
          title="AI Audio Assistant — Talk or Listen"
        >
          {/* Animated pulsing wave rings */}
          <motion.div
            animate={{
              scale: isSpeaking || isListening ? [1, 1.8, 1] : [1, 1.4, 1],
              opacity:
                isSpeaking || isListening ? [0.8, 0, 0.8] : [0.4, 0, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: isSpeaking ? 1.4 : isListening ? 0.9 : 2.5,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "20px",
              border: `2px solid ${
                isSpeaking ? "#22d3ee" : isListening ? "#ec4899" : "#a855f7"
              }`,
              pointerEvents: "none",
            }}
          />

          {isSpeaking ? (
            <MdGraphicEq size={28} className="animate-pulse" />
          ) : isListening ? (
            <HiMicrophone size={26} color="#fff" />
          ) : (
            <BsSoundwave size={26} />
          )}

          {/* Glowing dot notification */}
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: isSpeaking ? "#22c55e" : "#22d3ee",
              border: "2px solid #020408",
              boxShadow: "0 0 10px #22d3ee",
            }}
          />
        </motion.button>

        {/* Floating Tooltip Pill */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={() => {
              setIsOpen(true);
              triggerIntro();
            }}
            style={{
              padding: "0.45rem 0.9rem",
              background: "rgba(6, 13, 20, 0.9)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              borderRadius: "30px",
              color: "#f0f9ff",
              fontSize: "0.78rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            <span>🎙️ AI Audio Guide</span>
          </motion.div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════
          VOICE ASSISTANT INTERACTIVE MODAL / DOCK
          ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: "fixed",
              bottom: "6.5rem",
              left: "1.5rem",
              width: "410px",
              maxWidth: "calc(100vw - 3rem)",
              height: "580px",
              maxHeight: "calc(100vh - 8rem)",
              background: "rgba(6, 13, 20, 0.97)",
              backdropFilter: "blur(32px) saturate(190%)",
              WebkitBackdropFilter: "blur(32px) saturate(190%)",
              border: "1px solid rgba(34, 211, 238, 0.25)",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 1000,
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.8), 0 0 50px rgba(34,211,238,0.15)",
            }}
          >
            {/* 1. Header */}
            <div
              style={{
                padding: "1rem 1.25rem",
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(168,85,247,0.12))",
                borderBottom: "1px solid rgba(34,211,238,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
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
                    color: "#ffffff",
                    boxShadow: "0 0 15px rgba(34,211,238,0.4)",
                  }}
                >
                  <RiRobotLine size={22} />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontWeight: 700,
                        color: "#f0f9ff",
                        fontSize: "0.95rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      AI Audio Assistant
                    </h3>
                    <HiSparkles size={14} color="#22d3ee" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginTop: "2px",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: isSpeaking
                          ? "#22d3ee"
                          : isListening
                            ? "#ec4899"
                            : "#22c55e",
                        boxShadow: `0 0 8px ${
                          isSpeaking
                            ? "#22d3ee"
                            : isListening
                              ? "#ec4899"
                              : "#22c55e"
                        }`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: isSpeaking
                          ? "#22d3ee"
                          : isListening
                            ? "#ec4899"
                            : "#94a3b8",
                      }}
                    >
                      {isSpeaking
                        ? "Speaking aloud..."
                        : isListening
                          ? "Listening to voice..."
                          : "Ready for questions"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                {/* Mute button */}
                <button
                  onClick={() => {
                    if (isSpeaking) stopSpeaking();
                    setIsMuted(!isMuted);
                  }}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: isMuted ? "#ef4444" : "#94a3b8",
                    padding: "0.45rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    transition: "all 0.2s",
                  }}
                  title={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <HiVolumeOff size={16} />
                  ) : (
                    <HiVolumeUp size={16} />
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    stopSpeaking();
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    padding: "0.45rem",
                    cursor: "pointer",
                    borderRadius: "8px",
                    display: "flex",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f0f9ff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#94a3b8")
                  }
                >
                  <HiX size={20} />
                </button>
              </div>
            </div>

            {/* 2. Reactive Soundwave Visualizer Canvas */}
            <div
              style={{
                position: "relative",
                height: "100px",
                background: "rgba(2, 6, 12, 0.7)",
                borderBottom: "1px solid rgba(34,211,238,0.12)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <canvas
                ref={canvasRef}
                width={410}
                height={100}
                style={{ width: "100%", height: "100%" }}
              />

              {/* Center status badge overlay */}
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  background: "rgba(6, 13, 20, 0.85)",
                  border: `1px solid ${
                    isSpeaking
                      ? "rgba(34,211,238,0.4)"
                      : isListening
                        ? "rgba(236,72,153,0.5)"
                        : "rgba(255,255,255,0.1)"
                  }`,
                  backdropFilter: "blur(8px)",
                }}
              >
                {isSpeaking ? (
                  <>
                    <button
                      onClick={stopSpeaking}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#ef4444",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      <BsStopCircleFill size={15} /> Stop Voice
                    </button>
                  </>
                ) : isListening ? (
                  <span
                    style={{
                      color: "#ec4899",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
                    Listening... Speak now!
                  </span>
                ) : (
                  <button
                    onClick={triggerIntro}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#22d3ee",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    <BsPlayCircleFill size={15} /> Play Full Introduction
                  </button>
                )}
              </div>
            </div>

            {/* 3. Messages & Dialogue Log */}
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
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem", color: "#64748b" }}>
                      {msg.sender === "ai" ? "🎙️ Audio Assistant" : "You"} •{" "}
                      {msg.timestamp}
                    </span>
                    {msg.sender === "ai" && (
                      <button
                        onClick={() => speakText(msg.text)}
                        title="Replay this audio response"
                        style={{
                          background: "none",
                          border: "none",
                          color: "#22d3ee",
                          cursor: "pointer",
                          padding: "1px 4px",
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        <HiVolumeUp size={12} /> Play
                      </button>
                    )}
                  </div>

                  <div
                    style={{
                      maxWidth: "88%",
                      padding: "0.75rem 1rem",
                      borderRadius:
                        msg.sender === "user"
                          ? "16px 16px 4px 16px"
                          : "16px 16px 16px 4px",
                      background:
                        msg.sender === "user"
                          ? "linear-gradient(135deg, #22d3ee, #0ea5e9)"
                          : "rgba(15, 23, 42, 0.8)",
                      color: msg.sender === "user" ? "#020408" : "#f1f5f9",
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      border:
                        msg.sender === "ai"
                          ? "1px solid rgba(34,211,238,0.15)"
                          : "none",
                      fontWeight: msg.sender === "user" ? 600 : 400,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Real-time transcript preview during speaking */}
              {isListening && transcript && (
                <div
                  style={{
                    alignSelf: "flex-end",
                    padding: "0.5rem 0.9rem",
                    background: "rgba(236,72,153,0.15)",
                    border: "1px dashed rgba(236,72,153,0.5)",
                    borderRadius: "12px",
                    color: "#f472b6",
                    fontSize: "0.82rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{transcript}&rdquo;...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* 4. Quick Audio Topics */}
            <div
              style={{
                padding: "0.5rem 0.75rem",
                display: "flex",
                gap: "0.4rem",
                overflowX: "auto",
                borderTop: "1px solid rgba(34,211,238,0.1)",
                background: "rgba(6, 13, 20, 0.6)",
                scrollbarWidth: "none",
              }}
            >
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleAskQuestion(prompt)}
                  style={{
                    padding: "0.3rem 0.7rem",
                    background: "rgba(34,211,238,0.06)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: "20px",
                    color: "#22d3ee",
                    fontSize: "0.72rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(34,211,238,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(34,211,238,0.06)";
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* 5. Voice Input & Text Fallback Form */}
            <div
              style={{
                padding: "0.85rem 1rem",
                background: "rgba(6, 13, 20, 0.95)",
                borderTop: "1px solid rgba(34,211,238,0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {/* Big Voice Microphone Button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <motion.button
                  type="button"
                  onClick={toggleListening}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1rem",
                    borderRadius: "12px",
                    background: isListening
                      ? "linear-gradient(135deg, #ec4899, #f43f5e)"
                      : "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(168,85,247,0.15))",
                    border: `1px solid ${
                      isListening
                        ? "rgba(236,72,153,0.8)"
                        : "rgba(34,211,238,0.3)"
                    }`,
                    color: isListening ? "#ffffff" : "#22d3ee",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: isListening
                      ? "0 0 25px rgba(236,72,153,0.5)"
                      : "none",
                    transition: "all 0.2s",
                  }}
                >
                  {isListening ? (
                    <>
                      <HiMicrophone size={18} className="animate-bounce" />
                      <span>Listening... Tap to send</span>
                    </>
                  ) : (
                    <>
                      <HiMicrophone size={18} />
                      <span>Tap to Speak Question</span>
                    </>
                  )}
                </motion.button>

                {/* Voice Selection dropdown if available */}
                {voices.length > 0 && (
                  <select
                    value={selectedVoiceIndex}
                    onChange={(e) =>
                      setSelectedVoiceIndex(Number(e.target.value))
                    }
                    title="Select Voice"
                    style={{
                      padding: "0.65rem 0.5rem",
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      borderRadius: "12px",
                      color: "#94a3b8",
                      fontSize: "0.75rem",
                      outline: "none",
                      maxWidth: "110px",
                    }}
                  >
                    {voices
                      .filter((v) => v.lang.startsWith("en"))
                      .slice(0, 8)
                      .map((voice) => {
                        const originalIndex = voices.indexOf(voice);
                        return (
                          <option key={voice.name} value={originalIndex}>
                            {voice.name
                              .replace(/Google|Microsoft|Apple/gi, "")
                              .trim() || "Voice"}
                          </option>
                        );
                      })}
                  </select>
                )}
              </div>

              {/* Text Input Row */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputText.trim()) {
                    handleAskQuestion(inputText);
                  }
                }}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Or type a question for the AI..."
                  style={{
                    flex: 1,
                    padding: "0.55rem 0.85rem",
                    background: "rgba(10, 22, 40, 0.8)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: "10px",
                    color: "#f0f9ff",
                    fontSize: "0.82rem",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(34,211,238,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(34,211,238,0.2)")
                  }
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  style={{
                    padding: "0.55rem 0.75rem",
                    borderRadius: "10px",
                    background: inputText.trim()
                      ? "linear-gradient(135deg, #22d3ee, #06b6d4)"
                      : "rgba(34,211,238,0.1)",
                    border: "none",
                    color: inputText.trim() ? "#020408" : "#475569",
                    cursor: inputText.trim() ? "pointer" : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HiPaperAirplane
                    size={16}
                    style={{ transform: "rotate(90deg)" }}
                  />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
