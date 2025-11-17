import { Truck, Utensils, Timer, Smartphone } from 'lucide-react'

const services = [
  { icon: Truck, title: 'Fast Delivery', desc: 'Hot and fresh at your doorstep' },
  { icon: Utensils, title: 'Catering', desc: 'Perfect for parties and events' },
  { icon: Timer, title: 'Freshly Prepared', desc: 'Cooked to order, every time' },
  { icon: Smartphone, title: 'Easy Ordering', desc: 'Order online in a few taps' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="text-slate-300 mt-2">Everything you need for a great meal</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <s.icon className="h-10 w-10 mx-auto text-red-500" />
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
