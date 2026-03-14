"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { WORDS, MAX_ERRORS, ALPHABET } from "../lib/data";

function HangmanFigure({ errors }) {
  const s = { stroke: "#E2E8F0", strokeWidth: 2.5, strokeLinecap: "round" };
  return (
    <svg width="160" height="180" viewBox="0 0 160 180" style={{ filter: "drop-shadow(0 0 8px rgba(226,232,240,0.3))" }}>
      {/* Base e Poste */}
      <line x1="20" y1="170" x2="140" y2="170" {...s} />
      <line x1="60" y1="170" x2="60" y2="10" {...s} />
      <line x1="60" y1="10" x2="110" y2="10" {...s} />
      <line x1="110" y1="10" x2="110" y2="30" {...s} />
      
      {/* Cabeça */}
      {errors >= 1 && <circle cx="110" cy="43" r="13" fill="none" stroke="#F87171" strokeWidth="2.5" />}
      {/* Corpo */}
      {errors >= 2 && <line x1="110" y1="56" x2="110" y2="110" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Braço Esquerdo */}
      {errors >= 3 && <line x1="110" y1="70" x2="88" y2="95" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Braço Direito */}
      {errors >= 4 && <line x1="110" y1="70" x2="132" y2="95" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Perna Esquerda */}
      {errors >= 5 && <line x1="110" y1="110" x2="88" y2="140" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Perna Direita */}
      {errors >= 6 && <line x1="110" y1="110" x2="132" y2="140" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />}
    </svg>
  );
}

export default function HangmanGame() {
  const router = useRouter();
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState(new Set());
  const [gameState, setGameState] = useState("playing"); 

  const startGame = useCallback(() => {
    const w = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(w);
    setGuessed(new Set());
    setGameState("playing");
  }, []);

  useEffect(() => { startGame(); }, [startGame]);

  const errors = [...guessed].filter(l => !word.includes(l)).length;
  const correct = [...guessed].filter(l => word.includes(l));
  const wrong = [...guessed].filter(l => !word.includes(l));
  const revealed = word.split("").filter(l => guessed.has(l)).length;

  useEffect(() => {
    if (!word) return;
    if (errors >= MAX_ERRORS) setGameState("lost");
    else if (revealed === word.length) setGameState("won");
  }, [guessed, errors, revealed, word]);

  const guess = (letter) => {
    if (gameState !== "playing" || guessed.has(letter)) return;
    setGuessed(prev => new Set([...prev, letter]));
  };

  useEffect(() => {
    const handler = (e) => {
      const k = e.key.toUpperCase();
      if (ALPHABET.includes(k)) guess(k);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [guessed, gameState, word]);

  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative"
    }}>
      <style>{`
        .key-btn {
          width: 42px; height: 42px;
          border-radius: 8px;
          border: 1px solid rgba(226,232,240,0.2);
          background: rgba(226,232,240,0.05);
          color: #E2E8F0;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .key-btn:hover:not(:disabled) {
          background: rgba(99,179,237,0.2);
          border-color: #63B3ED;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99,179,237,0.3);
        }
        .key-btn.correct { background: rgba(72,187,120,0.2); border-color: #48BB78; color: #48BB78; }
        .key-btn.wrong { background: rgba(248,113,113,0.1); border-color: rgba(248,113,113,0.3); color: rgba(248,113,113,0.4); }
        .key-btn:disabled { cursor: not-allowed; }
        .letter-box {
          width: 38px; height: 44px;
          border-bottom: 3px solid #63B3ED;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; font-weight: 700;
          font-family: 'Orbitron', monospace;
          transition: all 0.3s ease;
        }
        .letter-box.revealed { color: #63B3ED; border-color: #48BB78; animation: pop 0.3s ease; }
        @keyframes pop { 0% { transform: scale(1.4); } 100% { transform: scale(1); } }
        .result-banner {
          padding: 1rem 2rem;
          border-radius: 12px;
          font-family: 'Orbitron', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          animation: fadeIn 0.5s ease;
        }
        @keyframes fadeIn { from { opacity:0; transform: translateY(-10px); } to { opacity:1; transform: translateY(0); } }
        .restart-btn {
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #667EEA, #764BA2);
          border: none; border-radius: 10px;
          color: white; font-family: 'Orbitron', monospace;
          font-size: 0.9rem; font-weight: 700;
          cursor: pointer; letter-spacing: 0.1em;
          transition: all 0.2s ease;
          margin-top: 1rem;
        }
        .restart-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(102,126,234,0.5); }
      `}</style>

      {/* Botão de voltar modificado para a Home (/) */}
      <button onClick={() => router.push("/")} style={{
        position: "absolute", top: "1rem", left: "1rem", zIndex: 200,
        padding: "0.5rem 1rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "8px",
        color: "rgba(226,232,240,0.7)",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.75rem",
        cursor: "pointer",
        letterSpacing: "0.1em",
      }}>← VOLTAR</button>

      <h1 style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        fontWeight: 900,
        background: "linear-gradient(135deg, #667EEA, #4ECDC4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "0.25rem",
        letterSpacing: "0.1em",
      }}>JOGO DA FORCA</h1>
      <p style={{ color: "rgba(226,232,240,0.4)", fontSize: "0.8rem", marginBottom: "2rem", letterSpacing: "0.2em" }}>
        ADIVINHE A PALAVRA • {MAX_ERRORS - errors} TENTATIVAS RESTANTES
      </p>

      <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: "900px" }}>
        
        {/* Lado Esquerdo: Boneco da forca e estado dos erros */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "1.5rem",
          }}>
            <HangmanFigure errors={errors} />
          </div>

          <div style={{ display: "flex", gap: "0.4rem" }}>
            {Array.from({ length: MAX_ERRORS }).map((_, i) => (
              <div key={i} style={{
                width: 12, height: 12, borderRadius: "50%",
                background: i < errors ? "#F87171" : "rgba(226,232,240,0.2)",
                transition: "all 0.3s ease",
                boxShadow: i < errors ? "0 0 8px #F87171" : "none",
              }} />
            ))}
          </div>

          {wrong.length > 0 && (
            <div style={{
              background: "rgba(248,113,113,0.08)",
              border: "1px solid rgba(248,113,113,0.2)",
              borderRadius: "10px",
              padding: "0.75rem 1rem",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "0.65rem", color: "rgba(248,113,113,0.6)", letterSpacing: "0.15em", marginBottom: "0.4rem" }}>LETRAS ERRADAS</div>
              <div style={{ color: "#F87171", fontWeight: 700, letterSpacing: "0.2em", fontSize: "0.9rem" }}>
                {wrong.join("  ")}
              </div>
            </div>
          )}
        </div>

        {/* Lado Direito: Palavra e teclado */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", flex: 1, minWidth: "280px" }}>
          <div style={{
            display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center",
            padding: "1.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            width: "100%",
          }}>
            {word.split("").map((l, i) => (
              <div key={i} className={`letter-box ${guessed.has(l) ? "revealed" : ""}`}>
                {guessed.has(l) ? l : ""}
              </div>
            ))}
          </div>

          {gameState === "won" && (
            <div className="result-banner" style={{ background: "rgba(72,187,120,0.15)", border: "1px solid rgba(72,187,120,0.4)", color: "#48BB78" }}>
              🎉 PARABÉNS! VOCÊ VENCEU!
            </div>
          )}
          {gameState === "lost" && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <div className="result-banner" style={{ background: "rgba(248,113,113,0.15)", border: "1px solid rgba(248,113,113,0.4)", color: "#F87171" }}>
                💀 VOCÊ PERDEU!
              </div>
              <div style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.8rem" }}>
                A palavra era: <span style={{ color: "#63B3ED", fontWeight: 700 }}>{word}</span>
              </div>
            </div>
          )}

          <button className="restart-btn" onClick={startGame}>
            ↺ NOVA PALAVRA
          </button>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.4rem",
            justifyContent: "center", maxWidth: "340px",
          }}>
            {ALPHABET.map(l => {
              const isCorrect = correct.includes(l);
              const isWrong = wrong.includes(l);
              return (
                <button
                  key={l}
                  className={`key-btn ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                  disabled={guessed.has(l) || gameState !== "playing"}
                  onClick={() => guess(l)}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}