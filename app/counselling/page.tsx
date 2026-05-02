const container = {
  maxWidth: "900px",
  margin: "100px auto",
  padding: "0 20px",
};

const h1 = { fontFamily: "Georgia, serif", fontSize: "40px" };
const h2 = { fontFamily: "Georgia, serif", marginTop: "40px" };
const text = { fontSize: "16px", color: "#444" };

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

export default function Counselling() {
  return (
    <main style={container}>
      <h1 style={h1}>Counselling</h1>

      <p style={{ ...text, marginTop: "20px" }}>
        I work with people who are functioning, but not fulfilled.
      </p>

      <div style={{ ...card, marginTop: "40px" }}>
        <h2 style={h2}>Areas I work with</h2>
        <ul style={{ ...text, lineHeight: "2" }}>
          <li>Erectile dysfunction</li>
          <li>Relationship difficulties</li>
          <li>Emotional disconnection</li>
          <li>Anxiety & overthinking</li>
        </ul>
      </div>

      <div style={{ ...card, marginTop: "40px" }}>
        <h2 style={h2}>Sessions</h2>
        <p style={text}>
          Sessions are confidential and focused on real change.
        </p>
      </div>
    </main>
  );
}
