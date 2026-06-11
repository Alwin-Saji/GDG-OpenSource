import DotText from '../components/DotText';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 font-sans">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-center items-center overflow-hidden">


        {/* Faint Code Snippet 1 */}
        <div className="absolute top-24 left-10 text-[#300000] font-mono text-sm sm:text-base opacity-40 transform -rotate-6">
          <pre>
            {`function solve(problem){
  let idea = think();
  let code = build(idea);
  return improve(code);
}`}
          </pre>
        </div>

        {/* Faint Code Snippet 2 */}
        <div className="absolute bottom-32 right-10 text-[#300000] font-mono text-sm sm:text-base opacity-40 transform rotate-3">
          <pre>
            {`while (curious){
  learn();
  build();
  repeat();
}`}
          </pre>
        </div>

        {/* Gear Icon (SVG) */}
        <div className="absolute top-32 right-16 text-[#300000] opacity-40 w-32 h-32">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        </div>

        {/* Big Gear Left */}
        <div className="absolute bottom-24 left-[-2rem] text-[#300000] opacity-40 w-48 h-48">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        </div>

        {/* Code Icon Center Bottom */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-[#300000] opacity-40 w-24 h-24 transform -rotate-12">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10 flex flex-col items-center text-center">

        {/* Pixel-sampled DotText Components */}
        <div className="flex flex-col items-center justify-center mb-10 gap-6 w-full max-w-5xl mx-auto px-4">
          <div className="w-11/12 sm:w-4/5 md:w-3/4">
            <DotText
              text="SEASON OF"
              color="#E8D98A"
              fontSize={120}
              dotRadius={4}
              gap={3}
            />
          </div>

          <div className="w-full sm:w-11/12 md:w-full max-w-3xl">
            <DotText
              text="CODE"
              color="#B8C7A8"
              fontSize={160}
              dotRadius={5}
              gap={4}
              variant="code"
              wordDelayOffset={2}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-6 mt-2 mb-10">
          <a href="#register" className="px-8 py-4 bg-[#E8D98A] text-[#300000] font-bold rounded-full hover:bg-[#d4c575] hover:scale-105 transition-all shadow-lg text-lg flex items-center justify-center">
            Register Now
          </a>
          <a href="#" className="px-8 py-4 bg-transparent border-2 border-[#B8C7A8] text-[#B8C7A8] font-bold rounded-full hover:bg-[#B8C7A8] hover:text-[#300000] hover:scale-105 transition-all shadow-lg text-lg flex items-center justify-center">
            Explore Projects
          </a>
        </div> */}

        {/* Pixelated/Monospace Tagline */}
        <div className="mt-4 mb-16 font-mono flex flex-wrap justify-center gap-x-4">
          {["Write", "Code", "That", "Matters"].map((word, i) => (
            <span
              key={i}
              className="text-white font-doto font-bold text-lg sm:text-2xl tracking-[0.3em] uppercase drop-shadow-lg animate-word-in"
              style={{
                textShadow: '2px 2px 0 #300000',
                animationDelay: `${2.4 + i * 0.3}s`
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-6">
          <h2 className="text-white text-xl sm:text-3xl font-bold tracking-wide drop-shadow-md">
            An Open-Source Contribution Program
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Hero;

