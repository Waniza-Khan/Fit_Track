const footerLinks = {
  Product:   ["Features", "How It Works", "Pricing", "Download"],
  Company:   ["About Us", "Blog", "Careers", "Press Kit"],
  Support:   ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  Community: ["Instagram", "Twitter/X", "YouTube", "Reddit"],
};

const Footer = () => (
  <footer className="bg-[#002D42] text-white pt-14 pb-8 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-10 border-b border-white/10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-extrabold text-lg mb-3"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0077A8] to-[#6EC1E4] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            FitTrack
          </div>
          <p className="text-xs text-white/50 leading-relaxed mb-5">
            Your personal AI fitness coach. Track calories, workouts, heart rate and sleep — all in one app.
          </p>
          {/* Download badges */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 cursor-pointer hover:bg-white/20 transition-all">
              <span className="text-lg">🍎</span>
              <div>
                <p className="text-[9px] text-white/50">Download on the</p>
                <p className="text-xs font-bold">App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 cursor-pointer hover:bg-white/20 transition-all">
              <span className="text-lg">▶</span>
              <div>
                <p className="text-[9px] text-white/50">Get it on</p>
                <p className="text-xs font-bold">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link cols */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-bold text-white/90 mb-4"
              style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-white/50 hover:text-white/90 transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-[11px] text-white/30 pt-6">
        © 2026 FitTrack. All rights reserved. · Privacy Policy · Terms of Service
      </p>
    </div>
  </footer>
);

export default Footer;
