import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Appiah Counselling";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #065f46, #10b981)",
          color: "white",
          padding: "60px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 48,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
