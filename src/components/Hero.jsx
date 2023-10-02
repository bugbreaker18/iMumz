import heroDesktop from '/public/components/Hero/frame1.svg';
import heroMobile from '/public/components/Hero/frame2.svg';

export default function Hero() {
    return (
        <main className="relative">
            <div className="h-full w-full">
                <img
                    src={heroDesktop}
                    className="hidden md:block object-center object-cover"
                    alt="Desktop Hero"
                />
                <img
                    src={heroMobile}
                    className="block md:hidden w-full h-auto"
                    alt="Mobile Hero"
                />
            </div>
        </main>
    );
}

// bg-hero-mobile md:bg-hero-desktop bg-no-repeat h-screen bg-center bg-cover