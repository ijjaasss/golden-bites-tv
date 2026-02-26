import { motion } from "framer-motion";

function LaysShawarma() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex items-center justify-center overflow-hidden text-white">

      <div
        className="relative flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >

        {/* BACKGROUND TEXT */}
        <motion.h1
          className="
            absolute
            text-[90px] sm:text-[150px] lg:text-[240px]
            font-extrabold
            tracking-widest
            text-yellow-400/10
            select-none
            whitespace-nowrap
          "
          animate={{
            x: [40, -40, 40],
            rotateZ: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            textShadow: "8px 8px 40px rgba(0,0,0,0.8)",
          }}
        >
          LAYS
        </motion.h1>

        {/* SHAWARMA IMAGE */}
        <motion.div
          className="relative z-10"
          animate={{
            rotateY: [0, 18, -18, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/image/lays shawar.png"
            alt="Lays Shawarma"
            className="
              w-[300px]
              sm:w-[380px]
              lg:w-[500px]
              object-contain
              drop-shadow-[0_35px_70px_rgba(255,215,0,0.35)]
            "
          />
        </motion.div>

        {/* TITLE + PRICE ONLY */}
        <motion.div
          className="absolute bottom-[12%] text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* TITLE */}
          <motion.h2
            className="
              text-4xl sm:text-5xl lg:text-6xl
              font-extrabold
              text-yellow-400
              tracking-wide
            "
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              textShadow:
                "0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.2)",
            }}
          >
            Lays Shawarma
          </motion.h2>

          {/* PRICE */}
          <motion.div
            className="
              mt-4
              text-7xl lg:text-8xl
              font-extrabold
              text-white
            "
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              textShadow:
                "0 0 25px rgba(255,215,0,0.6), 0 0 60px rgba(255,215,0,0.3)",
            }}
          >
            ₹99
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default LaysShawarma;