export default function SectionCard({ number, title, aside, children, className = "" }) {
    return (
        <section className={`rounded-2xl border border-slate-200 bg-white p-5 ${className}`} aria-labelledby={`section-${number}-title`}>
            <header className="mb-4 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                    <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-extrabold tracking-wide text-blue-600">[{number}]</span>
                    <h2 id={`section-${number}-title`} className="text-[13px] font-extrabold tracking-[-0.02em] text-slate-900">{title}</h2>
                </div>
                {aside ? <span className="shrink-0 text-[9px] font-bold tracking-wide text-slate-400">{aside}</span> : null}
            </header>
            {children}
        </section>
    );
}

export function Field({ label, value, className = "", type = "text" }) {
    return (
        <label className={`block min-w-0 ${className}`}>
            <span className="mb-1.5 block text-[9px] font-extrabold tracking-[0.06em] text-slate-500">{label}</span>
            <input
                type={type}
                value={value}
                readOnly
                aria-label={label}
                className="h-9 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3 text-[10px] text-slate-700 outline-none"
            />
        </label>
    );
}

export function SelectField({ label, value, options = [] , className = "" }) {
    return (
        <label className={`block min-w-0 ${className}`}>
            <span className="mb-1.5 block text-[9px] font-extrabold tracking-[0.06em] text-slate-500">{label}</span>
            <select disabled defaultValue={value} aria-label={label} className="h-9 w-full appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3 text-[10px] text-slate-700 opacity-100">
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    );
}
