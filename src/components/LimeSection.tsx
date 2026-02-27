import { lime } from './data/juices';

export default function LimeSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
     
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl w-full">
        {lime.map((juice) => (
          <div
            key={juice.id}
            className="w-[calc(33.333%-1rem)] sm:w-[calc(33.333%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-xs sm:max-w-sm md:max-w-md bg-linear-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/20"
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

            <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white wrap-break-words">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Show message when no items */}
      {lime.length === 0 && (
        <div className="text-white text-center py-10">
          <p className="text-xl">No juices available</p>
        </div>
      )}
    </div>
  );
}