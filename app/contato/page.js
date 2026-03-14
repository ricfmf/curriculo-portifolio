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