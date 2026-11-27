import { Link } from "react-router-dom";
import placeholder0 from "/src/assets/placeholder0.png";
// import heroImg from "/src/assets/Home/hero.png";

const hero = {
    badge: "DROP 08 AVAILABLE GLOBALLY",
    serial: "SERIAL 08-9941",
    coord: "COORD: 35.6762° N, 139.6503° E",
    edition: "EDITION / 300 PIECES",
    season: "AUTUMN / WINTER 2024 DROP 08",
    titleLine1: "ARCHITECTURAL",
    titleLine2: "UTILITY",
    text: "Engineered silhouettes, modular weather-resistant outerwear, and raw minimal tailoring designed for the high-density metropolis. Crafted from 3-layer bonded Japanese ripstop and micro-welded seams.",
    primaryLabel: "SHOP THE DROP",
    secondaryLabel: "EXPLORE LOOKBOOK",
};

const specs = [
    { title: "300 PIECES", text: "Strictly limited" },
    { title: "48H DISPATCH", text: "Global express" },
    { title: "JP NYLON", text: "Cordura® weave" },
    { title: "MODULAR", text: "Magnetic snap-ins" },
];

export default function Hero() {

    function displaySpecs() {
        const result = [];

        for (let i = 0; i < specs.length; i++) {
            const s = specs[i];

            result.push(
                <div
                    key={s.title}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5"
                >
                    <p className="font-mono text-[10px] font-bold tracking-[0.08em] text-blue-600">
                        {s.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-slate-500">
                        {s.text}
                    </p>
                </div>
            );
        }

        return result;
    }

    return (
        <section className="relative min-h-[842px] overflow-hidden bg-white font-figtree max-md:min-h-[700px]">

            {/* Background photo + white fade */}
            <img
                src={placeholder0}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/10" />

            {/* Content */}
            <div className="relative mx-auto flex min-h-[842px] w-full max-w-[1440px] flex-col justify-end px-5 pb-10 md:px-10 max-md:min-h-[700px]">

                {/* Top pills row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 font-mono text-[10px] tracking-[0.08em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span className="font-bold text-blue-600">{hero.badge}</span>
                        <span className="text-slate-300">//</span>
                        <span className="text-slate-500">{hero.serial}</span>
                    </div>

                    <div className="flex h-9 items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 font-mono text-[10px] tracking-[0.08em] max-md:hidden">
                        <span className="text-slate-500">{hero.coord}</span>
                        <span className="font-bold text-blue-600">{hero.edition}</span>
                    </div>
                </div>

                {/* Season label */}
                <p className="mt-12 font-mono text-[11px] font-bold tracking-[0.2em] text-blue-600">
                    {hero.season}
                </p>

                {/* Title */}
                <h1 className="mt-3 text-[72px] font-extrabold leading-[69px] tracking-[-0.04em] text-slate-900 max-md:text-[44px] max-md:leading-[46px]">
                    {hero.titleLine1}
                    <br />
                    <span className="text-blue-600">{hero.titleLine2}</span>
                </h1>

                {/* Paragraph */}
                <p className="mt-6 max-w-[672px] text-[18px] leading-[29px] text-slate-600 max-md:text-[15px] max-md:leading-[24px]">
                    {hero.text}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        to="/collections"
                        className="flex h-12 w-[210px] items-center justify-center gap-2 rounded-xl bg-blue-600 text-[11px] font-extrabold tracking-[0.1em] text-white shadow-lg shadow-blue-600/25"
                    >
                        {hero.primaryLabel}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </Link>

                    <button
                        type="button"
                        className="flex h-12 w-[245px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-[11px] font-extrabold tracking-[0.1em] text-slate-900"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M10 8l6 4-6 4z" />
                        </svg>
                        {hero.secondaryLabel}
                    </button>
                </div>

                {/* Spec cards */}
                <div className="mt-12 grid max-w-[1030px] grid-cols-4 gap-3 max-md:grid-cols-2">
                    {displaySpecs()}
                </div>
            </div>
        </section>
    );
}