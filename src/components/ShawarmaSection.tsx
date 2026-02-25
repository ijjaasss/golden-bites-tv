import { motion } from 'framer-motion';
import Card from './Card';

const shawarmas = [
  {
    id: 1,
    name: "Charcoal Shawarma",
    description: "Delicious charcoal-grilled shawarma wrapped with fresh vegetables and flavorful sauce.",
    image: "/image/charcoal-shawarma.jpg"
  },
  {
    id: 2,
    name: "Special Charcoal",
    description: "Extra meat, premium toppings, and signature sauce.",
    image: "/image/special-charcoal-shawarma.jpg"
  },
  {
    id: 3,
    name: "Combo Shawarma",
    description: "Served with fries and a refreshing drink.",
    image: "/image/combo-charcoal-shawarma.jpg"
  },
  {
    id: 4,
    name: "Lays Charcoal",
    description: "Served with crispy Lays chips for extra crunch.",
    image: "/image/lays shawarma.jpeg"
  }
];

export default function ShawarmaSection() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      <div className="w-full h-full flex flex-col px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-8 max-w-[2560px] mx-auto">
        
        {/* Title Section - Compact but Impactful */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 shrink-0"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-[#222222] leading-tight">
            Signature Shawarma
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-orange-600 font-medium mt-1">
            Authentic Middle Eastern Flavors
          </p>
          <div className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 h-1 bg-orange-400 mx-auto mt-2 rounded-full"></div>
        </motion.div>

        {/* Grid Container - Perfect 2x2 Layout for All Screens */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 min-h-0 content-center">
          {shawarmas.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card delay={index * 0.1}>
                <div className="h-full bg-white rounded-xl xs:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 xs:p-4 sm:p-5 md:p-6 relative overflow-hidden group border border-orange-100 hover:border-orange-400">
                  
                  {/* Background Decorations */}
                  <div className="absolute top-0 right-0 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-br from-[#FF7A00] to-[#FFA726] rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 w-12 xs:w-16 sm:w-20 md:w-24 w-12 xs:h-16 sm:h-20 md:h-24 bg-gradient-to-tr from-[#FFD54F] to-[#FFA726] rounded-tr-full opacity-5" />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Image Container - Perfect Size */}
                    <div className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 mx-auto mb-2 xs:mb-3 sm:mb-4">
                      <div className="w-full h-full rounded-full overflow-hidden ring-2 xs:ring-4 ring-orange-100 group-hover:ring-orange-200 shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          
                        />
                      </div>
                    </div>

                    {/* Text Content - Perfectly Sized */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#222222] text-center mb-1 xs:mb-2 line-clamp-1">
                        {item.name}
                      </h3>

                      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 text-center mb-2 xs:mb-3 sm:mb-4 line-clamp-2 px-1">
                        {item.description}
                      </p>

                      {/* Price and Order Section */}
                      <div className="mt-auto flex flex-col items-center gap-2">
                        <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF7A00]">
                          ₹149
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[180px] bg-gradient-to-r from-[#FF7A00] to-[#FFA726] text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Bar */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mt-2 xs:mt-3 sm:mt-4 shrink-0"
        />
      </div>
    </section>
  );
}