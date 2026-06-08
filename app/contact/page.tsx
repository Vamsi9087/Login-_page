"use client";
import { useState } from "react";
import Link from "next/link";

const fields = [
  { name: "name",    label: "Name",    type: "text",  placeholder: "John Doe" },
  { name: "email",   label: "Email",   type: "email", placeholder: "you@example.com" },
];

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 animate-gradient overflow-hidden relative">
      <div className="absolute top-10 right-16 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-10 left-16 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-float delay-300" />

      <div className="relative z-10 w-full max-w-lg mx-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-black text-white text-center mb-1">Get in Touch</h1>
          <p className="text-white/40 text-sm text-center mb-8">We&apos;d love to hear from you</p>

          {sent ? (
            <div className="animate-fade-in-up text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Message Sent!</p>
              <p className="text-white/50 text-sm mt-1">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((f, i) => (
                <div key={f.name} className={`opacity-0 animate-fade-in-up delay-${(i + 1) * 100}`} style={{ animationFillMode: "forwards" }}>
                  <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-widest">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-all duration-300 text-sm ${
                      focused === f.name ? "border-indigo-400 bg-white/10 shadow-[0_0_20px_rgba(99,102,241,0.3)]" : "border-white/10"
                    }`}
                  />
                </div>
              ))}

              <div className="opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
                <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what's on your mind..."
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-all duration-300 text-sm resize-none ${
                    focused === "message" ? "border-indigo-400 bg-white/10 shadow-[0_0_20px_rgba(99,102,241,0.3)]" : "border-white/10"
                  }`}
                />
              </div>

              <div className="opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
                <button
                  type="submit"
                  className="relative w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-sm tracking-wide overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-indigo-900/50"
                >
                  <span className="relative z-10">Send Message →</span>
                  <span className="absolute inset-0 animate-shimmer" />
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-white/30 text-xs mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">Sign in</Link>
          </p>
        </div>

        <p className="text-center mt-6 opacity-0 animate-fade-in-up delay-500" style={{ animationFillMode: "forwards" }}>
          <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">← Back to home</Link>
        </p>
      </div>
    </main>
  );
}
