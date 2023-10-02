import heroDesktop from '/components/Hero/frame1.svg';
import heroMobile from '/components/Hero/frame2.svg';

export default function Hero() {
    return (
        <main className="">
            <img
                    src={heroDesktop}
                    className="hidden md:block object-center w-screen h-auto"
                    alt="Desktop Hero"
                />
                <img
                    src={heroMobile}
                    className="block md:hidden w-full h-auto"
                    alt="Mobile Hero"
                />
        </main>
    );
}

// bg-hero-mobile md:bg-hero-desktop bg-no-repeat h-screen bg-center bg-cover
// w-screen bg-hero-mobile md:bg-hero-desktop bg-no-repeat bg-center bg-cover