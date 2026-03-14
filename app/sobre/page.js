"use client";

import { useState, useEffect } from "react";
import SkillBar from "../components/skillBar";
import { SKILLS } from "../lib/data";

export default function AboutPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <div style={{ paddingTop: "64px", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginTop: "4rem" }}>
        {/* Bio */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #667EEA, #4ECDC4)", borderRadius: "999px" }} />
            <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>SOBRE MIM</h2>
          </div>
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            background: "linear-gradient(135deg, #667EEA, #4ECDC4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem", marginBottom: "1.5rem",
            boxShadow: "0 0 30px rgba(102,126,234,0.4)",
          }}>👨‍💻</div>
          <p style={{ color: "rgba(226,232,240,0.6)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
            Sou estudante de Ciência da Computação, focado em aprimorar minhas habilidades em desenvolvimento de software e infraestrutura.
          </p>
          <p style={{ color: "rgba(226,232,240,0.6)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
            Tenho facilidade com lógica de programação, estruturas de dados e desenvolvimento web, buscando sempre aprender novas tecnologias e aplicar boas práticas de código.
          </p>
          <p style={{ color: "rgba(226,232,240,0.6)", lineHeight: 1.8, fontSize: "0.9rem" }}>
            Construí este currículo interativo (incluindo o Jogo da Forca na aba ao lado) para demonstrar meus conhecimentos práticos em React e desenvolvimento front-end.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "📍 Recife, PE - Brasil" },
              { label: "🎓 Ciência da Computação" },
              { label: "💼 Em busca de oportunidades" },
            ].map(({ label }) => (
              <span key={label} style={{
                padding: "0.4rem 0.8rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                fontSize: "0.75rem",
                color: "rgba(226,232,240,0.6)",
              }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #FF6B6B, #FFE66D)", borderRadius: "999px" }} />
            <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>HABILIDADES</h2>
          </div>
          {SKILLS.map(s => <SkillBar key={s.name} {...s} visible={visible} />)}
        </div>
      </div>
    </div>
  );
}