"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  // Esconde a navegação na página do jogo da forca
  if (pathname === "/forca") return null;

  const links = [
    { path: "/", label: "HOME" },
    { path: "/sobre", label: "SOBRE" },
    { path: "/forca", label: "FORCA 🎮" },
    { path: "/contato", label: "CONTATO" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,20,0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
    }}>
      <span style={{
        fontFamily: "'Orbitron', monospace",
        fontWeight: 900, fontSize: "1.1rem",
        background: "linear-gradient(135deg, #667EEA, #4ECDC4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "0.1em",
      }}>CURRÍCULO</span>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {links.map(l => {
          const isActive = pathname === l.path;
          return (
            <Link key={l.path} href={l.path} style={{
              padding: "0.4rem 0.9rem",
              background: isActive ? "rgba(102,126,234,0.2)" : "transparent",
              border: isActive ? "1px solid rgba(102,126,234,0.5)" : "1px solid transparent",
              borderRadius: "8px",
              color: isActive ? "#667EEA" : "rgba(226,232,240,0.5)",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}