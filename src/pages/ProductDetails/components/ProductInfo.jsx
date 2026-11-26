import { useState } from "react";

const product = {
    brand: "URBANOVA LAB",
    edition: "SS25 EDITION",
    lotNumber: "AX-990",

    name: "VEKTOR ASYMMETRIC MODULAR SHELL PARKA",

    price: 380,
    currency: "USD",

    shippingLabel: "COMPLIMENTARY EXPRESS DUTY-PAID",

    colors: [
        {
            id: 1,
            name: "Onyx Black",
            description: "Acid Reflective",
            className: "bg-slate-900",
        },
        {
            id: 2,
            name: "Ghost Bone",
            description: "Off White",
            className: "bg-slate-200",
        },
        {
            id: 3,
            name: "Forest",
            description: "Deep Green",
            className: "bg-emerald-900",
        },
    ],

    colorLabel: "COLOR",
    colorCount: 3,

    sizeLabel: "SELECT SIZE (GENDER-NEUTRAL)",

    sizes: [
        { name: "S", available: true },
        { name: "M", available: true },
        { name: "L", available: true },
        { name: "XL", available: false },
    ],

    sizeGuideLabel: "Size Guide",

    quantity: 1,
    minQuantity: 1,
    maxQuantity: 10,

    addToCartLabel: "ADD TO CART",

    perks: [
        {
            id: 1,
            title: "GLOBAL EXPRESS",
            text: "DHL On-Demand 2–4",
        },
        {
            id: 2,
            title: "30-DAY RETURNS",
            text: "Prepaid return label",
        },
        {
            id: 3,
            title: "CARBON NEUTRAL",
            text: "100% recycled fabric",
        },
    ],
};

export default function ProductInfo() {
    const [selectedColorId, setSelectedColorId] = useState(1);

    let selectedColor = product.colors[0];

    for (let i = 0; i < product.colors.length; i++) {
        if (product.colors[i].id === selectedColorId) {
            selectedColor = product.colors[i];
            break;
        }
    }

    function displayColors() {
        const result = [];

        for (let i = 0; i < product.colors.length; i++) {
            const c = product.colors[i];

            const isSelected = c.id === selectedColorId;

            result.push(
                <button
                    key={c.id}
                    type="button"
                    aria-label={c.name}
                    onClick={() => setSelectedColorId(c.id)}
                    className={`h-7 w-7 rounded-full border-2 ${c.className} ${
                        isSelected
                            ? "ring-2 ring-blue-600 ring-offset-2 border-white"
                            : "border-slate-200"
                    }`}
                />
            );
        }

        return result;
    }

    const [selectedSize, setSelectedSize] = useState(null);
    let selectedSizeObject = null;

    for (let i = 0; i < product.sizes.length; i++) {
        if (product.sizes[i].name === selectedSize) {
            selectedSizeObject = product.sizes[i];
            break;
        }
    }

    function displaySizes() {
    const result = [];

        for (let i = 0; i < product.sizes.length; i++) {
            const s = product.sizes[i];

            const isSelected = s.name === selectedSize;

            result.push(
                <button
                    key={s.name}
                    type="button"
                    disabled={!s.available}
                    onClick={() => setSelectedSize(s.name)}
                    className={`h-12 rounded-lg border ${
                        isSelected
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-white text-slate-700"
                    } ${
                        !s.available
                            ? "cursor-not-allowed opacity-40"
                            : "cursor-pointer"
                    }`}
                >
                    {s.name}
                </button>
            );
        }

        return result;
    }

    const [quantity, setQuantity] = useState(1);


    function displayPerks() {
        const result = [];

        for (let i = 0; i < product.perks.length; i++) {
            const p = product.perks[i];

            result.push(
                <div
                    key={p.id}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-center"
                >
                    <p className="text-[11px] font-extrabold tracking-wide text-slate-900">
                        {p.title}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                        {p.text}
                    </p>
                </div>
            );
        }

        return result;
    }



    return (
        <section className="flex min-w-0 flex-col">
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4">

                {/* Product Header */}
                <div className="flex items-center justify-between">
                    <p className="font-mono text-[12px] font-bold tracking-wide text-blue-600">
                        {product.brand} // {product.edition}
                    </p>

                    <p className="font-mono text-[12px] text-slate-400">
                        LOT #{product.lotNumber}
                    </p>
                </div>

                {/* Product Name */}
                <h1 className="mt-3 text-[28px] font-extrabold leading-[1.1] tracking-[-0.04em] text-slate-900">
                    {product.name}
                </h1>

                {/* Price */}
                <div className="mt-3 border-t border-slate-200 pt-3">
                    <div className="flex items-center gap-3">
                        <span className="text-[30px] font-extrabold tracking-tight text-slate-900">
                            ${product.price}
                        </span>

                        <span className="text-[12px] font-bold text-slate-400">
                            {product.currency}
                        </span>

                        <span className="ml-auto rounded bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-600">
                            {product.shippingLabel}
                        </span>
                    </div>
                </div>

                {/* Colors */}
                <div className="mt-3">
                    <div className="flex justify-between text-[12px] font-bold tracking-wide text-slate-400">
                        <span>
                            {product.colorLabel}:{" "}
                            <span className="text-slate-700">
                                {selectedColor.name.toUpperCase()} /{" "}
                                {selectedColor.description.toUpperCase()}
                            </span>
                        </span>

                        <span>{product.colorCount} PALETTES</span>
                    </div>

                    <div className="mt-2 flex gap-3">
                        {displayColors()}
                    </div>
                </div>

                {/* Sizes */}
                <div className="mt-3">
                    <div className="flex justify-between text-[12px] font-bold tracking-wide text-slate-400">
                        <span>{product.sizeLabel}</span>

                        <button type="button" className="text-blue-600">
                            {product.sizeGuideLabel}
                        </button>
                    </div>

                    <div className="mt-2 grid grid-cols-4 gap-2">
                        {displaySizes()}
                    </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-12 items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 text-[14px] font-semibold text-slate-700">
                        <button type="button" className="text-slate-400" 
                            onClick={() => {
                            if (quantity > product.minQuantity) {
                                setQuantity(quantity - 1);
                            }
                        }}
                        >
                            −
                        </button>

                        <span>{quantity}</span>

                        <button type="button" className="text-slate-400"
                        onClick={() => {
                        if(quantity < product.maxQuantity){
                            setQuantity(quantity + 1);
                            }
                        }}>
                            +
                        </button>
                    </div>

                    <button
                        type="button"
                        className="flex h-12 flex-1 items-center justify-center rounded-xl bg-blue-600 text-[13px] font-extrabold tracking-wide text-white"
                    >
                        {product.addToCartLabel} — ${product.price}
                    </button>
                </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {displayPerks()}
            </div>
        </section>
    );
}