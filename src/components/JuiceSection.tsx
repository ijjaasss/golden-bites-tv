import { motion } from 'framer-motion';
import Card from './Card';

const juices = [
  { id: 1, name: 'Ginger Lime', image: '/image/ginger lime.jpg' },
  { id: 2, name: 'Blue Lime', image: '/image/Blue Lime.jpg' },
  { id: 3, name: 'Lemon Soda', image: '/image/Lemon Soda.jpeg' },
  { id: 4, name: 'Lime', image: '/image/Lime Juice.jpeg' },
  { id: 5, name: 'Mint Lime', image: '/image/Mint Lime.jpeg' },
  { id: 6, name: 'Pineapple Lime', image: '/image/Pineapple Lime.jpg' },
  { id: 7, name: 'Musambi', image: '/image/Mosambi Juice.jpg' },
  { id: 8, name: 'Watermelon', image: '/image/Watermelon Juice.png' },
  { id: 9, name: 'Pineapple', image: '/image/Pineapple Juice.jpeg' },
  { id: 10, name: 'Pulpy Grape', image: '/image/pulpy grape.jpg' }
];

export default function JuiceSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full h-full flex flex-col px-4 py-4 md:py-6 lg:py-8">
        {/* Title Section - Takes less height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 md:mb-4 lg:mb-6 shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#222222] leading-tight">
            Fresh Juice Specials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
            Made with Love, Served Fresh
          </p>
        </motion.div>

        {/* Grid Container - Takes remaining height and ensures all items fit */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-h-0">
          {juices.map((juice, index) => (
            <Card key={juice.id} delay={index * 0.1}>
              <motion.div 
                className="h-full flex flex-col items-center justify-center border-2 border-[#FF7A00] rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                {/* Juice Icon/Image Placeholder */}
                 <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-1 sm:mb-2 bg-linear-to-br from-[#FFD54F]/30 to-[#FFA726]/30 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={juice.image} 
                    alt={juice.name}
                    className="w-full h-full object-cover"
                    
                  />
                </div>

                {/* Juice Name */}
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#222222] text-center leading-tight">
                  {juice.name}
                </h3>

                {/* Animated Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FF7A00] rounded-full mt-1 sm:mt-2"
                />
              </motion.div>
            </Card>
          ))}
        </div>

        {/* Optional: Decorative Bottom Bar */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-0.5 bg-linear-to-r from-transparent via-[#FF7A00] to-transparent mt-2 shrink-0"
        />
      </div>
    </section>
  );
}