import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book / Order', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-xl">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3 group">
              <img src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLRkN8ZW58MHwwfHx8MTc2MzQwOTk0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="KFC" className="h-10 w-auto drop-shadow" />
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-red-400 transition-colors">KFC</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition">
                  {item.label}
                </a>
              ))}
            </div>

            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition">
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
