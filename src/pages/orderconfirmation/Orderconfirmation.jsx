import { useState } from "react";
import { Link } from "react-router-dom";

// بيانات تجريبية (Mock) لحد ما يتربط المشروع بـ API
const ORDER = {
    id: "#URB-8492-NOCT",
    customer: "Alexander",
    city: "Los Angeles, CA",
    email: "alexander.vance@nocturne.studio",
};

const STEPS = ["01 CART", "02 SHIPPING", "03 PAYMENT"];

const PHASES = [
    {
        label: "PHASE 01: COMPLETED",
        time: "14:48 PST",
        status: "done",
        title: "ORDER VERIFIED & VAULT CLEARED",
        text: "Allocations verified against cold storage vault inventory. High-frequency digital signature signed.",
    },
    {
        label: "PHASE 02: IN PROGRESS",
        time: "EST. 18:00 PST",
        status: "active",
        title: "PRECISION SORTING & TAMPER-SEALING",
        text: "Garments vacuum-packed in nitrogen-infused anti-static bags and tagged with cryptographic RFID seal #RFID-99421A.",
    },
    {
        label: "PHASE 03: SCHEDULED",
        time: "TOMORROW 08:30 PST",
        status: "next",
        title: "HANDED TO PRIORITY AIRBORNE COURIER",
        text: "Charter cargo flight departure from OAK Hub direct to LAX Nocturnal Fulfillment Center.",
    },
    {
        label: "PHASE 04: SCHEDULED",
        time: "BY 20:00 PST",
        status: "next",
        title: "FINAL NOCTURNAL DELIVERY",
        text: "Dedicated stealth courier arrival with signature verification and GPS lock at 744 S San Pedro St.",
    },
];

const ITEMS = [
    {
        name: "VEKTOR ASYMMETRIC MODULAR SHELL PARKA",
        size: "L",
        color: "ONYX BLACK",
        price: 380,
        tag: "VAULT-07",
        material: "3-LAYER GORE-TEX C-KNIT™ // WATERPROOF 28,000MM",
        serial: "#VK-9910-BLK",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "KURO WIDE-LEG PLEATED CARGO",
        size: "M",
        color: "GHOST BONE",
        price: 240,
        tag: "RESTOCK",
        material: "JAPANESE RECYCLED NYLON // ARTICULATED KNEE",
        serial: "#KR-8129-BNE",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "TACTICAL RIBBED ZIP KNIT",
        size: "L",
        color: "PITCH BLACK",
        price: 210,
        tag: "SEASON 24",
        material: "100% MERINO WOOL // MATTE COATED HARDWARE",
        serial: "#TK-8491-BLK",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80",
    },
];

const card = "rounded-2xl border border-slate-200 bg-white p-5 md:p-6";
const eyebrow = "text-[11px] font-bold tracking-wide text-blue-600";
const heading = "mt-1 font-figtree text-xl font-extrabold text-slate-900";
const primaryBtn = "rounded-xl bg-blue-600 px-5 py-3 text-[11px] font-bold text-white hover:bg-blue-700";
const outlineBtn = "rounded-xl border border-slate-200 bg-white px-5 py-3 text-[11px] font-bold text-slate-800 hover:bg-slate-50";

function ProgressBar() {
    return (
        <div className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-5 py-4 text-[11px] font-bold md:px-12">
                <p>
                    <span className="text-emerald-600">● PROTOCOL CONCLUDED</span>
                    <span className="mx-2 text-slate-300">/</span>
                    <span className="text-slate-800">SEQUENCE 04_FINAL</span>
                </p>
                <ol className="flex flex-wrap items-center gap-3 text-slate-400">
                    {STEPS.map((step) => (
                        <li key={step}>
                            <span className="mr-1 text-emerald-600">✓</span>
                            {step}
                        </li>
                    ))}
                    <li className="text-blue-600">
                        <span className="mr-1 rounded-full bg-blue-600 px-1.5 py-0.5 text-white">04</span>
                        CONFIRMATION
                    </li>
                </ol>
            </div>
        </div>
    );
}

function OrderHero() {
    const [copied, setCopied] = useState(false);

    const copyReference = async () => {
        await navigator.clipboard.writeText(ORDER.id);
        setCopied(true);
    };

    return (
        <section className={card}>
            <p className="inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600">
                ● DISPATCH SEQUENCE INITIATED // ENCRYPTED &amp; CONFIRMED
            </p>
            <span className="ml-3 text-[11px] text-slate-400">NODE: LAX-CENTRAL-04</span>
            <h1 className="mt-4 font-figtree text-2xl font-extrabold text-slate-900 md:text-3xl">
                ORDER SECURED // ARCHIVE MANIFEST DISPATCHED
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-bold">
                <span className="text-slate-400">TRANSACTION ID:</span>
                <span className="rounded-lg bg-blue-50 px-3 py-1 text-blue-600">{ORDER.id}</span>
                <button type="button" onClick={copyReference} className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">
                    {copied ? "COPIED ✓" : "COPY REF"}
                </button>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
                Thank you, <strong className="text-slate-900">{ORDER.customer}</strong>. Your allocation has been
                vault-locked and scheduled for encrypted priority air drop to{" "}
                <strong className="text-slate-900">{ORDER.city}</strong>. An authenticated digital receipt and
                encrypted tracking credentials have been transmitted to{" "}
                <strong className="text-blue-600">{ORDER.email}</strong>.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
                <button type="button" className={primaryBtn}>↓ DOWNLOAD ARCHIVAL INVOICE (PDF)</button>
                <a href="#tracking" className={outlineBtn}>◎ TRACK DISPATCH TELEMETRY</a>
                <Link to="/product" className="px-3 text-[11px] font-bold text-slate-600 hover:text-blue-600">
                    CONTINUE SHOPPING →
                </Link>
            </div>
        </section>
    );
}

function DispatchTracking() {
    return (
        <section id="tracking" className={card}>
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <p className={eyebrow}>✈ LIVE CARRIER TELEMETRY</p>
                    <h2 className={heading}>DISPATCH TRACKING // EXPEDITED AIR ROUTE</h2>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[11px]">
                    <p className="text-slate-400">CARRIER ID</p>
                    <p className="font-bold text-slate-900">NOVA LOGISTICS // FLIGHT #NV-902</p>
                    <p className="mt-2 text-slate-400">ESTIMATED DROP</p>
                    <p className="font-bold text-emerald-600">TOMORROW // PRIORITY AIR DROP (GUARANTEED)</p>
                </div>
            </div>
            <div className="mt-5 h-1 rounded bg-slate-200">
                <div className="h-1 w-2/5 rounded bg-blue-600" />
            </div>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {PHASES.map((phase) => (
                    <li
                        key={phase.label}
                        className={`rounded-xl border p-4 ${phase.status === "active" ? "border-blue-600 bg-blue-50/40" : "border-slate-200"}`}
                    >
                        <div className="flex justify-between gap-2 text-[10px] font-bold">
                            <span className={phase.status === "done" ? "text-emerald-600" : phase.status === "active" ? "text-blue-600" : "text-slate-400"}>
                                {phase.label}
                            </span>
                            <span className="text-right text-slate-400">{phase.time}</span>
                        </div>
                        <h3 className="mt-2 text-xs font-extrabold text-slate-900">{phase.title}</h3>
                        <p className="mt-2 text-[11px] leading-relaxed text-slate-500">{phase.text}</p>
                    </li>
                ))}
            </ol>
            <div className="mt-4 flex flex-wrap justify-between gap-2 text-[10px] font-bold text-slate-500">
                <span>LIVE FLIGHT RADAR &amp; PACKET TELEMETRY (EXPAND) ⌄</span>
                <span className="text-slate-400">AUTHENTICATION: SHA-512 SECURE</span>
            </div>
        </section>
    );
}

function InfoBox({ title, badge, children }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-[11px] leading-relaxed text-slate-500">
            <div className="mb-2 flex justify-between gap-2 font-bold">
                <span className="text-slate-400">{title}</span>
                <span className="text-emerald-600">{badge}</span>
            </div>
            {children}
        </div>
    );
}

function DispatchSecurity() {
    return (
        <section className={`${card} space-y-4`}>
            <div>
                <p className={eyebrow}>DOSSIER // DATA LOG</p>
                <h2 className={heading}>DISPATCH &amp; SECURITY</h2>
            </div>
            <InfoBox title="DELIVERY DESTINATION" badge="RESIDENTIAL">
                <p className="font-bold text-slate-900">Alexander Vance</p>
                <p>744 S San Pedro St<br />Floor 4, Studio 408<br />Los Angeles, CA 90014<br />United States</p>
                <p className="mt-2">SMS Logistics: +1 (213) 555-0194</p>
            </InfoBox>
            <InfoBox title="LOGISTICS PROTOCOL" badge="COMPLIMENTARY">
                <p className="font-bold text-slate-900">Priority Air Drop (Guaranteed Airborne Release)</p>
                <p>Direct charter cargo routing, insured against loss, ambient humidity and atmospheric pressure monitored enclosure.</p>
            </InfoBox>
            <InfoBox title="PAYMENT SETTLEMENT" badge="AUTHORIZED">
                <p className="font-bold text-slate-900">VISA · Archival Charge Card •••• 9811</p>
                <p>EXP: 08/28</p>
                <p>256-Bit Quantum Shield Authenticated // Zero-Knowledge Settlement</p>
            </InfoBox>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-[11px] text-slate-600">
                <p className="font-bold text-blue-600">SECURITY SEAL APPLIED</p>
                <p>Serialized RFID Tamper-Evident Bag #RFID-99421A verified. Do not accept if seal integrity is fractured.</p>
            </div>
        </section>
    );
}

function SummaryRow({ label, value, color = "text-slate-900" }) {
    return (
        <div className="flex justify-between gap-3">
            <span>{label}</span>
            <strong className={color}>{value}</strong>
        </div>
    );
}

function PurchasedItems() {
    const subtotal = ITEMS.reduce((sum, item) => sum + item.price, 0);
    const discount = subtotal * 0.1;
    const tax = subtotal * 0.08;
    const total = subtotal - discount + tax;

    return (
        <section className={card}>
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className={eyebrow}>PURCHASED MANIFEST</p>
                    <h2 className={heading}>GARMENTS ALLOCATED ({ITEMS.length})</h2>
                </div>
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-600">STATUS: VAULT LOCKED</span>
            </div>
            <ul className="mt-4 space-y-3">
                {ITEMS.map((item) => (
                    <li key={item.serial} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="relative shrink-0">
                            <img src={item.image} alt={item.name} className="h-28 w-20 rounded-lg object-cover" />
                            <span className="absolute bottom-1 left-1 rounded bg-slate-900 px-1.5 py-0.5 text-[8px] font-bold text-white">{item.tag}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex justify-between gap-3 text-xs font-extrabold text-slate-900">
                                <h3>{item.name}</h3>
                                <span>${item.price.toFixed(2)}</span>
                            </div>
                            <p className="mt-1 text-[10px] text-slate-500">SIZE: {item.size} // COLOR: {item.color} // QTY: 1</p>
                            <div className="mt-6 flex flex-wrap justify-between gap-2 text-[9px] font-bold">
                                <span className="rounded bg-blue-50 px-2 py-1 text-blue-600">{item.material}</span>
                                <span className="py-1 text-slate-400">SERIAL: {item.serial}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-[11px] text-slate-500">
                <SummaryRow label={`GARMENT SUBTOTAL (${ITEMS.length} PIECES)`} value={`$${subtotal.toFixed(2)}`} />
                <SummaryRow label="PRIORITY AIRBORNE DISPATCH" value="FREE ($0.00)" color="text-emerald-600" />
                <SummaryRow label="VAULT PASS DEDUCTION (NOVA24 -10%)" value={`-$${discount.toFixed(2)}`} color="text-emerald-600" />
                <SummaryRow label="ESTIMATED SALES TAX (8.00% CA)" value={`$${tax.toFixed(2)}`} />
                <div className="flex items-end justify-between gap-3 border-t border-slate-200 pt-3">
                    <div>
                        <p className="text-sm font-extrabold text-slate-900">TOTAL SETTLED</p>
                        <p className="text-[9px] font-bold text-emerald-600">PAID // ALL APPLICABLE IMPORT &amp; REGIONAL TAXES INCLUDED</p>
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">${total.toFixed(2)}</p>
                </div>
            </div>
        </section>
    );
}

function MemberAccess() {
    return (
        <section className={`${card} flex flex-wrap items-center justify-between gap-5`}>
            <div className="max-w-2xl">
                <p className={eyebrow}>VAULT MEMBER STATUS UNLOCKED</p>
                <h2 className={heading}>TIER 02: NOCTURNAL ACCESS ACTIVATED</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    This checkout cleared your qualifying spend tier. Your digital wallet has been minted with
                    unreleased drop reservations for <strong>DROP 09: SYNTHETIC HORIZON</strong>. Use your private
                    key at zero-hour.
                </p>
                <p className="mt-3 text-[10px] font-bold text-slate-400">
                    PRIVATE DROP CODE:{" "}
                    <span className="rounded bg-blue-50 px-2 py-1 text-blue-600">NOCTURNE-VIP</span>{" "}
                    [48H EARLY ARCHIVE ACCESS]
                </p>
            </div>
            <div className="flex w-full flex-col gap-2 md:w-64">
                <button type="button" className="rounded-xl bg-slate-900 px-5 py-3 text-[11px] font-bold text-white">ADD TO APPLE WALLET PASS</button>
                <button type="button" className={outlineBtn}>ADD TO GOOGLE WALLET</button>
            </div>
        </section>
    );
}

function SupportCards() {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            <section className={card}>
                <p className={eyebrow}>NOCTURNE CLIENTELE CONCIERGE</p>
                <h2 className={heading}>IMMEDIATE DISPATCH INQUIRY?</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Our encrypted concierge line handles address routing adjustments, courier holds, and physical
                    inspection requests until 17:30 PST today.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <button type="button" className={primaryBtn}>24/7 CONCIERGE LIVE CHAT</button>
                    <a href="tel:+18005550198" className={outlineBtn}>+1 (800) 555-0198</a>
                </div>
            </section>
            <section className={card}>
                <p className="text-[11px] font-bold tracking-wide text-emerald-600">ARCHIVE RETURN GUARANTEE</p>
                <h2 className={heading}>14-DAY COMPLIMENTARY VAULT EXCHANGE</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Every garment arrives with prepaid return courier credentials inside the delivery canister.
                    Retain serialized tags and tamper seals for instant exchange or return credit.
                </p>
                <div className="mt-5 flex flex-wrap justify-between gap-2 text-[10px] font-bold">
                    <span className="text-slate-500">✓ PRE-PRINTED RETURN SLIP INCLUDED</span>
                    <span className="text-blue-600 underline">READ POLICY</span>
                </div>
            </section>
        </div>
    );
}

export default function OrderConfirmationPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fb] pb-14 font-dm">
            <ProgressBar />
            <main className="mx-auto max-w-[1280px] space-y-5 px-5 pt-6 md:px-12">
                <OrderHero />
                <DispatchTracking />
                <div className="grid items-start gap-5 lg:grid-cols-[2fr_3fr]">
                    <DispatchSecurity />
                    <PurchasedItems />
                </div>
                <MemberAccess />
                <SupportCards />
            </main>
        </div>
    );
}
