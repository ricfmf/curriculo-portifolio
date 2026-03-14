"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: "64px", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", marginTop: "4rem" }}>
        <div style={{ width: 3, height: 32, background: "linear-gradient(180deg, #FF6B6B, #FFE66D)", borderRadius: "999px" }} />
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.3rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "0.1em" }}>CONTATO</h2>
      </div>

      {sent ? (
        <div style={{
          padding: "3rem",
          background: "rgba(72,187,120,0.08)",
          border: "1px solid rgba(72,187,120,0.3)",
          borderRadius: "16px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
          <h3 style={{ fontFamily: "'Orbitron', monospace", color: "#48BB78", marginBottom: "0.5rem" }}>MENSAGEM ENVIADA!</h3>
          <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.85rem" }}>Responderei em breve. Obrigado pelo contato!</p>
        </div>
      ) : (
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "2rem",
        }}>
          {[
            { key: "name", label: "NOME", type: "text", placeholder: "Seu nome" },
            { key: "email", label: "E-MAIL", type: "email", placeholder: "seu@email.com" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: "1.2rem" }}>
              <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(226,232,240,0.4)", marginBottom: "0.4rem", fontWeight: 700 }}>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                style={{
                  width: "100%", padding: "0.75rem 1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#E2E8F0",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.85rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(226,232,240,0.4)", marginBottom: "0.4rem", fontWeight: 700 }}>MENSAGEM</label>
            <textarea
              placeholder="Sua mensagem..."
              value={form.msg}
              onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
              rows={5}
              style={{
                width: "100%", padding: "0.75rem 1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "#E2E8F0",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.85rem",
                outline: "none",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button onClick={handle} style={{
            width: "100%", padding: "0.9rem",
            background: "linear-gradient(135deg, #667EEA, #764BA2)",
            border: "none", borderRadius: "12px",
            color: "white",
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.85rem", fontWeight: 700,
            letterSpacing: "0.15em",
            cursor: "pointer",
            boxShadow: "0 0 25px rgba(102,126,234,0.4)",
          }}>ENVIAR MENSAGEM</button>
        </div>
      )}

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
        {[
          { name: "LinkedIn", url: "https://linkedin.com/in/SEU_LINKEDIN_AQUI" },
          { name: "GitHub", url: "https://github.com/ricfmf" },
        ].map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{
            padding: "0.5rem 1.2rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            color: "rgba(226,232,240,0.5)",
            fontSize: "0.8rem",
            fontFamily: "'Space Mono', monospace",
            textDecoration: "none",
            transition: "all 0.2s",
          }}>{s.name}</a>
        ))}
      </div>
    </div>
  );
}