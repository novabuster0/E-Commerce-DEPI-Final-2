import SectionCard, { Field } from "./SectionCard";

function PaymentOption({ title, detail, badge }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <span className="h-4 w-4 shrink-0 rounded-full border border-slate-200 bg-white" />
            <div className="min-w-0 flex-1">
                <p className="text-[10px] font-extrabold text-slate-800">
                    {title}
                </p>
                <p className="mt-1 text-[9px] text-slate-500">{detail}</p>
            </div>
            <span className="shrink-0 rounded bg-slate-100 px-2 py-1 text-[8px] font-bold text-blue-600">
                {badge}
            </span>
        </div>
    );
}

export default function PaymentProtocol() {
    return (
        <SectionCard
            number="04"
            title="PAYMENT PROTOCOL"
            aside={
                <span className="text-emerald-600">
                    ♙{" "}
                    <span className="text-slate-400">
                        256-BIT QUANTUM LEVEL ENCRYPTION
                    </span>
                </span>
            }
        >
            <div className="rounded-xl border-2 border-blue-600 p-3">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        </span>
                        <h3 className="text-[10px] font-extrabold text-slate-800">
                            CREDIT / ARCHIVAL CHARGE CARD
                        </h3>
                    </div>
                    <span className="text-[8px] font-extrabold text-slate-500">
                        VISA MC AMEX
                    </span>
                </div>
                <div className="space-y-2.5">
                    <Field label="CARD NUMBER" value="4242 8819 0293 9811" />
                    <div className="grid grid-cols-3 gap-2">
                        <Field label="EXPIRATION" value="08/28" />
                        <Field label="CVC / CVV" value="842" />
                        <Field label="ISSUING HUB" value="US / CA" />
                    </div>
                    <Field
                        label="CARDHOLDER ENTITY NAME"
                        value="ALEXANDER VANCE"
                    />
                </div>
                <label className="mt-2 flex items-center gap-2 text-[9px] text-slate-500">
                    <input
                        type="checkbox"
                        checked
                        readOnly
                        className="h-4 w-4 accent-blue-600"
                    />
                    Billing matches dispatch address automatically
                </label>
            </div>
            <div className="mt-2 space-y-2">
                <PaymentOption
                    title="AFTERPAY // KLARNA SPLIT"
                    detail={
                        <>
                            4 zero-interest fractional installments of{" "}
                            <strong className="text-blue-600">$203.35</strong>
                        </>
                    }
                    badge="0% APR"
                />
                <PaymentOption
                    title="WEB3 VAULT PAY (USDC / ETH / BTC)"
                    detail="Instant non-custodial wallet signature via WalletConnect or MetaMask"
                    badge="ON-CHAIN"
                />
                <PaymentOption
                    title="VAULT CONCIERGE SETTLEMENT"
                    detail="In-person biometric or physical handoff settlement at arrival (NYC/Tokyo)"
                    badge="FLAGSHIP ONLY"
                />
            </div>
        </SectionCard>
    );
}
