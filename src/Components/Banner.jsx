import React from 'react';

const Banner = ({ upperText, mainText, subText, bgImage, height }) => {
  const safeMain = typeof mainText === 'string' ? mainText : '';
  const words = safeMain.trim() ? safeMain.split(/\s+/) : [];
  const lastWord = words.length ? words.pop() : '';
  const leading = words.join(' ');

  return (
    <div
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden bg-gradient-to-r from-amber-900 to-blue-950 text-white`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {bgImage && <div className="absolute inset-0 bg-black opacity-50" />}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider opacity-80">
          {upperText}
        </p>
        <h1 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mt-1 sm:mt-2 whitespace-nowrap">
          {leading ? (
            <>
              {leading} <span className="text-white">{lastWord}</span>
            </>
          ) : (
            <span className="text-white">{lastWord}</span>
          )}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 opacity-90">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default Banner;
