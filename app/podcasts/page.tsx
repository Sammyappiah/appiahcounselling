const container = {
  maxWidth: "900px",
  margin: "100px auto",
  padding: "0 20px",
};

const h1 = { fontFamily: "Georgia, serif" };
const text = { color: "#444" };

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

export default function Podcasts() {
  return (
    <main style={container}>
      <h1 style={h1}>Podcast</h1>

      <div style={{ ...card, marginTop: "40px" }}>
        <h2>Featured Episode</h2>
        <p style={text}>Why you shut down in relationships</p>
        <a href="#">Listen</a>
      </div>

      <div style={{ marginTop: "40px", lineHeight: "2" }}>
        <p>Performance anxiety</p>
        <p>Why high performers feel empty</p>
        <p>Avoidance in intimacy</p>
      </div>
    </main>
  );
}
