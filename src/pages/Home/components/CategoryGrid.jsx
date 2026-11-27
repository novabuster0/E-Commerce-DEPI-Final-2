import { Link } from "react-router-dom";
import icon from "/src/assets/Home/grid/Icon.png"; 
import shoe from "/src/assets/Home/grid/shoe.png"; 
import man from "/src/assets/Home/grid/man.png"; 
import woman from "/src/assets/Home/grid/woman.png"; 
import accs from "/src/assets/Home//grid/accs.png"; 

const categories = [
    {
        id: 1,
        tag: "DIV 01",
        name: "MEN'S OUTERWEAR & HEAVY KNITS",
        text: "Weather-resistant shells, insulated liners, and merino waffle weaves",
        image: man,
        accent: true,
        size: "md:col-span-7 md:h-[481px]",
    },
    {
        id: 2,
        tag: "DIV 02",
        name: "WOMEN'S UTILITY & TAILORING",
        text: "Sculptural silhouettes, cropped bomber vests & cinched trousers",
        image: woman,
        accent: false,
        size: "md:col-span-5 md:h-[481px]",
    },
    {
        id: 3,
        tag: "DIV 03",
        name: "FOOTWEAR & LUG BOOTS",
        text: "Vibram® treaded lug soles and waterproof calfskins",
        image: accs,
        accent: false,
        size: "md:col-span-5 md:h-[420px]",
    },
    {
        id: 4,
        tag: "DIV 04",
        name: "ACCESSORIES & MODULAR BAGS",
        text: "Fidlock® magnetic crossbody rigs, eyewear, and technical balaclavas",
        image: shoe,
        accent: true,
        size: "md:col-span-7 md:h-[420px]",
    },
];

export default function CategoryGrid() {

    function displayCategories() {
        const result = [];

        for (let i = 0; i < categories.length; i++) {
            const c = categories[i];

            result.push(
                <Link
                    key={c.id}
                    to="/collections"
                    className={`relative col-span-1 h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 ${c.size}`}
                >
                    <img
                        src={c.image}
                        alt={c.name}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <div className="min-w-0">

                            <h3 className="mt-2 text-[20px] font-extrabold leading-[26px] tracking-[-0.01em] text-white">
                                {c.name}
                            </h3>

                            <p className="mt-1 text-[12px] leading-[18px] text-slate-300">
                                {c.text}
                            </p>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-[18px] text-white backdrop-blur-sm">
                        <img
                            src={icon}
                            alt=""
                            className="h-3 w-3 brightness-0  invert"
                        />
                        </span>
                    </div>
                </Link>
            );
        }

        return result;
    }

    return (
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10 mt-12 border-t border-gray-200 pt-6 ">
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <p className="font-mono text-[12px] font-extrabold tracking-[0.16em] text-blue-600">
                        CURATED DIVISIONS
                    </p>
                    <h2 className="mt-1 text-[30px] font-extrabold tracking-[-0.035em] text-slate-900">
                        CATEGORIES &amp; MODULES
                    </h2>
                </div>
                <Link
                    to="/collections"
                    className="flex items-center gap-2 text-[12px] font-bold tracking-wide text-slate-400"
                >
                    VIEW ALL SILHOUETTES
                    <img
                        src={icon}
                        alt=""
                        className="h-3 w-3"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                {displayCategories()}
            </div>
        </section>
    );
}