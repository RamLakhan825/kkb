import { Linkedin, Twitter } from "lucide-react";
import a1 from "../assets/11.png";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {/* Three-column layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "3rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {/* Column 1 */}
        <div style={{ minWidth: "250px", maxWidth: "300px" }}>
          <p>
            For media inquiries,
            <br />
            please contact KK Bhagchandani
          </p>
          <br />
          <p>+91 96060 96865 | me@kkb.works</p>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "1rem",
            }}
          >
            <Linkedin color="white" size={24} />
            <Twitter color="white" size={24} />
          </div>
          <p>POLICIES</p>
          <p>T&C | Cancellation | Privacy</p>
        </div>

        {/* Column 2 */}
        <div style={{ minWidth: "250px", maxWidth: "300px" }}>
          <p>Sign up for news and updates from KK Bhagchandani</p>
          <br />
          <input
            type="text"
            placeholder="Enter your email here*"
            style={{
              padding: "10px",
              width: "100%",
              maxWidth: "250px",
              border: "none",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <br />
          <button
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            Subscribe
          </button>
        </div>

        {/* Column 3 */}
        <div style={{ minWidth: "250px", maxWidth: "300px" }}>
          <p>
            Find more information about KK and his <br /> programs
          </p>
          <br />
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>
            Talk to KK's
          </a>
          <br />
          <br />
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            Subscribe a call
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: "1px solid white", paddingTop: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={a1}
            alt="Footer Logo"
            style={{ maxWidth: "120px", marginBottom: "1rem" }}
          />
        </div>
        <p>Proudly designed and created by www.lioonnize.com</p>
      </div>
    </div>
  );
}
