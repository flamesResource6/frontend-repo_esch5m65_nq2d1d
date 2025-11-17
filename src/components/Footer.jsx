export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} KFC. All rights reserved.</p>
        <div className="text-slate-400 text-sm">Made with ❤️ and extra crispy vibes</div>
      </div>
    </footer>
  )
}
