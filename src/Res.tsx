import { useState } from "react";

const Res = () => {
  const menuItems = [
    { id: 1, name: "Grilled Chicken Steak", desc: "Juicy chicken with herbs and mashed potatoes", price: "$18" },
    { id: 2, name: "Seafood Pasta", desc: "Fresh shrimp, calamari with creamy sauce", price: "$22" },
    { id: 3, name: "Beef Burger Deluxe", desc: "Angus beef, cheddar, lettuce, tomato", price: "$14" },
    { id: 4, name: "Veggie Pizza", desc: "Loaded with fresh vegetables and mozzarella", price: "$12" },
    { id: 5, name: "Creamy Mushroom Soup", desc: "Homemade soup with fresh mushrooms", price: "$8" },
    { id: 6, name: "Chocolate Lava Cake", desc: "Warm chocolate cake with vanilla ice cream", price: "$7" },
    { id: 7, name: "shik khabab", desc: "Warm shik khabab made by cow meat", price: "$7" },
    { id: 8, name: "Chiken fry", desc: "Chiken made khabab sweet and spicy", price: "$6" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [see, setSee] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name); 
    setShowSuggestions(false);
  };

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900">
      {/* Top Header Section */}
      <header className="border-b border-zinc-100 dark:border-zinc-800 py-4 px-6 sticky top-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md z-50 shadow-sm flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <i className="bi bi-egg-fried text-amber-500 text-2xl"></i>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Flavor House</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          <span className="flex items-center gap-1"><i className="bi bi-telephone text-amber-500"></i> +8801890973552</span>
          <span className="flex items-center gap-1"><i className="bi bi-clock text-amber-500"></i> All time</span>
          <span className="flex items-center gap-1"><i className="bi bi-truck text-amber-500"></i> Free Delivery</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600" alt="Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Flavor House</h1>
          <p className="text-lg text-zinc-200 mb-6">Authentic taste, fresh ingredients, served with love since 2015</p>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">About Us</h2>
            <div className="w-12 h-0.5 bg-amber-500 mb-4"></div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">At Flavor House, we bring you the taste of tradition with a modern twist. Every dish is crafted using locally sourced ingredients and recipes passed down for generations.</p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">Our chefs have over 20 years of experience creating authentic flavors that make every meal memorable.</p>
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <i className="bi bi-award text-amber-500 text-3xl"></i>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Award Winning</p>
              </div>
              <div className="text-center">
                <i className="bi bi-egg-fried text-amber-500 text-3xl"></i>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Fresh Food</p>
              </div>
              <div className="text-center">
                <i className="bi bi-people text-amber-500 text-3xl"></i>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">5000+ Happy Clients</p>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" alt="Food" className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80" />
        </div>
      </section>

      {/* Menu Section with Live Search */}
      <section className="px-6 py-16 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Our Special Menu</h2>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto"></div>
          </div>

          <div className="max-w-md mx-auto mb-10 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search your favorite food from menu..."
              className="w-full pl-10 pr-4 py-2.5 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-xl shadow-sm focus:outline-none focus:border-amber-500 text-sm text-zinc-900 dark:text-white"
            />

            {showSuggestions && searchTerm && (
              <div className="absolute left-0 right-0 mt-1 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                {filteredMenu.length > 0 ? (
                  filteredMenu.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSuggestionClick(item.name)}
                      className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 transition"
                    >
                      <i className="bi bi-search text-zinc-400 text-xs"></i>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-zinc-400 text-center">No food found match</div>
                )}
              </div>
            )}
          </div>

          <div className={`grid md:grid-cols-2 gap-6 ${see && "h-56 md:h-[300px]"} overflow-hidden`}>
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item) => (
                <div key={item.id} className="flex justify-between items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border-zinc-100 dark:border-zinc-800">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-10 text-zinc-500 dark:text-zinc-400">No menu items matches your search.</div>
            )}
          </div>

          <button onClick={() => setSee(!see)} className="text-right w-full pr-5 mt-5 text-zinc-700 dark:text-zinc-300">
            {see ? "see more" : "hide some"}<i className={`bi ml-2 pt-4 bi-chevron-${!see ? "up" : "down"}`}></i>
          </button>
        </div>
      </section>

      {/* Home Delivery & Order Booking Section */}
      <section className="px-6 py-16 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Order Fast Delivery</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Get fresh hot food delivered straight to your doorstep or book for an event</p>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto mt-3"></div>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-800 p-6 md:p-8 rounded-2xl border-zinc-100 dark:border-zinc-700 shadow-inner">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <i className="bi bi-truck text-amber-500"></i> Fill Up Delivery & Booking Details
            </h3>
            <form className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <input type="text" placeholder="Which food or package do you want to order?" className="w-full px-4 py-2.5 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:border-amber-500 text-sm text-zinc-900 dark:text-white" />
              </div>
              <input type="text" placeholder="Your Full Name" className="px-4 py-2.5 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:border-amber-500 text-sm text-zinc-900 dark:text-white" />
              <input type="tel" placeholder="Mobile Phone Number" className="px-4 py-2.5 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:border-amber-500 text-sm text-zinc-900 dark:text-white" />
              <div className="md:col-span-2">
                <input type="text" placeholder="Full Delivery Address" className="w-full px-4 py-2.5 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:border-amber-500 text-sm text-zinc-900 dark:text-white" />
              </div>
              <input type="text" placeholder="Date DD/MM/YYYY or Today" className="px-4 py-2.5 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:border-amber-500 text-sm text-zinc-900 dark:text-white" />
              <input type="number" placeholder="Quantity / Item Count" min="1" className="px-4 py-2.5 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:border-amber-500 text-sm md:col-span-2 text-zinc-900 dark:text-white" />
              <button type="submit" className="md:col-span-2 mt-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition shadow-md shadow-amber-500/20 flex items-center justify-center gap-2">
                <i className="bi bi-bag-check"></i> Confirm Delivery Order
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-700 dark:bg-zinc-950 text-zinc-400 py-6 text-center">
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="p-4 text-center bg-zinc-600 dark:bg-zinc-800 rounded-xl shadow-sm">
              <i className="bi bi-geo-alt-fill text-cyan-300 text-2xl mb-2 block"></i>
              <h3 className="font-semibold text-zinc-100 text-sm">Location</h3>
              <p className="text-xs text-zinc-200 mt-1">Mithapukur Rongpur</p>
            </div>
            <div className="p-4 text-center bg-zinc-600 dark:bg-zinc-800 rounded-xl shadow-sm">
              <i className="bi bi-telephone-fill text-cyan-300 text-2xl mb-2 block"></i>
              <h3 className="font-semibold text-zinc-100 text-sm">Phone</h3>
              <p className="text-xs text-zinc-200 mt-1">+880 1890973552</p>
            </div>
            <div className="p-4 text-center bg-zinc-600 dark:bg-zinc-800 rounded-xl shadow-sm">
              <i className="bi bi-clock-fill text-cyan-300 text-2xl mb-2 block"></i>
              <h3 className="font-semibold text-zinc-100 text-sm">Hours</h3>
              <p className="text-xs text-zinc-200 mt-1">11am to 10pm</p>
            </div>
          </div>
        </section>
        <p className="text-xs text-white">© 2026 Flavor House. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Res;
