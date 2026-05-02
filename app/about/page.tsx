const container = {
  maxWidth: "1100px",
  margin: "100px auto",
  padding: "0 20px",
};

const h1 = { fontFamily: "Georgia, serif", fontSize: "40px" };
const text = { fontSize: "16px", color: "#444", lineHeight: "1.7" };

export default function About() {
  return (
    <main style={container}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center"
      }}>
        <div>
          <h1 style={h1}>Counselling that meets you where you are</h1>

          <p style={{ ...text, marginTop: "20px" }}>
            I work with people who are functioning on the surface but struggling underneath.
          </p>

          <p style={{ ...text, marginTop: "20px" }}>
            The aim is clarity, honesty, and real change.
          </p>
        </div>

        <img src="/images/home/session.jpg" style={{
          width: "100%",
          borderRadius: "16px"
        }} />
      </div>
    </main>
  );
}
