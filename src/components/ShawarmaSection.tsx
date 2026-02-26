import { shawarmas } from './data/shawarmas';

export default function ShawarmaSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 mb-2 sm:mb-3 md:mb-4 text-center">
        Signature Shawarmas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-7xl w-full">
        {shawarmas.slice(0, 4).map((shawarma) => (
          <div
            key={shawarma.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/30 flex flex-col h-full"
          >
            <div className="relative h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 bg-gray-700 overflow-hidden shrink-0">
              <img
                src={shawarma.image}
                alt={shawarma.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </div>

            <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col grow">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 leading-tight">
                {shawarma.name}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-4">
                {shawarma.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}