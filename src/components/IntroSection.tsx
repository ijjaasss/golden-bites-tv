

export default function IntroSection() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 sm:p-8">
      <div className="text-center space-y-6 sm:space-y-8 md:space-y-12 animate-fade-in">
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-linear-to-br from-yellow-600 to-yellow-400 flex items-center justify-center shadow-2xl">
            
            <img src="/image/logo.png" alt="" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 tracking-wider">
          Golden Bites
        </h1>

        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
          <span>Fresh</span>
          <span className="text-yellow-500">•</span>
          <span>Tasty</span>
          <span className="text-yellow-500">•</span>
          <span>Delicious</span>
        </div>
      </div>
    </div>
  );
}
