import SectionCard from "./SectionCard";

const options = [
    { title: "STANDARD VAULT COURIER", timing: "3–5 DAYS", detail: "Carbon-neutral transit in tamper-proof matte black archival packaging.", price: "FREE" },
    { title: "PRIORITY AIR DROP", timing: "1–2 DAYS", detail: "Guaranteed airborne release within 12h. Direct tarmac transfer.", price: "FREE", selected: true, promo: "PROMO APPLIED" },
    { title: "SATURDAY NOCTURNAL HAND DELIVERY", timing: "NYC / TYO / BLN", detail: "Dedicated uniformed operative drop between 20:00 – 02:00 local time.", price: "+$35.00" },
];

export default function LogisticsFrequency() {
    return (
        <SectionCard number="03" title="LOGISTICS FREQUENCY" aside={<span className="rounded-full bg-blue-50 px-2 py-1 text-blue-600">INSURED CARGO</span>}>
            <div className="space-y-2.5">
                {options.map((option) => (
                    <div key={option.title} className={`flex items-center gap-3 rounded-xl border p-3 ${option.selected ? "border-2 border-blue-600 bg-blue-50/40" : "border-slate-200 bg-white"}`}>
                        <span aria-label={option.selected ? "Selected" : "Not selected"} className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${option.selected ? "border-blue-600 bg-blue-600" : "border-slate-200 bg-white"}`}>
                            {option.selected ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-[10px] font-extrabold text-slate-800">{option.title}</h3>
                                {option.promo ? <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[8px] font-bold text-blue-600">{option.promo}</span> : null}
                                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-bold text-slate-500">{option.timing}</span>
                            </div>
                            <p className="mt-1 text-[9px] leading-relaxed text-slate-500">{option.detail}</p>
                        </div>
                        <span className="shrink-0 text-[10px] font-extrabold text-slate-800">{option.price}</span>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
}
