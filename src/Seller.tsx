 import React, { useState } from "react";

// added category, reviews desc on product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    rating: 3,
    reviews: 145,
    price: 89,
    desc: "Experience high-quality sound with deep bass and long-lasting battery life.",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Wallet", 
    category: "Accessories",
    price: 129,
    rating: 4,
    reviews: 98,
    desc: "Premium quality leather wallet with multiple card slots and sleek design.",
    img: "https://picsum.photos/id/26/600/400"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 59, 
    rating: 2,
    reviews: 64,
    desc: "Portable wireless speaker with crystal clear sound and water resistance.",
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    category: "Gaming",
    price: 45,
    rating: 3,
    reviews: 210,
    desc: "Ergonomic gaming mouse with customizable RGB lighting and high precision tracking.",
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Gaming",
    price: 99,
    rating: 5,
    reviews: 320,
    desc: "Tactile mechanical switches for ultimate gaming and typing experience.",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Laptop Stand",
    category: "Accessories",
    rating: 1,
    reviews: 12,
    price: 35,
    desc: "Adjustable aluminum laptop stand for improved posture and cooling.",
    img: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Webcam 4K",
    category: "Gadgets",
    rating: 4,
    reviews: 85,
    price: 79,
    desc: "Ultra HD 4K webcam for professional streaming, video calls, and conferences.",
    img: "https://picsum.photos/id/160/600/400"
  },
  {
    id: 8,
    name: "E book",
    category: "Gadgets",
    rating: 3,
    reviews: 42,
    price: 29,
    desc: "Compact digital e-reader with glare-free display for ultimate reading sessions.",
    img: "https://picsum.photos/id/367/600/400"
  },
  {
    id: 9,
    name: "4K Monitor",
    category: "Display",
    rating: 6,
    reviews: 150,
    price: 249,
    desc: "Stunning 4K display with vivid colors and ultra-slim bezel design.",
    img: "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Gaming Laptop",
    category: "Gaming",
    rating: 6,
    reviews: 95,
    price: 899,
    desc: "High-performance gaming laptop equipped with latest graphics and fast refresh rate.",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80"
  }
];

const fallbackImg = "https://images.unsplash.com/photo-1587825140708-df23e08639e3?w=600";

const Seller: React.FC = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // A logic of dynamic data update 
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    setSelectedProduct(null);
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallbackImg;
  };

  return (
    <div className="font-sans bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">

      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Sell<span className="text-amber-500">Store</span>
          </h1>
          <div className="text-right text-sm text-zinc-400 md:flex md:[&>*]:text-xl flex-row md:gap-5">
            <div><i className="bi bi-telephone-fill text-amber-500"></i> +8801890973552</div>
            <a href="https://www.facebook.com/share/1H9JxmR4eq/" className="hover:text-amber-500 transition-colors"><i className="bi bi-facebook"></i> facebook</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556740772-1a741367b93e?w=1600"
          alt="Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-zinc-950/90"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mega Sale <span className="text-amber-400">50% OFF</span>
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Get the latest tech gadgets at unbeatable prices. Limited time offer!
          </p>

          {/* Live Search */}
          <div className="relative max-w-xl mx-auto">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"></i>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-700 bg-zinc-900/90 outline-none text-zinc-100 shadow-2xl focus:border-amber-500 transition-all"
            />
            {search && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-20">
                {filtered.length > 0 ? filtered.slice(0, 4).map(p => (
                  <div
                    key={p.id}
                    onClick={() => { setSelectedProduct(p); setSearch("") }}
                    className="p-3 hover:bg-zinc-800 flex items-center gap-3 border-b border-zinc-800 last:border-0 cursor-pointer transition-colors"
                  >
                    <img
                      src={p.img}
                      className="w-12 h-12 object-cover rounded"
                      onError={handleImgError}
                    />
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm text-zinc-200">{p.name}</div>
                      <div className="text-amber-500 font-bold">${p.price}</div>
                    </div>
                  </div>
                )) : (
                  <div className="p-4 text-zinc-500 text-sm">No products found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">Featured Products</h3>

        {/* Updated Category Filter UI */}
        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-250 ${
                activeCategory === cat
                  ? "bg-amber-500 border-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(product => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-zinc-900 border border-zinc-800/80 rounded-xl overflow-hidden hover:shadow-2xl hover:border-zinc-700 transition cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover"
                onError={handleImgError}
              />
              <div className="p-4">
                <span className="text-xs text-amber-500 font-medium">{product.category}</span>
                <h4 className="font-semibold text-zinc-200 text-sm mb-1 mt-1">{product.name}</h4>

                {/* Rating */}
                <div className="flex items-center gap-1 text-xs mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`bi ${i < Math.floor(product.rating) ? 'bi-star-fill' : 'bi-star'}`}></i>
                    ))}
                  </div>
                  <span className="text-zinc-500">({product.reviews})</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">${product.price}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product.id) }}
                    className="px-3 py-1.5 bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black text-xs font-medium rounded-lg transition"
                  >
                    <i className="bi bi-cart-plus mr-1"></i>Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-zinc-600">
            <i className="bi bi-search text-4xl mb-3"></i>
            <p>No products match your filter</p>
          </div>
        )}
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.img}
              className="w-full h-64 object-cover"
              onError={handleImgError}
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs text-amber-500 font-medium">{selectedProduct.category}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                </div>
                <button onClick={() => setSelectedProduct(null)} className="text-zinc-400 hover:text-white transition">
                  <i className="bi bi-x-lg text-xl"></i>
                </button>
              </div>

              <p className="text-zinc-400 mb-4 leading-relaxed">{selectedProduct.desc}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`bi ${i < Math.floor(selectedProduct.rating) ? 'bi-star-fill' : 'bi-star'}`}></i>
                  ))}
                </div>
                <span className="text-sm text-zinc-400">
                  {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                </span>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-zinc-800">
                <span className="text-3xl font-bold text-white">${selectedProduct.price}</span>
                <button
                  onClick={() => addToCart(selectedProduct.id)}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition"
                >
                  <i className="bi bi-cart-plus mr-2"></i>Buy It
                </button>
              </div>

              {/* Payment Options */}
              <div>
                <h4 className="font-semibold mb-3 text-zinc-200">Payment Methods</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 p-3 bg-zinc-850 border border-zinc-800 rounded-lg">
                    <i className="bi bi-cash-coin text-xl text-green-500"></i>
                    <span className="text-zinc-300">Cash on Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-zinc-850 border border-zinc-800 rounded-lg">
                    <i className="bi bi-credit-card text-xl text-blue-500"></i>
                    <span className="text-zinc-300">Card Payment</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-zinc-850 border border-zinc-800 rounded-lg">
                    <i className="bi bi-phone text-xl text-purple-500"></i>
                    <span className="text-zinc-300">Mobile Banking</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-zinc-850 border border-zinc-800 rounded-lg">
                    <i className="bi bi-wallet2 text-xl text-orange-500"></i>
                    <span className="text-zinc-300">Digital Wallet</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-3">
                  <i className="bi bi-shield-check text-green-500"></i> 100% secure payment. SSL encrypted checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Extra Info */}
      <section className="bg-zinc-900/50 border-t border-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-white">Facility of us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800 shadow-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">4.8/5</div>
              <div className="flex justify-center text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
              </div>
              <p className="text-sm text-zinc-400">Based on 1200+ reviews</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800 shadow-sm">
              <i className="bi bi-truck text-3xl text-amber-500 mb-3"></i>
              <h4 className="font-semibold text-zinc-200 mb-1">Fast Delivery</h4>
              <p className="text-sm text-zinc-400">Get your order in 24-48 hours across the country</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800 shadow-sm">
              <i className="bi bi-shield-check text-3xl text-amber-500 mb-3"></i>
              <h4 className="font-semibold text-zinc-200 mb-1">Secure Payment</h4>
              <p className="text-sm text-zinc-400">100% secure checkout with SSL encryption</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-semibold text-zinc-200">Rahim Khan</div>
                  <div className="flex text-amber-400 text-sm">
                    {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                "Fast delivery and excellent product quality. Highly recommended!"
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://i.pravatar.cc/100?img=2" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-semibold text-zinc-200">Fatema Akter</div>
                  <div className="flex text-amber-400 text-sm">
                    {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                "Best prices in town. Customer service is amazing too."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Footer */}
      <footer className="bg-zinc-950 text-zinc-500 pt-16 pb-8 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-10 px-6 md:px-20">
          <div>
            <h4 className="text-white font-bold text-xl mb-4">
              Sell<span className="text-amber-500">Store</span>
            </h4>
            <p className="text-sm text-zinc-400">
              Your trusted partner for premium electronics and gadgets since 2025.
            </p>
            <div className="flex gap-3 mt-4 text-zinc-400">
              <i className="bi bi-facebook text-xl hover:text-amber-500 cursor-pointer transition-colors"></i>
              <i className="bi bi-instagram text-xl hover:text-amber-500 cursor-pointer transition-colors"></i>
              <i className="bi bi-twitter text-xl hover:text-amber-500 cursor-pointer transition-colors"></i>
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex gap-2">
                <i className="bi bi-geo-alt-fill text-amber-500"></i>
                Jaigirhaat Mithapukur Rongpur, Bangladesh
              </li>
              <li className="flex gap-2">
                <i className="bi bi-telephone-fill text-amber-500"></i>
                +8801890973552
              </li>
              <li className="flex gap-2">
                <i className="bi bi-envelope-fill text-amber-500"></i>
                txtamim058@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-6 text-center text-sm text-zinc-600">
          <p>© 2026 TechStore. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Seller;
