import { useState } from 'react'

export default function Booking() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    order_type: 'pickup',
    address: '',
    items: '',
    notes: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    // Simple item parser: name:qty:price per line
    const items = form.items.split('\n').filter(Boolean).map((line) => {
      const [name, qty, price] = line.split(':')
      return { name: name?.trim() || 'Item', quantity: Number(qty) || 1, price: Number(price) || 0 }
    })
    const total = items.reduce((s, it) => s + it.quantity * it.price, 0)

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, items, total })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit order')
      setStatus({ ok: true, message: `Order placed! ID: ${data.order_id}` })
      setForm({ customer_name: '', phone: '', email: '', order_type: 'pickup', address: '', items: '', notes: '' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Book / Order</h2>
          <p className="text-slate-300 mt-2">Place an order or reserve catering</p>
        </div>

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="space-y-4">
            <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Full name" value={form.customer_name} onChange={(e) => setForm({ ...form, customer_name: e.target.value })} required />
            <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Email (optional)" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white" value={form.order_type} onChange={(e) => setForm({ ...form, order_type: e.target.value })}>
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
              <option value="dine-in">Dine-in</option>
            </select>
            {form.order_type === 'delivery' && (
              <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Delivery address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            )}
          </div>

          <div className="space-y-4">
            <textarea className="w-full h-32 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Items (one per line) e.g.\nZinger Burger:2:5.99\nLarge Fries:1:2.49" value={form.items} onChange={(e) => setForm({ ...form, items: e.target.value })} />
            <textarea className="w-full h-24 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Notes (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            <button disabled={loading} className="w-full px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold disabled:opacity-60">
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
            {status && (
              <p className={`${status.ok ? 'text-green-400' : 'text-red-400'} text-sm`}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
