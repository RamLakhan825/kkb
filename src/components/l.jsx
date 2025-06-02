export default function L() {
    const items = [
        {
            id: "01.",
            title: "30+ Years Global Expertise",
            desc: "Proven track record of working with professionals and learnings for your growth!",
        },
        {
            id: "02.",
            title: "Tailored Approach",
            desc: "Customized course modules for individual's and organization's goals. All programs are curated based on targeted needs.",
        },
        {
            id: "03.",
            title: "Personal Learning",
            desc: "Most custom-made programs are delivered in person and have a strong quotient of human-connection and story-telling.",
        },
        {
            id: "04.",
            title: "Guaranteed Results",
            desc: "90% clients report 2x sales-growth and enhanced executive endurance. Most customers confirm significant career growth",
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen w-full py-12 px-6 md:px-12 text-center relative flex justify-center items-start">
            <div className="max-w-4xl w-full">
                {/* Heading with vertical line */}
                <div className="inline-block relative mb-10">
                    <h1 className="text-4xl font-bold leading-snug">
                        LEADERSHIP <br /> GROWTH <br /> PARTNER
                    </h1>
                    {/* Vertical orange line with opacity */}
                    <div className="hidden md:block absolute top-0 right-[-30px] h-full w-7 bg-orange-500 opacity-60 rounded" />
                </div>

                {/* Items */}
                <div className="space-y-10">
                    {items.map((item, index) => {
                        const words = item.title.split(" ");
                        const lastWord = words.pop();
                        const titleFormatted = (
                            <>
                                {words.join(" ")}{" "}
                                <span>
                                    {lastWord?.slice(0, -1)}
                                    <span className="inline-block">{lastWord?.slice(-1)}</span>
                                </span>
                            </>
                        );

                        return (
                            <div key={index} className="space-y-3 max-w-xl mx-auto">
                                <p className="text-lg font-bold">{item.id}</p>
                                <h1 className="text-2xl font-semibold">{titleFormatted}</h1>
                                <p className="text-sm text-gray-300">{item.desc}</p>

                                {/* Arrow and horizontal line */}
                                <div className="mt-4 inline-block w-full max-w-full">
                                    <div className="text-white text-2xl">→</div>
                                    <div className="h-[1px] bg-white mt-2 mx-auto max-w-full" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
