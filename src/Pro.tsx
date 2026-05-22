import React, { useState } from "react";

export default function Pro() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const pricingPlans = [
  {
    type: "Ultra Pro",
    time: "/year",
    rate: "$80",
    highlight: true,
    bgClass: "bg-gradient-to-b from-indigo-800 to-blue-500 text-white scale-105 shadow-2xl shadow-[0_0_25px_rgba(200,200,200,0.682)]",
    textClass: "text-white",
    subTextClass: "text-indigo-100",
    buttonClass: "bg-white text-indigo-600 hover:bg-zinc-100",
    features: ["500+ Projects", "All Components", "Priority Support", "Unlimited Use Cases"],
  },
  {
    type: "Premium",
    time: "/month",
    rate: "$5",
    highlight: false,
    bgClass: "bg-gradient-to-b from-indigo-500 to-blue-400 text-white shadow-xl",
    textClass: "text-white",
    subTextClass: "text-indigo-100",
    buttonClass: "bg-white text-indigo-600 hover:bg-zinc-100",
    features: ["20+ Projects", "All Components", "Community Support", "Unlimited Use Cases"],
  },
  {
    type: "Free",
    time: "/month",
    rate: "Free",
    highlight: false,
    bgClass: "bg-gradient-to-b from-cyan-200 to-zinc-200 border-zinc-300 text-zinc-900 shadow-md",
    textClass: "text-zinc-900",
    subTextClass: "text-zinc-700",
    buttonClass: "bg-indigo-600 text-white hover:bg-indigo-700",
    features: ["1 Project", "Basic Components", "Community Support", "300+ Use Cases"],
  },
];

  const features = [
    { title: "Lightning Fast", desc: "Optimized for speed. Loads in under 1s." },
    { title: "Fully Responsive", desc: "Looks perfect on any device, every time." },
    { title: "Easy to Customize", desc: "Tailwind + TypeScript = full control." },
    { title: "SEO Ready", desc: "Built-in SEO best practices out of the box." },
    { title: "Dark Mode", desc: "Automatic dark/light mode switching." },
    { title: "24/7 Support", desc: "Get help whenever you need it." },
  ];

  const faqs = [
    { q: "Can I cancel anytime?", a: "Yes, cancel anytime from your dashboard. No questions asked." },
    { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all paid plans." },
    { q: "Is there a free trial?", a: "Yes, 7-day free trial on Pro plan. No credit card required." },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">Nova</h1>
          
          <div className="hidden md:flex gap-8 text-zinc-600 dark:text-zinc-400">
            <button onClick={() => scrollTo("features")} className="hover:text-indigo-600">Features</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-indigo-600">Pricing</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-indigo-600">FAQ</button>
            <button onClick={() => scrollTo("cta")} className="hover:text-indigo-600">Contact</button>
          </div>

          <button onClick={() => scrollTo("cta")} className="hidden md:block px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`bi bi-${menuOpen ? "x" : "list"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex-col gap-4 p-6 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <button onClick={() => scrollTo("features")} className="text-left hover:text-indigo-600">Features</button>
            <button onClick={() => scrollTo("pricing")} className="text-left hover:text-indigo-600">Pricing</button>
            <button onClick={() => scrollTo("faq")} className="text-left hover:text-indigo-600">FAQ</button>
            <button onClick={() => scrollTo("cta")} className="text-left hover:text-indigo-600">Contact</button>
            <button onClick={() => scrollTo("cta")} className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950 dark:to-zinc-900 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-900 dark:text-white">
          Build Faster with <span className="text-indigo-600">Nova</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
          The all-in-one toolkit for modern developers. Ship products 10x faster with pre-built components and clean code.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button onClick={() => scrollTo("cta")} className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition">
            Start Free Trial
          </button>
          <button onClick={() => scrollTo("features")} className="px-8 py-3 border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            Learn More
          </button>
        </div>
        <div className="mt-16 flex justify-center">
          <img 
            className="rounded-2xl md:rounded-4xl border-zinc-200 dark:border-zinc-700 w-[90%] md:w-[80%] shadow-2xl" 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop"
            alt="Dashboard preview"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Stop wasting time building the same things. Focus on what matters.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2 text-indigo-600">{f.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8">
  {pricingPlans.map((plan, index) => (
    <div key={index} className={`p-8 rounded-2xl ${plan.bgClass}`}>
      <h3 className={`font-bold text-3xl mb-4 ${plan.textClass}`}>{plan.type}</h3>
      <p className={`font-bold text-4xl ${plan.textClass}`}>
        {plan.rate} <span className={`text-lg font-normal ${plan.subTextClass}`}>{plan.time}</span>
      </p>
      <ul className={`mt-6 space-y-3 text-left ${plan.subTextClass}`}>
        {plan.features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>
      <button className={`w-full mt-8 py-3 rounded-xl font-bold transition ${plan.buttonClass}`}>
        Get Started
      </button>
    </div>
  ))}
</div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">FAQ</h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">Common questions answered</p>
          
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-zinc-900 shadow-md rounded-xl">
                <h3 className="font-bold text-lg text-indigo-600">{item.q}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Something Amazing?</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
          Join developers already building with Nova.
        </p>
        <button className="mt-8 px-10 py-4 bg-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-700 transition text-white">
          Start Building Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6 text-center text-zinc-600 dark:text-zinc-400">
        <p>© 2026 Nova. All rights reserved.</p>
      </footer>
    </div>
  );
}