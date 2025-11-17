import { useEffect, useState } from 'react'

export default function MenuSection() {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/menu`)
        if (!res.ok) throw new Error('Failed to load menu')
        const data = await res.json()
        setMenu(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [])

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Menu</h2>
          <p className="text-slate-300 mt-2">Classic favorites and new cravings</p>
        </div>

        {loading ? (
          <p className="text-center text-slate-300">Loading menu...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((item) => (
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:translate-y-[-2px] transition">
                {item.image && (
                  <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                      <p className="text-slate-300 text-sm">{item.description}</p>
                    </div>
                    <span className="text-white font-bold bg-red-600 px-3 py-1 rounded-lg">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
