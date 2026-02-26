import { juices } from './data/juices';

export default function JuiceSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-0.5">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400 mb-0.5 text-center leading-tight">
        Fresh Juices
      </h2>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0.5 max-w-7xl w-full">
        {juices.slice(0, 10).map((juice) => (
          <div
            key={juice.id}
            className="bg-linear-to-br from-gray-800 to-gray-900 rounded-[2px] overflow-hidden shadow-sm border border-yellow-600/20"
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

            <div className="p-[2px] text-center">
              <h3 className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-white truncate">
                {juice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}