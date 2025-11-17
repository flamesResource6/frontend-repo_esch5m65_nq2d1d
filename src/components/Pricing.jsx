const combos = [
  { title: 'Classic Combo', price: 8.99, items: ['2pc Chicken', 'Fries', 'Drink'] },
  { title: 'Family Feast', price: 24.99, items: ['8pc Chicken', '2 Large Sides', '4 Drinks'] },
  { title: 'Zinger Meal', price: 10.49, items: ['Zinger Burger', 'Fries', 'Drink'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing</h2>
          <p className="text-slate-300 mt-2">Value meals for every craving</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {combos.map((c) => (
            <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-3xl font-extrabold text-white">${c.price.toFixed(2)}</p>
              <ul className="mt-4 space-y-1 text-slate-300 text-sm">
                {c.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-block px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold">Order Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
