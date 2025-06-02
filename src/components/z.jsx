export default function Z() {
  return (
    <div className="bg-black text-white p-10 max-w-6xl mx-auto space-y-12">
      <h1 className="text-6xl font-bold mb-8">FEATURED <br />PROGRAMS</h1>

      {/* Program Items */}
      {[
        {
          title: 'Executive Leadership Mentoring',
          desc: 'Develop story telling, executive presence, strategic leadership, and impactful-leadership skills to drive business success. Our leadership coaching programs empower executives to influence, inspire, and lead high-performance teams.'
        },
        {
          title: 'Sales Enablement',
          desc: 'Boost your sales, negotiation skills, and client engagement with expert-led sales coaching. Learn persuasive selling techniques, software demo mastery, and objection handling to accelerate revenue growth and close high-value deals effectively.'
        },
        {
          title: 'Effective Communication',
          desc: 'Enhance your business communication, presentation skills, and public speaking to influence, engage, and lead with clarity. Our coaching focuses on storytelling, active listening, and executive communication to drive impactful interactions.'
        },
        {
          title: 'Professional Development',
          desc: 'Advance your career with leadership agility, emotional intelligence, personal-branding and career growth strategies. Our coaching helps mid-career and senior professionals to enhance their industry relevance to stay ahead in competitive markets.'
        },
        {
          title: 'Business Consulting Services',
          desc: 'Develop a scalable business strategy to drive growth, international-market expansion, and competitive advantage. We help organizations with market entry, revenue optimization, and strategic planning for sustainable success.'
        },
        {
          title: 'Business Expansion into Asia',
          desc: 'Navigate the complexities of business expansion in Asia and emerging markets with expert insights. We offer guidance on market entry strategy, regulatory compliance, local partnerships, and cultural adaptation for seamless growth.'
        },
      ].map(({ title, desc }, idx) => (
        <div
          key={idx}
          className="group border border-white rounded-md p-6"
        >
          <h1 className="text-3xl font-semibold mb-2">{title}</h1>
          <p className="mb-4">{desc}</p>

          <button
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 rounded-md border border-white bg-black text-white hover:bg-orange-500 hover:bg-opacity-80"
          >
            Know More
          </button>
        </div>
      ))}

      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-md bg-white text-black hover:bg-orange-500 hover:bg-opacity-80 transition">
          Explore All Programs
        </button>
      </div>
    </div>
  );
}
