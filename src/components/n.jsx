import a1 from "../assets/8.png";
import a2 from "../assets/9.png";
import a3 from "../assets/10.png";

export default function N() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[a1, a2, a3].map((imgSrc, index) => {
          const descriptions = [
            "Dress sharp, stand out and reap CONFIDENCE",
            "Presented at IGCW-2023 about 'Utilizing AI for Chemistry research and ...",
            "Sharing success stories during Keynote address",
          ];

          return (
            <div
              key={index}
              onClick={() => alert(`Clicked on item ${index + 1}`)}
              style={{
                cursor: "pointer",
                maxWidth: "300px",
                textAlign: "center",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 0 rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={imgSrc} alt={`Image ${index + 1}`} style={{ width: "100%" }} />
              <p style={{ padding: "1rem", color: "black" }}>{descriptions[index]}</p>
            </div>
          );
        })}
      </div>

      {/* Centered Read More button */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
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
          Read More
        </button>
      </div>
    </div>
  );
}
