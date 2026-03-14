export default function SkillBar({ name, level, color, visible }) {
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#CBD5E0" }}>{name}</span>
        <span style={{ fontSize: "0.8rem", color, fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: "999px",
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          width: visible ? `${level}%` : "0%",
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: `0 0 10px ${color}66`,
        }} />
      </div>
    </div>
  );
}