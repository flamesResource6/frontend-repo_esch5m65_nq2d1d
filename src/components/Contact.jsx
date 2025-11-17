import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send message')
      setStatus({ ok: true, message: 'Thanks! We will get back to you shortly.' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-slate-300 mt-2">We'd love to hear from you</p>
        </div>

        <form onSubmit={submit} className="max-w-2xl mx-auto space-y-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Phone (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea className="w-full h-32 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          <button disabled={loading} className="w-full px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <p className={`${status.ok ? 'text-green-400' : 'text-red-400'} text-sm`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
