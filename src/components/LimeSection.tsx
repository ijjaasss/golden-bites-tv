import { lime } from './data/juices';

export default function LimeSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">
        Lime Refreshers
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl w-full">
        {lime.map((juice) => (
          <div
            key={juice.id}
            className="w-[calc(50%-0.75rem)] xs:w-[calc(33.333%-1rem)] sm:w-[calc(25%-1rem)] md:w-[calc(20%-1.25rem)] lg:w-[calc(20%-1.5rem)] max-w-50 sm:max-w-55 md:max-w-60 lg:max-w-65 xl:max-w-70 bg-linear-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/20"
          >
            <div className="relative aspect-square bg-gray-700 overflow-hidden">
              <img
                src={juice.image}
                alt={juice.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
            </div>

            <div className="p-2 sm:p-3 md:p-4 text-center">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white wrap-break-words">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Show message when no items */}
      {lime.length === 0 && (
        <div className="text-white text-center py-10">
          <p className="text-xl">No Lime available</p>
        </div>
      )}
    </div>
  );
}