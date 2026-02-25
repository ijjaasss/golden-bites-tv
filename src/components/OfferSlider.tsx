import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const offers = [
  {
    id: 1,
    title: 'Lays Charcoal Shawarma',
    subtitle: 'shawarma',
    price: '99',
    badge: 'spicy',
    image: "/image/lays shawarma.jpeg"
  },
  {
    id: 2,
    title: 'Charcoal Shawarma Combo',
    subtitle: 'Shawarma + French Fries + Soft Drinks',
    price: '99',
    badge: 'spicy',
    image: "/image/charcoal combo.png"
  },
  {
    id: 3,
    title: 'Chicken Charcoal Burger',
    subtitle: 'Combo',
    price: '99',
    badge: 'Juicy',
    image: "/image/charcoal burger.png"
  },
];

export default function OfferSlider() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="w-full h-full flex flex-col px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 max-w-[2560px] mx-auto">
        
        {/* Title Section - Ultra Responsive */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 shrink-0"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-[#222222] leading-tight">
            Special Offers
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-orange-600 font-medium mt-1 xs:mt-2">
            Limited Time Deals
          </p>
          <div className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-1 bg-orange-400 mx-auto mt-2 xs:mt-3 rounded-full"></div>
        </motion.div>

        {/* Swiper Container - Perfect Height Management */}
        <div className="flex-1 min-h-0 w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={8}
            slidesPerView={1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5
            }}
            breakpoints={{
              // Extra small devices (phones, 320px and up)
              320: { 
                slidesPerView: 1, 
                spaceBetween: 8,
                slidesPerGroup: 1
              },
              // Small devices (phones, 480px and up)
              480: { 
                slidesPerView: 1, 
                spaceBetween: 10,
                slidesPerGroup: 1
              },
              // Medium devices (tablets, 640px and up)
              640: { 
                slidesPerView: 1, 
                spaceBetween: 12,
                slidesPerGroup: 1
              },
              // Large devices (tablets landscape, 768px and up)
              768: { 
                slidesPerView: 2, 
                spaceBetween: 12,
                slidesPerGroup: 1
              },
              // Extra large devices (small laptops, 1024px and up)
              1024: { 
                slidesPerView: 2, 
                spaceBetween: 15,
                slidesPerGroup: 1
              },
              // Desktop (1280px and up)
              1280: { 
                slidesPerView: 3, 
                spaceBetween: 18,
                slidesPerGroup: 1
              },
              // Large Desktop (1536px and up)
              1536: { 
                slidesPerView: 3, 
                spaceBetween: 20,
                slidesPerGroup: 1
              },
              // Ultra-wide (1920px and up)
              1920: { 
                slidesPerView: 3, 
                spaceBetween: 25,
                slidesPerGroup: 1
              },
              // 4K TVs (2560px and up)
              2560: { 
                slidesPerView: 4, 
                spaceBetween: 30,
                slidesPerGroup: 1
              }
            }}
            className="h-full w-full pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 2xl:pb-24"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={offer.id} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="h-full"
                >
                  <div className="h-full bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 relative overflow-hidden group border border-orange-100 hover:border-orange-400">
                    
                    {/* Background Decorations - Responsive */}
                    <div className="absolute top-0 right-0 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-48 h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-48 bg-gradient-to-br from-[#FF7A00] to-[#FFA726] rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-40 h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-40 bg-gradient-to-tr from-[#FFD54F] to-[#FFA726] rounded-tr-full opacity-5" />

                    {/* Badge - Responsive */}
                    <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 z-10">
                      <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFA726] text-white px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1 xs:py-1.5 sm:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg">
                        {offer.badge}
                      </span>
                    </div>

                    {/* Image Container - Perfectly Responsive */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-48 h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-48 mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
                        <div className="w-full h-full rounded-full overflow-hidden ring-2 xs:ring-4 ring-orange-100 group-hover:ring-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                          <img 
                            src={offer.image} 
                            alt={offer.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            
                          />
                        </div>
                      </div>

                      {/* Content - Responsive Typography */}
                      <div className="text-center w-full">
                        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#222222] mb-0.5 xs:mb-1 sm:mb-2 line-clamp-2">
                          {offer.title}
                        </h3>
                        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 line-clamp-2 px-1 xs:px-2">
                          {offer.subtitle}
                        </p>

                        {/* Price Container - Fully Responsive */}
                        <motion.div
                          animate={{
                            scale: [1, 1.02, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="inline-block w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] 2xl:max-w-[280px] mx-auto"
                        >
                          <div className="bg-gradient-to-r from-[#FF7A00] to-[#FFA726] text-white px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg">
                            <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                              ₹{offer.price}
                            </span>
                            <span className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-0.5 xs:ml-1 font-medium">
                              Only
                            </span>
                          </div>
                        </motion.div>

                        {/* Order Button - Responsive */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 bg-white text-[#FF7A00] border border-[#FF7A00] hover:border-2 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Bottom Bar */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 shrink-0"
        />
      </div>
    </section>
  );
}