export default function M() {
  return (
    <div style={{ backgroundColor: "white", color: "black", minHeight: "100vh", padding: "2rem" }}>
      <div>
        <span style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
          {/* Text "KK" with image background clipped to text */}
          <div>
            <h1
              style={{
                fontSize: "30rem",
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
              }}
            >
              KK
            </h1>
          </div>
          {/* Normal heading next to it */}
          <div>
            <h1 style={{ fontSize: "10rem", fontWeight: "bold", lineHeight: "1.1" }}>
              INSIGHTS <br /> FOR <br /> LEADERS
            </h1>
          </div>
        </span>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span style={{ display: "inline-flex", gap: "10px" }}>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "4px",
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
            }}
          >
            Contact KK
          </button>
        </span>
      </div>
    </div>
  );
}
