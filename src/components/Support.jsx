import PlayStore from "/public/components/Support/PlayStore/playstore.svg"
import AppStore from '/public/components/Support/PlayStore/appstore.svg';

export default function Support() {
    return (
        <div className="grid max-sm:grid-cols-1 md:grid-cols-3 py-8 gap-5 px-4 md:px-36">
            <div className="space-y-2">
                <h1 className="font-bold text-xl md:text-3xl">Get the app</h1>

                <div className="flex flex-row md:flex-col gap-4 items-start [&>*]:max-sm:aspect-video">
                    <img src={PlayStore} className="max-sm:h-20" />
                    <img src={AppStore} className="max-sm:h-20" />
                </div>
            </div>
            <div className="space-y-8">
                <h1 className="font-bold text-xl md:text-3xl">Support</h1>
                <h1 className="font-semibold">
                    In case of queries, send us an e-mail on{' '}
                    <a
                        href="mailto:support@iMumz.com"
                        className="text-blue-600 underline"
                    >
                        support@iMumz.com
                    </a>
                </h1>
            </div>
            <div className="space-y-6">
                <h1 className="font-bold text-xl md:text-3xl">Address</h1>
                <h1 className="font-semibold">
                    No. 06, Vedanta Block, Axis Tatvam, Udaypura, Bengluru,
                    Karnataka, INDIA. 560082
                </h1>
                <h1 className="font-semibold">
                    CIN: U85300KA2020PTC140653
                </h1>
            </div>
        </div>
    );
}