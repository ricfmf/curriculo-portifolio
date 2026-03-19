"use client";

import { useState, useEffect } from "react";

export default function AboutPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <div style={{ paddingTop: "64px", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start", marginTop: "4rem" }}>
        
        {/* Coluna Esquerda: Resumo e Contato */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #667EEA, #4ECDC4)", borderRadius: "999px" }} />
            <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>RESUMO</h2>
          </div>
          
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            background: "linear-gradient(135deg, #667EEA, #4ECDC4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem", marginBottom: "1.5rem",
            boxShadow: "0 0 30px rgba(102,126,234,0.4)",
          }}>👨‍💻</div>
          
          <p style={{ color: "rgba(226,232,240,0.8)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
            Estudante de Ciência da Computação com sólida base teórica e prática em desenvolvimento de software.
          </p>
          <p style={{ color: "rgba(226,232,240,0.8)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
            Busco aplicar meus conhecimentos em soluções tecnológicas inovadoras, focando em eficiência e qualidade de código.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2.5rem", flexWrap: "wrap", flexDirection: "column" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(226,232,240,0.6)", fontSize: "0.9rem", fontFamily: "'Space Mono', monospace" }}>
                <span>📱 (81) 99161-2091</span>
             </div>
             <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(226,232,240,0.6)", fontSize: "0.9rem", fontFamily: "'Space Mono', monospace" }}>
                <span>✉️ ricardofmf49@gmail.com</span>
             </div>
          </div>
        </div>

        {/* Coluna Direita: Formação, Habilidades e Idiomas */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.2s" }}>
          
          {/* Sessão de Formação */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #FF6B6B, #FFE66D)", borderRadius: "999px" }} />
              <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>FORMAÇÃO</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem", transition: "transform 0.2s ease", cursor: "default" }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: "0.75rem", color: "#FFE66D", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>2024 - 2027</div>
                <h3 style={{ fontSize: "1.05rem", color: "#E2E8F0", fontWeight: 700, marginBottom: "0.3rem" }}>Ciência da Computação</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(226,232,240,0.5)", letterSpacing: "0.05em" }}>UNIVERSIDADE CATÓLICA DE PERNAMBUCO</p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem", transition: "transform 0.2s ease", cursor: "default" }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: "0.75rem", color: "#FF6B6B", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>2021 - 2023</div>
                <h3 style={{ fontSize: "1.05rem", color: "#E2E8F0", fontWeight: 700, marginBottom: "0.3rem" }}>Engenharia de Telecomunicações</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(226,232,240,0.5)", letterSpacing: "0.05em" }}>UNIVERSIDADE FEDERAL DE PERNAMBUCO</p>
              </div>
            </div>
          </div>

          {/* Sessão de Habilidades */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #4ECDC4, #667EEA)", borderRadius: "999px" }} />
              <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>HABILIDADES</h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {["Python", "C", "SQL (MySQL)", "Java", "HTML", "CSS", "JavaScript (React)"].map(skill => (
                <span key={skill} style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(78,205,196,0.08)",
                  border: "1px solid rgba(78,205,196,0.3)",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  color: "#4ECDC4",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(78,205,196,0.05)"
                }}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Sessão de Idiomas */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #A8E6CF, #3b82f6)", borderRadius: "999px" }} />
              <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>IDIOMAS</h2>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.2rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "1.05rem", color: "#E2E8F0", fontWeight: 700 }}>Inglês</span>
              <span style={{ fontSize: "0.8rem", color: "#3b82f6", fontWeight: 700, padding: "0.3rem 0.8rem", background: "rgba(59,130,246,0.15)", borderRadius: "999px", letterSpacing: "0.05em" }}>Avançado</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}