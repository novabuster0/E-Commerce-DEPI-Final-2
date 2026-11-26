import { useState } from "react";
import placeholder0 from "/src/assets/Shopcart/placeholder0.png";

const thumbs = [
    {
        id: 1,
        image: placeholder0,
        label: "Front View",
    },
    {
        id: 2,
        image: placeholder0,
        label: "Back View",
    },
    {
        id: 3,
        image: placeholder0,
        label: "Side View",
    },
    {
        id: 4,
        image: placeholder0,
        label: "Detail View",
    },
];

export default function ProductGallery() {
    const [selectedId, setSelectedId] = useState(1);

    let selectedThumb = thumbs[0];

    for (let i = 0; i < thumbs.length; i++) {
        if (thumbs[i].id === selectedId) {
            selectedThumb = thumbs[i];
            break;
        }
    }

    function displayThumbs() {
        const result = [];

        for (let i = 0; i < thumbs.length; i++) {
            const thumb = thumbs[i];

            const isSelected = thumb.id === selectedId;

            result.push(
                <button
                    key={thumb.id}
                    type="button"
                    aria-label={thumb.label}
                    onClick={() => setSelectedId(thumb.id)}
                    className={`relative min-h-0 w-full flex-1 overflow-hidden rounded-xl border-2 bg-white max-sm:aspect-[3/4] ${
                        isSelected
                            ? "border-blue-600"
                            : "border-slate-200"
                    }`}
                >
                    <img
                        src={thumb.image}
                        alt={thumb.label}
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 right-1 rounded bg-slate-900/80 px-1 font-mono text-[10px] font-bold text-white">
                        {String(thumb.id).padStart(2, "0")}
                    </span>
                </button>
            );
        }

        return result;
    }

    return (
        <section className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 self-start max-sm:grid-cols-1">

            {/* Thumbnails */}
            <div className="flex flex-col gap-3 max-sm:order-2 max-sm:flex-row">
                {displayThumbs()}
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3">
                <img
                    src={selectedThumb.image}
                    alt={selectedThumb.label}
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                />

                <span className="absolute left-6 top-6 rounded-md bg-slate-900/90 px-3 py-1 font-mono text-[11px] font-bold tracking-wide text-white">
                    3-LAYER WATERPROOF // JAPANESE NYLON
                </span>

                <span className="absolute bottom-6 left-6 rounded-md bg-white/90 px-3 py-1 font-mono text-[12px] font-bold tracking-wide text-slate-700">
                    SPEC 20K/20K RET // 1.0
                </span>

                <span className="absolute bottom-6 right-6 rounded-md bg-blue-600 px-3 py-1 font-mono text-[12px] font-bold tracking-wide text-white">
                    SERIAL #VN-9942
                </span>
            </div>
        </section>
    );
}