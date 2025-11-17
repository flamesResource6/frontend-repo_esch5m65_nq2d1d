const images = [
  'https://images.unsplash.com/photo-1606756790138-26119c23b6d9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604908554165-672d2c02ac8b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626082927389-fb980d1b764f?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Gallery</h2>
          <p className="text-slate-300 mt-2">A feast for the eyes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt="KFC Dish" className="rounded-xl border border-white/10 hover:opacity-90 transition" />
          ))}
        </div>
      </div>
    </section>
  )
}
