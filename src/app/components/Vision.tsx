import founderImage from "../../assets/MY-PIC.png";
export function Vision() {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] overflow-hidden w-full max-w-[320px]">
              <img
                src={founderImage}
                alt="Chede Nikhil Raina"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-4 text-center">
              <div className="font-['Syne'] font-semibold text-xl text-[#333333]">
                Chede Nikhil Raina
              </div>
              <div className="text-[#666666] font-medium mt-1">Founder</div>
            </div>
          </div>

          <div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-bold mb-4 text-[#333333]">
              Vision
            </h2>
            <p className="text-[#666666] text-lg sm:text-xl mb-8 leading-relaxed">
              Building brands with creativity, strategy, and purpose.
            </p>

            <div className="space-y-4 text-[#666666] leading-relaxed text-base sm:text-lg">
              <p>
                As a founder, I started this journey with a simple vision — to make promotion
                easy, accessible, and effective for every business. I saw that many
                businesses struggle to manage different services for design, content, and
                marketing. So, I wanted to create a place where everything comes together
                — simple, flexible, and result-driven.
              </p>
              <p>
                We understand that your business is more than just work — it’s your effort,
                your passion, and your dream. That’s why we don’t just offer services.
                We focus on helping you grow, reach the right audience, and build a strong
                presence in the digital world.
              </p>
            </div>

            <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#6D28D9]/5 border border-[#6D28D9]/15 shadow-sm">
              <p className="text-[#4C1D95] font-semibold text-lg sm:text-xl">
                Your growth is not just our goal — it’s our responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

