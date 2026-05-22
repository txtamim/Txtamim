import React, { useState } from 'react';

export default function PremiumProductLanding() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Matte Black');
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [ordered, setOrdered] = useState(false);

  // Product Data
  const product = {
    name: "AuraPulse X1 Smartwatch",
    tagline: "Redefining Premium Wearable Technology",
    price: 3499,
    oldPrice: 4999,
    discount: "30% OFF",
    brief: "Experience ultimate luxury and extreme performance. Crafted with an aerospace-grade titanium alloy casing and a stunning AMOLED sapphire display, the AuraPulse X1 keeps you ahead in both health tracking and professional lifestyle management.",
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if(formData.name && formData.phone && formData.address) {
      setOrdered(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      
      {/* 1. HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
            AURAPULSE
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-neutral-400">
            <a href="#features" className="hover:text-cyan-400 transition">FEATURES</a>
            <a href="#specs" className="hover:text-cyan-400 transition">SPECIFICATIONS</a>
            <a href="#order" className="hover:text-cyan-400 transition">ORDER NOW</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
          </nav>
          <div>
            <button className="bg-neutral-900 border border-neutral-700 hover:border-cyan-400 text-neutral-100 px-6 py-2.5 rounded-full font-bold transition flex items-center space-x-3 shadow-lg">
              <span className="text-cyan-400">🛒</span>
              <span className="text-xs uppercase tracking-wider">Cart</span>
              <span className="bg-cyan-500 text-black text-xs font-black px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO & HERO PRODUCT DISPLAY */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Visual Showcase (No Image URL Dependency) */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-8 border border-neutral-800 shadow-2xl relative flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl"></div>
              <div className="absolute top-5 left-5 bg-cyan-500 text-black text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                {product.discount}
              </div>
              
              {/* Sleek SVG Smartwatch Wireframe Graphics */}
              <svg 
  className="w-56 h-56 text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-105 transition duration-500" 
  viewBox="0 0 100 100" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M35 15 C35 5, 65 5, 65 15 L60 30 L40 30 Z" fill="#1e293b" />
  <path d="M35 85 C35 95, 65 95, 65 85 L60 70 L40 70 Z" fill="#1e293b" />
  
  <rect x="25" y="25" width="50" height="50" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
  
  <rect x="29" y="29" width="42" height="42" rx="8" fill="#020617" />
  
  <rect x="75" y="42" width="3" height="16" rx="1.5" fill="#64748b" />
  
  <text x="50" y="49" fill="#22d3ee" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">10:09</text>
  
  <circle cx="50" cy="61" r="5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
  <circle cx="50" cy="61" r="5" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="20 10" fill="none" />
  
  <circle cx="38" cy="61" r="2" fill="#22d3ee" opacity="0.8" />
  <circle cx="62" cy="61" r="2" fill="#38bdf8" opacity="0.8" />
</svg>

            </div>
            
            {/* Dynamic Variant Selector */}
            <div className="mt-8 space-y-2 text-center">
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Select Edition</p>
              <div className="flex space-x-3">
                {['Matte Black', 'Titanium Gray', 'Ocean Blue'].map((color) => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border transition ${selectedColor === color ? 'border-cyan-400 bg-cyan-950/30 text-cyan-400' : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Information */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/50 px-3 py-1.5 rounded-md border border-cyan-800/50">
                Premium Hardware
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                {product.name}
              </h1>
              <p className="text-xl text-neutral-400 font-medium">
                {product.tagline}
              </p>
            </div>

            {/* Premium Pricing Block */}
            <div className="flex items-center space-x-6 bg-neutral-900/50 border border-neutral-800 p-4 rounded-2xl w-fit">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Special Price</p>
                <span className="text-4xl font-black text-white">৳{product.price}</span>
              </div>
              <div className="border-l border-neutral-800 h-10"></div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Regular Price</p>
                <span className="text-lg text-neutral-500 line-through">৳{product.oldPrice}</span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-base">
              {product.brief}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#order"
                className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 px-8 rounded-xl transition duration-300 text-center uppercase tracking-wider text-sm shadow-lg shadow-cyan-500/20"
              >
                Buy It Now (COD Available)
              </a>
              <button 
                onClick={() => setCartCount(cartCount + 1)}
                className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 font-bold py-4 px-8 rounded-xl transition text-center uppercase tracking-wider text-sm"
              >
                Add To Bag
              </button>
            </div>

            {/* Core Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800 text-center text-xs font-bold tracking-wide text-neutral-400">
              <div className="p-3 bg-neutral-900/30 rounded-xl border border-neutral-900">⚡ Nationwide Fast Delivery</div>
              <div className="p-3 bg-neutral-900/30 rounded-xl border border-neutral-900">🛡️ 1-Year Brand Warranty</div>
              <div className="p-3 bg-neutral-900/30 rounded-xl border border-neutral-900">🤝 Cash On Delivery</div>
            </div>
          </div>
        </div>

        {/* 3. DETAILED FEATURES SECTION */}
        <section id="features" className="py-24 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Why Upgrade to AuraPulse?</h2>
            <p className="text-neutral-400">Engineered to outperform the market standards with ground-breaking integration systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition">
              <div className="text-3xl mb-4">🔋</div>
              <h3 className="font-extrabold text-white text-xl mb-2">14-Day Battery Armor</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Advanced power-optimization computing ensures continuous workflow tracking for two full weeks without a charge.</p>
            </div>
            <div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="font-extrabold text-white text-xl mb-2">Precision Bio-Tracking</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Real-time photoplethysmogram system records heart rates, SpO2 counts, stress thresholds, and clinical deep-sleep metrics.</p>
            </div>
            <div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition">
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="font-extrabold text-white text-xl mb-2">5ATM Waterproof Rating</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Completely sealed structural integrity supports deep-end swimming, heavy rain downpours, and intense workout sessions.</p>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SPECIFICATIONS SECTION */}
        <section id="specs" className="py-12 bg-neutral-900/20 border border-neutral-800 rounded-3xl p-8 md:p-12 space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            {[
              { label: "Display Architecture", value: '1.43" Retina AMOLED Sapphire Glass' },
              { label: "Chassis Material", value: "Aerospace Titanium & Stainless Core" },
              { label: "Connectivity Suite", value: "Bluetooth 5.3 Low Energy / Standalone GPS" },
              { label: "Sensors Integrated", value: "6-Axis Accelerometer, Gyroscope, Optical HR" },
              { label: "Operating Platform", value: "PulseOS v2.4 (Android & iOS Sync Support)" },
              { label: "Structural Color", value: selectedColor },
            ].map((spec, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-neutral-800/60">
                <span className="text-neutral-500 font-medium">{spec.label}</span>
                <span className="text-neutral-200 font-bold text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CHECKOUT/ORDER CONVERSION FORM */}
        <section id="order" className="py-24 max-w-xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Place Your Order</h2>
            <p className="text-neutral-400 text-sm">Fill out the fast checkout form below. Pay with cash on package arrival.</p>
          </div>

          {ordered ? (
            <div className="bg-emerald-950/40 border border-emerald-800 p-8 rounded-2xl text-center space-y-4">
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-bold text-emerald-400">Order Placed Successfully!</h3>
              <p className="text-neutral-400 text-sm">Thank you, <span className="text-white font-bold">{formData.name}</span>. Our distribution verification representative will contact you at <span className="text-white font-bold">{formData.phone}</span> within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-5 shadow-xl">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-neutral-400">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-neutral-400">Mobile Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 017XXXXXXXX" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-neutral-400">Full Shipping Address</label>
                <textarea 
                  rows="3"
                  required
                  placeholder="House number, Street name, Area/Thana, District" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-sm font-medium mb-4 text-neutral-400">
                  <span>Selected Edition:</span>
                  <span className="text-cyan-400 font-bold">{selectedColor}</span>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-xl transition duration-300 uppercase tracking-wider text-sm shadow-lg"
                >
                  Confirm Order - ৳{product.price}
                </button>
              </div>
            </form>
          )}
        </section>

        {/* 6. FAQ SECTION */}
        <section id="faq" className="py-12 max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-black text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does the shipping process take?", a: "Inside Dhaka takes 24-48 hours. Outside Dhaka takes 2-4 business days via premium delivery curriers." },
              { q: "Can I check the device before paying?", a: "Yes, our Cash on Delivery system allows conditional checks during package drops with the delivery agent present." },
              { q: "Is it compatible with Apple iPhones?", a: "Absolutely. The companion application functions smoothly across both Android platforms and Apple iOS structures." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-neutral-900/30 rounded-xl border border-neutral-800 space-y-2">
                <h4 className="font-bold text-white text-base">🔹 {item.q}</h4>
                <p className="text-neutral-400 text-sm pl-6 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 7. FOOTER */}
      <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-500 py-12 mt-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-lg font-bold text-white tracking-widest">AURAPULSE SYSTEM</div>
            <p className="text-neutral-400 leading-relaxed text-xs">Architecting ultra-reliable premium class personal gear ecosystems. Focus on high-end hardware performance optimization.</p>
          </div>
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-widest">Corporate Support</div>
            <p>Hotline: +880 1900-112233 (10 AM - 8 PM)</p>
            <p>Email: engineering@aurapulse.com</p>
          </div>
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-widest">Legal & Rights</div>
            <p>© 2026 AuraPulse Inc. Hardware, firmware and design schemas protected by domestic patent logs.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
