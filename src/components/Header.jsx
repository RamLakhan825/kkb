import { useState } from "react";
import { Menu, Lock, User, X } from "lucide-react";
import a1 from "../assets/1.png"; // Your image path

const menuOptions = [
  "Home",
  "Programs",
  "Learn with menubar",
  "Experience",
  "Accomplishments",
  "Testimonials",
  "Contact",
  "Updates",
  "Book appointment",
  "Events",
];

const lightOrange = "#FFA500";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <>
      {/* Header fixed at top */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-black text-white px-6 py-3 h-20">
        {/* Left: logo and BHAGCHANDANI stacked */}
        <div className="flex flex-col items-start">
          <img
            src="https://static.wixstatic.com/media/fdb6b8_39ee890f27674130964b02bbf050f65d%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/fdb6b8_39ee890f27674130964b02bbf050f65d%7Emv2.png"
            alt="KK Logo"
            className="w-12 h-12 object-contain"
          />
          <p className="mt-1 font-semibold" style={{ color: lightOrange }}>
            BHAGCHANDANI
          </p>
        </div>

        {/* Right side: lock icon, login with person icon + Login: text, and menu icon */}
        <div className="flex items-center space-x-6">
          <Lock color={lightOrange} size={20} />
          <div className="flex items-center space-x-1" style={{ color: lightOrange }}>
            <User color={lightOrange} size={20} />
            <span>Login</span>
          </div>

          {/* Menu icon toggles sidebar */}
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu color={lightOrange} size={28} />
          </button>
        </div>
      </header>

      {/* Sidebar fixed to right */}
      <aside
        className={`fixed top-0 right-0 bottom-0 bg-black text-white shadow-lg z-50 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          } w-72 flex flex-row`}
      >
        {/* Left column: Image full height */}
        <div className="w-1/3 bg-black flex justify-center items-center p-4" style={{ height: "100vh" }}>
          <img
            src={a1}
            alt="Sidebar image"
            className="object-contain"
            style={{ height: "100%", width: "auto" }}
          />
        </div>

        {/* Right column: menu options and close button */}
        <div className="w-2/3 flex flex-col">
          {/* Close button top right in hollow circle */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
              className="border-2 border-[#FFA500] rounded-full p-2 flex items-center justify-center
                hover:rotate-180 transition-transform duration-500"
              style={{ width: 36, height: 36 }}
            >
              <X color="#FFA500" size={20} />
            </button>
          </div>

          {/* Menu options */}
          <nav className="flex flex-col space-y-3 px-6">
            {menuOptions.map((option) => {
              const isSelected = option === selected;
              return (
                <button
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`w-full text-left py-2 rounded ${isSelected
                      ? "text-[#FFA500]"
                      : "text-white hover:text-orange-400"
                    }`}
                  style={{ backgroundColor: "black" }}
                >
                  {option}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Optional: dark semi-transparent overlay behind sidebar */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          aria-hidden="true"
        />
      )}
    </>
  );
}
