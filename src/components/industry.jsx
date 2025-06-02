import a1 from '../assets/2.png';
import a2 from "../assets/3.png";
import a3 from "../assets/4.png";
import a4 from "../assets/5.png";
import a5 from "../assets/6.png";
import a6 from "../assets/7.png";

export default function Industry() {
    return (
        <div className="bg-white text-black py-12 px-4 flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                INDUSTRY <br /> <span className="text-black">RECOGNITION</span>
            </h1>

            <div className="flex flex-col lg:flex-row items-stretch gap-10 max-w-7xl w-full mt-8">
                {/* Awards Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                    {[ 
                        { img: a1, label: "Leaders in Pharma" },
                        { img: a2, label: "Global Achiever's Award" },
                        { img: a3, label: "Glory of India" },
                        { img: a4, label: "Bharat Udyog Ratan" },
                        { img: a5, label: "International Achiever Gold Star" },
                        { img: a6, label: "International Sales Entrepreneur" }
                    ].map(({ img, label }, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg text-center hover:scale-105 transition h-full flex flex-col justify-center">
                            <img src={img} alt="" className="h-24 mx-auto mb-3 object-contain" />
                            <p className="font-semibold">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Side Image */}
                <div className="flex-1 flex justify-center items-center">
    <img
        src="https://static.wixstatic.com/media/fdb6b8_62a4ccbd0aea4b5a803ec400eacc6be5~mv2.webp/v1/fill/w_486,h_984,al_c,q_90,enc_avif,quality_auto/IMG_4535%20copy.webp"
        alt="Award"
        className="h-full max-h-[750px] w-auto object-contain rounded-lg"
    />
</div>

            </div>

            {/* Call to Action Button */}
            <div className="mt-10">
                <button className="bg-black text-white px-8 py-3 hover:bg-orange-600 transition">
                    Competence
                </button>
            </div>
        </div>
    );
}
