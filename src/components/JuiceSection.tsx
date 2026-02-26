import { juices } from './data/juices';

export default function JuiceSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 mb-2 sm:mb-3 md:mb-4 text-center">
        Fresh Juices
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 max-w-7xl w-full">
        {juices.slice(0, 10).map((juice) => (
          <div
            key={juice.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 border border-yellow-600/20"
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

            <div className="p-1.5 sm:p-2 md:p-3 text-center">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white truncate">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}