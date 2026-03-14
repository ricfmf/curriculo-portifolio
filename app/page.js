"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", paddingTop: "64px", position: "relative", overflow: "hidden" }}>
      {[
        { top: "10%", left: "5%", size: 400, color: "rgba(102,126,234,0.08)" },
        { top: "60%", right: "5%", size: 350, color: "rgba(78,205,196,0.06)" },
        { top: "30%", left: "40%", size: 300, color: "rgba(255,107,107,0.05)" },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          width: o.size, height: o.size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
          top: o.top, left: o.left, right: o.right,
          pointerEvents: "none",
          animation: `float${i} ${6 + i * 2}s ease-in-out infinite`,
        }} />
      ))}
      <style>{`
        @keyframes float0 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-20px)} }
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-15px,25px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(10px,15px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: "700px" }}>
        <div style={{
          display: "inline-block",
          padding: "0.3rem 1rem",
          background: "rgba(102,126,234,0.15)",
          border: "1px solid rgba(102,126,234,0.3)",
          borderRadius: "999px",
          fontSize: "0.75rem",
          color: "#667EEA",
          fontWeight: 700,
          letterSpacing: "0.2em",
          marginBottom: "1.5rem",
        }}>DISPONÍVEL PARA ESTÁGIO / TRABALHO</div>

        <h1 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "1.5rem",
          letterSpacing: "-0.02em",
        }}>
          <span style={{ color: "#E2E8F0" }}>RICARDO FILIPE</span>
          <br />
          <span style={{
            background: "linear-gradient(135deg, #667EEA 0%, #4ECDC4 50%, #FF6B6B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>MELO FRANÇA</span>
        </h1>

        <p style={{
          fontFamily: "'Space Mono', monospace",
          color: "rgba(226,232,240,0.5)",
          fontSize: "1rem",
          marginBottom: "0.75rem",
          letterSpacing: "0.15em",
        }}>
          ESTUDANTE DE CIÊNCIA DA COMPUTAÇÃO
          <span style={{ animation: "blink 1s infinite", marginLeft: "4px" }}>_</span>
        </p>

        <p style={{ color: "rgba(226,232,240,0.4)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
          Desenvolvedor em formação, apaixonado por tecnologia, algoritmos e pela construção de soluções e sistemas eficientes.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => window.open('https://linkedin.com/in/SEU_LINKEDIN_AQUI', '_blank')} style={{
            padding: "0.9rem 2rem",
            background: "linear-gradient(135deg, #0077B5, #005E93)", // Cores do LinkedIn
            border: "none", borderRadius: "12px",
            color: "white",
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.85rem", fontWeight: 700,
            letterSpacing: "0.1em",
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(0, 119, 181, 0.4)",
            transition: "all 0.2s ease",
          }}>MEU LINKEDIN</button>
          
          <button onClick={() => router.push("/contato")} style={{
            padding: "0.9rem 2rem",
            background: "transparent",
            border: "1px solid rgba(226,232,240,0.2)",
            borderRadius: "12px",
            color: "rgba(226,232,240,0.7)",
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.85rem", fontWeight: 700,
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}>CONTATO</button>
        </div>
      </div>
    </div>
  );
}