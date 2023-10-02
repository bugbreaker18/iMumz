export default function Article() {
    const data = [
        {
            image: '1',
            title: 'Will your child be impacted by meditating in pregnancy? What science is saying?',
            tags: ['Monthly Growth'],
            date: 'June 12, 2023',
        },
        {
            image: '2',
            title: 'There is lot of buzz about Garbh sanskar (Mindfulness in pregnancy) Will this really help your baby in pregnancy?',
            tags: ['Garbn Sanskar'],
            date: 'June 12, 2023',
        },
        {
            image: '3',
            title: 'Most important thing you can do in pregnancy to avoid a very common Postpartum depression',
            tags: ['Postnatal Care'],
            date: 'June 12, 2023',
        },
        {
            image: '4',
            title: 'Your food in pregnancy can make your healthy for life long. Here’s the proof!',
            tags: ['Nutrition'],
            date: 'June 12, 2023',
        },
    ];

    return (
        <div className="py-8 space-y-8">
            <h1 className="mx-4 text-xl md:text-5xl font-semibold">
                Latest Articles
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col space-y-6 bg-white rounded-t-3xl overflow-hidden"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={`/components/Cards/card${item.image}.jpeg`}
                                className="hover:scale-110 rounded-3xl translation-all duration-300"
                            />
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[#E5F5F2] text-[#619E93] font-semibold text-base px-3 py-3 rounded-3xl"
                                >
                                    {tag}
                                </span>
                            ))}

                            <span className="text-gray-500 text-sm font-[600]">
                                {item.date}
                            </span>
                        </div>
                        <div className="font-bold text-xl leading-tight">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
