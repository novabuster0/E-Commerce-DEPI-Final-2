
import placeholder0 from "/src/assets/placeholder0.png";
import manifestoJPG from "/src/assets/Home/manifesto.jpg";

const manifesto = {
    label: "MANIFESTO // PHILOSOPHY",
    quote: "\"WE REJECT THE DISPOSABLE CYCLE. WE CONSTRUCT GEAR CAPABLE OF WITHSTANDING METROPOLITAN WEATHER EXTREMES AND DESIGN CADENCES THAT TRANSCEND SEASONS.\"",
    text: "URBANOVA was founded at the intersection of brutalist architecture and technical performance apparel. Every pocket placement is ergonomically mapped; every fabric is torture-tested for abrasion resistance and hydrostatic waterhead pressure.",
    caption: "ATELIER ARCHIVE NO. 4",
    captionText: "Shibuya Design Workshop",
    captionLink: "READ ATELIER NOTES",
};

const stats = [
    { value: "100%", label: "RECYCLED SHELLS" },
    { value: "20K", label: "WATERPROOF RATING" },
    { value: "LTD", label: "SMALL-BATCH RUNS" },
];

export default function Manifesto() {

    function displayStats() {
        const result = [];

        for (let i = 0; i < stats.length; i++) {
            const s = stats[i];

            result.push(
                <div key={s.label} className="min-w-0 flex-1">
                    <p className="text-[72px] font-extrabold leading-none tracking-[-0.04em] text-blue-600 max-sm:text-[48px]">
                        {s.value}
                    </p>

                    <p className="mt-2 text-[11px] tracking-wide text-slate-400">
                        {s.label}
                    </p>
                </div>
            );
        }

        return result;
    }

    return (
        <section className="border-y border-slate-100">
            <div className="mx-auto grid w-full max-w-[1430px] grid-cols-[minmax(0,1fr)_520px] items-center gap-10 px-5 py-16 md:px-10 max-md:grid-cols-1">

                {/* Text side */}
                <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] font-extrabold tracking-[0.16em] text-blue-600">
                        <span className="h-px w-3 bg-blue-600" />
                        {manifesto.label}
                    </p>

                    <h2 className="mt-3 text-[45px] font-extrabold leading-[1.1] tracking-[-0.04em] text-slate-900 max-md:text-[28px]">
                        {manifesto.quote}
                    </h2>

                    <p className="mt-8 max-w-[560px] text-[18px] leading-[30px] text-slate-500">
                        {manifesto.text}
                    </p>

                    {/* Statistics */}
                    <div className="mt-10 flex gap-5 max-sm:flex-col max-sm:gap-6">
                        {displayStats()}
                    </div>
                </div>

                {/* Image side */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200">
                    <img
                        src={manifestoJPG}
                        alt="Atelier"
                        className="aspect-[4/5] w-full object-cover"
                    />

                    {/* Image caption */}
                    <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
                        <div className="min-w-0">
                            <p className="font-mono text-[11px] font-bold text-blue-600">
                                {manifesto.caption}
                            </p>

                            <p className="mt-1 text-[13px] text-slate-900">
                                {manifesto.captionText}
                            </p>
                        </div>

                        <button
                            type="button"
                            className="shrink-0 font-mono text-[11px] font-bold tracking-wide text-slate-700 underline"
                        >
                            {manifesto.captionLink}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
