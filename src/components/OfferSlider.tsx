import { offers } from './data/offers';
import { Flame, Droplets } from 'lucide-react';

export default function OfferSlider() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 mb-2 sm:mb-3 md:mb-4 text-center">
        Special Offers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-7xl w-full h-full">
        {offers.slice(0, 3).map((offer) => (
          <div
            key={offer.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/30 flex flex-col h-full"
          >
            <div className="relative h-28 xs:h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 bg-gray-700 overflow-hidden shrink-0">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                {offer.badge.toLowerCase() === 'spicy' ? (
                  <div className="bg-red-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {offer.badge}
                  </div>
                ) : (
                  <div className="bg-blue-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Droplets className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {offer.badge}
                  </div>
                )}
              </div>
            </div>

            <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col grow justify-center">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {offer.title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-400 mt-0.5 sm:mt-1">
                {offer.subtitle}
              </p>
              <div className="mt-1 sm:mt-2">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
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