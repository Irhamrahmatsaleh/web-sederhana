

import React from "react"

const Footer: React.FC = () => {

  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-400 py-8 px-4 mt-16 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-2xl font-bold tracking-wide flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#fff" opacity="0.2"/>
            <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          JustWeb
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://wa.me/+6281364573630" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-200 transition-colors duration-200 text-lg">
            WhatsApp
          </a>
          <a href="https://instagram.com/irhamsaleh904" target="_blank" rel="noopener noreferrer" className="text-white hover:text-fuchsia-300 transition-colors duration-200 text-lg">
            Instagram
          </a>
          <a href="mailto:irhamsaleh904@gmail.com" className="text-white hover:text-indigo-200 transition-colors duration-200 text-lg">
            Email
          </a>
        </div>
      </div>
      <div className="text-center text-white/70 text-sm mt-6">
        {/* Copyright */}
        © {new Date().getFullYear()} JustWeb. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

