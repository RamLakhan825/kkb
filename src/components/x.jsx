export default function X() {
  return (
    <div className="bg-white text-black p-8 space-y-16">
      {/* Section 1 - Left to Right */}
      <div className="flex items-center gap-6" data-aos="fade-right">
        <div className="w-2 bg-[#FFA500] opacity-80 rounded-sm" style={{ minHeight: '6rem' }}></div>
        <div className="text-left">
          <h1 className="font-bold text-3xl leading-snug">
            FOR CEOs AND EXECUTIVES
          </h1>
          <h1 className="mt-6 text-2xl font-semibold leading-relaxed">
            Master Power Dynamics, Build Influence, <br />and Drive Organizational Growth
          </h1>
          <h3 className="mt-4 text-base font-normal leading-relaxed">
            Refine your executive presence, navigate corporate <br />challenges, and inspire high-performing teams.
          </h3>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-[#FFA500]/80 transition">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Section 2 - Right to Left */}
      <div className="flex flex-row-reverse items-center gap-6" data-aos="fade-left">
        <div className="w-2 bg-[#FFA500] opacity-80 rounded-sm" style={{ minHeight: '6rem' }}></div>
        <div className="text-right">
          <h1 className="font-bold text-3xl leading-snug">FOR SEASONED <br />PROFESSIONALS</h1>
          <h1 className="mt-6 text-2xl font-semibold leading-relaxed">
            Break Through Career Plateaus with a <br />Leadership Coach
          </h1>
          <h3 className="mt-4 text-base font-normal leading-relaxed">
            Reinvent your path with personal branding, <br />resilience strategies, and a tailored individual <br />development plan
          </h3>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-[#FFA500]/80 transition">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Section 3 - Left to Right */}
      <div className="flex items-center gap-6" data-aos="fade-right">
        <div className="w-2 bg-[#FFA500] opacity-80 rounded-sm" style={{ minHeight: '6rem' }}></div>
        <div className="text-left">
          <h1 className="font-bold text-3xl leading-snug">FOR ORGANISATIONS</h1>
          <h1 className="mt-6 text-2xl font-semibold leading-relaxed">
            Build a Coaching Culture for C-Suite <br />Excellence
          </h1>
          <h3 className="mt-4 text-base font-normal leading-relaxed">
            Invest in leadership coaching certification programs <br />to retain top talent and boost organizational <br />effectiveness
          </h3>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-[#FFA500]/80 transition">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
}
