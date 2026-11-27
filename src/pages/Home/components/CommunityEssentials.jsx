import { Link } from "react-router-dom";
import placeholder0 from "/src/assets/placeholder0.png";

const essentials = [
    {
        id: 1,
        rating: "4.9 (480 REVIEWS)",
        spec: "500 GSM FLEECE",
        price: "$185",
        name: "OBSIDIAN HEAVYWEIGHT HOODIE",
        text: "Ultra-dense custom woven French terry with double-lined structural drop hood that maintains form in heavy rain.",
        stock: "IN STOCK // FAST SHIP",
    },
    {
        id: 2,
        rating: "5.0 (310 REVIEWS)",
        spec: "CORDURA® BALLISTIC",
        price: "$145",
        name: "AEGIS MODULAR CROSSBODY RIG",
        text: "Equipped with German Fidlock® V-buckles, waterproof YKK Aquaguard zippers, and detachable pouch canisters.",
        stock: "LOW STOCK // 14 LEFT",
    },
    {
        id: 3,
        rating: "4.8 (190 REVIEWS)",
        spec: "3-LAYER COMPOSITE",
        price: "$340",
        name: "APEX TAILORED COMMUTER COAT",
        text: "Sleek trench profile enhanced with taped seams, internal carrying harness, and magnetic throat latches.",
        stock: "IN STOCK // FAST SHIP",
    },
];

    export default function CommunityEssentials() {


 function displayEssentials() {
    const result = [];

    for (let i = 0; i < essentials.length; i++) {
            const e = essentials[i];

            result.push(
                <Link
                    key={e.id}
                    to="/product"
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 font-figtree"
                >
                    <img
                        src={placeholder0}
                        alt={e.name}
                        className="aspect-[4/5] w-full rounded-[18px] object-cover"
                    />

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="text-[11px] font-bold tracking-[0.05em] text-slate-400">
                                {e.spec}
                            </p>

                            <p className="text-[13px] font-extrabold text-blue-600">
                                {e.price}
                            </p>
                        </div>

                        <h3 className="mt-2 text-[22px] font-bold uppercase leading-[28px] tracking-[-0.01em] text-slate-900">
                            {e.name}
                        </h3>

                        <p className="mt-1 text-[13px] leading-[20px] text-slate-400">
                            {e.text}
                        </p>

                        <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-4">
                            <p className="text-[11px] font-bold tracking-[0.05em] text-blue-600">
                                {e.stock}
                            </p>

                        </div>
                    </div>
                </Link>
            );
        }

        return result;
    }



    return (
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10">
            <div className="mb-9">
                <div>
                    <p className="font-mono text-[11px] font-extrabold tracking-[0.16em] text-blue-600">
                        PROVEN METROPOLITAN GEAR
                    </p>
                    <h2 className="mt-1 text-[36px] font-extrabold tracking-[-0.035em] text-slate-900">
                        COMMUNITY ESSENTIALS
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {displayEssentials()}
            </div>
        </section>
    );
}
