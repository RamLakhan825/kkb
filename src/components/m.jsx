import { useEffect, useState } from "react";

export default function M() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        padding: isMobile ? "1rem" : "2rem",
        boxSizing: "border-box",
        overflowX: "hidden", // prevents horizontal scrolling
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap", // ensures wrapping on narrow screens
          gap: "10px",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "center", // center on larger screens
        }}
      >
        {/* KK Heading with background image */}
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
          <h1
            style={{
              fontSize: isMobile ? "6rem" : "15rem", // reduced size
              fontWeight: "500",
              backgroundImage:
                "url('https://static.wixstatic.com/media/fdb6b8_7a5a0b3a008f49539d0c0485852c61ce~mv2.webp/v1/fill/w_379,h_1133,al_c,q_90,enc_avif,quality_auto/IMG_4394%20copy.webp')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
              lineHeight: "1",
              wordBreak: "break-word",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            KK
          </h1>
        </div>

        {/* INSIGHTS heading */}
        <div style={{ maxWidth: "100%" }}>
          <h1
            style={{
              fontSize: isMobile ? "3rem" : "5rem",
              fontWeight: "bold",
              lineHeight: "1.1",
              wordBreak: "break-word",
            }}
          >
            INSIGHTS <br /> FOR <br /> LEADERS
          </h1>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "4px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            Experience
          </button>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "4px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            Contact KK
          </button>
        </div>
      </div>
    </div>
  );
}
