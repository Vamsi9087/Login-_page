"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 animate-gradient overflow-hidden relative">
      {/* Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-600 rounded-full blur-3xl opacity-20 animate-float delay-400" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          {/* Logo pulse */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-black text-white text-center mb-1">Welcome back</h1>
          <p className="text-white/40 text-sm text-center mb-8">Sign in to your account</p>

          {submitted ? (
            <div className="animate-fade-in-up text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Login Successful!</p>
              <p className="text-white/50 text-sm mt-1">Redirecting you now...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {(["Email", "Password"] as const).map((label, i) => (
                <div key={label} className={`opacity-0 animate-fade-in-up delay-${(i + 2) * 100}`} style={{ animationFillMode: "forwards" }}>
                  <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-widest">{label}</label>
                  <input
                    type={label === "Password" ? "password" : "email"}
                    required
                    placeholder={label === "Email" ? "you@example.com" : "••••••••"}
                    onFocus={() => setFocused(label)}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-all duration-300 text-sm ${
                      focused === label ? "border-purple-400 bg-white/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]" : "border-white/10"
                    }`}
                  />
                </div>
              ))}

              <div className="opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
                <div className="flex justify-end mb-5">
                  <a href="#" className="text-purple-400 text-xs hover:text-purple-300 transition-colors">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="relative w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm tracking-wide overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-purple-900/50"
                >
                  <span className="relative z-10">Sign In</span>
                  <span className="absolute inset-0 animate-shimmer" />
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-white/30 text-xs mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">Contact us</Link>
          </p>
        </div>

        <p className="text-center mt-6 opacity-0 animate-fade-in-up delay-500" style={{ animationFillMode: "forwards" }}>
          <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">← Back to home</Link>
        </p>
      </div>
    </main>
  );
}
