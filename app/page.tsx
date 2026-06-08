import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient">
      {/* Floating blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-200" />

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-10 py-5 animate-fade-in-down">
        <span className="text-white font-bold text-xl tracking-widest">NEXTSTUDIO</span>
        <div className="flex gap-6">
          <Link href="/login" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Login</Link>
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 text-center px-6">
        <div className="opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Welcome<br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              to the Future
            </span>
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
          <p className="mt-6 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
            Your workspace. Your rules. Secure access, zero friction —{" "}
            <span className="text-pink-400 font-semibold">sign in</span> to pick up where you left off
            or <span className="text-indigo-300 font-semibold">reach out</span> and we'll get you started.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            {[["🔒", "Bank-grade security"], ["⚡", "Instant access"], ["🎯", "Built for you"]].map(([icon, text]) => (
              <div key={text} className="flex flex-col items-center gap-1">
                <span className="text-xl">{icon}</span>
                <span className="text-white/40 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center mt-10" style={{ animationFillMode: "forwards" }}>
          <Link
            href="/login"
            className="relative px-8 py-3 rounded-full bg-white text-purple-900 font-bold text-sm tracking-wide overflow-hidden group hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Get Started →</span>
            <span className="absolute inset-0 animate-shimmer" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-white/30 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
