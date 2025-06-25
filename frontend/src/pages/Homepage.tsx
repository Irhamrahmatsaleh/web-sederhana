import { motion } from "framer-motion"

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-200">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Selamat Datang di Website Sederhana
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-white/80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        Landing page dikembangkan di sini
      </motion.p>
    </div>
  )
}

export default Homepage
