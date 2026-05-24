import { useReveal } from "../hooks/useReveal";

const features = [
  {
    icon: "🔥",
    title: "Calorie Counter",
    desc: "Track your daily meals and active calories burned instantly. Scan barcodes, log meals, and stay on top of your nutrition goals effortlessly.",
    accent: "bg-[#EAF6FF]",
  },
  {
    icon: "💪",
    title: "Personalized Workouts",
    desc: "AI-driven custom workout plans adapted to your fitness level, schedule and goals. From beginner to advanced — we've got you covered.",
    accent: "bg-[#e0f5ed]",
  },
  {
    icon: "❤️",
    title: "Real-time Heart Analytics",
    desc: "Sync with smartwatches to monitor heart rate zones, VO2 max, recovery time, and stress levels in real time throughout your day.",
    accent: "bg-[#EAF6FF]",
  },
];

const Features = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="features" className="relative bg-[#F4F9FD] py-20 px-6 overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full pointer-events-none -top-24 -right-16"
        style={{ background: "linear-gradient(135deg,rgba(110,193,228,0.2),rgba(200,240,224,0.3))" }}/>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-[#002D42] mb-2"
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
            Powerful Features
          </h2>
          <p className="text-[#5A7A8A] text-sm">Everything you need to crush your fitness goals</p>
        </div>

        <div ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {features.map((f) => (
            <div key={f.title}
              className="bg-white rounded-2xl p-7 border border-[#004D7A]/[0.06] shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${f.accent}`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-[#002D42] text-base mb-2"
                style={{ fontFamily: "'Sora', sans-serif" }}>{f.title}</h3>
              <p className="text-[#5A7A8A] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
