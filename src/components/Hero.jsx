import './Hero.css';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col justify-center items-center text-center px-4 sm:px-6"
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
      <div className="relative z-20 mt-10 md:mt-24 max-w-5xl">
        <h1 className="text-2xl md:text-5xl font-bold leading-snug mb-6">
          BECOME THE
        </h1>

        <div className="my-4">
          <h1 className="leader-text text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight">
            LEADER
          </h1>
        </div>
        <br />
        <h2 className="text-lg sm:text-xl md:text-4xl font-semibold leading-relaxed mb-2">
          YOU WERE MEANT
        </h2>
        <h2 className="text-lg sm:text-xl md:text-4xl font-semibold leading-relaxed mb-6">
          TO BE"
        </h2>

        <p className="text-base sm:text-lg md:text-2xl font-semibold">
          - KK BHAGCHANDANI
        </p>
      </div>

      {/* Overlapping image */}
      <img
        src="https://static.wixstatic.com/media/fdb6b8_3a2810b3adf04c65b2531e93c7b28e4e~mv2.webp/v1/fill/w_501,h_751,al_c,q_90,enc_avif,quality_auto/IMG_4437%20copy.webp"
        alt="KK Bhagchandani"
        className="absolute bottom-0 right-2 sm:right-4 md:right-0 w-[160px] sm:w-[200px] md:w-[360px] object-contain z-30 translate-x-2 sm:translate-x-8 md:translate-x-16"
      />
    </section>
  );
}
