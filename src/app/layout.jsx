import '@/styles/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html className="h-full scroll-smooth bg-zinc-950 text-white antialiased " lang="en">
      <body className="h-full">
        <div className="overflow-hidden">
        {children}
        </div>
        </body>
    </html>
  )
}
