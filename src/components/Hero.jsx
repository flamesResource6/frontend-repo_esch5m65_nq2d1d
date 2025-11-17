export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-red-600/30 blur-3xl" />
      <div className="absolute top-20 left-10 -z-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-300 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">Finger Lickin' Good</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Crispy. Juicy. Legendary.
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              Welcome to KFC — home of the world-famous fried chicken. Explore our menu,
              order your favorites, and get them delivered hot and fresh.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-900/30 transition">Browse Menu</a>
              <a href="#booking" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition">Order Now</a>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1667788000434-b83c6985cc28?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLRkMlMjBCdWNrZXR8ZW58MHwwfHx8MTc2MzQwOTk0OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="KFC Bucket" className="rounded-3xl border border-white/10 shadow-2xl shadow-red-900/20" />
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10">
              <p className="text-white font-semibold">Hot & Fresh</p>
              <p className="text-slate-300 text-sm">Prepared upon your order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
