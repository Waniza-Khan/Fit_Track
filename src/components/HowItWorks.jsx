import { useReveal } from "../hooks/useReveal";

const steps = [
  { num: "01", icon: "📲", title: "Download the App", desc: "Available on iOS and Android. Free to download with no hidden charges." },
  { num: "02", icon: "🎯", title: "Set Your Goals", desc: "Tell us your target — weight loss, muscle gain, endurance. We build your plan." },
  { num: "03", icon: "🏋️", title: "Follow Your Plan", desc: "Get daily workouts, meal suggestions and reminders tailored just for you." },
  { num: "04", icon: "📈", title: "Track Progress", desc: "Watch your transformation with beautiful charts and weekly progress reports." },
];

const HowItWorks = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="howitworks" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[#002D42] mb-2"
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
            How It Works
          </h2>
          <p className="text-[#5A7A8A] text-sm">Get started in 4 simple steps</p>
        </div>

        <div ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-[#0077A8]/15 z-0"/>
              )}
              <div className="bg-white rounded-2xl p-6 border border-[#004D7A]/[0.07] shadow-md text-center relative z-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#EAF6FF] flex items-center justify-center text-2xl mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-xs font-bold text-[#0077A8] mb-1">{s.num}</p>
                <h3 className="font-bold text-[#002D42] text-sm mb-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}>{s.title}</h3>
                <p className="text-[#5A7A8A] text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
