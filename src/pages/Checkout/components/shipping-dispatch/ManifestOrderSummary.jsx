import placeholderImg from "/src/assets/placeholder0.png";

const items = [
    {
        size: "L",
        name: "VEKTOR MODULAR SHELL PARKA",
        subtitle: "Onyx Black // Gore-Tex Pro Modular",
        price: "$380.00",
        tag: "DROP: VAULT-07",
    },
    {
        size: "M",
        name: "KURO WIDE-LEG PLEATED CARGO",
        subtitle: "Ghost Bone // Heavy Tactical Cordura",
        price: "$240.00",
        tag: "RESTOCK ARCHIVE",
    },
    {
        size: "L",
        name: "TACTICAL RIBBED ZIP KNIT",
        subtitle: "Pitch Black // Seamless Compression Merino",
        price: "$210.00",
        tag: "SEASON 24",
    },
];

function ManifestItem({ item }) {
    return (
        <article className="grid grid-cols-[54px_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-100 py-2.5 last:border-b-0">
            <div className="relative">
                <img
                    src={placeholderImg}
                    alt={item.name}
                    className="h-[64px] w-[54px] rounded-xl border border-slate-200 object-cover"
                />
                <span className="absolute left-1 top-1 rounded bg-slate-900 px-1.5 py-0.5 text-[7px] font-bold text-white">
                    {item.size}
                </span>
                <span className="absolute bottom-1 right-1 rounded bg-blue-600 px-1 py-0.5 text-[7px] font-bold text-white">
                    QTY 1
                </span>
            </div>
            <div className="min-w-0">
                <h3 className="text-[9px] font-extrabold leading-tight text-slate-800">
                    {item.name}
                </h3>
                <p className="mt-1 text-[8px] leading-tight text-slate-500">
                    {item.subtitle}
                </p>
                <span className="mt-1 inline-block rounded bg-blue-50 px-1.5 py-0.5 text-[7px] font-bold text-blue-600">
                    {item.tag}
                </span>
            </div>
            <p className="self-start pt-2 text-[9px] font-extrabold tabular-nums text-slate-800">
                {item.price}
            </p>
        </article>
    );
}

export default function ManifestOrderSummary() {
    return (
        <aside
            className="min-w-0 space-y-4"
            aria-label="Manifest and order summary"
        >
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <header className="mb-1 flex items-center justify-between border-b border-slate-100 pb-3">
                    <h2 className="text-[13px] font-extrabold tracking-wide text-slate-900">
                        <span className="mr-2 text-blue-600">▤</span>MANIFEST //
                        03 ITEMS
                    </h2>
                    <span className="text-[8px] font-bold text-blue-600">
                        EDIT CART
                    </span>
                </header>
                <div>
                    {items.map((item) => (
                        <ManifestItem key={item.name} item={item} />
                    ))}
                </div>
                <div className="mt-3">
                    <h3 className="mb-2 text-[9px] font-extrabold tracking-wide text-slate-500">
                        VAULT PASS / PROMOTIONAL CODES
                    </h3>
                    <div className="flex gap-2">
                        <input
                            readOnly
                            value="NOVA24"
                            aria-label="Promotional code"
                            className="h-9 min-w-0 flex-1 rounded-xl border border-slate-200 bg-[#f8fafc] px-3 text-[10px] text-slate-700"
                        />
                        <button
                            type="button"
                            className="h-9 rounded-xl border border-slate-200 bg-slate-100 px-3 text-[8px] font-extrabold text-slate-700"
                        >
                            APPLY
                        </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-[8px] font-bold text-blue-600">
                            ✓ APPLIED: NOVA24 (-10%)
                        </span>
                        <span className="text-[8px] font-bold text-slate-400">
                            REMOVE
                        </span>
                    </div>
                </div>
                <div className="mt-3 space-y-2 border-y border-slate-100 py-3 text-[9px]">
                    <div className="flex justify-between text-slate-500">
                        <span>Garment Manifest Subtotal</span>
                        <strong className="text-slate-800">$830.00</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                        <span>
                            Priority Airborne Dispatch{" "}
                            <span className="text-blue-600">(OVER $200)</span>
                        </span>
                        <strong className="text-emerald-600">FREE</strong>
                    </div>
                    <div className="flex justify-between text-blue-600">
                        <span>Vault Pass Deduction (NOVA24)</span>
                        <strong>-$83.00</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                        <span>Estimated Sales Tax &amp; Import Duties ⓘ</span>
                        <strong className="text-slate-800">$66.40</strong>
                    </div>
                </div>
                <div className="flex items-end justify-between py-3">
                    <div>
                        <p className="text-[8px] font-extrabold tracking-wide text-slate-400">
                            TOTAL ALLOCATION
                        </p>
                        <p className="mt-1 text-[21px] font-extrabold leading-none tracking-[-0.04em] text-slate-900">
                            $813.40{" "}
                            <span className="text-[7px] font-bold tracking-normal text-slate-400">
                                USD NET
                            </span>
                        </p>
                    </div>
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-1 text-[7px] font-extrabold text-emerald-600">
                        ALL TAXES INCLUDED
                    </span>
                </div>
                <button
                    type="button"
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-[9px] font-extrabold tracking-wide text-white shadow-md"
                >
                    ♙ COMPLETE ORDER // PAY $813.40 →
                </button>
                <p className="mt-2 text-center text-[8px] text-slate-400">
                    ◉ Drop reservations are locked for{" "}
                    <strong className="text-slate-700">15 minutes.</strong>
                </p>
                <div className="mt-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-3">
                    <h3 className="text-[8px] font-extrabold text-slate-800">
                        <span className="mr-1 text-blue-600">▣</span>NOCTURNAL
                        EXCHANGE PROTOCOL
                    </h3>
                    <p className="mt-1 text-[8px] leading-relaxed text-slate-500">
                        Enjoy 30-day effortless trial with prepaid digital
                        return labels included in physical cargo box. Archival
                        pieces must retain intact serialized tamper seals.
                    </p>
                </div>
            </section>
            <section
                className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                aria-label="Dispatch desk status"
            >
                <div className="flex items-center gap-3">
                    <span className="text-[18px] text-blue-600">◉</span>
                    <div>
                        <h2 className="text-[9px] font-extrabold text-slate-800">
                            DISPATCH DESK ACTIVE
                        </h2>
                        <p className="mt-0.5 text-[8px] text-slate-500">
                            Priority concierge live chat available 24/7
                        </p>
                    </div>
                </div>
                <span className="text-[8px] font-extrabold tracking-wide text-blue-600">
                    CONNECT
                </span>
            </section>
        </aside>
    );
}
