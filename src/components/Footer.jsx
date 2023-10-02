export default function Footer() {
    const links = [
        {
            name: 'Instagram',
            image: 'instagram',
        },
        {
            name: 'Linkedin',
            image: 'linkedin',
        },
        {
            name: 'Youtube',
            image: 'youtube',
        },
        {
            name: 'Facebook',
            image: 'facebook',
        },
        {
            name: 'Twitter',
            image: 'twitter',
        },
        {
            name: 'Pinterest',
            image: 'pinterest',
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-[#FB9251] px-8 md:px-40 py-8">
            <h1 className="text-xs text-white">
                © 2022 Pruoo Healthcare Technologies Private Limited
            </h1>

            <div className="max-sm:flex max-sm:flex-col items-center max-sm:space-y-2 [&>*]:underline [&>*]:text-white [&>*]:text-xs md:space-x-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>

            <div className="flex flex-row gap-5">
                {links.map((link, index) => (
                    <a key={index} href="#" className="aspect-square h-5 md:h-6">
                        <img
                            src={`/components/Footer/${link.image}.svg`}
                            alt={link.name}
                            className="text-white"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
