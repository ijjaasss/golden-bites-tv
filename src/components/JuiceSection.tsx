import { juices } from './data/juices';

export default function JuiceSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">
        Fresh Juices
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl w-full">
        {juices.map((juice) => (
          <div
            key={juice.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 border border-yellow-600/20"
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
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
