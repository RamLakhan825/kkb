export default function Y() {
  return (
    <div className="space-y-16">
      {/* First Section */}
      <div className="bg-white text-black p-8 max-w-5xl mx-auto flex items-start gap-6">
        {/* Vertical thick orange line */}
        <div
          className="w-5 bg-[#FFA500] opacity-80 rounded-sm"
          style={{ minHeight: '6rem' }}
        ></div>

        {/* Text content */}
        <div>
          <h1 className="font-bold text-3xl leading-snug">
            EXECUTIVE COACHING <br />AND LEADERSHIP <br />EXCELLENCE
          </h1>

          <h1 className="mt-6 text-2xl font-semibold leading-relaxed">
            UNLOCK LEADERSHIP <br />MASTERY AND CAREER <br />SUCCESS
          </h1>

          <h3 className="mt-4 text-base font-normal leading-relaxed max-w-md">
            For visionary CEOs, ambitious professionals, and organizations <br />
            committed to building world-class leadership teams
          </h3>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-orange-600 transition-colors">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-black text-white max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="https://static.wixstatic.com/media/fdb6b8_7a5a0b3a008f49539d0c0485852c61ce~mv2.webp/v1/fill/w_379,h_1133,al_c,q_90,enc_avif,quality_auto/IMG_4394%20copy.webp"
            alt="KK Bhagchandani"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-2/3 space-y-4 text-left">
          <h2 className="text-xl font-semibold uppercase tracking-wide">About</h2>
          <h1 className="text-4xl font-bold">KK BHAGCHANDANI</h1>
          <h1 className="text-3xl font-extrabold">
            <b>KKB</b>
          </h1>

          <p className="text-base leading-relaxed">
            With 30+ years of transforming leadership across Asia, KK Bhagchandani is now
            an ICF and IMC-certified coach, specializing in sales coaching, executive presence,
            leadership development, and powerful communication. Recognized among the "Top 10
            leaders in Pharma", his blend of global expertise and localized insights empowers
            professionals to lead with clarity, confidence, and impact.
            <br />
            <br />
            Book a Free 30-Minute Leadership Strategy Session
          </p>

          <button className="mt-4 px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-orange-600 hover:text-white transition-colors">
            Free Leadership Strategy Session
          </button>
        </div>
      </div>
    </div>
  );
}
