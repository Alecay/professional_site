// PasswordGate.tsx
import { useState } from "react";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("site-unlocked") === "true"
  );
  const [input, setInput] = useState("");

  const PASSWORD = "5708";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("site-unlocked", "true");
      setUnlocked(true);
    } else {
      alert("Wrong password");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "#fff",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Site Locked</h2>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Unlock</button>
      </form>
    </div>
  );
}
