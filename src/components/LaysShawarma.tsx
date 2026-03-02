import { motion } from "framer-motion";

function LaysShawarma() {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-black via-neutral-900 to-black flex items-center justify-center overflow-hidden text-white">

      <div
        className="relative flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >

        {/* BACKGROUND TEXT */}
        <motion.h1
          className="
            absolute
            text-[120px] sm:text-[200px] lg:text-[300px]
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
        >
          LAYS
        </motion.h1>

        {/* BIGGER SHAWARMA IMAGE */}
        <motion.div
          className="relative z-10"
          animate={{
            rotateY: [0, 18, -18, 0],
            y: [0, -25, 0],
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
              w-105
              sm:w-1430
              lg:w-162.5
              object-contain
              drop-shadow-[0_45px_90px_rgba(255,215,0,0.45)]
            "
          />
        </motion.div>

        {/* FRONT TITLE + PRICE */}
        <motion.div
          className="absolute bottom-[8%] text-center z-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* TITLE (FRONT + BIGGER) */}
          <motion.h2
            className="
              font-['Archivo Black',sans-serif]
              text-4xl sm:text-5xl lg:text-7xl
              font-extrabold
              text-yellow-400
              tracking-wide
            "
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              textShadow:
                "0 0 25px rgba(255,215,0,0.7), 0 0 60px rgba(255,215,0,0.4)",
            }}
          >
            Lays Shawarma
          </motion.h2>

          {/* BIG PRICE */}
          <motion.div
            className="
              mt-6
              text-8xl sm:text-9xl lg:text-[140px]
              font-extrabold
              text-white
            "
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              textShadow:
                "0 0 35px rgba(255,215,0,0.8), 0 0 80px rgba(255,215,0,0.4)",
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