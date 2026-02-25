import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function ComboSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#FF7A00] to-[#FFA726] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            Perfect Combo Deal
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Best Value for Your Money
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-linear-to-br from-[#FFD54F]/20 to-[#FFA726]/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Biriyani Image</p>
                    <p className="text-sm text-gray-500">Replace with optimized WebP images under 300KB</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-[#FFD54F] text-[#222222] rounded-full p-4 shadow-xl">
                  <Plus className="w-8 h-8" strokeWidth={3} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-linear-to-br from-[#FFD54F]/20 to-[#FFA726]/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Pepsi Image</p>
                    <p className="text-sm text-gray-500">Replace with optimized WebP images under 300KB</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mt-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
                Biriyani + Pepsi Combo
              </h3>

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <div className="bg-linear-to-r from-[#FF7A00] to-[#FFA726] text-white px-12 py-6 rounded-2xl shadow-2xl">
                  <p className="text-lg mb-2">Special Price</p>
                  <p className="text-5xl md:text-6xl font-bold">₹249</p>
                  <p className="text-lg mt-2 line-through opacity-75">₹320</p>
                </div>
              </motion.div>

              <p className="text-gray-600 text-lg mt-6">
                Save ₹71 on this amazing combo!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
