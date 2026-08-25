import React, { useContext, useEffect, useRef, useState } from 'react';
import { Colors } from '../../Utils/Colors';
import { LanguageContext } from '../../Context/LanguageContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { background } = Colors.en;
    const { translations } = useContext(LanguageContext);
    const videoRef = useRef(null);

    // Add state to control fallback visibility
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('youtube-player', {
                height: '100%',
                width: '100%',
                videoId: 'CL60t4WyhvI',
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    iv_load_policy: 3,
                    playsinline: 1,
                    fs: 0,
                    start: 20,
                    loop: 1,
                    playlist: 'CL60t4WyhvI',
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                        // If video starts playing successfully, ensure fallback is hidden
                        setVideoError(false);
                    },
                    onError: (event) => {
                        // Common errors: 100 (video not found), 101/150 (embedding not allowed)
                        console.error('YouTube Player Error:', event.data);
                        setVideoError(true);
                    },
                    // Optional: handle state changes if needed
                    // onStateChange: (event) => { ... }
                },
            });
        };

        // Cleanup: if component unmounts, reset error state if needed
        return () => {
            setVideoError(false);
        };
    }, []);

    return (
        <div style={{ backgroundColor: background }} className="min-h-[79vh] flex flex-col justify-between text-center">
            <section className="relative flex-grow overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                {/* Video Background Container */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoError ? 'opacity-100' : 'opacity-100'} bg-[url('https://img.freepik.com/free-photo/3d-futuristic-background-with-low-poly-plexus-design_1048-11872.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center`}>
                    <div
                        id="youtube-player"
                        className="
                            absolute inset-0 
                            w-full h-full 
                            md:w-[150%] md:h-[150%] 
                            md:top-1/2 md:left-1/2 
                            md:-translate-x-1/2 md:-translate-y-1/2 
                            md:scale-150 
                            object-cover
                        "
                    ></div>
                </div>

                {/* Fallback Image - Shown only on error */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoError ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src="https://img.freepik.com/free-photo/3d-futuristic-background-with-low-poly-plexus-design_1048-11872.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Background fallback"
                        className="
                            w-full h-full 
                            object-cover 
                            md:scale-150 
                            md:absolute md:inset-0 
                            md:top-1/2 md:left-1/2 
                            md:-translate-x-1/2 md:-translate-y-1/2
                        "
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-[79vh] w-full px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
                        <span dangerouslySetInnerHTML={{ __html: translations.Hero.demoBannerTitle }} />
                    </h1>
                    <p className="text-lg sm:text-xl md:text-xl mb-8 text-white max-w-2xl drop-shadow-lg leading-relaxed">
                        {translations.Hero.whoWeAreDesc}
                    </p>
                    <button className="px-2 py-2 text-base sm:text-sm font-medium text-white transition-all duration-300 shadow-lg border border-white">
                        <Link to={'/about'}>
                            {translations.Hero.learnMore}
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;