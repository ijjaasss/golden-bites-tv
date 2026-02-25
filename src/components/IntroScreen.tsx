import { motion } from 'framer-motion';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => setTimeout(onComplete, 3000)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-[#fcc616] to-[#696969]"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white/30 rounded-full blur-3xl"
          />

          <div className="relative bg-white rounded-full p-6 md:p-8 shadow-2xl flex items-center gap-4 md:gap-6">
            <img 
              src="/image/logo.png" 
              alt="Golden Bites Logo" 
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000]">
              Golden Bites
            </h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-white/90"
        >
          Premium Dining Experience
        </motion.p>
      </div>
    </motion.div>
  );
}