import { useEffect, useRef } from "react";

const PhoneMockup = () => (
  <svg viewBox="0 0 200 360" width="200" height="360">
    {/* Phone frame */}
    <rect x="10" y="5" width="180" height="350" rx="28" fill="#002D42" />
    <rect x="16" y="11" width="168" height="338" rx="22" fill="#EAF6FF" />
    {/* Screen content */}
    <rect x="24" y="40" width="152" height="40" rx="8" fill="#0077A8" opacity="0.15"/>
    <rect x="32" y="52" width="60" height="8" rx="4" fill="#002D42" opacity="0.5"/>
    <rect x="32" y="64" width="40" height="6" rx="3" fill="#5A7A8A" opacity="0.4"/>
    {/* Calorie ring */}
    <circle cx="100" cy="150" r="48" fill="none" stroke="#EAF6FF" strokeWidth="10"/>
    <circle cx="100" cy="150" r="48" fill="none" stroke="#0077A8" strokeWidth="10"
      strokeDasharray="220 82" strokeLinecap="round" transform="rotate(-90 100 150)"/>
    <text x="100" y="145" textAnchor="middle" fill="#002D42" fontSize="18" fontWeight="bold">1,840</text>
    <text x="100" y="162" textAnchor="middle" fill="#5A7A8A" fontSize="9">kcal burned</text>
    {/* Stats row */}
    <rect x="24" y="218" width="46" height="44" rx="10" fill="#0077A8" opacity="0.12"/>
    <rect x="78" y="218" width="46" height="44" rx="10" fill="#0077A8" opacity="0.12"/>
    <rect x="132" y="218" width="46" height="44" rx="10" fill="#0077A8" opacity="0.12"/>
    <text x="47" y="238" textAnchor="middle" fill="#002D42" fontSize="11" fontWeight="bold">8.2k</text>
    <text x="47" y="252" textAnchor="middle" fill="#5A7A8A" fontSize="7">Steps</text>
    <text x="101" y="238" textAnchor="middle" fill="#002D42" fontSize="11" fontWeight="bold">72</text>
    <text x="101" y="252" textAnchor="middle" fill="#5A7A8A" fontSize="7">BPM</text>
    <text x="155" y="238" textAnchor="middle" fill="#002D42" fontSize="11" fontWeight="bold">6.4h</text>
    <text x="155" y="252" textAnchor="middle" fill="#5A7A8A" fontSize="7">Sleep</text>
    {/* Bar chart */}
    <rect x="30" y="290" width="14" height="30" rx="4" fill="#0077A8" opacity="0.3"/>
    <rect x="52" y="278" width="14" height="42" rx="4" fill="#0077A8" opacity="0.5"/>
    <rect x="74" y="282" width="14" height="38" rx="4" fill="#0077A8" opacity="0.4"/>
    <rect x="96" y="270" width="14" height="50" rx="4" fill="#0077A8" opacity="0.8"/>
    <rect x="118" y="276" width="14" height="44" rx="4" fill="#0077A8" opacity="0.5"/>
    <rect x="140" y="284" width="14" height="36" rx="4" fill="#0077A8" opacity="0.35"/>
    <rect x="162" y="272" width="14" height="48" rx="4" fill="#0077A8" opacity="0.6"/>
    {/* Notch */}
    <rect x="75" y="14" width="50" height="8" rx="4" fill="#002D42" opacity="0.4"/>
  </svg>
);

const Hero = () => {
  const ref = useRef(null);
  useEffect(() => { ref.current?.classList.add("opacity-100", "translate-y-0"); }, []);

  return (
    <section className="bg-gradient-to-b from-[#f0faff] to-white">
      <div ref={ref}
        className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 translate-y-6 transition-all duration-700">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#EAF6FF] border border-[#0077A8]/20 text-[#0077A8] px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            🏆 #1 Fitness Tracking App
          </div>

          <h1 className="font-extrabold text-[#002D42] leading-tight mb-5"
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
            Track Your Fitness,<br />Transform Your Life
          </h1>

          <p className="text-[#5A7A8A] text-base leading-relaxed mb-8 max-w-md">
            FitTrack gives you real-time insights into your calories, workouts, heart rate and sleep — all in one powerful app. Your personal AI fitness coach, always with you.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-[#002D42] text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-[#002D42]/25 hover:bg-[#0077A8] hover:-translate-y-0.5 transition-all duration-200">
              📱 Download Free
            </button>
            <button className="border-2 border-[#002D42]/20 text-[#002D42] px-7 py-3 rounded-full font-semibold text-sm hover:border-[#0077A8] hover:text-[#0077A8] transition-all duration-200">
              ▶ Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {[["500k+","Active Users"],["4.9★","App Rating"],["50+","Workout Plans"]].map(([val, label]) => (
              <div key={label}>
                <p className="font-extrabold text-[#002D42] text-xl" style={{ fontFamily: "'Sora', sans-serif" }}>{val}</p>
                <p className="text-[#5A7A8A] text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Phone mockup */}
        <div className="relative flex items-center justify-center h-[420px]">
          <div className="absolute w-72 h-72 rounded-full opacity-[0.18] -top-5 -right-5"
            style={{ background: "radial-gradient(circle,#6EC1E4,transparent)" }}/>
          <div className="absolute w-48 h-48 rounded-full opacity-[0.15] bottom-10 left-5"
            style={{ background: "radial-gradient(circle,#C8F0E0,transparent)" }}/>

          <div className="relative z-10 drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]">
            <PhoneMockup />
          </div>

          {/* Floating badge — calories */}
          <div className="absolute top-12 left-0 bg-white rounded-2xl shadow-lg px-3 py-2 z-20 animate-[float_3s_ease-in-out_0.3s_infinite]">
            <p className="text-[10px] text-[#5A7A8A]">Today's Goal</p>
            <p className="text-sm font-bold text-[#0077A8]">🔥 2,000 kcal</p>
          </div>

          {/* Floating badge — streak */}
          <div className="absolute top-16 right-0 bg-white rounded-2xl shadow-lg px-3 py-2 z-20 text-center animate-[float_3s_ease-in-out_0.6s_infinite]">
            <p className="text-base font-bold text-[#0077A8]">🏅 21</p>
            <p className="text-[10px] text-[#5A7A8A]">Day Streak</p>
          </div>

          {/* Floating badge — heart */}
          <div className="absolute bottom-24 left-2 bg-white rounded-xl shadow-lg px-3 py-2 z-20 animate-[float_3s_ease-in-out_0.9s_infinite]">
            <p className="text-[10px] text-[#5A7A8A]">Heart Rate</p>
            <p className="text-sm font-bold text-[#0077A8]">❤️ 72 BPM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
