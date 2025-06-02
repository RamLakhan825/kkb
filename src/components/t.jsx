// // T.tsx or T.jsx
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import { useEffect, useState } from "react"

// const testimonials = [
//   {
//     name: "Kai Gu",
//     company: "Milestone Pharma",
//     post: "General Manager",
//     message: "He is a great business leader with strategic thinking and prompt actions.",
//   },
//   {
//     name: "Antony Williams",
//     company: "ACD/Labs",
//     post: "CSO",
//     message: "Led to the successful establishment and then growth of business in Asia & Pacific Region.",
//   },
//   {
//     name: "Ajit Manocha",
//     company: "Biocon Limited",
//     post: "CIO-Syngene",
//     message: "All these years, we got the desired ROI.",
//   },
//   {
//     name: "Eduard Kolovanov",
//     company: "ACD/Labs",
//     post: "Senior Director | Software Development",
//     message: "",
//   },
//   {
//     name: "Sreedhara R. Voleti",
//     company: "BioNEST",
//     post: "CEO",
//     message: "",
//   },
//   {
//     name: "Karim Kassam",
//     company: "ACD/Labs",
//     post: "Senior Director | Tech & Sci Services",
//     message: "",
//   },
//   {
//     name: "Kamlesh Padiya",
//     company: "Lupin Research Park",
//     post: "Associate Director | Process",
//     message: "",
//   },
//   {
//     name: "Eric Milgram",
//     company: "ACD/Labs",
//     post: "Vice President of operations",
//     message: "",
//   }
// ]

// export default function T() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel)
//     },
//   })

//   // Auto-play logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       instanceRef.current?.next()
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [instanceRef])

//   return (
//     <div className="bg-white text-black py-10 px-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-2">TESTIMONIALS</h1>
//       <h2 className="text-xl text-center mb-6">
//         Trusted by Leaders Across <br /> Industries
//       </h2>

//       <div className="relative w-full max-w-3xl">
//         <div ref={sliderRef} className="keen-slider">
//           {testimonials.map((t, index) => (
//             <div key={index} className="keen-slider__slide p-4">
//               <div className="bg-orange-500 text-white p-4 rounded-t-lg">
//                 <h3 className="text-lg font-semibold">{t.name}</h3>
//                 <p className="text-sm">{t.post}</p>
//                 <p className="text-sm italic">{t.company}</p>
//               </div>
//               <div className="bg-white border border-orange-500 p-4 rounded-b-lg text-black">
//                 <p className="text-base">{t.message || "No message available."}</p>
//                 <p className="text-5xl font-bold text-orange-500 text-right mt-2">“</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={() => instanceRef.current?.prev()}
//           className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-500 text-3xl px-2"
//         >
//           &#8592;
//         </button>
//         <button
//           onClick={() => instanceRef.current?.next()}
//           className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500 text-3xl px-2"
//         >
//           &#8594;
//         </button>
//       </div>

//       <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
//         Explore More Testimonials
//       </button>
//     </div>
//   )
// }
