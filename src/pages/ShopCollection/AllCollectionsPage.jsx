import { useEffect, useState } from "react";
import {
    AddToCartHandle,
    addToFavHandle,
} from "../../services/Functionalities";
import placeholderImg from "/src/assets/placeholder0.png";
import { formatPrice } from "../Shopcart/functions";

const products = [
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        category: "OUTERWEAR // M-01",
        name: "VORTEX TECHNICAL STORM PARKA",
        price: 480,
        material: "GORE-TEX® PRO",
        colors: ["#0f172a", "#475569"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "LIMITED 50/100",
        category: "TOPS // H-08",
        name: "MONOLITH HEAVYWEIGHT HOODIE (520GSM)",
        price: 220,
        material: "LOOPBACK TERRY",
        colors: ["#171717", "#d4d4d4"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "MODULAR RIG",
        category: "PANTS // P-04",
        name: "ACROBAT ARTICULATED CARGO PANT",
        price: 310,
        material: "CORDURA® STRETCH",
        colors: ["#111827", "#262626"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "NEW DROP",
        category: "FOOTWEAR // F-02",
        name: "CYBER-TREAD ALL-TERRAIN RUNNER",
        price: 360,
        material: "VIBRAM® MEGAGRIP",
        colors: ["#0f172a"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "SALE -25%",
        category: "OUTERWEAR // M-07",
        name: "STEALTH ASYMMETRIC FLIGHT JACKET",
        price: 345,
        oldPrice: "$460",
        material: "PRIMALOFT®",
        colors: ["#171717", "#525252"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "ESSENTIAL RIG",
        category: "ACCESSORY // A-03",
        name: "SUB-ORBITAL BALLISTIC MODULAR SLING",
        price: 185,
        material: "X-PAC® VX21",
        colors: ["#171717"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "LIMITED 20/50",
        category: "OUTERWEAR // M-12",
        name: "ARCHIVAL NOCTURNE STORM OVERCOAT",
        price: 620,
        material: "TECHNICAL WOOL",
        colors: ["#171717"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
    {
        badge: "MODULAR GEAR",
        category: "VESTS // V-05",
        name: "AERO-TACTICAL UTILITY HARNESS VEST",
        price: 290,
        material: "CORDURA® 500D",
        colors: ["#171717", "#374151"],
        sizes: ["xs", "s"],
        image: placeholderImg,
    },
];

const categories = [
    ["All Silhouettes", "48", false],
    ["Outerwear", "16", true],
    ["Tops & Hoodies", "12", false],
    ["Pants & Cargo", "10", false],
    ["Footwear", "6", false],
    ["Accessories", "4", false],
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const swatches = [
    "#111827",
    "#f8fafc",
    "#52525b",
    "#a3e635",
    "#374151",
    "#1e293b",
];

//
// Components
//

// SectionLabel remains the same
function SectionLabel({ children, right }) {
    return (
        <div className="mb-3 flex items-center justify-between text-[10px] font-extrabold tracking-[0.08em] text-slate-700">
            <span>{children}</span>
            {right && (
                <span className="font-bold tracking-normal text-blue-500">
                    {right}
                </span>
            )}
        </div>
    );
}

function FilterSidebar({ filters, setFilters }) {
    // Updates only the selectedValue of the targeted filter group
    const handleSelect = (filterId, optionValue) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter) =>
                filter.id === filterId
                    ? { ...filter, selectedValue: optionValue }
                    : filter,
            ),
        );
    };

    return (
        <aside
            className="h-fit w-full min-w-0 rounded-xl border border-slate-200 bg-white p-4"
            aria-label="Collection filters"
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h2 className="text-[11px] font-extrabold tracking-wide text-slate-800">
                    ☷ FILTERS
                </h2>
                <button
                    onClick={() => {
                        // Optional reset logic: Reset all selectedValues to "any"
                    }}
                    className="text-[9px] font-bold tracking-wide text-slate-400 hover:text-slate-600 transition-colors"
                >
                    RESET
                </button>
            </div>

            {/* Dynamic Filter Rendering */}
            {filters.map((filter) => (
                <div
                    key={filter.id}
                    className="border-b border-slate-200 py-4 last:border-0"
                >
                    {/* Only render label if it has a name */}
                    {filter.filterName && (
                        <SectionLabel right={filter.rightText}>
                            {filter.filterName}
                        </SectionLabel>
                    )}

                    {/* Radio Button Groups */}
                    {filter.type === "radio-group" && filter.options && (
                        <div className="space-y-2.5">
                            {filter.options.map((opt) => {
                                // Derive checked state directly from filter.selectedValue
                                const isSelected =
                                    opt.value === filter.selectedValue;

                                return (
                                    <label
                                        key={opt.value}
                                        className={`flex cursor-pointer items-start gap-2 text-[10px] transition-colors ${
                                            isSelected
                                                ? "font-bold text-blue-600"
                                                : "text-slate-600 hover:text-slate-900"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name={filter.id}
                                            value={opt.value}
                                            checked={isSelected}
                                            onChange={() =>
                                                handleSelect(
                                                    filter.id,
                                                    opt.value,
                                                )
                                            }
                                            className="mt-[1px] h-3 w-3 shrink-0 cursor-pointer accent-blue-500"
                                        />
                                        <span className="flex-1 break-words leading-tight">
                                            {opt.label}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}
function ProductCard({ product }) {
    return (
        <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-h-100 object-center object-cover"
                />
                <span className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-[17px] leading-none text-slate-500">
                    <svg
                        onClick={() => {
                            addToFavHandle(product);
                        }}
                        className="w-full p-1.5 overflow-visible fill-black
                                hover:fill-red-600 hover:scale-105 active:scale-125"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z" />
                    </svg>
                </span>
            </div>
            <div className="p-3">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] font-bold tracking-wide text-slate-400">
                        {product.category}
                    </span>
                    <span className="flex shrink-0 items-center gap-1">
                        {product.colors.map((color) => (
                            <i
                                key={color}
                                className="h-2 w-2 rounded-full border border-black/10"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </span>
                </div>
                <h3 className="mt-1 min-h-[28px] text-[10px] font-extrabold leading-[1.25] text-slate-800">
                    {product.name}
                </h3>
                <div className="mt-1 mb-2 flex items-center justify-between gap-2 border-t border-slate-100 pt-2">
                    <div className="flex items-baseline gap-1">
                        <span
                            className={`text-[18px] font-extrabold tracking-tight `}
                        >
                            {formatPrice(product.price)}
                        </span>
                    </div>
                    <span className="text-right text-[8px] font-bold tracking-wide text-slate-400">
                        {product.material}
                    </span>
                </div>
                <button
                    onClick={() => {
                        AddToCartHandle(product);
                    }}
                    className="w-full max-h-10 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl
                    hover:bg-white hover:text-black"
                >
                    Add To Cart
                </button>
            </div>
        </article>
    );
}

function CollectionToolbar() {
    return (
        <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="flex h-8 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-[9px] font-bold tracking-wide text-slate-600"
                >
                    <span className="text-blue-500">☷</span> FILTER VIEW
                </button>
                <div className="flex h-8 items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 text-[12px] text-slate-400">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-500">
                        ▥
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center">
                        ▦
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-wide text-slate-400">
                <span>SORT BY:</span>
                <span className="flex h-8 min-w-[126px] items-center justify-between rounded-lg border border-slate-200 bg-white px-3 text-slate-600">
                    FEATURED DROPS <span className="text-slate-400">⌄</span>
                </span>
            </div>
        </div>
    );
}
//
// main Page Component
//
export default function AllCollectionsPage() {
    //
    // Vars
    //

    const [searchFilters, setSearchFilters] = useState([
        {
            id: "category",
            filterName: "CATEGORY",
            type: "radio-group",
            selectedValue: "any", // Default to no filter
            options: [
                { value: "any", label: "Any Category" },
                { value: "outerwear", label: "Outerwear" },
                { value: "tops", label: "Tops & Hoodies" },
                { value: "pants", label: "Pants & Cargo" },
                { value: "footwear", label: "Footwear" },
                { value: "accessories", label: "Accessories" },
            ],
        },
        {
            id: "sizeFit",
            filterName: "SIZE FIT",
            type: "radio-group",
            selectedValue: "any",
            rightText: "Standard Fit",
            options: [
                { value: "any", label: "Any Size" },
                { value: "XS", label: "XS" },
                { value: "S", label: "S" },
                { value: "M", label: "M" },
                { value: "L", label: "L" },
                { value: "XL", label: "XL" },
                { value: "XXL", label: "XXL" },
            ],
        },
        {
            id: "palette",
            filterName: "CHROMATIC PALETTE",
            type: "radio-group",
            selectedValue: "any",
            options: [
                { value: "any", label: "Any Color" },
                { value: "white", label: "White" },
                { value: "gray", label: "Gray" },
                { value: "lime", label: "Lime" },
                { value: "blue", label: "Blue" },
                { value: "dark", label: "Dark" },
                { value: "black", label: "Black" },
            ],
        },

        {
            id: "material",
            filterName: "MATERIAL MATRIX",
            type: "radio-group",
            selectedValue: "any",
            options: [
                { value: "any", label: "Any Material" },
                { value: "goretex", label: "GORE-TEX® 3L Pro" },
                { value: "cotton", label: "Organic Heavy Cotton (480 GSM)" },
                { value: "nylon", label: "Recycled Ripstop Nylon" },
                { value: "cordura", label: "Cordura® Ballistic 1000D" },
            ],
        },
        {
            id: "toggles",
            filterName: "",
            type: "radio-group",
            selectedValue: "any",
            options: [
                { value: "any", label: "Any Availability" },
                { value: "inStock", label: "In-Stock Only" },
                { value: "archived", label: "Archived / Sale Silhouettes" },
            ],
        },
    ]);
    const [pageSize, setPageSize] = useState(12);
    const [productStartIndex, setProductStartIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pagesNums = Array.from(
        { length: Math.ceil(products.length / pageSize) },
        (_, i) => i + 1,
    );

    //
    //
    //
    useEffect(() => {
        console.clear();
        console.log(searchFilters);
    }, [searchFilters]);
    //
    // Component
    //
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-10 md:px-12 md:pt-16">
                <header className="mb-4">
                    <div className="text-[9px] font-bold tracking-[0.1em] text-slate-400">
                        HOME / COLLECTIONS
                    </div>

                    <div className="mt-1 flex items-baseline gap-3">
                        <h1 className="text-[29px] font-extrabold leading-none tracking-[-0.045em] text-slate-900">
                            ALL COLLECTIONS
                        </h1>
                        <span className="text-[10px] text-slate-400">
                            ({products.length})
                        </span>
                    </div>
                </header>

                <div className="mb-3 flex min-h-[39px] flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    {/* Active Filters */}
                    <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold tracking-wide">
                        <span className="text-slate-400">ACTIVE Filters:</span>
                        {searchFilters.map((filter) => {
                            if (filter["selectedValue"] == "any") return;
                            return (
                                <span
                                    id={filter["id"]}
                                    key={filter["filterName"]}
                                    className="flex gap-2 items-center justify-around rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-500
                            hover:scale-150 transition-all"
                                >
                                    {filter["selectedValue"]}
                                    <button
                                        onClick={() => {
                                            handleRemoveFilter(
                                                filter,
                                                setSearchFilters,
                                            );
                                        }}
                                    >
                                        <svg
                                            width="6px"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                            className="hover:scale-110 hover:fill-red-400 active:scale-125 transition-all"
                                        >
                                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                                        </svg>
                                    </button>
                                </span>
                            );
                        })}
                        <button
                            className="text-blue-500
                        hover:text-blue-900 active:scale-110 duration-100 transition-all"
                            onClick={() => {
                                handleClearFilters(setSearchFilters);
                            }}
                        >
                            CLEAR ALL
                        </button>
                    </div>
                    <span className="text-[9px] font-bold tracking-wide text-slate-400">
                        Archival Batch:{" "}
                        <strong className="text-slate-700">V25-REV3</strong>
                    </span>
                </div>

                <div className="grid grid-cols-[216px_minmax(0,1fr)] items-start gap-8 max-md:grid-cols-1">
                    <FilterSidebar
                        filters={searchFilters}
                        setFilters={setSearchFilters}
                    />
                    <section
                        aria-label="Collection products"
                        className="min-w-0"
                    >
                        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                            {products
                                .slice(
                                    productStartIndex,
                                    productStartIndex + pageSize,
                                )
                                .map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        product={product}
                                    />
                                ))}
                        </div>

                        <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-7 text-center">
                            <p className="text-[9px] font-bold tracking-wide text-slate-400">
                                SHOWING{" "}
                                <span className="text-slate-700">
                                    {getPageSize(
                                        currentPage,
                                        products.length,
                                        pageSize,
                                    )}
                                </span>{" "}
                                OF{" "}
                                <span className="text-slate-700">
                                    {products.length}
                                </span>{" "}
                                SILHOUETTES
                            </p>
                            <div className="mx-auto mt-2 h-1 w-full max-w-[290px] overflow-hidden rounded-full bg-slate-200">
                                <div className="h-full w-[17%] bg-blue-500" />
                            </div>
                            {/* pages nav */}
                            <div className="mt-3 flex justify-center gap-1 text-[9px] font-bold">
                                {pagesNums.map((page) => {
                                    if (page == currentPage) {
                                        return (
                                            <span
                                                onClick={() => {
                                                    handlePageChange(
                                                        page,
                                                        pageSize,
                                                        setCurrentPage,
                                                        setProductStartIndex,
                                                    );
                                                }}
                                                key={page}
                                                className="flex h-7 w-7 items-center justify-center rounded-md border border-blue-500 bg-blue-700 text-white"
                                            >
                                                {page}
                                            </span>
                                        );
                                    } else {
                                        return (
                                            <span
                                                onClick={() => {
                                                    handlePageChange(
                                                        page,
                                                        pageSize,
                                                        setCurrentPage,
                                                        setProductStartIndex,
                                                    );
                                                }}
                                                key={page}
                                                className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600
                                                            hover:bg-blue-500 hover:text-white transition-all"
                                            >
                                                {page}
                                            </span>
                                        );
                                    }
                                })}
                                <div className="min-w-15">
                                    {" "}
                                    {pagesNums.length > 1 &&
                                    currentPage < pagesNums.length ? (
                                        <span
                                            onClick={() => {
                                                handlePageChange(
                                                    currentPage + 1,
                                                    pageSize,
                                                    setCurrentPage,
                                                    setProductStartIndex,
                                                );
                                            }}
                                            className="flex h-7 items-center justify-center rounded-md border border-slate-200 bg-white px-2 text-slate-600
                                                        hover:bg-blue-500 hover:text-white transition-all"
                                        >
                                            NEXT →
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

//
// Functions
//

function handlePageChange(
    pageNum,
    pageSize,
    setCurrentPage,
    setPageIndex,
    increase,
) {
    setCurrentPage(pageNum);
    setPageIndex((prev) => pageSize * (pageNum - 1));
}

function getPageSize(pageNumber, productsLength, pageSize) {
    // guard: invalid inputs
    if (pageSize <= 0 || productsLength <= 0) return 0;

    const totalPages = Math.ceil(productsLength / pageSize);

    // page number out of range (1-based)
    if (pageNumber < 1 || pageNumber > totalPages) return 0;

    // items used by all previous pages
    const itemsBefore = (pageNumber - 1) * pageSize;

    // items left starting from this page
    const remaining = productsLength - itemsBefore;

    // full page OR the remainder, whichever is smaller
    return Math.min(pageSize, remaining);
}

function handleClearFilters(setFilters) {
    setFilters((prev) =>
        prev.map((filter) => {
            return { ...filter, selectedValue: "any" };
        }),
    );
}

function handleRemoveFilter(Removedfilter, setSearchFilters) {
    setSearchFilters((prev) =>
        prev.map((filter) => {
            if (filter["id"] == Removedfilter["id"]) {
                return { ...filter, selectedValue: "any" };
            }
            return { ...filter };
        }),
    );
}
