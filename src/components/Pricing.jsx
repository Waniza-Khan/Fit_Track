import { useReveal } from "../hooks/useReveal";

const plans = [
  {
    name: "Free",
    price: "PKR 0",
    period: "forever",
    desc: "Perfect to get started",
    features: ["Basic calorie tracking","3 workout plans","Step counter","Weekly reports"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "PKR 999",
    period: "per month",
    desc: "For serious fitness lovers",
    features: ["Unlimited calorie tracking","AI personalized workouts","Heart rate analytics","Smartwatch sync","Priority support","Advanced insights"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "PKR2499",
    period: "per month",
    desc: "For gyms & groups",
    features: ["Everything in Pro","Up to 10 members","Group challenges","Coach dashboard","Custom branding"],
    cta: "Contact Us",
    highlight: false,
  },
];

const Pricing = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-[#002D42] mb-2"
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
            Simple Pricing
          </h2>
          <p className="text-[#5A7A8A] text-sm">Start free. Upgrade when you're ready.</p>
        </div>

        <div ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {plans.map((p) => (
            <div key={p.name}
              className={`rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? "bg-[#002D42] text-white border-[#002D42] shadow-2xl shadow-[#002D42]/20 scale-105"
                  : "bg-white border-[#004D7A]/[0.08] shadow-md hover:shadow-lg"
              }`}>
              {p.highlight && (
                <div className="bg-[#6EC1E4] text-[#002D42] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ⭐ Most Popular
                </div>
              )}
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>{p.name}</h3>
              <p className={`text-xs mb-4 ${p.highlight ? "text-[#6EC1E4]" : "text-[#5A7A8A]"}`}>{p.desc}</p>
              <div className="mb-6">
                <span className="font-extrabold text-3xl" style={{ fontFamily: "'Sora', sans-serif" }}>{p.price}</span>
                <span className={`text-xs ml-1 ${p.highlight ? "text-[#6EC1E4]" : "text-[#5A7A8A]"}`}>/{p.period}</span>
              </div>
              <ul className="space-y-2 mb-7">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-white/85" : "text-[#5A7A8A]"}`}>
                    <span className={`text-xs font-bold ${p.highlight ? "text-[#6EC1E4]" : "text-[#0077A8]"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                p.highlight
                  ? "bg-[#6EC1E4] text-[#002D42] hover:bg-white"
                  : "bg-[#EAF6FF] text-[#002D42] hover:bg-[#0077A8] hover:text-white"
              }`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
