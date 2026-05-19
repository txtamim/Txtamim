import React, { useState } from "react";

const Res = () => {
  // মেনু আইটেমগুলোর ডাটা অবজেক্ট
  const menuItems = [
    { id: 1, name: "Grilled Chicken Steak", desc: "Juicy chicken with herbs and mashed potatoes", price: "$18" },
    { id: 2, name: "Seafood Pasta", desc: "Fresh shrimp, calamari with creamy sauce", price: "$22" },
    { id: 3, name: "Beef Burger Deluxe", desc: "Angus beef, cheddar, lettuce, tomato", price: "$14" },
    { id: 4, name: "Veggie Pizza", desc: "Loaded with fresh vegetables and mozzarella", price: "$12" },
    { id: 5, name: "Creamy Mushroom Soup", desc: "Homemade soup with fresh mushrooms", price: "$8" },
    { id: 6, name: "Chocolate Lava Cake", desc: "Warm chocolate cake with vanilla ice cream", price: "$7" },
  ];
  
  // স্টেট ম্যানেজমেন্ট
  const [searchTerm, setSearchTerm] = useState("");
  const [see, setSee] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ইনপুট চেঞ্জের হ্যান্ডলার
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  // সাজেশনে ক্লিক করলে ইনপুট ফিল্ড ফিল করার হ্যান্ডলার
  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setShowSuggestions(false);
  };

  // সার্চ টার্মের ওপর ভিত্তি করে মেনু ফিল্টার করা
  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans text-zinc-900 bg-white ">
      
      {/* Top Header Section */}
      <header className="border-b border-zinc-100 py-4 px-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <i className="bi bi-egg-fried text-amber-500 text-2xl"></i>
          <span className="text-xl font-bold tracking-tight text-zinc-900">Flavor House</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-zinc-500 font-medium">
          <span className="flex items-center gap-1"><i className="bi bi-telephone text-amber-500"></i> +8801890973552</span>
          <span className="flex items-center gap-1"><i className="bi bi-clock text-amber-500"></i> All time</span>
          <span className="flex items-center gap-1"><i className="bi bi-truck text-amber-500"></i> Free Delivery</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600" 
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Flavor House
          </h1>
          <p className="text-lg text-zinc-200 mb-6">
            Authentic taste, fresh ingredients, served with love since 2015
          </p>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">About Us</h2>
            <div className="w-12 h-0.5 bg-amber-500 mb-4"></div>
            <p className="text-zinc-600 mb-4">
              At Flavor House, we bring you the taste of tradition with a modern twist. 
              Every dish is crafted using locally sourced ingredients and recipes passed down for generations.
            </p>
            <p className="text-zinc-600 mb-4">
              Our chefs have over 20 years of experience creating authentic flavors that make every meal memorable.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <i className="bi bi-award text-amber-500 text-3xl"></i>
                <p className="text-sm text-zinc-600 mt-1">Award Winning</p>
              </div>
              <div className="text-center">
                <i className="bi bi-egg-fried text-amber-500 text-3xl"></i>
                <p className="text-sm text-zinc-600 mt-1">Fresh Food</p>
              </div>
              <div className="text-center">
                <i className="bi bi-people text-amber-500 text-3xl"></i>
                <p className="text-sm text-zinc-600 mt-1">5000+ Happy Clients</p>
              </div>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" 
            alt="Food"
            className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80"
          />
        </div>
      </section>

      {/* Menu Section with Live Search */}
      <section className="px-6 py-16 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Our Special Menu</h2>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto"></div>
          </div>

          {/* Live Menu Search Bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // delay to click option
              placeholder="Search your favorite food from menu..." 
              className="w-full pl-10 pr-4 py-2.5 border border-zinc-200 bg-white rounded-xl shadow-sm focus:outline-none focus:border-amber-500 text-sm"
            />

            {/* YouTube Style Suggestion Box */}
            {showSuggestions && searchTerm && (
              <div className="absolute left-0 right-0 mt-1 bg-white border border-zinc-200 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                {filteredMenu.length > 0 ? (
                  filteredMenu.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSuggestionClick(item.name)}
                      className="px-4 py-2.5 hover:bg-zinc-50 cursor-pointer flex items-center gap-3 text-sm text-zinc-700 transition"
                    >
                      <i className="bi bi-search text-zinc-400 text-xs"></i>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-zinc-400 text-center">
                    No food found match
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Dynamic Filtered Menu Display */}
          <div className={`grid md:grid-cols-2 gap-6 ${see && "h-56"} md:h-80 overflow-hidden`}>
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item) => (
                <div key={item.id} className="flex justify-between items-start p-4 bg-white rounded-lg shadow-sm border border-zinc-100">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">{item.name}</h3>
                    <p className="text-sm text-zinc-600 mt-1">{item.desc}</p>
                  </div>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-10 text-zinc-500">
                No menu items matches your search.
              </div>
            )}
          </div>
          <button onClick={() => setSee(!see)} className="text-right w-full pr-5 mt-5">see more<i class="bi ml-2 pt-4 bi-chevron-down"></i></button>
        </div>
      </section>

      {/* Home Delivery & Order Booking Section */}
      <section className="px-6 py-16 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Order Fast Delivery</h2>
            <p className="text-zinc-500 text-sm">Get fresh hot food delivered straight to your doorstep or book for an event</p>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto mt-3"></div>
          </div>

          <div className="bg-zinc-50 p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-inner">
            <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
              <i className="bi bi-truck text-amber-500"></i> Fill Up Delivery & Booking Details
            </h3>
            
            <form className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  placeholder="Which food or package do you want to order? (e.g., Seafood Pasta, Burger Deluxe)" 
                  className="w-full px-4 py-2.5 border border-zinc-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-sm" 
                />
              </div>

              <input type="text" placeholder="Your Full Name" className="px-4 py-2.5 border border-zinc-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-sm" />
              <input type="tel" placeholder="Mobile Phone Number" className="px-4 py-2.5 border border-zinc-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-sm" />
              
              <div className="md:col-span-2">
                <input type="text" placeholder="Full Delivery Address (Road, House, Area Name)" className="w-full px-4 py-2.5 border border-zinc-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-sm" />
              </div>

              <input 
                type="text" 
                placeholder="Date DD/MM/YYYY or Today" 
                className="px-4 py-2.5 border border-zinc-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-sm" 
              />
              <input type="number" placeholder="Quantity / Item Count" min="1" className="px-4 py-2.5 border border-zinc-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-sm md:col-span-2" />
              
              <button type="submit" className="md:col-span-2 mt-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition shadow-md shadow-amber-100 flex items-center justify-center gap-2">
                <i className="bi bi-bag-check"></i> Confirm Delivery Order
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-zinc-500 text-zinc-400 py-6 text-center">
      <section className="px-6 py-12 ">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-4 text-center bg-zinc-400 rounded-xl shadow-sm">
            <i className="bi bi-geo-alt-fill text-cyan-300 text-2xl mb-2 block"></i>
            <h3 className="font-semibold text-zinc-100 text-sm">Location</h3>
            <p className="text-xs text-zinc-50 mt-1">Mithapukur Rongpur</p>
          </div>
          <div className="p-4 text-center bg-zinc-400 rounded-xl shadow-sm">
            <i className="bi bi-telephone-fill text-cyan-300 text-2xl mb-2 block"></i>
            <h3 className="font-semibold text-zinc-100 text-sm">Phone</h3>
            <p className="text-xs text-zinc-50 mt-1">+880 1890973552</p>
          </div>
          <div className="p-4 text-center bg-zinc-400 rounded-xl shadow-sm">
            <i className="bi bi-clock-fill text-cyan-300 text-2xl mb-2 block"></i>
            <h3 className="font-semibold text-zinc-100 text-sm">Hours</h3>
            <p className="text-xs text-zinc-50 mt-1">11am to 10pm </p>
          </div>
        </div>
      </section>
        <p className="text-xs text-white">© 2026 Flavor House. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Res;
