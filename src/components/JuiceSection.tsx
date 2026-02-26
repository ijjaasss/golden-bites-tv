import { juices } from './data/juices';

export default function JuiceSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-1 sm:p-2 md:p-3 lg:p-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2 text-center">
        Fresh Juices
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 max-w-7xl w-full">
        {juices.slice(0, 10).map((juice) => (
          <div
            key={juice.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-md sm:rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 border border-yellow-600/20"
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

            <div className="p-1 sm:p-1.5 md:p-2 text-center">
              <h3 className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white truncate">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}