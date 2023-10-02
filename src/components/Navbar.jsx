import { useState } from 'react';
import Logo from '/public/images/logo.png';
import open from '/public/components/Navbar/open.svg';
import close from '/public/components/Navbar/close.svg';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const link = [
        {
            title: 'Home',
            link: '#',
            active: false,
        },
        {
            title: 'Pregnancy',
            link: '#',
            active: false,
        },
        {
            title: 'Parenting',
            link: '#',
            active: false,
        },
        {
            title: 'Research',
            link: '#',
            active: true,
        },
        {
            title: 'About Us',
            link: '#',
            active: false,
        },
        {
            title: 'Contact Us',
            link: '#',
            active: false,
        },
    ];

    function handleClick() {
        setToggle((value) => !value);
    }

    console.log(toggle);

    return (
        <div className="flex flex-col">
            <nav
                className={`relative z-20 bg-white flex flex-col justify-between px-8 lg:px-36 py-5`}
            >
                <div className="flex flex-row justify-between items-center z-10">
                    <a className="space-x-1" href="#">
                        <img
                            src={Logo}
                            className="aspect-square h-12 inline -translate-y-1"
                        />
                        <span className="text-black tracking-normal font-sans text-xl font-semibold">
                            iMumz
                        </span>
                    </a>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex flex-row gap-6">
                        {link.map((item, index) => (
                            <a
                                key={index}
                                className={`cursor-pointer text-base tracking-wide hover:text-[#0283F3] ${
                                    item.active
                                        ? 'font-semibold text-[#0283F3]'
                                        : 'text-black'
                                }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <button
                        className="inline-flex md:hidden items-center justify-center p-2 -translate-y-1 rounded-lg [&>*]:aspect-square [&>*]:h-7"
                        onClick={handleClick}
                    >
                        {toggle ? (
                            <img src={close} alt="close" />
                        ) : (
                            <img src={open} alt="open" />
                        )}
                    </button>

                    <button className="bg-[#F89B62] hover:bg-orange-500 hidden md:inline uppercase px-4 py-2 md:px-6 md:py-3 lg:px-9 lg:py-4 rounded-2xl text-sm font-semibold text-white">
                        Get the App
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`bg-white absolute w-full flex flex-col items-center gap-2 py-5 text-center left-0 translation-all duration-500 md:hidden
                ${toggle ? 'translate-y-20 mt-2 border-t-2 border-gray-200' : ' -translate-y-80 '}`}
            >
                {link.map((item, index) => (
                    <a
                        key={index}
                        className={`text-center cursor-pointer py-2 text-sm tracking-wide select-none hover:text-[#0283F3] ${
                            item.active
                                ? 'font-semibold text-[#0283F3]'
                                : 'text-black'
                        }`}
                    >
                        {item.title}
                    </a>
                ))}

                <button className="bg-[#F89B62] hover:bg-orange-500 md:hidden uppercase px-6 py-4 md:px-9 md:py-4 rounded-2xl text-sm font-semibold text-white">
                    Get the App
                </button>
            </div>
        </div>
    );
}
