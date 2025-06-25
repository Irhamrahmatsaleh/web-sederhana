import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-200">
      <Navbar />
      <div className="pt-32 w-full flex flex-col items-center text-center px-4">
      <span className="inline-block mb-4 px-4 py-1 bg-white/80 text-indigo-700 text-xs rounded-full font-semibold shadow">
        #1 Pilihan Bisnis Online 2025
      </span>

        <motion.h1
          className="font-sans text-3xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Bikin <span className="text-indigo-600">Website Fullstack</span>
          <br />
          <span className="text-emerald-600">Profesional & Powerful</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-bold text-fuchsia-600">JustWeb</span> siap mengubah idemu jadi website modern dan siap scaling.
          <span className="block mt-1">Dari frontend interaktif sampai backend super cepat: <span className="text-indigo-600">semua bisa kamu dapatkan di satu tempat!</span></span>
        </motion.p>
        <motion.a
          href="https://wa.me/+6281364573630" target="_blank"
          className="mt-8 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-emerald-400 text-white font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl active:scale-95 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          whileHover={{ scale: 1.08, boxShadow: "0px 4px 32px 0px rgba(34,197,94,0.25)" }}
        >
          Konsultasi & Mulai Proyekmu 🚀
        </motion.a>

        <motion.div
          className="mt-8 text-gray-600 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <span className="font-semibold">#BikinWebsiteTanpaRibet</span> &nbsp;|&nbsp; <span className="font-semibold">#FullstackOneStop</span>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
