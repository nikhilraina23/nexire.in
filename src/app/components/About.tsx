import { useEffect, useRef } from 'react';
import { Lightbulb, Target, Zap, Users } from 'lucide-react';

export function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Lightbulb,
      title: 'Flexible Solutions',
      description: 'Mix and match services or choose complete packages — total flexibility to fit your budget and goals',
    },
    {
      icon: Target,
      title: 'All-in-One Agency',
      description: 'From strategy to execution, get everything you need under one roof with seamless coordination',
    },
    {
      icon: Zap,
      title: 'Fast & Creative',
      description: 'Rapid turnaround without sacrificing quality — fresh, innovative ideas delivered on time',
    },
    {
      icon: Users,
      title: 'Results-Driven',
      description: 'Data-backed strategies focused on real metrics: engagement, reach, conversions, and growth',
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-6 text-[#333333]">
            Why Choose <span className="text-[#EF4444]">Nexire</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            We're a next-generation digital promotion agency that empowers brands to shine. With flexible service options and complete packages, we make professional marketing accessible and results-driven. Let's amplify your success together.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 bg-[#F5F5F5] p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <feature.icon className="w-12 h-12 text-[#EF4444] mb-4 mx-auto" />
              <h3 className="font-['Syne'] font-semibold text-lg mb-2 text-[#333333]">
                {feature.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-on-scroll:nth-child(1) { animation-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { animation-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { animation-delay: 0.3s; }
        .animate-on-scroll:nth-child(4) { animation-delay: 0.4s; }
        .animate-on-scroll:nth-child(5) { animation-delay: 0.5s; }
        .animate-on-scroll:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}