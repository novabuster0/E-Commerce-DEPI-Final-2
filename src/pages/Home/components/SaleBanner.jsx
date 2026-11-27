import saleImage from "/src/assets/Home/sale.jpg"; 

const sale = {
    badge: "LIMITED TIME ARCHIVE CLEARANCE",
    titleLine1: "MID-SEASON",
    titleLine2: "ARCHIVE SALE",
    text: "Rare vault overstocks and previous capsule prototypes unlocked with up to 40% reductions. Once units deplete, casting molds and fabric runs are permanently archived.",
    buttonLabel: "CLAIM DISCOUNT CODE",
    note: "APPLIED AUTOMATICALLY AT CHECKOUT",
    vaultTitle: "VAULT ARCHIVE ACCESS",
    vaultText: "Tier 1 discount tiers expire when inventory counter reaches zero.",
};

// Mock countdown values (static)
const countdown = [
    { label: "DAYS", value: "02" },
    { label: "HOURS", value: "14" },
    { label: "MINS", value: "38" },
    { label: "SECS", value: "40" },
];

export default function SaleBanner() {

    function displayCountdown() {
        const result = [];

        for (let i = 0; i < countdown.length; i++) {
            const c = countdown[i];
            const isLast = i === countdown.length - 1;

            result.push(
                <div key={c.label} className="flex items-center">
                    <div className="flex h-[76px] w-[78px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white">
                        <p
                            className={`text-[40px] font-extrabold leading-none ${
                                isLast ? "text-blue-600" : "text-slate-900"
                            }`}
                        >
                            {c.value}
                        </p>
                        <p className="mt-1 text-[11px] tracking-wide text-slate-400">
                            {c.label}
                        </p>
                    </div>

                    {!isLast && (
                        <span className="mx-2 text-[22px] font-bold text-blue-600">
                            :
                        </span>
                    )}
                </div>
            );
        }

        return result;
    }

    return (
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 font-figtree md:px-10">
            <div className="grid min-h-[528px] grid-cols-[7fr_5fr] overflow-hidden rounded-[20px] border border-slate-200 bg-white max-md:grid-cols-1">

                {/* Text side */}
                <div className="flex flex-col justify-center p-10 max-sm:p-6">
                    <span className=" w-fit  rounded-md border border-blue-100 bg-blue-50 px-2 py-1 font-mono text-[11px] font-bold tracking-[0.08em] text-blue-600">
                        {sale.badge}
                    </span>

                    <h2 className="mt-5 text-[72px] font-extrabold leading-[72px] tracking-[-0.04em] text-slate-900 max-lg:text-[52px] max-lg:leading-[54px] max-sm:text-[40px] max-sm:leading-[42px]">
                        {sale.titleLine1}
                        <br />
                        <span className="text-blue-600">{sale.titleLine2}</span>
                    </h2>

                    <p className="mt-4 max-w-[520px] text-[15px] leading-[24px] text-slate-500">
                        {sale.text}
                    </p>

                    <div className="mt-6 flex items-center">
                        {displayCountdown()}
                    </div>

                    <div className="mt-4 flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                        <button
                            type="button"
                            className="h-12 w-[262px] items-center rounded-xl bg-blue-600 text-[12px] font-extrabold tracking-[0.1em] text-white"
                        >
                            {sale.buttonLabel} ⚡
                        </button>

                        <span className="text-[11px] text-slate-400">
                            {sale.note}
                        </span>
                    </div>
                </div>

                {/* Image side */}
                <div className="relative">
                    <img
                        src={saleImage}
                        alt="Archive sale"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <div className="absolute right-6 bottom-6 w-[320px]  rounded-xl border border-slate-200 bg-white p-4">
                        <p className="font-mono text-[11px] font-bold tracking-[0.08em] text-blue-600">
                            {sale.vaultTitle}
                        </p>
                        <p className="mt-1 text-[13px] leading-[18px] text-slate-500">
                            {sale.vaultText}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}