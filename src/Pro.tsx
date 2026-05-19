import React, { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const pro = [
    { 
      type:"Ultra Pro", 
      time:"/year", 
      rate:"$80", 
      css:{ 
        all:"bg-gradient-to-b from-indigo-600 to-blue-500", 
        h3:"text-white", 
        p:"text-orange-200", 
        span:"text-cyan-300", 
        ul:"text-zinc-50" 
      }, 
      faci:["500+ Project", "All components", "Full Community support", "Unlimited use case"]
    },
    { 
      type:"Premium", 
      time:"/month", 
      rate:"$5", 
      css:{ 
        all:"bg-gradient-to-b from-indigo-400 to-blue-400", 
        h3:"", 
        p:"text-orange-200", 
        span:"text-cyan-300", 
        ul:"text-zinc-50" 
      }, 
      faci:["20+ Project", "Every uses components", "Full Community support", "Unlimited use case"]
    },
    { 
      type:"Free", 
      time:"/month", 
      rate:"free", 
      css:{ 
        all:"bg-gradient-to-b from-cyan-200 to-zinc-200 border border-zinc-500", 
        h3:"text-blue-400", 
        p:"text-orange-500", 
        span:"text-cyan-700", 
        ul:"text-zinc-500" 
      }, 
      faci:["1 Project", "Basic components", "Community support", "300+ use case"]
    }
  ];

  return (
    <div className=" bg-zinc-100 text-white font-sans scroll-smooth">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-zinc-700 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Nova</h1>
          <div className="hidden md:flex gap-8 text-zinc-400">
            <button onClick={() => scrollTo("features")} className="hover:text-white">Features</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-white ">Pricing</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-white">FAQ</button>
            <button onClick={() => scrollTo("cta")} className="hover:text-white">Building</button>
          </div>
          <button 
            onClick={() => scrollTo("cta")}
            className="hidden md:block px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
          >
            Get Started
          </button>
          <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}><i className={`bi bi-${menuOpen ? "x" : "list"} text-2xl`}></i></button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-6 p-6 bg-zinc-700 border-zinc-800">
            <button onClick={() => scrollTo("features")}>Features</button>
            <button onClick={() => scrollTo("pricing")}>Pricing</button>
            <button onClick={() => scrollTo("faq")}>FAQ</button>
            <button 
            onClick={() => scrollTo("cta")}
            className="px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >Build</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pb-10 flex-col justify-center items-center text-center"><div  className="bg-gradient-to-b from-indigo-300 to-zinc-100 pt-32 pb-10 px-5">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-800">
          Build Faster with <span className="text-indigo-500">Nova</span>
        </h1>
        <p className="text-zinc-600 mt-6 max-w-2xl mx-auto text-lg">
          The all-in-one toolkit for modern developers. Ship products 10x faster with pre-built components and clean code.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button 
            onClick={() => scrollTo("cta")} 
            className="px-8 py-3 bg-indigo-600 rounded-xl font-medium hover:bg-indigo-700 transition text-white"
          >
            Start Free Trial
          </button>
          <button className="px-8 text-black py-3 border-zinc-700 rounded-xl hover:bg-zinc-200 transition">
            Learn More
          </button>
        </div>
        </div>
        <div className="mt-16 max-w-3xl mb-10 mx-auto px-5">
          <img className="bg-zinc-300 rounded-2xl h-96 border-zinc-700 flex items-center justify-center text-zinc-500 shadow-2xl" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop"/>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-zinc-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-cyan-600 font-bold mb-4">Everything You Need</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Stop wasting time building the same things. Focus on what matters.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {[
              { title: "Lightning Fast", desc: "Optimized for speed. Loads in under 1s." },
              { title: "Fully Responsive", desc: "Looks perfect on any device, every time." },
              { title: "Easy to Customize", desc: "Tailwind + TypeScript = full control." },
              { title: "SEO Ready", desc: "Built-in SEO best practices out of the box." },
              { title: "Dark Mode", desc: "Automatic dark/light mode switching." },
              { title: "24/7 Support", desc: "Get help whenever you need it." },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-2xl shadow-xl transition">
                <h3 className="text-xl text-blue-400 font-bold mb-2">{f.title}</h3>
                <p className="text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl text-blue-600 font-bold mb-4">Simple Pricing</h2>
          <p className="text-zinc-600 mb-16">No hidden fees. Cancel anytime.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pro.map((list, index) => (
              <div key={index} className={`${list.css.all} p-8 rounded-2xl shadow-2xl`}>
                <h3 className={`${list.css.h3} font-extrabold m-3 text-4xl`}>{list.type}</h3>
                <p className={`${list.css.p} font-bold mt-4`}>
                  {list.rate}
                  <span className={`${list.css.span} text-lg`}>{list.time}</span>
                </p>
                <ul className={`${list.css.ul} mt-6 space-y-3 text-left`}>
                  {list.faci.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
                <a href="#" className="block w-full bg-indigo-700 py-2 text-2xl mt-10 rounded text-white">
                  Purchase
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-600">FAQ</h2>
          <p className="text-center text-zinc-500 mb-12">Some common problem & question of all with answer</p>
          <div className="space-y-6">
            {[
              { q: "Can I cancel anytime?", a: "Yes, cancel anytime from your dashboard. No questions asked." },
              { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all paid plans." },
              { q: "Is there a free trial?", a: "Yes, 7-day free trial on Pro plan. No credit card required." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-400 shadow-xl rounded-xl">
                <h3 className="font-bold text-cyan-200 text-lg">{item.q}</h3>
                <p className="text-zinc-50 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Ready to Build Something Amazing?</h2>
        <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
          Join 10,000+ developers already building with Nova.
        </p>
        <button className="mt-8 px-10 py-4 bg-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-700 transition text-white">
          Start Building Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-300 py-12 px-6 text-center text-zinc-600">
        <p>© 2026 Nova. All rights reserved.</p>
      </footer>
    </div>
  );
}