const Navbar = () => {
  const links = ["Features", "How It Works", "Testimonials", "Pricing"];
  const ids   = ["#features", "#howitworks", "#testimonials", "#pricing"];

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0077A8]/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-2 font-extrabold text-xl text-[#002D42]"
          style={{ fontFamily: "'Sora', sans-serif" }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0077A8] to-[#6EC1E4] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          FitTrack
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <button key={link} onClick={() => scrollTo(ids[i])}
              className="text-sm font-medium text-[#5A7A8A] hover:text-[#002D42] transition-colors duration-200">
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => scrollTo("#features")}
          className="bg-[#002D42] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#0077A8] transition-all duration-200 hover:-translate-y-0.5">
          Download Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
