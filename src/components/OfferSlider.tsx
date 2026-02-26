import { offers } from './data/offers';
import { Flame, Droplets } from 'lucide-react';

export default function OfferSlider() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center">
        Special Offers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl w-full">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/30"
          >
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-700 overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                {offer.badge.toLowerCase() === 'spicy' ? (
                  <div className="bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-semibold flex items-center gap-1.5">
                    <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                    {offer.badge}
                  </div>
                ) : (
                  <div className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-semibold flex items-center gap-1.5">
                    <Droplets className="w-3 h-3 sm:w-4 sm:h-4" />
                    {offer.badge}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {offer.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
                {offer.subtitle}
              </p>
              <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
                  ₹{offer.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
