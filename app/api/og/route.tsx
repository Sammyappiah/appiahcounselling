import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#FCFAF7",
          color: "#222",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Appiah Counselling
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
