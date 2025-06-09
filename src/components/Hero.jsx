import './Hero.css';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col justify-center items-center"
    >
      {/* Video background inside text mask */}
      <div className="leader-video-mask absolute inset-0 z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://video.wixstatic.com/video/fdb6b8_eaa22f4ed70749059daca87b962b0c9c/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Text content */}
      <div className="relative z-20 text-center w-full max-w-[1200px] px-4">
        <div className="flex flex-col items-center transform translate-y-[2px]">
          <h1 className="text-[72px] leading-[74px] font-bold uppercase">BECOME</h1>
          <h1 className="text-[72px] leading-[74px] font-bold uppercase mb-4">THE</h1>

          {/* Leader text with video mask */}
          <div className="relative h-[180px] mb-6 transform translate-y-[4px]">
            <h1 className="leader-text">LEADER</h1>
          </div>

          <h2 className="text-[72px] leading-[74px] font-semibold italic transform translate-y-[6px]">YOU WERE</h2>
          <h2 className="text-[72px] leading-[74px] font-semibold italic mb-10 transform translate-y-[6px]">MEANT TO BE</h2>
        </div>

        <p className="text-[32px] leading-[34px] font-medium transform translate-y-[6px]">- KK BHAGCHANDANI</p>
      </div>

      {/* Overlapping image - fixed positioning */}
      <img
        src="https://static.wixstatic.com/media/fdb6b8_3a2810b3adf04c65b2531e93c7b28e4e~mv2.webp/v1/fill/w_501,h_751,al_c,q_90,enc_avif,quality_auto/IMG_4437%20copy.webp"
        alt="KK Bhagchandani"
        className="absolute bottom-0 right-0 h-[75vh] max-h-[800px] object-contain z-30 translate-x-[10%]"
      />
    </section>
  );
}