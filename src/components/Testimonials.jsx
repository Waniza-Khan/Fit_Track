import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const testimonials = [
  {
    initials: "RK",
    color: "from-[#0077A8] to-[#6EC1E4]",
    text: "Lost 10kg in 3 months! The AI workout plans are incredibly personalized. FitTrack is the best fitness app I've ever used — it keeps me motivated every single day.",
    author: "Ali Khan.",
    role: "Lost 10kg in 3 months",
  },
  {
    initials: "SA",
    color: "from-[#1D9E75] to-[#5DCAA5]",
    text: "The heart rate analytics changed everything for me. I can now train smarter, not harder. My VO2 max improved by 15% in just 6 weeks. Absolutely incredible app!",
    author: "Sara .",
    role: "Marathon Runner",
  },
  {
    initials: "MF",
    color: "from-[#D85A30] to-[#F0997B]",
    text: "Calorie tracking used to be a pain. With FitTrack's barcode scanner and meal database, it takes 30 seconds a day. I've hit my nutrition goals every week for 2 months!",
    author: "Faisal.",
    role: "Lost 15kg, gained muscle",
  },
];

const AbstractAvatar = ({ initials, color }) => (
  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
    <span className="text-white font-extrabold text-2xl" style={{ fontFamily: "'Sora', sans-serif" }}>
      {initials}
    </span>
  </div>
);

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const { ref, visible } = useReveal();
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="bg-[#F4F9FD] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-[#002D42] mb-2"
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
            Real Results, Real People
          </h2>
          <p className="text-[#5A7A8A] text-sm">Join 500,000+ users who transformed their lives with FitTrack</p>
        </div>

        <div ref={ref}
          className={`bg-white border border-[#0077A8]/10 rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-[260px_1fr] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Left */}
          <div className="bg-gradient-to-br from-[#d4eef7] to-[#b8dff0] flex flex-col items-center justify-center gap-4 min-h-[200px] p-8">
            <AbstractAvatar initials={t.initials} color={t.color} />
            <div className="text-center">
              <p className="font-bold text-[#002D42] text-sm">{t.author}</p>
              <p className="text-[#0077A8] text-xs font-semibold">{t.role}</p>
            </div>
          </div>

          {/* Right */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#0077A8] text-base">★</span>)}
              </div>
              <div className="text-[#6EC1E4] leading-none mb-3 opacity-60"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "5rem", fontWeight: 900 }}>"</div>
              <p className="text-[#1A2E3D] text-sm md:text-base leading-relaxed italic mb-6">{t.text}</p>
            </div>

            {/* Dots + Arrows */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${i === idx ? "bg-[#0077A8] w-6" : "bg-[#0077A8]/20"}`}/>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-[#0077A8]/20 bg-white flex items-center justify-center text-[#002D42] hover:bg-[#002D42] hover:text-white transition-all duration-200">←</button>
                <button onClick={() => setIdx((idx + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-[#002D42] text-white flex items-center justify-center hover:bg-[#0077A8] transition-all duration-200">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
