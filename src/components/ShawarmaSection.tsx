import { shawarmas } from './data/shawarmas';

export default function ShawarmaSection() {
  // Show only 3 items
  const itemsToShow = shawarmas // Exactly 3 items
  
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
      
      {/* Title - responsive and centered */}
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 text-center px-2 xs:px-3 sm:px-4">
        Signature Shawarmas
      </h2>

      {/* Main container with flex for perfect centering */}
      <div className="w-full flex justify-center px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
        
        {/* Content container - adjusts based on screen size */}
        <div className="w-full max-w-350">
          
          {/* Flex container for 3 items - perfectly centered horizontally */}
          <div className="flex flex-wrap justify-center items-stretch gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            
            {itemsToShow.map((shawarma, index) => (
              /* Card container - fully responsive width for 3 items layout */
              <div
                key={shawarma.id}
                className="w-[85%] xs:w-[70%] sm:w-[48%] md:w-[31%] lg:w-[30%] xl:w-[29%] 2xl:w-[28%] 
                         min-w-60 max-w-87.5 
                         bg-linear-to-br from-gray-800 to-gray-900 
                         rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden 
                         shadow-md xs:shadow-lg sm:shadow-xl hover:shadow-2xl 
                         transform transition-all duration-300 hover:scale-105 
                         border border-yellow-600/30 
                         flex flex-col
                         mx-auto sm:mx-0"
              >
                {/* Image container with responsive aspect ratio */}
                <div className="relative w-full aspect-4/3 xs:aspect-[4/3] sm:aspect-4/3 md:aspect-3/2 bg-gray-700 overflow-hidden">
                  <img
                    src={shawarma.image}
                    alt={shawarma.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                    loading="lazy"
                  />
                  
                  {/* Optional badge for better UX */}
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[10px] xs:text-xs sm:text-sm font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full shadow-lg">
                    #{index + 1}
                  </div>
                </div>

                {/* Content area with responsive padding and text */}
                <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 mb-1 xs:mb-2 sm:mb-3 leading-tight text-center sm:text-left">
                    {shawarma.name}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed line-clamp-3 xs:line-clamp-3 sm:line-clamp-4 md:line-clamp-5 text-center sm:text-left">
                    {shawarma.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Optional indicator showing 3 items */}
          <div className="flex justify-center mt-6 xs:mt-7 sm:mt-8 md:mt-10">
            <p className="text-yellow-400/70 text-xs xs:text-sm sm:text-base bg-gray-800/50 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full">
              ⚡ 3 Signature Shawarmas ⚡
            </p>
          </div>
        </div>
      </div>

      {/* Empty state - if no items */}
      {itemsToShow.length === 0 && (
        <div className="text-white text-center py-10">
          <p className="text-xl">No shawarmas available</p>
        </div>
      )}
    </div>
  );
}