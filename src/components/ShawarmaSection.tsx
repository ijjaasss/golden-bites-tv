import { shawarmas } from './data/shawarmas';

export default function ShawarmaSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
        Signature Shawarmas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl w-full">
        {shawarmas.map((shawarma) => (
          <div
            key={shawarma.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/30"
          >
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-700 overflow-hidden">
              <img
                src={shawarma.image}
                alt={shawarma.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </div>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
                {shawarma.name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                {shawarma.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
