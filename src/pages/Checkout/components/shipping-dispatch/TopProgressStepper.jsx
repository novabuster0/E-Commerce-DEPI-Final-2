import finishedIcon from "/src/assets/Checkout/finishedIcon.svg";

export default function TopProgressStepper() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex min-h-[52px] max-w-[1280px] items-center justify-between gap-4 px-5 md:px-12 max-md:flex-wrap max-md:py-3">
                <nav
                    aria-label="Checkout progress"
                    className="flex flex-wrap items-center gap-2 text-[9px] font-extrabold tracking-[0.06em]"
                >
                    <span className="text-slate-400 flex items-center gap-2">
                        <img src={finishedIcon} alt="" />
                        01 CART
                    </span>
                    <span className="text-slate-300">/</span>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-blue-600">
                        <span className="mr-1 bg-[#2563EB] text-white px-1 py-px text-center align-middle rounded-full">
                            2
                        </span>
                        02 SHIPPING &amp; DISPATCH
                    </span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-400">03 PAYMENT MATRIX</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-400">04 CONFIRMATION</span>
                </nav>
                <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-[8px] font-bold tracking-wide text-slate-500">
                    <span className="text-blue-600">●</span>
                    <span>VAULT HOLD ACTIVE:</span>
                    <span className="rounded border border-blue-200 bg-white px-1.5 py-0.5 text-blue-600">
                        14:58
                    </span>
                    <span className="text-slate-300">|</span>
                    <span>
                        SECURE ID:{" "}
                        <strong className="text-blue-600">#URB-8492</strong>
                    </span>
                </div>
            </div>
        </header>
    );
}
