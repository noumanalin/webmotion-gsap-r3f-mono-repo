import { useEffect, useRef, useState } from "react";


const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const heroRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    useEffect(() => {
        if (!heroRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(heroRef.current);
        return () => observer.disconnect();

    }, []);

    return (
        <section id="hero" ref={heroRef} className={`${inView ? 'animate-zoom-in' : 'opacity-0'}`}>
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    )
}

export default HeroSection