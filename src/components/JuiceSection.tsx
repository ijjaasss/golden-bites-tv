import { juices } from './data/juices';

export default function JuiceSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-0.5 sm:p-1 md:p-2 lg:p-3">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-0.5 sm:mb-1 text-center">
        Fresh Juices
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 max-w-7xl w-full">
        {juices.slice(0, 10).map((juice) => (
          <div
            key={juice.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-sm sm:rounded-md overflow-hidden shadow transform transition-all duration-300 hover:scale-105 border border-yellow-600/20"
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

            <div className="p-0.5 sm:p-1 md:p-1.5 text-center">
              <h3 className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-white truncate">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}