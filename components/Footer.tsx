export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-2">© {new Date().getFullYear()} حنقس حناقيس's Project</p>
        <p className="text-sm text-gray-400">Powered by Cosmic CMS</p>
      </div>
    </footer>
  )
}