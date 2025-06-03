import { useState, useEffect } from "react";
import { Menu, Lock, User, X } from "lucide-react";
import a1 from "../assets/1.png";

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

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-black text-white px-4 sm:px-6 py-3 h-20 overflow-hidden">
        {/* Logo & Text */}
        <div className="flex flex-col items-start">
          <img
            src="https://static.wixstatic.com/media/fdb6b8_39ee890f27674130964b02bbf050f65d%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/fdb6b8_39ee890f27674130964b02bbf050f65d%7Emv2.png"
            alt="KK Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <p className="mt-1 text-sm sm:text-base font-semibold" style={{ color: lightOrange }}>
            BHAGCHANDANI
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Lock color={lightOrange} size={18} className="hidden sm:block" />
          <div className="flex items-center gap-1 text-sm sm:text-base" style={{ color: lightOrange }}>
            <User color={lightOrange} size={18} />
            <span className="hidden sm:inline">Login</span>
          </div>
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu color={lightOrange} size={26} />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 bg-black text-white shadow-lg z-50 transition-transform duration-300 transform
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        w-full sm:w-80 max-w-xs flex`}
      >
        {/* Left Image (only on sm+) */}
        <div className="hidden sm:flex w-1/3 bg-black justify-center items-center p-4">
          <img
            src={a1}
            alt="Sidebar image"
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Right Menu */}
        <div className="w-full sm:w-2/3 flex flex-col">
          {/* Close button */}
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
          <nav className="flex flex-col space-y-3 px-6 overflow-y-auto pb-6">
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
                >
                  {option}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Backdrop Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  );
}
